import { useState, useRef } from 'react';
import {
    Box,
    Flex,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    Circle,
    Grid,
    Text,
    useDisclosure,
    useToast,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    Button,
    EditableInput,
    EditablePreview,
    Divider,
    Editable,
    Textarea,
    Avatar,
    DrawerHeader,
    DrawerBody,
    Input
} from '@chakra-ui/react';

import AdminTasksStore from 'stores/admin/tasks';
import { observer } from 'mobx-react';
import CoreDrawer from '../../components/core/CoreDrawer';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

const Task = (props: any) => {

    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register } = useForm();
    const { isOpen: isOpenDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure();

    const cancelRef = useRef<HTMLButtonElement>(null);
    const [id] = useState(props.details.id);

    const [title, setTitle] = useState(props.details.title);
    const [description, setDescription] = useState(props.details.description);
    const [points, setPoints] = useState(props.details.points);

    const fileTypes = [
        { name: 'JPG', value: '.jpg' },
        { name: 'PNG', value: '.png' },
        { name: 'PDF', value: '.pdf' },
    ];
    const editTask = () => {
        const parsed = parseInt(points);

        AdminTasksStore.updateTask(id, {
            title,
            points: parsed,
            description
        });
        onCloseDrawer();
    };
    const deleteTask = async (id: any) => {
        const { error } = await AdminTasksStore.deleteTask(id);
        if (!error) {
            toast({
                title: 'Task Deleted',
                status: 'success',
                duration: 2000,
                position: 'top-right',
                isClosable: true,
            });
        } else {
            toast({
                title: error?.message,
                status: 'error',
                duration: 2000,
                position: 'top-right',
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Grid
                bg="gray.600"
                boxShadow="lg"
                borderLeft="4px"
                borderColor="purple.400"
                p={5}
                maxH={100}
                rounded="md"
                gridTemplateColumns="repeat(3,1fr) repeat(2, 100px)"
                gap="1fr"
                gridAutoRows="2fr"
                key={props.key}
                cursor="pointer"
                onClick={onOpenDrawer}
                alignItems="center"
            >
                <Box display="flex" justifyContent="center" flexDirection="column">
                    <Circle
                        fontWeight="thin"
                        fontSize="xs"
                        textAlign="center"
                        size="50px"
                        bg="gray.700"
                        p={5}
                        mx={2}
                    >
                        {dayjs(props.details.createdAt).format('MMMM D')}
                    </Circle>
                </Box>

                <Text fontSize="md" fontWeight="thin" mb={2}>
                    {props.details.title}
                </Text>
                <Text fontSize="sm" fontWeight="thin">
                    {props?.details?.user && (
                        <Flex alignItems="center">
                            <Avatar
                                size="sm"
                                name={`${props?.details?.user?.firstName} ${props?.details?.user?.lastName}`}
                                mx={2}
                            />
                            <Text>
                                {props?.details?.user?.firstName}{' '}
                                {props?.details?.user?.lastName}
                            </Text>
                        </Flex>
                    )}
                </Text>

                <Box minW={10} mx={2} px={2} fontSize="xs" fontWeight="thin">
                    {props.details.status}
                </Box>

                <Box mx={2} px={4} fontSize="xs" fontWeight="thin">
                    <b>{props.details.points} </b>points
                </Box>
            </Grid>

            <CoreDrawer
                size='xl'
                isOpen={isOpenDrawer}
                onOpen={onOpenDrawer}
                onClose={onCloseDrawer}
            >
                <DrawerHeader fontWeight="thin">Edit Task</DrawerHeader>
                <DrawerBody>
                    <Grid
                        color="white"
                        gridTemplateRows="70%  30%"
                        gap={10}
                        alignItems="stretch"
                    >
                        <Box w={'90%'} mx="auto" minH="50%" p={5}>
                            <Grid gridTemplateColumns="3fr 1fr" gap={5}>
                                <Editable defaultValue={title}>
                                    <EditablePreview
                                        border="1px"
                                        borderColor="purple.400"
                                        p={2}
                                        fontWeight="thin"
                                        {...register('title')}
                                        minW="100%"
                                    />
                                    <EditableInput
                                        onChange={e => {
                                            setTitle(e.target.value);
                                        }}
                                    />
                                </Editable>

                                <Editable defaultValue={points}>
                                    <EditablePreview
                                        border="1px"
                                        borderColor="purple.400"
                                        p={2}
                                        fontWeight="thin"
                                        {...register('points')}
                                        minW="100%"
                                    />
                                    <EditableInput
                                        type="number"
                                        onChange={e => {
                                            setPoints(e.target.value);
                                        }}
                                    />
                                </Editable>
                            </Grid>
                            <Grid gridTemplateColumns="1fr 3fr" gap={5} alignItems="center">
                                <Flex flexDirection="column">
                                    <Menu>
                                        <MenuButton
                                            my={2}
                                            as={Button}
                                            size="md"
                                            disabled={true}
                                            fontWeight="thin"
                                            variant="outline"
                                            _hover={{ background: 'purple.400' }}
                                        // onClick={() => UsersStore.getUsers()}
                                        >
                                            Select file type
                                        </MenuButton>
                                        <MenuList bg="gray.700">
                                            {fileTypes.map(t => (
                                                <MenuItem value={t.name}>{t.name}</MenuItem>
                                            ))}
                                        </MenuList>
                                    </Menu>

                                    <Input
                                        border="1px"
                                        borderColor="purple.400"
                                        p={2}
                                        fontWeight="thin"
                                        {...register('deadline')}
                                        minW="100%"
                                        disabled={true}
                                        type="date"
                                        onChange={e => {
                                            setPoints(e.target.value);
                                        }}
                                    />


                                </Flex>
                                <Textarea
                                    h={100}
                                    resize="none"
                                    my={5}
                                    border="1px"
                                    borderColor="purple.400"
                                    placeholder="Task Description"
                                    value={description}
                                    onChange={e => {
                                        setDescription(e.target.value);
                                    }}
                                >{description}</Textarea>
                            </Grid>

                            <Flex justifyContent="end">
                                <Button
                                    rounded="md"
                                    variant="solid"
                                    bg="purple.400"
                                    p={2}
                                    maxH={40}
                                    w={120}
                                    cursor="pointer"
                                    size="sm"
                                    onClick={() => editTask()}
                                >
                                    Save Changes
                                </Button>
                                <Button
                                    variant="link"
                                    color="red.400"
                                    size="xs"
                                    my={2}
                                    mx={2}
                                    onClick={onOpen}
                                    cursor="pointer"
                                >
                                    Delete Task
                                </Button>
                            </Flex>
                        </Box>


                        <Box w={'80%'} mx="auto" minH="50%">
                            {props.details.solution ? (
                                <Box>
                                    <Text>{props.details.solution}</Text>
                                    {props.details.taskFiles.length !== 0 ? (
                                        <Box></Box>
                                    ) : (
                                        <Text>There are no files </Text>
                                    )}
                                </Box>
                            ) : (
                                <Text>There are no solution submited yet</Text>
                            )}
                        </Box>
                    </Grid>
                </DrawerBody>
            </CoreDrawer>

            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
            >
                <AlertDialogContent>
                    <AlertDialogBody color="black">
                        Do you want to delete this task?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose} bg="gray.400">
                            No
                        </Button>
                        <Button
                            colorScheme="purple"
                            ml={3}
                            onClick={() => {
                                onClose();
                                deleteTask(props.details.id);
                            }}
                        >
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default observer(Task);
