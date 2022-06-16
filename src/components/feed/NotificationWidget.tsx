
import {
    Box,
    Skeleton,
    Text,
    Flex,
    Avatar,
    Grid,

} from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import FeedStore from '../../stores/feed';
const NotificationWidget = () => {
    const { newTasks } = FeedStore;
    const latestOrders = [
        {
            id: 1,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
            src: 'https://bit.ly/code-beast'
        },
        {
            id: 2,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
            src: 'https://bit.ly/kent-c-dodds'
        },
        {
            id: 3,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
            src: 'https://bit.ly/ryan-florence'
        },
        {
            id: 4,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
            src: 'https://bit.ly/kent-c-dodds'
        },
        {
            id: 5,
            name: 'Admin',
            desc: 'Create Article about Topic XYZ!',
            src: 'https://bit.ly/kent-c-dodds'
        },

    ];
    return (

        <Grid display="flex" flexDirection="column" mt={5}>


            <Text
                fontSize="2xl"
                fontWeight='thin'
                display={{ base: 'none', md: 'block' }}
                mb={2}
            >
                Notifications{' '}
            </Text>

            <InfiniteScroll
                dataLength={newTasks.length}
                next={() => FeedStore.loadNewTasks()}
                hasMore={true}
                loader={<Skeleton minH={50} my={1} />}
                height={'40vh'}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {latestOrders.map((order, key: any) => (
                    <>
                        <Box
                            background="purple.500"
                            key={key}
                            p={{ base: 0, md: 4 }}
                            display="flex"
                            alignItems="start"
                            my={1}
                            maxW="100%"
                            boxShadow={'lg'}
                        >
                            <Avatar
                                mx={2}
                                size="md"
                                src={order.src}
                            />
                            <Flex flexDirection="column">
                                <Text >{order.desc} </Text>
                                <Text fontWeight={'thin'} as='sub' color='gray.200'>just now</Text>
                            </Flex>
                        </Box>
                    </>
                ))}
            </InfiniteScroll>

        </Grid>
    )
}

export default NotificationWidget