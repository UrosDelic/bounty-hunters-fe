import { useEffect } from 'react';
import {
    Box,
    Skeleton,
    Text,
    Flex,
    Avatar,
    Badge,
    Grid,
    Show,
    Hide,
} from '@chakra-ui/react';
import FeedStore from '../../stores/feed';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { HorizontalCard, NotificationWidget } from 'components/index';
const NewTasksFeed = () => {
    const { newTasks } = FeedStore;

    useEffect(() => {
        FeedStore.initialLoad(3);
        FeedStore.getNewTasks();
    }, []);

    return (
        <>
            <Grid
                gridTemplateColumns={{ base: '100%', xl: '60% 35%' }}
                gap="5%"
                mx="auto"
            >
                <Show below="md">
                    <Box>
                        Mobile menu
                    </Box>
                </Show>

                <InfiniteScroll
                    dataLength={newTasks.length}
                    next={() => FeedStore.loadNewTasks()}
                    hasMore={true}
                    loader={
                        <h4>
                            <Skeleton minH={200} rounded="md" m={2} />
                        </h4>
                    }
                    height={'70vh'}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {newTasks &&
                        newTasks.map((p, key: any) => (
                            <Box key={key} mx="auto" p={2}>
                                <HorizontalCard>
                                    <Flex
                                        flexDirection="column"
                                        my="auto"
                                        minW="100%"
                                        p={{ base: 2, lg: 8 }}
                                    >
                                        <Flex
                                            mb={6}
                                            flexDirection={{ base: 'column', lg: 'row' }}
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Flex alignItems="center">
                                                <Text
                                                    fontWeight="bold"
                                                    fontSize={{ base: 'xl', lg: '2xl' }}
                                                    textAlign={{ base: 'center', lg: 'start' }}
                                                    my={{ base: 4, md: 0 }}
                                                >
                                                    Create Article about Topic XYZ
                                                </Text>
                                                <Badge
                                                    fontSize="xs"
                                                    ml={4}
                                                    color="white"
                                                    bg="pink.500"
                                                    variant="solid"
                                                >
                                                    New
                                                </Badge>
                                            </Flex>
                                            <Flex
                                                flexDirection="column"
                                                alignItems={{ base: 'center', md: 'start' }}
                                            >
                                                <Text fontSize="sm" as="sup" my={1}>
                                                    Deadline: 10/13/2022
                                                </Text>

                                                <Text fontSize="sm" my={1} as="sub">
                                                    Points: 30
                                                </Text>
                                            </Flex>
                                        </Flex>

                                        <Flex
                                            alignItems={{ base: 'center', lg: 'start' }}
                                            flexDirection={{ base: 'column', lg: 'row' }}
                                            my={2}
                                        >
                                            <Avatar size="lg" src="https://bit.ly/dan-abramov" />
                                            <Flex
                                                ml={2}
                                                flexDirection="column"
                                                alignItems={{ base: 'center', lg: 'start' }}
                                            >
                                                <Text fontSize="lg">Milan Miletic</Text>
                                                <Text fontSize="xs" mt={1} as="sub">
                                                    10/03/2022 : 20:00
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <Flex
                                            justifyContent="space-between"
                                            alignItems="center"
                                            flexDirection={{ base: 'column', lg: 'row' }}
                                        >
                                            <Box my={3}>
                                                <Text
                                                    overflow="hidden"
                                                    fontSize={{ base: 'sm', md: 'md' }}
                                                    textAlign={{ base: 'center', lg: 'start' }}
                                                >
                                                    {p.body}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </HorizontalCard>
                            </Box>
                        ))}
                </InfiniteScroll>
                <Hide below="lg">
                    <NotificationWidget />
                </Hide>
            </Grid>
        </>
    );
};

export default observer(NewTasksFeed);
