import { useEffect } from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import FeedStore from '../../stores/feed';
import { observer } from 'mobx-react';

import {
    HorizontalCard,
    InfiniteScroll,

} from 'components/index';
const NewTasksFeed = () => {
    const { newTasks } = FeedStore;

    useEffect(() => {
        FeedStore.initialLoad();
        FeedStore.getNewTasks();
    }, []);

    return (
        <>

            <Box w={'90%'} mx='auto'>
                <Box h={600} >
                    <InfiniteScroll loadMoreData={() => FeedStore.loadNewTasks()}>
                        {newTasks &&
                            newTasks.map((p, key: any) => (
                                <Box key={key} w={'100%'} mx='auto' p={8} >
                                    <HorizontalCard>
                                        <p>{p.id}</p> <p>{p.title}</p> <p>{p.body}</p>{' '}
                                    </HorizontalCard>
                                </Box>
                            ))}
                        <Skeleton minH={60} maxW={'100%'} mx={8} />
                    </InfiniteScroll>
                </Box>
            </Box>
        </>
    );
};

export default observer(NewTasksFeed);
