import { useEffect } from 'react';
import { Box, Skeleton, Text, Flex, Avatar } from '@chakra-ui/react';


import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StyledCard } from 'components/index';
import Notifications from 'stores/notifications';
import dayjs from 'dayjs';
const FeedList = () => {
    const { allNotifications, checkForMore } = Notifications;

    useEffect(() => {
        Notifications.getAllNotifications();
    }, []);

    return (
        <>
            <Flex flexDirection="column" my={2}>
                <Box w={{ base: '100%', lg: '80%' }} p={6} mx="auto">
                    <Text fontWeight="thin" fontSize={{ base: '2xl', md: '3xl' }} mb={4}>
                        Check the <b>Latest News!</b>{' '}
                    </Text>

                    <InfiniteScroll
                        dataLength={allNotifications.length}
                        next={() => Notifications.loadMoreNotifications()}
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
                        {allNotifications &&
                            allNotifications.map((p, key: any) => (
                                <Box
                                    key={key}
                                    mx="auto"
                                    p={2}
                                    _hover={{
                                        cursor: 'pointer',
                                        transform: 'translateY(-5px)',
                                        transition: '0.4s ease-out',
                                    }}
                                >
                                    <StyledCard>
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
                                            >
                                                <Flex alignItems="center">
                                                    <Text
                                                        fontWeight="bold"
                                                        fontSize={{ base: 'xl', lg: '2xl' }}
                                                        textAlign={{ base: 'center', lg: 'start' }}
                                                        my={{ base: 4, md: 0 }}
                                                    >
                                                        {p.message}


                                                    </Text>
                                                </Flex>
                                            </Flex>

                                            <Flex
                                                alignItems={{ base: 'center', lg: 'start' }}
                                                flexDirection={{ base: 'column', lg: 'row' }}
                                                my={2}
                                            >
                                                <Avatar size={'lg'} src="https://bit.ly/dan-abramov" />
                                                <Flex
                                                    ml={2}
                                                    flexDirection="column"
                                                    alignItems={{ base: 'center', lg: 'start' }}
                                                >
                                                    <Text fontSize="lg">Milan Miletic</Text>
                                                    <Text
                                                        fontSize="xs"
                                                        mt={1}
                                                        fontWeight={'thin'}
                                                        as="sub"
                                                        color="gray.200"
                                                    >
                                                        {dayjs(p.createdAt).format('DD/MM/YYYY')}
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
                                                        fontWeight={'thin'}
                                                        overflow="hidden"
                                                        fontSize={{ base: 'sm', md: 'lg' }}
                                                        textAlign={{ base: 'center', lg: 'start' }}
                                                    ></Text>
                                                </Box>
                                            </Flex>
                                        </Flex>
                                    </StyledCard>
                                </Box>
                            ))}
                    </InfiniteScroll>
                </Box>
            </Flex>
        </>
    );
};

export default observer(FeedList);
