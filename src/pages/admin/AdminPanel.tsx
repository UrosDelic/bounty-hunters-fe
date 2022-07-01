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
import { ModalLayout, UserSearch, StatusFilter, SearchTasks } from 'components';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';

import searchFilters from 'stores/searchFilters';
import AdminTasksStore from 'stores/admin/tasks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Task from './Task';

const AdminPanel = () => {
    const { tasks, checkForMore, totalTaskCount, tasksLength, getTasksByFilter } = AdminTasksStore;
    const { searchedUser, searchedStatus, searchedTitle } = searchFilters;
    const { register, handleSubmit } = useForm();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {

        getTasksByFilter(searchedUser, searchedStatus, searchedTitle);
    },
        [getTasksByFilter, searchedUser, searchedStatus, searchedTitle]);

    const createTask = async (input: any) => {
        const { data, error } = await AdminTasksStore.createTask({
            title: input.title,
            points: parseInt(input.points),
            description: input.description,
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
                    <Flex justifyContent="start" alignItems="center" fontSize="sm">
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
                    </Flex>
                    <Flex alignItems="end">
                        <Flex justifyContent="space-between">
                            <SearchTasks />
                            <StatusFilter />
                            <UserSearch />
                        </Flex>
                    </Flex>
                </Flex>

                <Flex flexDirection="column" w={'90%'} mx="auto">
                    <Flex justifyContent="end">
                        {' '}
                        <Text
                            mx={2}
                            fontSize="sm"
                        >{`${tasksLength} of ${totalTaskCount} records`}</Text>
                    </Flex>
                    <Grid
                        gridTemplateColumns="120px repeat(4,1fr) 120px"
                        justifyItems="center"
                        bg="blackAlpha.500"
                        fontSize="lg"
                        my={2}
                        p={1}
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
                        loader={[...Array(5).keys()].map((m, key) => (
                            <Skeleton maxH={50} my={4} key={key} />
                        ))}
                        endMessage={
                            <Text m={8} textAlign="center" fontSize="sm">
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
                                fontSize="sm"
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
