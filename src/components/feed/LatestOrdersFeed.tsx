import { useEffect } from 'react';
import {
    Box,
    Skeleton,
    Text,
    Flex,
    Grid,
    Avatar,
    GridItem,
    Image,
} from '@chakra-ui/react';
import FeedStore from '../../stores/feed';
import { observer } from 'mobx-react';

import mug from '../../img/mug.jpg';

import { HorizontalCard } from 'components/index';
import InfiniteScroll from 'react-infinite-scroll-component';
const LatestOrdersFeed = () => {
    const { completedTasks } = FeedStore;

    useEffect(() => {
        FeedStore.initialLoad(8);
        FeedStore.getCompletedTasks();
    }, []);

    return (
        <GridItem maxH={'70vh'} h={'60vh'}>
            <InfiniteScroll
                dataLength={completedTasks.length}
                next={() => FeedStore.loadCompletedTasks()}
                hasMore={true}
                loader={
                    <h4>
                        <Skeleton minH={200} rounded="md" mx={2} my={8} />
                        <Skeleton minH={200} rounded="md" mx={2} my={8} />
                    </h4>
                }
                height={'70vh'}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <Grid
                    templateColumns={{
                        base: '1fr',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }}
                    gap={5}
                >
                    {completedTasks.map((task, key: any) => (
                        <Box key={key}>
                            <HorizontalCard>
                                <Flex
                                    alignItems="center"
                                    flexDirection={{ base: 'column', xl: 'column' }}
                                    my={2}
                                    w="100%"
                                >
                                    <Avatar size="lg" src="https://bit.ly/dan-abramov" />

                                    <Text fontSize="lg" textAlign="center">
                                        <b>Milan Miletic</b> just ordered Quantox Mug
                                    </Text>
                                    <Image src={mug} objectFit="cover" maxW={200} />
                                </Flex>
                            </HorizontalCard>
                        </Box>
                    ))}
                </Grid>
            </InfiniteScroll>
        </GridItem>
    );
};

export default observer(LatestOrdersFeed);
