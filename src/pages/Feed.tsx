import { Box, Tabs, TabPanels } from '@chakra-ui/react';
import { NewTasksFeed, TaskCompletedFeed } from 'components/index';
import { Routes, Route } from 'react-router-dom';

const NewFeed = () => {
    return (
        <>
            <Box>
                <Tabs>
                    <TabPanels>
                        <NewTasksFeed />
                        <Routes>
                            <Route
                                path={`/feed/task-completed`}
                                element={<TaskCompletedFeed />}
                            />
                        </Routes>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
};

export default NewFeed;
