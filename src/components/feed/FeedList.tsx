import { useEffect } from 'react';
import {
    Box,
    Skeleton,
    Text,
    Flex,
    Avatar,
    Hide,
    Show,
    Link,
    Grid,
    Image
} from '@chakra-ui/react';

import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StyledCard } from 'components/index';
import Notifications from 'stores/notifications';
import dayjs from 'dayjs';
import { Link as RouterLink } from 'react-router-dom';

const FeedList = () => {
    const { allNotifications, checkForMore } = Notifications;

    useEffect(() => {
        Notifications.getAllNotifications();
    }, []);
    const img: string = require("../../img/avatar.svg").default;

    return (
        <>
            <Flex flexDirection="column" my={2}>
                <Box w='100%' >
                    <Flex alignItems={'center'} my={4}>

                        <Text
                            fontWeight="thin"
                            fontSize={{ base: 'xl', md: '2xl' }}
                            mb={4}
                            textAlign={{ base: 'center', md: 'start' }}
                        >
                            Check the <b>Latest News!</b>{' '}
                        </Text>
                        <Image src={img} alt="logo" width={100} />
                    </Flex>

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
                        <Grid gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }} gap={5}>
                            {allNotifications &&
                                allNotifications.map((p, key: any) => (
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
                                            <Show below="md">
                                                <Link
                                                    as={RouterLink}
                                                    to={`/${p.type.toLowerCase()}/${p.id}`}
                                                    _focus={{ outline: 0 }}
                                                >

                                                    <Flex flexDirection="column" alignItems="center">
                                                        <Avatar
                                                            size={'lg'}
                                                            src="https://bit.ly/dan-abramov"
                                                        />
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
                                                        <Text
                                                            fontWeight="bold"
                                                            fontSize={{ base: 'md', lg: '2xl' }}
                                                            textAlign={{ base: 'center', lg: 'start' }}
                                                            my={{ base: 8, md: 0 }}
                                                            mx="auto"
                                                        >
                                                            {p.message}
                                                        </Text>
                                                    </Flex>

                                                </Link>
                                            </Show>
                                            {/* <Hide below="xl">

                                            <Flex minW='45vw' minH={40}>
                                                <StyledCard>

                                                </StyledCard>
                                            </Flex>

                                        </Hide> */}
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
