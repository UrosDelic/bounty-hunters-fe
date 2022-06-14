import { useEffect } from 'react';
import {
    Box,
    Skeleton,
    Text,
    Flex,
    Grid,
    Badge,
    Avatar,
    GridItem,

} from '@chakra-ui/react';
import FeedStore from '../../stores/feed';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { HorizontalCard } from 'components/index';
const TaskCompletedFeed = () => {
    const { completedTasks } = FeedStore;

    useEffect(() => {
        FeedStore.initialLoad(8);
        FeedStore.getCompletedTasks();
    }, []);

    return (
        <Box >
            <InfiniteScroll
                dataLength={completedTasks.length}
                next={() => FeedStore.loadCompletedTasks()}
                hasMore={true}
                loader={
                    <>
                        <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)', lg: "repeat(4, 1fr)" }}>
                            <Skeleton minH={200} rounded="md" m={8} />
                            <Skeleton minH={200} rounded="md" m={8} />
                            <Skeleton minH={200} rounded="md" m={8} />
                            <Skeleton minH={200} rounded="md" m={8} />
                        </Grid>
                    </>
                }
                height={'70vh'}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2,1fr)', lg: "repeat(4, 1fr)" }}>
                    {completedTasks.map((task, key: any) => (
                        <Box key={key} mx="auto" p={2} minW={350} maxW={400} >
                            <HorizontalCard>
                                <Flex flexDirection="column" my="auto" minW="100%" p={10}>
                                    <Flex mb={6} justifyContent="start" alignItems="start" flexDirection={{ base: 'column', md: 'row' }}>
                                        <Text
                                            fontWeight="bold"
                                            fontSize={{ base: 'lg', lg: 'xl' }}

                                        >
                                            Create Article about Topic XYZ
                                        </Text>
                                        <Badge
                                            fontSize="xs"
                                            ml={4}
                                            color="white"
                                            variant="solid"
                                            colorScheme="green"
                                            mt={{ base: 2, md: 0 }}

                                        >
                                            Completed
                                        </Badge>
                                    </Flex>

                                    <Flex
                                        alignItems="start"
                                        flexDirection={{ base: 'column', lg: 'row' }}
                                        my={2}
                                    >
                                        <Avatar size="lg" src="https://bit.ly/dan-abramov" />
                                        <Flex
                                            ml={2}
                                            flexDirection="column"
                                            alignItems={{ base: 'center', lg: 'start' }}
                                        >
                                            <Text>Milan Miletic earned 50 points!</Text>

                                        </Flex>
                                    </Flex>
                                    <Flex
                                        justifyContent="space-between"
                                        alignItems="center"
                                        flexDirection={{ base: 'column', lg: 'row' }}
                                    >
                                        <Box minW={{ base: '100%', lg: '100%' }} my={3}>
                                            <Text
                                                fontSize={{ base: 'sm', md: 'md' }}
                                                textAlign={{ base: 'center', lg: 'start' }}
                                            ></Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </HorizontalCard>
                        </Box>
                    ))}

                </Grid>
            </InfiniteScroll>
        </Box >
    );
};

export default observer(TaskCompletedFeed);
