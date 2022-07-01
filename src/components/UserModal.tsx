import {
  Text,
  Checkbox,
  Stack,
  useCheckboxGroup,
  ButtonGroup,
  Box,
} from '@chakra-ui/react';
import { ModalLayout, PurpleButton } from './index';
import { observer } from 'mobx-react';
import RolesStore from '../stores/roles';
import UsersStore from '../stores/users';
import { useEffect, useState } from 'react';
import SpinnerLoader from './SpinnerLoader';

export type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function UserModal({ isOpen, onClose }: UserModalProps) {
  const { success, rolesData } = RolesStore;
  const { isUserUpdated, currentUser, currentUserLoading, currentUserSuccess } =
    UsersStore;
  const roleIds =
    currentUser?.roles.map(singleRole => singleRole?.role.id) || [];
  const { value, setValue, getCheckboxProps } = useCheckboxGroup({
    defaultValue: roleIds,
  });
  const [isErrorShown, setIsErrorShown] = useState(false);

  function updateRole() {
    if (value.length) {
      UsersStore.updateRoles(currentUser?.id, value);
      setIsErrorShown(false);
      onClose();
    } else {
      setIsErrorShown(true);
    }
  }

  useEffect(() => {
    if (isUserUpdated) onClose();
  }, [isUserUpdated]);

  useEffect(() => {
    setValue(roleIds);
  }, [currentUserLoading]);

  useEffect(() => {
    if (isOpen) {
      UsersStore.getUserById();
      setIsErrorShown(false);
    }
  }, [isOpen]);

  return (
    <>
      {success && currentUserSuccess ? (
        <ModalLayout
          isOpen={isOpen}
          onClose={onClose}
          name={`${currentUser?.firstName} ${currentUser?.lastName}`}
        >
          <Text marginBottom="10px">Manage the list of roles</Text>
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
        </ModalLayout>
      ) : (
        <ModalLayout isOpen={isOpen} onClose={onClose} name="">
          <SpinnerLoader />
        </ModalLayout>
      )}
    </>
  );
}

export default observer(UserModal);
