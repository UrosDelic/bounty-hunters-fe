import { Tabs, TabPanels, Box } from '@chakra-ui/react';
import {
    NestedNavigation,
    NewTasksFeed,
    TaskCompletedFeed,
    LatestOrdersFeed,
    ProfileWidget
} from 'components/index';
import { Routes, Route, useLocation } from 'react-router-dom';

const NewFeed = () => {
    const data = [
        { title: 'New Tasks', to: '/feed' },
        { title: 'Completed Tasks', to: '/feed/task-completed' },
        { title: 'Latest Orders', to: '/feed/latest-orders' },
    ];

    const location = useLocation();

    return (
        <Box px={{ base: 0, md: 8 }}>
            <Tabs>
                <NestedNavigation
                    data={data}
                    index={
                        location.pathname === '/feed'
                            ? 0
                            : location.pathname === '/feed/task-completed'
                                ? 1
                                : 2
                    }
                />

                <TabPanels my={8}>
                    <Routes>
                        <Route path="/" element={<NewTasksFeed />} />
                        <Route path="/task-completed" element={<TaskCompletedFeed />} />
                        <Route path="/latest-orders" element={<LatestOrdersFeed />} />
                    </Routes>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default NewFeed;
