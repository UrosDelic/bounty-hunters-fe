import { useEffect, useState } from 'react';
import {
    Box,
    Text,
    Grid,
    Flex,
    Button,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    Icon,
    useDisclosure,
    Tag,
    Input,
    NumberInput,
    NumberInputField,
    useToast,
} from '@chakra-ui/react';
import { ModalLayout } from 'components';
import { observer } from 'mobx-react';
import { SmallAddIcon } from '@chakra-ui/icons';
import AdminTasksStore from 'stores/admin/tasks';
import InfiniteScroll from 'react-infinite-scroll-component';
const filter = [
    { name: 'In Progress', value: 'IN_PROGRESS' },
    { name: 'Pending', value: 'PENDING' },
    { name: 'Fullfiled', value: 'FULLFILED' },
];
const AdminPanel = () => {
    useEffect(() => {
        AdminTasksStore.getTasks();
    }, []);

    const toast = useToast();
    const { tasks, checkForMore } = AdminTasksStore;
    let { isOpen, onOpen, onClose } = useDisclosure();
    const [points, setPoints] = useState(0);
    const [title, setTitle] = useState('');

    const createTask = async () => {
        const { data, error } = await AdminTasksStore.createTask({
            title: title,
            points: points,
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
        setPoints(0);
        setTitle('');
        onClose();
    };
    const deleteTask = async (id: any) => {
        await AdminTasksStore.deleteTask(id);
    };

    return (
        <Box>
            <Flex flexDirection="column" p={5} my={5}>
                <Text fontWeight="thin" fontSize={{ base: '2xl', md: '2xl' }}>
                    Admin <b>Dashboard</b>
                </Text>
                <Flex
                    my={4}
                    px={10}
                    flexDirection={{ base: 'column', md: 'row' }}
                    alignItems="end"
                    justifyContent="space-between"
                >
                    <Flex
                        borderLeft="4px"
                        borderColor="purple.200"
                        rounded="md"
                        boxShadow={'dark-lg'}
                        bg="purple.400"
                        alignItems="center"
                        justifyContent="start"
                        flexDirection="column"
                        w={{ base: 200, lg: 200 }}
                        cursor="pointer"
                        onClick={onOpen}
                        minH={{ base: 120, lg: 120 }}
                    >
                        <Text fontWeight="thin" fontSize="xl" my={3}>
                            Create New Task
                        </Text>
                        <Icon as={SmallAddIcon} w={6} h={6} />
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
                    w={{ base: '100%', lg: '80%' }}
                    mx="auto"
                    px={2}
                    my={10}
                >
                    <InfiniteScroll
                        dataLength={tasks.length}
                        next={() => AdminTasksStore.loadMoreTasks()}
                        hasMore={checkForMore}
                        loader={<p>loading</p>}
                        height={'40vh'}
                        endMessage={
                            <Text m={8} textAlign="center" fontSize="sm">
                                Yay! You scrolled to bottom
                            </Text>
                        }
                    >
                        {tasks.map((t, key) => (
                            <Grid
                                bg="gray.600"
                                boxShadow="lg"
                                my={2}
                                mx={4}
                                px={5}
                                minH={50}
                                rounded="md"
                                gridTemplateColumns="repeat(5, 1fr)"
                                gap={10}
                                key={key}
                            >
                                <Text fontWeight="thin">{t.title}</Text>

                                <Text fontWeight="thin">{t.status}</Text>
                                <Text fontWeight="thin">{t.createdAt}</Text>
                                <Text fontWeight="thin" my="auto">
                                    <Tag colorScheme="purple" h={5} p={1} mr={2}>
                                        {t.points}
                                    </Tag>
                                    points
                                </Text>
                                <Button
                                    w={20}
                                    size="xs"
                                    variant='outline'
                                    onClick={() => deleteTask(t.id)}
                                >
                                    Delete
                                </Button>
                            </Grid>
                        ))}
                    </InfiniteScroll>
                </Flex>
            </Flex>
            <ModalLayout isOpen={isOpen} onClose={onClose} name={'Create Task'}>
                <Flex>
                    <Input
                        placeholder="Task Title"
                        size="sm"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <NumberInput size="sm" maxW={40}>
                        <NumberInputField
                            placeholder="points"
                            onChange={e => setPoints(parseInt(e.target.value))}
                        />
                    </NumberInput>
                    <Button
                        size="sm"
                        mx={2}
                        colorScheme="purple"
                        fontSize="xs"
                        onClick={createTask}
                    >
                        Submit
                    </Button>
                </Flex>
            </ModalLayout>
        </Box>
    );
};

export default observer(AdminPanel);
