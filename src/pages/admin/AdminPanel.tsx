import { useEffect, useState } from 'react';
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
    Icon,
    useDisclosure,
    Input,
    NumberInput,
    NumberInputField,
    useToast,
    Circle,
    Textarea,
    Skeleton,
    FormControl,
    FormLabel,
    Tag,
    TagLabel,
    TagCloseButton
} from '@chakra-ui/react';
import { ModalLayout } from 'components';
import { observer } from 'mobx-react';
import { useForm } from 'react-hook-form';
import { SmallAddIcon } from '@chakra-ui/icons';
import AdminTasksStore from 'stores/admin/tasks';
import UsersStore from 'stores/users';
import InfiniteScroll from 'react-infinite-scroll-component';
import Task from './Task';

// const statuses = [
//     { name: 'In Progress', value: 'IN_PROGRESS' },
//     { name: 'Pending', value: 'PENDING' },
//     { name: 'Fullfiled', value: 'FULLFILED' },
// ];
const AdminPanel = () => {
    const { tasks, checkForMore } = AdminTasksStore;
    const { users } = UsersStore;
    const { register, handleSubmit } = useForm();

    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userId, setUserId] = useState({ id: '', name: '' });

    useEffect(() => {
        AdminTasksStore.getTasks();
    }, []);

    console.log(tasks, 'tasks')

    // if (tasks.length <= 6) {
    //     console.log(tasks.length, 'duzina')
    //     // AdminTasksStore.loadMoreTasks();

    // }

    const createTask = async (input: any) => {



        await AdminTasksStore.createTask({
            title: input.title,
            points: parseInt(input.points),
            description: input.description,
            // userId: userId?.id || ''
        });
        // if (error) {
        //     toast({
        //         title: error?.message,
        //         status: 'error',
        //         duration: 2000,
        //         position: 'top-right',
        //         isClosable: true,
        //     });
        // }
        // if (data) {
        //     toast({
        //         title: 'Created Task',
        //         status: 'success',
        //         duration: 2000,
        //         position: 'top-right',
        //         isClosable: true,
        //     });
        // }

        onClose();
    };

    return (
        <>
            <Flex flexDirection="column" px={20} my={10}>

                <Flex
                    my={4}
                    flexDirection={{ base: 'column', md: 'row' }}
                    alignItems="end"
                    justifyContent="space-between"
                >
                    <Flex
                        bg="purple.400"
                        borderLeft="4px"
                        borderColor='purple.100'
                        bgGradient='linear(to-l, purple.600, purple.400)'
                        rounded="md"
                        boxShadow={'dark-lg'}
                        alignItems="center"
                        justifyContent="start"
                        flexDirection="column"
                        py={8}

                        minH={{ base: 120, lg: 50 }}
                        w={{ base: 200, lg: 200 }}
                        cursor="pointer"
                        onClick={onOpen}
                    >
                        <Text fontWeight="thin" fontSize="xl">
                            Create New Task
                        </Text>
                        <Circle
                            size="25px"
                            border="1px"
                            borderColor="white"
                            color="white"
                            m={2}
                        >
                            <Icon as={SmallAddIcon} w={4} h={4} />
                        </Circle>

                        <Text
                            fontWeight="thin"
                            fontSize="sm"
                            color="purple.100"
                            textAlign="center"
                        >
                            Add a new task (ex: Create Article about the topic...)
                        </Text>
                    </Flex>
                    {/* <Box>
                        <Menu>
                            <MenuButton
                                as={Button}
                                size="xs"
                                colorScheme="purple"
                                rounded="2xl"
                            >
                                Filter
                            </MenuButton>
                            <MenuList bg="gray.700">
                                {filter.map((n, key: any) => (
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
                    </Box> */}
                </Flex>
                <Flex
                    flexDirection="column"
                    w={'100%'}
                    mx="auto"
                    my={5}
                >


                    <InfiniteScroll
                        dataLength={tasks.length}
                        next={() => AdminTasksStore.loadMoreTasks()}
                        hasMore={checkForMore}
                        loader={<p>loading</p>}
                        className='styled-scroll'
                        height={300}
                        endMessage={
                            <Text m={8} textAlign="center" fontSize="sm">
                                Yay! You scrolled to bottom
                            </Text>
                        }
                    >
                        {tasks.map(task => (
                            <Task details={task} key={task.id} />
                        ))}
                    </InfiniteScroll>
                </Flex>
            </Flex>
            <ModalLayout isOpen={isOpen} onClose={onClose} name={'Create Task'}>
                <Flex flexDirection="column" p={2} fontSize="sm">
                    <form onSubmit={handleSubmit(createTask)}>

                        <Flex alignItems='center'>

                            {/* <Menu >
                                    <MenuButton
                                        as={Box}
                                        size="xs"

                                        onClick={() => UsersStore.getUsers()}
                                    >
                                        Assign to User
                                    </MenuButton>
                                    <MenuList bg="gray.700">
                                        {users.map(n => (
                                            <MenuItem
                                                key={n.id}
                                                value={n.id}
                                                onClick={() => setUserId({ id: n.id, name: n.firstName })}
                                                _hover={{ background: 'purple.900', cursor: 'pointer' }}
                                                _focus={{ boxShadow: 'outline' }}
                                            >
                                                {n.firstName}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu> */}

                            {/* {userId.id && (<Tag colorScheme="purple" h={5} p={1} mx={2}>
                                    <TagLabel> {userId.name}</TagLabel>
                                    <TagCloseButton onClick={() => setUserId({ id: '', name: '' })} />

                                </Tag>)} */}
                        </Flex>
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

                        <Flex justifyContent='end'>
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
