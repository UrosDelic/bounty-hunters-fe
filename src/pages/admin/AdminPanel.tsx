import React, { useEffect } from 'react';
import {
    Box,
    Grid,
    Text,
    Flex,
    Button,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    useDisclosure,
    Input,
    NumberInput,
    NumberInputField,
    useToast,
    Textarea,
    Skeleton,
    FormLabel,
} from '@chakra-ui/react';
import { ModalLayout, Search } from 'components';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { ChevronDownIcon } from '@chakra-ui/icons';
import AdminTasksStore from 'stores/admin/tasks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Task from './Task';

const statuses = [
    { name: 'In Progress', value: 'IN_PROGRESS' },
    { name: 'Pending', value: 'PENDING' },
    { name: 'Fullfiled', value: 'FULLFILED' },
];
const AdminPanel = () => {
    const { tasks, checkForMore, totalTaskCount, tasksLength, searchByTitle, getTasks, initialTaskLoad } = AdminTasksStore;

    const { register, handleSubmit } = useForm();

    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        initialTaskLoad();
    }, []);

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
                        <Text mx={2}>{`${tasksLength} of ${totalTaskCount} records`}</Text>
                    </Flex>
                    <Flex alignItems="end" minW={350}>
                        <Search searchTerm={'task'} makeSearch={searchByTitle} resetSearch={initialTaskLoad} />
                        <Menu>
                            <MenuButton
                                size="xs"
                                as={Button}
                                mx={2}
                                bg="purple.300"
                                disabled
                                rightIcon={<ChevronDownIcon />}
                            >
                                Status
                            </MenuButton>

                            <MenuList bg="gray.700">
                                {statuses.map((n, key: any) => (
                                    <MenuItem
                                        key={key}
                                        value={n.value}
                                        _hover={{ background: 'purple.900', cursor: 'pointer' }}
                                        _focus={{ boxShadow: 'outline' }}
                                    >
                                        {n.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton
                                size="xs"
                                as={Button}
                                mx={1}
                                disabled
                                bg="purple.600"
                                rightIcon={<ChevronDownIcon />}
                            >
                                User
                            </MenuButton>

                            <MenuList bg="gray.700">
                                {statuses.map((n, key: any) => (
                                    <MenuItem
                                        key={key}
                                        value={n.value}
                                        _hover={{ background: 'purple.900', cursor: 'pointer' }}
                                        _focus={{ boxShadow: 'outline' }}
                                    >
                                        {n.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                <Flex flexDirection="column" w={'90%'} mx="auto">
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
                        loader={[...Array(3).keys()].map((m, key) => (
                            <Skeleton minH={50} my={4} key={key} />
                        ))}
                        className="styled-scroll"
                        height={400}
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
