import {
    Box,
    Text,
    Flex,
    Avatar,
    Button,
    SkeletonText,
    SkeletonCircle,
    Circle,
    Divider
} from '@chakra-ui/react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Notifications from 'stores/notifications';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';

const NotificationList = () => {
    const { allNotifications, loading, checkForMore } = Notifications;

    useEffect(() => {
        Notifications.getAllNotifications();
    }, []);

    return (
        <Flex flexDirection="column" bg='gray.700'>
            {loading ? (
                [...Array(4).keys()].map(() => (
                    <>
                        <Box bg="gray.700">
                            <SkeletonCircle m="2" size="10" />
                            <SkeletonText m="2" noOfLines={2} spacing="2" />
                        </Box>
                    </>
                ))
            ) : (
                <>
                    <InfiniteScroll
                        dataLength={allNotifications.length}
                        next={() => Notifications.loadMoreNotifications()}
                        hasMore={checkForMore}
                        className="notification-scroll"
                        loader={
                            <Box>
                                <SkeletonCircle size="10" ml={5} />
                                <Box padding="5" bg="blackAlpha.600">
                                    <SkeletonText mt="4" noOfLines={2} spacing="2" />
                                </Box>
                            </Box>
                        }
                        height={'40vh'}
                        endMessage={
                            <Text m={2} fontWeight="thin" textAlign="center" fontSize="sm">
                                There are no more notifications
                            </Text>
                        }
                    >
                        <Flex justifyContent="space-between" alignItems="center" p={2}>
                            <Text fontSize="xl" fontWeight="thin" mx={4} my={2}>
                                Notifications
                            </Text>
                            <Button mx={4} my={2} variant="link" size="sm">
                                Mark all as read
                            </Button>
                        </Flex>

                        {allNotifications.map((n, key: any) => (
                            <>
                                <Box
                                    display="flex"
                                    justifyContent='space-between'
                                    alignItems="center"
                                    my="auto"
                                    bg={n.readStatus === 'UNREAD' ? 'gray.600' : ''}
                                    _hover={{ background: 'purple.700', cursor: 'pointer' }}
                                >

                                    <Flex
                                        key={key}
                                        p={4}
                                        rounded="sm"
                                        minH={50}
                                    >
                                        <Flex alignItems="start">
                                            <Avatar
                                                size={'md'}
                                                src="https://bit.ly/dan-abramov"
                                                mr={2}
                                            />
                                            <Flex flexDirection="column">
                                                <Text fontSize="sm">{n.message}</Text>
                                                <Text
                                                    fontWeight={'thin'}
                                                    as="sub"
                                                    color="gray.200"
                                                    mt={1}
                                                >
                                                    {dayjs(n.createdAt).format('YYYY-MM-DD HH:mm')}
                                                </Text>
                                            </Flex>
                                        </Flex>

                                    </Flex>
                                    <Box px={4}>
                                        {n.readStatus === 'UNREAD' ? (
                                            <Circle size="6px" bg="purple.400" ml={4}></Circle>
                                        ) : ''}
                                    </Box>
                                </Box>
                                <Divider />
                            </>

                        ))}
                    </InfiniteScroll>
                </>
            )}
        </Flex>
    );
};

export default observer(NotificationList);
