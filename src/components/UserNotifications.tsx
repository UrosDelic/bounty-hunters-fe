import {
    Box,
    Text,
    Flex,
    Avatar,
    Button,
    SkeletonText,
    SkeletonCircle,
    Circle,
    Divider,
    Link,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserNotificationsStore from 'stores/user-notifications';
import Login from 'stores/Login';
import { observer } from 'mobx-react';
import { useRelativeTime } from 'custom-hooks/useRelativeTime';
import { Link as RouterLink } from 'react-router-dom';
const UserNotifications = () => {
    const { allNotifications, loading, checkForMore } = UserNotificationsStore;
    const { googleProfile } = Login;

    useEffect(() => {
        UserNotificationsStore.getUserNotifications();
        Login.profileData();
    }, []);

    const relativeTime = useRelativeTime();

    const readNotification = (id: any) => {
        UserNotificationsStore.readNotification(id);
    };

    const markAllAsRead = () => {
        UserNotificationsStore.markAllAsRead();
    };

    return (
        <Flex flexDirection="column" bg="gray.700" zIndex={10} >
            {loading ? (
                [...Array(4).keys()].map(() => (
                    <>
                        <Box bg="gray.700" minH={50} p={2}>
                            <SkeletonCircle m="2" size="10" />
                            <SkeletonText m="2" noOfLines={2} spacing="2" />
                        </Box>
                        <Divider />
                    </>
                ))
            ) : (
                <>
                    <InfiniteScroll
                        dataLength={allNotifications.length}
                        next={() => UserNotificationsStore.loadMoreNotifications()}
                        hasMore={checkForMore}
                        className="styled-scroll"
                        loader={
                            <Box bg="gray.700" minH={50} my={2} p={2}>
                                <SkeletonCircle m="2" size="10" />
                                <SkeletonText m="2" noOfLines={2} spacing="2" />
                            </Box>
                        }
                        height={'50vh'}
                        endMessage={
                            <Text m={2} fontWeight="thin" textAlign="center" fontSize="sm">
                                There are no more notifications
                            </Text>
                        }
                    >
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom="1px"
                            borderColor="gray.600"
                            py={2}
                        >
                            <Text fontSize="2xl" fontWeight="thin" mx={4} my={2}>
                                User Activity
                            </Text>
                            <Button
                                mx={4}
                                my={2}
                                variant="solid"
                                size="sm"
                                bg="purple.400"
                                color="white"
                                onClick={() => markAllAsRead()}
                            >
                                Mark all as read
                            </Button>
                        </Flex>

                        {allNotifications.map((n, key: any) => (
                            <>
                                <Link
                                    as={RouterLink}
                                    to={`/${n.type.toLowerCase()}/${n.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        onClick={() => readNotification(n.id)}
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        my="auto"
                                        bg={n.readStatus === 'UNREAD' ? 'purple.800' : ''}
                                        _hover={{ background: 'purple.900', cursor: 'pointer' }}
                                        borderBottom="1px"
                                        borderColor="gray.600"
                                    >
                                        <Flex key={key} p={4} rounded="sm" minH={50}>
                                            <Flex alignItems="center">
                                                <Avatar
                                                    size={'md'}
                                                    src={googleProfile?.picture}
                                                    mr={2}
                                                />
                                                <Flex flexDirection="column">
                                                    <Flex>
                                                        <Text fontSize="md">{n.message} </Text>
                                                    </Flex>

                                                    <Text
                                                        fontWeight={'thin'}
                                                        as="sub"
                                                        color="gray.200"
                                                        mt={1}
                                                    >
                                                        {relativeTime(n.createdAt)}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                        <Box px={4}>
                                            {n.readStatus === 'UNREAD' ? (
                                                <Circle size="6px" bg="purple.400" ml={4}></Circle>
                                            ) : (
                                                ''
                                            )}
                                        </Box>
                                    </Box>
                                </Link>
                            </>
                        ))}
                    </InfiniteScroll>
                </>
            )}
        </Flex>
    );
};

export default observer(UserNotifications);
