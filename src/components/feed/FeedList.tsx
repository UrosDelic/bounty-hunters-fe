import { useEffect } from 'react';
import {
    Box,
    Skeleton,
    Text,
    Flex,
    Avatar,
    Tag,

} from '@chakra-ui/react';
import FeedStore from '../../stores/feed';
//import Tasks from '../../stores/tasks';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StyledCard } from 'components/index';
const FeedList = () => {
    const { newTasks } = FeedStore;
    //const { tasks } = Tasks;

    useEffect(() => {
        FeedStore.getNewTasks()
        //Tasks.getTasks()

    }, []);

    return (
        <>

            <Flex flexDirection='column' my={2}>
                <Box w={{ base: '100%', lg: '90%' }} p={6} >

                    <Text fontSize='3xl' mb={4} >Check the Latest News! </Text>



                    <InfiniteScroll
                        dataLength={newTasks.length}
                        next={() => FeedStore.loadNewTasks()}
                        hasMore={true}
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
                        {newTasks &&
                            newTasks.map((p, key: any) => (
                                <Box key={key}

                                    mx="auto" p={2} _hover={{
                                        cursor: 'pointer',
                                        transform: 'translateY(-5px)',
                                        transition: '0.4s ease-out'
                                    }}>
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
                                                        fontWeight='bold'
                                                        fontSize={{ base: 'xl', lg: '2xl' }}
                                                        textAlign={{ base: 'center', lg: 'start' }}
                                                        my={{ base: 4, md: 0 }}
                                                    >
                                                        {p.title}
                                                        <Tag
                                                            fontSize="xs"
                                                            ml={4}
                                                            color="white"
                                                            bg="pink.500"
                                                            variant="subtle"
                                                        >
                                                            NEW
                                                        </Tag>
                                                        <Tag
                                                            fontSize="xs"
                                                            ml={2}
                                                            color="white"
                                                            bg="purple.400"
                                                            variant="subtle"
                                                        >

                                                            pts
                                                        </Tag>
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
                                                    >
                                                        {p.body}
                                                    </Text>
                                                </Box>

                                            </Flex>
                                        </Flex>
                                    </StyledCard>
                                </Box>
                            ))}
                    </InfiniteScroll>

                </Box>

            </Flex >
        </>
    );
};

export default observer(FeedList);
