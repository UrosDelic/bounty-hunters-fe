import { TabList, Tab, Tabs } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
function NestedNav({ data }: any) {
    return (
        <>
            <Tabs my={5} mx={8} p={4} variant="soft-rounded" colorScheme="purple">
                <TabList>
                    {data &&
                        data.map((d: any, key: any) => (
                            <Tab key={key} as={RouterLink} to={d.to}>
                                {d.title}
                            </Tab>
                        ))}
                </TabList>
            </Tabs>
        </>
    );
}

export default NestedNav;
