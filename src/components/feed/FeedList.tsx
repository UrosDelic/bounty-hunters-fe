import { useEffect } from 'react';
import { Box, Skeleton, Text, Flex, Link, Grid } from '@chakra-ui/react';

import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StyledCard } from 'components/index';
import userFeeds from 'stores/user-feed';

import { Link as RouterLink } from 'react-router-dom';
import { useRelativeTime } from 'custom-hooks/useRelativeTime';
import Notifications from '../../stores/user-feed';
const FeedList = () => {
    const { allFeeds, checkForMore } = Notifications;
    const relativeTime = useRelativeTime();

    useEffect(() => {
        Notifications.collectFeeds();
    }, []);

    return (
        <>
            <Flex flexDirection="column" my={2}>
                <Box w="100%">
                    <Flex alignItems={'center'} my={4}>
                        <Text
                            fontWeight="thin"
                            fontSize={{ base: 'xl', md: '2xl' }}
                            mb={4}
                            mx={5}
                            textAlign={{ base: 'center', lg: 'start' }}
                        >
                            Check the <b>Latest News!</b>{' '}
                        </Text>
                    </Flex>

                    <InfiniteScroll
                        dataLength={allFeeds.length}
                        next={() => userFeeds.loadMoreFeeds()}
                        hasMore={checkForMore}
                        loader={
                            <h4>
                                <Skeleton minH={200} mx={2} rounded="md" />
                            </h4>
                        }
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <Grid gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={5}>
                            {allFeeds &&
                                allFeeds.map((p, key: any) => (
                                    <Box
                                        key={key}
                                        mx="auto"
                                        p={2}
                                        w={{ base: '90%', md: '100%' }}
                                        _hover={{
                                            cursor: 'pointer',
                                            transform: 'translateY(-5px)',
                                            transition: '0.4s ease-out',
                                        }}
                                    >
                                        <StyledCard>
                                            <Link
                                                as={RouterLink}
                                                to={`/${p.type.toLowerCase()}/${p.id}`}
                                                _focus={{ outline: 0 }}
                                                style={{ textDecoration: 'none' }}
                                            >
                                                <Flex flexDirection="column" px={10}>
                                                    <Text
                                                        fontWeight="thin"
                                                        fontSize={{ base: 'lg', xl: 'xl' }}
                                                        textAlign={{ base: 'center', lg: 'start' }}
                                                        my={{ base: 8, md: 0 }}
                                                        mx="auto"
                                                    >
                                                        {p.message}
                                                    </Text>
                                                    <Text
                                                        fontSize="xs"
                                                        mt={1}
                                                        fontWeight={'thin'}
                                                        as="sub"
                                                        color="gray.200"
                                                    >
                                                        {relativeTime(p.createdAt)}
                                                    </Text>
                                                </Flex>
                                            </Link>
                                        </StyledCard>
                                    </Box>
                                ))}
                        </Grid>
                    </InfiniteScroll>
                </Box>
            </Flex>
        </>
    );
};

export default observer(FeedList);
