import { Tabs, TabPanels } from '@chakra-ui/react';
import {
    NestedNavigation,
    NewTasksFeed,
    TaskCompletedFeed,
} from 'components/index';
import { Routes, Route } from 'react-router-dom';

const NewFeed = () => {
    const data = [
        { title: 'New Tasks', to: '/feed' },
        { title: ' Task Completed', to: '/feed/task-completed' },
    ];
    return (
        <>
            <Tabs>
                <NestedNavigation data={data} />
                <TabPanels>
                    <Routes>
                        <Route path="/" element={<NewTasksFeed />} />
                        <Route path="/task-completed" element={<TaskCompletedFeed />} />
                    </Routes>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default NewFeed;
