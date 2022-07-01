import {
  Text,
  Checkbox,
  Stack,
  useCheckboxGroup,
  ButtonGroup,
  Box,
} from '@chakra-ui/react';
import { ModalLayout, PurpleButton } from './index';
import { UserRoles } from 'types';
import { observer } from 'mobx-react';
import RolesStore from '../stores/roles';
import UsersStore from '../stores/users';
import { useEffect, useState } from 'react';

export type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  roles: UserRoles[];
  userId: string;
};

function UserModal({ isOpen, onClose, name, roles, userId }: UserModalProps) {
  const { success, rolesData } = RolesStore;
  const { isUserUpdated } = UsersStore;
  const roleIds = roles.map(singleRole => singleRole.role.id);
  const { value, setValue, getCheckboxProps } = useCheckboxGroup({
    defaultValue: roleIds,
  });
  const [isErrorShown, setIsErrorShown] = useState(false);

  function updateRole() {
    if (value.length) {
      UsersStore.updateRoles(userId, value);
      setIsErrorShown(false);
    } else {
      setIsErrorShown(true);
    }
  }

  useEffect(() => {
    if (isUserUpdated) onClose();
  }, [isUserUpdated]);

  useEffect(() => {
    if (!isOpen) setValue(roleIds);
  }, [isOpen]);

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      <Text marginBottom="10px">Manage the list of roles</Text>
      {success && (
        <>
          <Stack spacing={3} paddingBottom="15px">
            {rolesData.map((role: any) => {
              const { id, name } = role;
              return (
                <Checkbox key={id} {...getCheckboxProps({ value: id })}>
                  {name.toLowerCase()}
                </Checkbox>
              );
            })}
          </Stack>
          <Box color="red" fontSize="14px">
            {isErrorShown ? (
              <Text>Must pick at least one role.</Text>
            ) : (
              <Text>&nbsp;</Text>
            )}
          </Box>
          <ButtonGroup marginTop="10px">
            <PurpleButton onClick={updateRole}>Update</PurpleButton>
          </ButtonGroup>
        </>
      )}
    </ModalLayout>
  );
}

export default observer(UserModal);
