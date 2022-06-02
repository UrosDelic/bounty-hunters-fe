import {
  Text,
  CheckboxGroup,
  Checkbox,
  Stack,
  useCheckboxGroup,
} from '@chakra-ui/react';
import { ModalLayout } from './index';
import { UserTypes } from '../context/userTypes';
import { useQuery } from 'react-query';
import UsersService from '../services/users';
import { RoleProps } from '../pages/Users';
import { useEffect } from 'react';

export type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  roles: RoleProps[];
};

function UserModal({ isOpen, onClose, name, roles }: UserModalProps) {
  const roleIds = roles.map((singleRole: RoleProps) => singleRole.role.id);
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: roleIds,
  });
  const service = new UsersService();
  //   const { data } = useQuery(['roles'], () => service.updateUserRoles());

  function findUser(userType: UserTypes) {
    return roles.find(roleObj => roleObj.role.name == userType)?.role.id;
  }

  useEffect(() => {
    console.log(value);
    console.log(findUser(UserTypes.EMPLOYEE));
  }, [value]);

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      <Text marginBottom="10px">Manage the list of roles</Text>
      <Stack spacing={3}>
        <Checkbox
          {...getCheckboxProps({ value: findUser(UserTypes.EMPLOYEE) })}
        >
          Employee
        </Checkbox>
        <Checkbox {...getCheckboxProps({ value: findUser(UserTypes.ADMIN) })}>
          Admin
        </Checkbox>
        <Checkbox
          {...getCheckboxProps({ value: findUser(UserTypes.SUPER_ADMIN) })}
        >
          Superadmin
        </Checkbox>
      </Stack>
    </ModalLayout>
  );
}

export default UserModal;
