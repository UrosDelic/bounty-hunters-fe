import { useState, useRef } from 'react';
import {
    Box,
    Flex,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    Grid,
    Tag,
    Text,
    useDisclosure,
    useToast,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    Button,
    IconButton,
    Input,
    EditableInput,
    EditablePreview,
    Editable,
    Textarea,
    Avatar,
} from '@chakra-ui/react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminTasksStore from 'stores/admin/tasks';
import { observer } from 'mobx-react';
import { ModalLayout } from 'components';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { useRelativeTime } from 'custom-hooks/useRelativeTime';
import { useStatusesStyle } from 'custom-hooks/useStatusesStyle';
const Task = (props: any) => {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register } = useForm();
    const {
        isOpen: isOpenEdit,
        onOpen: onOpenEdit,
        onClose: onCloseEdit,
    } = useDisclosure();

    const relativeTime = useRelativeTime();

    const cancelRef = useRef<HTMLButtonElement>(null);
    const [title, setTitle] = useState(props.details.title);
    const [description, setDescription] = useState(props.details.description);
    const [points, setPoints] = useState(props.details.points);
    const [updated, setUpdatedAt] = useState(props.details.updatedAt);

    const [rejectedMessage, setRejectedMessage] = useState('');
    const [firstName] = useState(props?.details?.user?.firstName);
    const [lastName] = useState(props?.details?.user?.lastName);
    const [email] = useState(props?.details?.user?.email);
    const [id] = useState(props.details.id);

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
            description,
        });
        onCloseEdit();
        const date = new Date().toISOString();
        setUpdatedAt(date);
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

    const approveTask = async (id: string) => {
        const { error } = await AdminTasksStore.approveTask(id);
        if (!error) {
            toast({
                title: 'Task Approved',
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
        onCloseEdit();
    };
    const rejectTask = async (id: string) => {
        const { error } = await AdminTasksStore.rejectTask(id, rejectedMessage);
        if (!error) {
            toast({
                title: 'Task Approved',
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
        onCloseEdit();
    };
    return (
        <>
            <Grid
                gridTemplateColumns="2fr repeat(5, 1fr)"
                gridAutoFlow="column"
                gridAutoRows="2fr"
                borderBottom="1px"
                borderColor="gray.600"
                gap={1}
                p={1}
                m={0}
                fontSize="lg"
                width="100%"
                minH={50}
                maxH="10%"
                color="white"
            >
                <Text fontSize="md" maxW="100%">
                    {props.details.title}
                </Text>

                <Flex minW="100%" fontSize="lg">
                    {props?.details?.user && (
                        <Flex alignItems="center">
                            <Avatar
                                size="sm"
                                name={`${firstName} ${lastName}`}
                                mr={2}
                                mb={2}
                            />
                            <Flex flexDirection="column" alignItems="start">
                                <Text as="sup" fontSize="md">
                                    {firstName} {lastName}
                                </Text>
                                <Text as="sub" mt={1}>
                                    {email}
                                </Text>
                            </Flex>
                        </Flex>
                    )}
                </Flex>

                <Box minW="100%" fontSize="sm" textAlign="end">
                    <b>{props.details.points} </b> points
                </Box>

                <Text minW="100%" fontSize="sm" textAlign="end">
                    {dayjs(props.details.createdAt).format(' MMMM D, YYYY')}
                </Text>

                <Flex minW="100%" justifyContent="end" alignItems="center">
                    <Tag
                        h={2}
                        size="md"
                        colorScheme={useStatusesStyle(props.details.status).color}
                    >
                        {useStatusesStyle(props.details.status).data}
                    </Tag>
                </Flex>
                <Flex justifyContent="center">
                    <Box w={50} fontSize="md">
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<FontAwesomeIcon icon={faEllipsis} />}
                                variant="ghost"
                                size="md"
                            />
                            <MenuList>
                                <MenuItem onClick={onOpen} textAlign="center">
                                    Delete
                                </MenuItem>
                                <MenuItem onClick={onOpenEdit}>Edit</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Grid>

            <ModalLayout isOpen={isOpenEdit} onClose={onCloseEdit} name={'Edit Task'}>
                <Grid>
                    <Box mx="auto" minW="80%">
                        <Flex flexDirection="column" fontWeight="normal">
                            <Flex justifyContent="space-between" alignItems="center">
                                <Text fontSize="sm" mr={2}>
                                    Updated {relativeTime(updated)}
                                </Text>
                                <Text fontSize="sm" my={1}>
                                    <Tag
                                        ml={2}
                                        size="md"
                                        colorScheme={useStatusesStyle(props.details.status).color}
                                    >
                                        {useStatusesStyle(props.details.status).data}
                                    </Tag>{' '}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex flexDirection="column" mt={4}>
                            <Text mb={2} fontWeight="normal" fontSize="sm">
                                Title
                            </Text>
                            <Editable defaultValue={title}>
                                <EditablePreview
                                    border="1px"
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
                        </Flex>
                        <Grid
                            gridTemplateColumns="repeat(3, 1fr)"
                            alignItems="center"
                            gap={5}
                        >
                            <Flex my={1} flexDirection="column">
                                <Text my={1}>Points</Text>
                                <Editable defaultValue={points}>
                                    <EditablePreview
                                        border="1px"
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
                            </Flex>
                            <Flex my={1} flexDirection="column">
                                <Text my={1}>File Type</Text>

                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        size="md"
                                        disabled={true}
                                        fontWeight="thin"
                                        variant="outline"
                                        _hover={{ background: 'purple.400' }}
                                    >
                                        Select file type
                                    </MenuButton>
                                    <MenuList bg="gray.700">
                                        {fileTypes.map(t => (
                                            <MenuItem value={t.name} key={t.name}>
                                                {t.name}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            </Flex>
                            <Flex my={1} flexDirection="column">
                                <Text my={1}>Deadline</Text>

                                <Input
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
                        </Grid>
                        <Flex my={1} flexDirection="column">
                            <Text my={1}>Description</Text>
                            <Textarea
                                h={100}
                                resize="none"
                                placeholder="Task Description"
                                value={description}
                                onChange={e => {
                                    setDescription(e.target.value);
                                }}
                            >
                                {description}
                            </Textarea>
                        </Flex>
                        <Flex justifyContent="end" alignItems="center" mt={2}>
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
                        </Flex>
                    </Box>

                    <Flex flexDirection="column" mt={10}>
                        {props?.details?.user ? (
                            <>
                                <Flex alignItems="start" justifyContent="space-between">
                                    <Flex flexDirection="column" alignItems="start">
                                        <Flex>
                                            <Avatar
                                                size="sm"
                                                name={`${firstName} ${lastName}`}
                                                mr={2}
                                            />
                                            <Text>
                                                {firstName} {lastName}
                                            </Text>
                                        </Flex>
                                        {props.details.solution ? (
                                            <Box
                                                fontSize="sm"
                                                overflowX="hidden"
                                                className="styled-scroll"
                                            >
                                                {props.details.solution}
                                            </Box>
                                        ) : (
                                            <Text>There are no solution provided yet</Text>
                                        )}
                                    </Flex>

                                    {props.details.taskFiles.length !== 0 ? (
                                        <Box></Box>
                                    ) : (
                                        <Box>There are no files </Box>
                                    )}
                                </Flex>
                            </>
                        ) : (
                            <Text>This is unassigned task</Text>
                        )}

                        {props.details.solution && props.details.status !== 'APPROVED' && (
                            <Flex alignItems="center" justifyContent="end">
                                <Button
                                    size="xs"
                                    colorScheme="purple"
                                    onClick={() => approveTask(id)}
                                    mx={2}
                                >
                                    Approve
                                </Button>
                                <Menu>
                                    <MenuButton rounded="md" mx={2}>
                                        Reject
                                    </MenuButton>
                                    <MenuList bg="gray.700" w={400} p={2} border="none">
                                        <form>
                                            <Flex flexDirection="column">
                                                <Textarea
                                                    h="100%"
                                                    resize="none"
                                                    placeholder="Please provide the reason for rejection"
                                                    onChange={e => {
                                                        setRejectedMessage(e.target.value);
                                                    }}
                                                />
                                                <Button
                                                    w={50}
                                                    mt={2}
                                                    size="xs"
                                                    colorScheme="purple"
                                                    onClick={() => rejectTask(id)}
                                                >
                                                    Reject
                                                </Button>
                                            </Flex>
                                        </form>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        )}
                    </Flex>
                </Grid>
            </ModalLayout>
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
            >
                <AlertDialogContent>
                    <AlertDialogBody color="white">
                        Do you want to delete this task?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose} bg="gray.500">
                            No
                        </Button>
                        <Button
                            bg="purple.400"
                            color="white"
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
