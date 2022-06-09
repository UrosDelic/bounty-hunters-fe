import React from 'react';
import { Link, TabList, Tab, Tabs } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
function NestedNav() {
    return (
        <>
            <Tabs my={5} mx={2} variant='soft-rounded' colorScheme='purple' >
                <TabList>


                    <Link
                        key={1}
                        as={RouterLink}
                        to={'/feed'}
                        color="black"

                    >
                        <Tab>New Tasks</Tab>
                    </Link>

                    <Link
                        key={2}
                        as={RouterLink}
                        to={'/feed/task-completed'}
                        color="black"


                    >
                        <Tab>Task Completed</Tab>
                    </Link>
                </TabList>
            </Tabs>
        </>
    );
}

export default NestedNav;
