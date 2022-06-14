import {
    Box,
    Skeleton,
    Text,
    Avatar,
    Badge,
    Grid,
} from '@chakra-ui/react';
import FeedStore from '../../stores/feed';

import InfiniteScroll from 'react-infinite-scroll-component';
import { observer } from 'mobx-react';

const NotificationWidget = () => {
    const { newTasks } = FeedStore;
    const latestOrders = [
        {
            id: 1,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
        },
        {
            id: 2,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
        },
        {
            id: 3,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
        },
        {
            id: 3,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
        },
        {
            id: 3,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
        },
        {
            id: 3,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
        },
        {
            id: 3,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
        },
        {
            id: 3,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
        },
    ];
    return (
        <>
            <Grid
                display="flex"
                flexDirection="column"
                alignItems="center"
                minH={'50vh'}
                maxH={'50vh'}
                gridAutoRows={'1fr 1fr'}
            >
                <Grid
                    gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
                    justifyItems="center"
                    w="100%"
                >
                    <Box display="flex" alignItems="center" h={50} rounded="md">
                        <Text fontWeight="semibold" mx={2}>
                            Pending Bounties:
                        </Text>
                        <Text fontSize="2xl" color="purple.200">
                            34
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        h={50}

                        rounded="md"

                    >
                        <Text fontWeight="semibold" mx={2}>
                            Available Points:
                        </Text>
                        <Text fontSize="2xl" color="purple.200">
                            340
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        h={50}

                        rounded="md"

                    >
                        <Text fontWeight="semibold" mx={2}>
                            Assigned Tasks:
                        </Text>
                        <Text fontSize="2xl" color="purple.200">
                            40
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        h={50}

                        rounded="md"

                    >
                        <Text fontWeight="semibold" mx={2}>
                            Completed Tasks:
                        </Text>
                        <Text fontSize="2xl" color="purple.200">
                            34
                        </Text>
                    </Box>
                </Grid>
                <Box my={8}>
                    <Text fontSize="2xl" my={2}>
                        Notifications{' '}
                    </Text>

                    <InfiniteScroll
                        dataLength={newTasks.length}
                        next={() => FeedStore.loadNewTasks()}
                        hasMore={true}
                        loader={
                            <h4>
                                <Skeleton minH={50} my={1} />
                            </h4>
                        }
                        height={'40vh'}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        {latestOrders.map((order, key: any) => (
                            <Box
                                bg="gray.500"
                                key={key}
                                p={{ base: 0, md: 4 }}
                                display="flex"
                                alignItems="center"
                                my={1}
                            >
                                <Text>
                                    <Avatar mx={2} size="sm" src="https://bit.ly/dan-abramov" />
                                    {order.desc}{' '}
                                    <Badge
                                        fontSize="xs"
                                        ml={4}
                                        color="white"
                                        variant="solid"
                                        colorScheme="pink"
                                    >
                                        recommended
                                    </Badge>
                                    <Badge
                                        fontSize="xs"
                                        ml={4}
                                        color="white"
                                        variant="solid"
                                        colorScheme="purple"
                                    >
                                        10 pts
                                    </Badge>
                                </Text>
                            </Box>
                        ))}
                    </InfiniteScroll>
                </Box>
            </Grid>
        </>
    );
};

export default observer(NotificationWidget);
