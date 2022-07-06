import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Text,
  Flex,
  Button,
  useDisclosure,
  Input,
  NumberInput,
  NumberInputField,
  useToast,
  Textarea,
  FormLabel,
} from '@chakra-ui/react';
import {
  ModalLayout,
  UserSearch,
  StatusFilter,
  CoreSearch,
  CoreTable,
} from 'components';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import AdminTasksStore from 'stores/admin/tasks';

import Task from './Task';

const AdminPanel = () => {
  const { tasks, totalTaskCount, getTasksByFilter, page, setPage, loading } =
    AdminTasksStore;

  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState('');
  const [status, setStatus] = useState('');
  const [title, setTitle] = useState('');

  const columns = [
    { title: 'Task Title', align: 'start' },
    { title: 'Assignee', align: 'start' },
    { title: 'Points', align: 'end' },
    { title: 'Date', align: 'end' },
    { title: 'Status', align: 'end' },
  ];

  useEffect(() => {
    getTasksByFilter(user, status, title);
  }, [getTasksByFilter, user, status, title, page]);

  const createTask = async (input: any) => {
    const { data, error } = await AdminTasksStore.createTask({
      title: input.title,
      points: parseInt(input.points),
      description: input.description,
      deadline: new Date(input.deadline).toISOString(),
      //userId: '1d6a9841-77f0-4169-b61b-f8f043b64b90',
    });
    if (error) {
      toast({
        title: error?.message,
        status: 'error',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      });
    }
    if (data) {
      toast({
        title: 'Created Task',
        status: 'success',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      });
    }

    onClose();
  };
  const handleUser = (e: string) => {
    if (e) {
      setUser(e);
    } else {
      setUser('');
    }
    setPage(1);
  };
  const handleStatus = (e: string) => {
    if (e) {
      setStatus(e);
    } else {
      setStatus('');
    }
    setPage(1);
  };
  const handleSearch = (e: string) => {
    if (e) {
      setTitle(e);
    } else {
      setTitle('');
    }
    setPage(1);
  };
  return (
    <>
      <Box mx="auto" width={{ xl: '90%' }}>
        <Flex justifyContent="space-between" mt={10}>
          <Flex
            bg="purple.400"
            rounded="md"
            alignItems="center"
            justifyContent="start"
            cursor="pointer"
            onClick={onOpen}
            p={3}
          >
            <Text fontWeight="thin" fontSize="lg">
              Create New Task
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <CoreSearch
              setSearchTerm={handleSearch}
              placeholder={'Search task'}
            />
            <StatusFilter setFilterStatus={handleStatus} />
            <UserSearch setUserById={handleUser} />
          </Flex>
        </Flex>
        <CoreTable
          columns={columns}
          templateColumns="2fr repeat(5, 1fr)"
          page={page}
          totalCount={totalTaskCount}
          dataLength={tasks.length}
          setPage={setPage}
          loading={loading}
        >
          {tasks.map((task: any) => (
            <React.Fragment key={task.id}>
              <Task details={task} />
            </React.Fragment>
          ))}
        </CoreTable>
      </Box>

      <ModalLayout isOpen={isOpen} onClose={onClose} name={'Create Task'}>
        <Flex flexDirection="column" p={2} fontSize="sm">
          <form onSubmit={handleSubmit(createTask)}>
            <FormLabel fontWeight="thin">Task Title</FormLabel>
            <Input
              {...register('title')}
              placeholder="Write Article about XYZ"
              size="sm"
              required
            />
            <FormLabel fontWeight="thin">Task Description</FormLabel>
            <Textarea
              {...register('description')}
              placeholder="Task Description"
            />
            <FormLabel fontWeight="thin">Deadline</FormLabel>
            <Input
              {...register('deadline')}
              type="date"
              placeholder="Deadline"
              size="sm"
              required
            />
            <FormLabel fontWeight="thin">Points</FormLabel>
            <NumberInput size="sm">
              <NumberInputField
                {...register('points')}
                type="number"
                placeholder="Points"
                required
              />
            </NumberInput>

            <Flex justifyContent="end">
              <Button
                size="sm"
                type="submit"
                mt={2}
                color="white"
                bg="purple.400"
                fontSize="sm"
              >
                Create Task
              </Button>
            </Flex>
          </form>
        </Flex>
      </ModalLayout>
    </>
  );
};

export default observer(AdminPanel);
