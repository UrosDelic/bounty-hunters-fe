import { useEffect } from 'react';
import { Box, Skeleton } from '@chakra-ui/react';
import FeedStore from '../../stores/feed';
import { observer } from 'mobx-react';

import {
    HorizontalCard,
    NestedNavigation,
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
            <Box>
                <NestedNavigation />
                <Box h={500}>
                    <InfiniteScroll loadMoreData={() => FeedStore.loadNewTasks()}>
                        {newTasks &&
                            newTasks.map((p, key: any) => (
                                <HorizontalCard key={key}>
                                    <p>{p.id}</p> <p>{p.title}</p> <p>{p.body}</p>{' '}
                                </HorizontalCard>
                            ))}
                        <Skeleton minH={60} w={'90%'} mx={'auto'} my={8} />
                    </InfiniteScroll>
                </Box>
            </Box>
        </>
    );
};

export default observer(NewTasksFeed);
