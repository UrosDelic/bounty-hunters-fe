import {
    Box,
    Flex,
    Text,
    Grid,
    Avatar,
    Hide,
    Show,
    Divider,
    Image,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { StyledCard } from 'components/index';


const ProfileWidget = () => {
    return (
        <>
            <Show below="lg">
                {/* <Grid
                    gridColumn={{ base: 0, lg: 2 }}
                    gridRow={{ base: 1, lg: 1 }}
                    mx={'auto'}
                    w="80%"
                    my={6}
                    rounded="xl"
                >
                    <Box h={100}>
                        <StyledCard>
                            <></>
                        </StyledCard>
                    </Box>

                    <Box display="flex" justifyContent="space-evenly">
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            mt={-12}
                            mr={6}
                            zIndex={1}
                        >
                            <Text
                                fontSize="xs"
                                textTransform="uppercase"
                                fontWeight="thin"
                                mr={10}
                                mb={1}
                            >
                                Available Points
                            </Text>
                            <Circle
                                size="60px"
                                bg="purple.300"
                                border="1px"
                                borderColor="white"
                                color="white"
                                mr={12}
                                boxShadow="lg"
                            >
                                1020
                            </Circle>
                        </Box>
                        <Avatar
                            mt={-12}
                            mx="auto"
                            size={'xl'}
                            src="https://bit.ly/dan-abramov"
                            justifySelf="center"
                            position="absolute"
                            boxShadow="lg"
                        />
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            mt={-12}
                            ml={6}
                            zIndex={1}
                        >
                            <Text
                                fontSize="xs"
                                textTransform="uppercase"
                                fontWeight="thin"
                                textAlign="center"
                                ml={12}
                                mb={1}
                            >
                                Assigned Tasks
                            </Text>
                            <Circle
                                boxShadow="lg"
                                size="60px"
                                bg="purple.500"
                                border="1px"
                                borderColor="white"
                                color="white"
                                ml={10}
                            >
                                14
                            </Circle>
                        </Box>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="space-evenly"
                        alignItems="center"
                        h={180}
                        bg="purple.400"
                        mt={-12}
                        pt={20}
                        rounded="md"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            mb={4}
                        >
                            <Circle
                                boxShadow="lg"
                                size="60px"
                                bg="purple.500"
                                border="1px"
                                borderColor="white"
                                color="white"
                            >
                                5
                            </Circle>
                            <Text
                                fontSize="xs"
                                textTransform="uppercase"
                                fontWeight="thin"
                                textAlign="center"
                                mt={1}
                                ml={1}
                            >
                                Pending Bounties
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            mb={4}
                            ml={2}
                        >
                            <Circle
                                boxShadow="lg"
                                size="60px"
                                bg="purple.300"
                                color="white"
                                border="1px"
                                borderColor="white"
                            >
                                30
                            </Circle>
                            <Text
                                fontSize="xs"
                                textTransform="uppercase"
                                fontWeight="thin"
                                textAlign="center"
                                mt={1}
                                ml={1}
                            >
                                Completed Tasks
                            </Text>
                        </Box>
                    </Box>
                </Grid> */}
            </Show>
            <Show below="xl">
                <Box bg="tomato"></Box>
            </Show>

            <Hide below="xl">
                <Box
                    minH={'100vh'}
                    boxShadow="dark-lg"
                    pt={2}
                    pl={5}
                    w={'30vw'}
                    position="fixed"
                    right={1}


                >
                    {/* <Flex justifyContent="start" alignItems="start" py={5}>
                        <Avatar
                            size="xl"
                            src="https://bit.ly/prosper-baba"
                            boxShadow="lg"
                        />
                        <Flex flexDirection="column" alignItems="start" ml={5}>
                            <Text fontWeight="thin" fontSize="2xl">
                                Milos Miletic
                            </Text>
                            <Text fontWeight="thin" fontSize="xl">
                                Belgrade, Serbia - Frontend Developer
                            </Text>
                        </Flex>
                    </Flex> */}



                    {/* <Grid justifyContent="center" gridTemplateColumns="1fr 1fr" gap={1}>
                            <Flex
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                                rounded="md"
                                minH={100}
                                mx={2}
                            >
                                <Text fontSize="xl" fontWeight="thin">
                                    Available points:
                                </Text>

                                <Text
                                    borderLeft="2px"
                                    borderColor="pink.500"
                                    fontSize="3xl"
                                    lineHeight="35px"
                                    px={2}
                                >
                                    488
                                </Text>
                            </Flex>
                            <Flex
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                                rounded="md"
                                minH={100}
                                mx={2}
                            >
                                <Text fontSize="xl" fontWeight="thin">
                                    Pending Bounties:
                                </Text>

                                <Text
                                    borderLeft="2px"
                                    borderColor="pink.300"
                                    fontSize="3xl"
                                    lineHeight="35px"
                                    px={2}
                                >
                                    8
                                </Text>
                            </Flex>
                            <Flex
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                                rounded="md"
                                minH={100}
                                mx={2}
                            >
                                <Text fontSize="xl" fontWeight="thin">
                                    Completed Tasks:
                                </Text>

                                <Text
                                    borderLeft="2px"
                                    borderColor="purple.200"
                                    fontSize="3xl"
                                    lineHeight="35px"
                                    px={2}
                                >
                                    4
                                </Text>
                            </Flex>
                            <Flex
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                                rounded="md"
                                minH={100}
                                mx={2}
                            >
                                <Text fontSize="xl" fontWeight="thin">
                                    Assigned Tasks:
                                </Text>

                                <Text
                                    borderLeft="2px"
                                    borderColor="purple.600"
                                    fontSize="3xl"
                                    lineHeight="35px"
                                    px={2}
                                >
                                    3
                                </Text>
                            </Flex>
                        </Grid> */}

                </Box>

                {/* Prikaz wide buttons 
                     <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            my={2}
                            minW={400}
                            rounded="md"
                            border="1px"
                            borderColor="purple.400"
                        >
                            <Text fontSize="xl" fontWeight="thin" p={2} minW='70%' maxW='80%'>
                                Available points
                            </Text>
                            <Text textAlign='center' minW='20%' maxW='30%' bg="purple.400" p={2} fontSize="xl">
                                488
                            </Text>
                        </Flex>

                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            my={2}
                            minW={400}
                            rounded="md"
                            border="1px"
                            borderColor="purple.400"
                        >
                            <Text fontSize="xl" fontWeight="thin" p={2} minW='70%' maxW='80%'>
                                Completed Tasks
                            </Text>
                            <Text textAlign='center' minW='20%' maxW='30%' bg="purple.400" p={2} fontSize="xl">
                                24
                            </Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            my={2}
                            minW={400}
                            rounded="md"
                            border="1px"
                            borderColor="purple.400"
                        >
                            <Text fontSize="xl" fontWeight="thin" p={2} minW='70%' maxW='80%'>
                                Pending Bounties
                            </Text>
                            <Text textAlign='center' minW='20%' maxW='30%' bg="purple.400" p={2} fontSize="xl">
                                2
                            </Text>
                        </Flex>
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            my={2}
                            minW={400}
                            rounded="md"
                            border="1px"
                            borderColor="purple.400"
                        >
                            <Text fontSize="xl" fontWeight="thin" p={2} minW='70%' maxW='80%'>
                                Assigned Tasks
                            </Text>
                            <Text textAlign='center' minW='20%' maxW='30%' bg="purple.400" p={2} fontSize="xl">
                                7
                            </Text>
                        </Flex> */}
            </Hide>
        </>
    );
};

export default observer(ProfileWidget);
