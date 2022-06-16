import { TabList, Tab, Tabs, Flex } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

function NestedNav({ data, index }: any) {



    return (
        <>
            <Tabs variant='line' colorScheme="purple" defaultIndex={index} my={8} >
                <Flex>
                    <TabList>
                        {data &&
                            data.map((d: any, key: any) => (
                                <Tab key={key} as={RouterLink} to={d.to} color='white' fontSize={{ base: 'sm', md: 'lg' }} >
                                    {d.title}
                                </Tab>
                            ))}
                    </TabList>

                </Flex>
            </Tabs>
        </>
    );
}

export default NestedNav;
