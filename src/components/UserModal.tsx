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
import { useQuery } from 'react-query';
import RolesService from '../services/roles';
import { UserRoles } from 'types';

export type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  roles: UserRoles[];
};

function UserModal({ isOpen, onClose, name, roles }: UserModalProps) {
  const service = new RolesService();
  const { data, isSuccess } = useQuery(['roles'], () => service.getRoles());
  const roleIds = roles.map(singleRole => singleRole.role.id);
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: roleIds,
  });

  function updateRole() {
    console.log(value);
  }

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} name={name}>
      <Text marginBottom="10px">Manage the list of roles</Text>
      {isSuccess && (
        <>
          <Stack spacing={3} paddingBottom="15px">
            {data?.data?.map((role: any) => {
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
              'Must pick at least one role.'
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

export default UserModal;
