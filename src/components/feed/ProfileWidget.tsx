import {
    Box,
    Flex,
    Text,
    Grid,
    Avatar,
    Hide,
    Show,
    Image,
    Link,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { Link as RouterLink } from 'react-router-dom';

const ProfileWidget = () => {
    const img: string = require("../../img/avatar.svg").default;


    return (
        <>
            <Show below="lg">
                <Box order={-1} p={2}>
                    <Flex
                        justifyContent="start"
                        alignItems="center"
                        rounded="md"
                        bgGradient="linear(to-l,purple.400, purple.700)"
                        p={5}
                        w="95%"
                        mx="auto"
                        mb={2}
                        mt={8}
                    >
                        <Image src={img} alt="logo" width={100} />
                        <Flex flexDirection="column" alignItems="start" ml={5} mt={-2}>
                            <Text fontSize="xl">Milan Miletic</Text>
                            <Text fontSize="sm">Belgrade, Serbia - Frontend Developer</Text>
                        </Flex>
                    </Flex>

                    <Grid
                        justifyContent="center"
                        gridTemplateColumns="repeat(2, 1fr)"
                        gap={3}
                        p={3}

                    >
                        <Link as={RouterLink} to={`/my-tasks`} _focus={{ outline: 0 }}>
                            <Box
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                            >
                                <Text
                                    fontSize="md"
                                    textAlign="center"
                                    rounded="md"
                                    fontWeight="thin"
                                    bg="purple.400"
                                    borderLeft="4px"
                                    borderColor="white"
                                    p={4}
                                >
                                    Assigned Tasks
                                    <Text fontWeight="medium" fontSize="xl">
                                        35
                                    </Text>
                                </Text>
                            </Box>
                        </Link>

                        <Link as={RouterLink} to={`/my-tasks`} _focus={{ outline: 0 }}>
                            <Box
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                                rounded="md"
                            >
                                <Text
                                    fontSize="md"
                                    textAlign="center"
                                    rounded="md"
                                    fontWeight="thin"
                                    borderLeft="4px"
                                    borderColor="purple.400"
                                    bg="gray.600"
                                    boxShadow="md"
                                    p={4}
                                >
                                    Completed Tasks
                                    <Text fontWeight="medium" fontSize="xl">
                                        35
                                    </Text>
                                </Text>
                            </Box>
                        </Link>
                        <Link as={RouterLink} to={`/my-tasks`} _focus={{ outline: 0 }}>
                            <Box
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                                rounded="md"
                            >
                                <Text
                                    fontSize="md"
                                    textAlign="center"
                                    rounded="md"
                                    fontWeight="thin"
                                    borderLeft="4px"
                                    borderColor="purple.400"
                                    bg="gray.600"
                                    boxShadow="md"
                                    p={4}
                                >
                                    Available Points
                                    <Text fontWeight="medium" fontSize="xl">
                                        356
                                    </Text>
                                </Text>
                            </Box>
                        </Link>
                        <Link as={RouterLink} to={`/my-tasks`} _focus={{ outline: 0 }}>
                            <Box
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                                rounded="md"
                            >
                                <Text
                                    fontSize="md"
                                    textAlign="center"
                                    rounded="md"
                                    fontWeight="thin"
                                    bg="purple.400"
                                    borderLeft="4px"
                                    borderColor="white"
                                    p={4}
                                >
                                    Pending Orders
                                    <Text fontWeight="medium" fontSize="xl">
                                        3
                                    </Text>
                                </Text>
                            </Box>
                        </Link>
                    </Grid>
                </Box>
            </Show>

            <Hide below="xl">
                <Box h='100vh' w='30vw' position='fixed' right={0} boxShadow='dark-lg'>
                    <Grid rowGap={5}>
                        <Flex
                            bgGradient="linear(to-l,purple.400, purple.700)"
                            py={8}
                            px={5}
                            alignItems='end'>
                            <Image src={img} alt="logo" width={100} />
                            <Flex flexDirection="column" mx={4}>
                                <Text fontWeight="thin" fontSize="xl">
                                    Milos Miletic
                                </Text>
                                <Text fontWeight="thin" fontSize="md">
                                    Belgrade, Serbia - Frontend Developer
                                </Text>
                            </Flex>
                        </Flex>
                        <Grid
                            justifyContent="center"
                            gridTemplateColumns="repeat(2, 1fr)"
                            gap={3}
                            p={3}

                        >
                            <Link as={RouterLink} to={`/my-tasks`} _focus={{ outline: 0 }}>
                                <Box
                                    alignItems="start"
                                    justifyContent="space-evenly"
                                    flexDirection="column"
                                >
                                    <Text
                                        fontSize="md"
                                        textAlign="center"
                                        rounded="md"
                                        fontWeight="thin"
                                        bg="purple.400"
                                        borderLeft="4px"
                                        borderColor="white"
                                        p={2}
                                    >
                                        Assigned Tasks
                                        <Text fontWeight="medium" fontSize="xl">
                                            35
                                        </Text>
                                    </Text>
                                </Box>
                            </Link>

                            <Link as={RouterLink} to={`/my-tasks`} _focus={{ outline: 0 }}>
                                <Box
                                    alignItems="start"
                                    justifyContent="space-evenly"
                                    flexDirection="column"
                                    rounded="md"
                                >
                                    <Text
                                        fontSize="md"
                                        textAlign="center"
                                        rounded="md"
                                        fontWeight="thin"
                                        borderLeft="4px"
                                        borderColor="purple.400"
                                        bg="gray.600"
                                        boxShadow="md"
                                        p={2}
                                    >
                                        Completed Tasks
                                        <Text fontWeight="medium" fontSize="xl">
                                            35
                                        </Text>
                                    </Text>
                                </Box>
                            </Link>
                            <Link as={RouterLink} to={`/my-tasks`} _focus={{ outline: 0 }}>
                                <Box
                                    alignItems="start"
                                    justifyContent="space-evenly"
                                    flexDirection="column"
                                    rounded="md"
                                >
                                    <Text
                                        fontSize="md"
                                        textAlign="center"
                                        rounded="md"
                                        fontWeight="thin"
                                        borderLeft="4px"
                                        borderColor="purple.400"
                                        bg="gray.600"
                                        boxShadow="md"
                                        p={2}
                                    >
                                        Available Points
                                        <Text fontWeight="medium" fontSize="xl">
                                            356
                                        </Text>
                                    </Text>
                                </Box>
                            </Link>
                            <Link as={RouterLink} to={`/my-tasks`} _focus={{ outline: 0 }}>
                                <Box
                                    alignItems="start"
                                    justifyContent="space-evenly"
                                    flexDirection="column"
                                    rounded="md"
                                >
                                    <Text
                                        fontSize="md"
                                        textAlign="center"
                                        rounded="md"
                                        fontWeight="thin"
                                        bg="purple.400"
                                        borderLeft="4px"
                                        borderColor="white"
                                        p={2}
                                    >
                                        Pending Orders
                                        <Text fontWeight="medium" fontSize="xl">
                                            3
                                        </Text>
                                    </Text>
                                </Box>
                            </Link>
                        </Grid>

                        {/* <Grid justifyContent="center" gridTemplateColumns="repeat(2, 1fr)" mx={20}>
                            <Flex
                                alignItems="start"
                                justifyContent="space-evenly"
                                flexDirection="column"
                                rounded="md"
                                minH={100}
                                mx={2}
                            >
                                <Text fontSize="sm" fontWeight="thin">
                                    Pending Bounties:
                                </Text>

                                <Text
                                    borderLeft="2px"
                                    borderColor="pink.300"
                                    fontSize="2xl"
                                    lineHeight="25px"
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
                                <Text fontSize="sm" fontWeight="thin">
                                    Pending Bounties:
                                </Text>

                                <Text
                                    borderLeft="2px"
                                    borderColor="pink.700"
                                    fontSize="2xl"
                                    lineHeight="25px"
                                    px={2}
                                >
                                    5
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
                                <Text fontSize="sm" fontWeight="thin">
                                    Pending Bounties:
                                </Text>

                                <Text
                                    borderLeft="2px"
                                    borderColor="pink.300"
                                    fontSize="2xl"
                                    lineHeight="25px"
                                    px={2}
                                >
                                    12
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
                                <Text fontSize="sm" fontWeight="thin">
                                    Pending Bounties:
                                </Text>

                                <Text
                                    borderLeft="2px"
                                    borderColor="pink.300"
                                    fontSize="2xl"
                                    lineHeight="25px"
                                    px={2}
                                >
                                    10
                                </Text>
                            </Flex>
                        </Grid> */}
                        <hr />
                    </Grid>
                </Box>

                {/*  wide buttons 
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
