import React, { useEffect } from 'react';
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
    Skeleton,
    FormLabel,
} from '@chakra-ui/react';
import { ModalLayout, UserSearch } from 'components';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';

import AdminTasksStore from 'stores/admin/tasks';
import InfiniteScroll from 'react-infinite-scroll-component';
import UsersStore from 'stores/users';
import Task from './Task';

const statuses = [
    { name: 'In Progress', value: 'IN_PROGRESS' },
    { name: 'Pending', value: 'PENDING' },
    { name: 'Fullfiled', value: 'FULLFILED' },
];
const AdminPanel = () => {
    const { tasks, checkForMore, totalTaskCount, tasksLength, initialTaskLoad } =
        AdminTasksStore;
    const { searchedUser } = UsersStore;
    const { register, handleSubmit } = useForm();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        initialTaskLoad(searchedUser);
    }, [initialTaskLoad, searchedUser]);

    const createTask = async (input: any) => {
        const { data, error } = await AdminTasksStore.createTask({
            title: input.title,
            points: parseInt(input.points),
            description: input.description,
            // userId: '1d6a9841-77f0-4169-b61b-f8f043b64b90',
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

    return (
        <>
            <Box p={5} my={4} fontWeight="thin">
                <Flex
                    my={2}
                    justifyContent="space-between"
                    alignItems="end"
                    w={'90%'}
                    mx="auto"
                >
                    <Flex justifyContent="start" alignItems="center" fontSize="xs">
                        <Flex
                            bg="purple.400"
                            rounded="md"
                            alignItems="center"
                            justifyContent="start"
                            cursor="pointer"
                            onClick={onOpen}
                            p={2}
                        >
                            <Text fontWeight="thin" fontSize="md">
                                Create New Task
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems="end">
                        <UserSearch setUser={''} />
                    </Flex>
                </Flex>

                <Flex flexDirection="column" w={'90%'} mx="auto">
                    <Flex justifyContent="end">
                        {' '}
                        <Text
                            mx={2}
                            fontSize="xs"
                        >{`${tasksLength} of ${totalTaskCount} records`}</Text>
                    </Flex>
                    <Grid
                        gridTemplateColumns="100px repeat(4,1fr) 100px"
                        justifyItems="center"
                        bg="blackAlpha.500"
                        fontSize="sm"
                        my={2}
                    >
                        <Box>Date</Box>
                        <Box>Title</Box>
                        <Box>Assignee</Box>
                        <Box>Points</Box>
                        <Box>Status</Box>
                    </Grid>

                    <InfiniteScroll
                        dataLength={tasks.length}
                        next={() => AdminTasksStore.loadMoreTasks()}
                        hasMore={checkForMore}
                        loader={[...Array(8).keys()].map((m, key) => (
                            <Skeleton minH={50} my={4} key={key} />
                        ))}
                        endMessage={
                            <Text m={8} textAlign="center" fontSize="xs">
                                There are no more tasks
                            </Text>
                        }
                    >
                        <>
                            {tasks.map((task, key) => (
                                <React.Fragment key={task.id}>
                                    <Task details={task} />
                                </React.Fragment>
                            ))}
                        </>
                    </InfiniteScroll>
                </Flex>
            </Box>

            <ModalLayout isOpen={isOpen} onClose={onClose} name={'Create Task'}>
                <Flex flexDirection="column" p={2} fontSize="sm">
                    <form onSubmit={handleSubmit(createTask)}>
                        <Flex alignItems="center"></Flex>
                        <FormLabel fontWeight="thin">Task Title</FormLabel>
                        <Input
                            {...register('title')}
                            placeholder="Write Article about XYZ"
                            size="sm"
                        />
                        <FormLabel fontWeight="thin">Task Description</FormLabel>
                        <Textarea
                            {...register('description')}
                            placeholder="Task Description"
                        />
                        <FormLabel fontWeight="thin">Deadline</FormLabel>
                        <Input
                            disabled
                            {...register('deadline')}
                            type="date"
                            placeholder="Deadline"
                            size="sm"
                        />
                        <FormLabel fontWeight="thin">Points</FormLabel>
                        <NumberInput size="sm">
                            <NumberInputField
                                {...register('points')}
                                type="number"
                                placeholder="Points"
                            />
                        </NumberInput>

                        <Flex justifyContent="end">
                            <Button
                                size="sm"
                                type="submit"
                                mt={2}
                                colorScheme="purple"
                                fontSize="xs"
                            >
                                Submit
                            </Button>
                        </Flex>
                    </form>
                </Flex>
            </ModalLayout>
        </>
    );
};

export default observer(AdminPanel);
