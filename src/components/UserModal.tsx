import {
  Text,
  Checkbox,
  Stack,
  useCheckboxGroup,
  ButtonGroup,
  Button,
  Box,
} from '@chakra-ui/react';
import { ModalLayout } from './index';
import { UserRoles } from 'types';
import { observer } from 'mobx-react';
import RolesStore from '../stores/roles';
import { useEffect } from 'react';

export type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  roles: UserRoles[];
};

function UserModal({ isOpen, onClose, name, roles }: UserModalProps) {
  const { success, rolesData } = RolesStore;
  const roleIds = roles.map(singleRole => singleRole.role.id);
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: roleIds,
  });

  useEffect(() => {
    RolesStore.getRoles();
  }, []);

  function updateRole() {
    console.log(value);
  }

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
            {value.length ? (
              <Text>&nbsp;</Text>
            ) : (
              <Text>Must pick at least one role.</Text>
            )}
          </Box>
          <ButtonGroup marginTop="10px">
            <Button onClick={updateRole}>Update</Button>
            <Button onClick={onClose}>Close modal</Button>
          </ButtonGroup>
        </>
      )}
    </ModalLayout>
  );
}

export default observer(UserModal);
