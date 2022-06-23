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
import Login from '../../stores/Login';
import { useEffect } from 'react';

const ProfileWidget = () => {
    const img: string = require('../../img/avatar.svg').default;

    useEffect(() => {
        Login.profileData();
    }, []);

    const { googleProfile } = Login;

    return (
        <>
            <Hide below="xl">
                <Box h="100vh" w="30vw" position="fixed" right={0} boxShadow="dark-lg">
                    <Grid rowGap={5}>
                        <Flex py={8} px={5} justifyContent="center">
                            <Avatar
                                src={googleProfile?.picture}
                                size="xl"
                                name={googleProfile?.name}
                            />
                            <Flex flexDirection="column" mx={4} alignItems="start">
                                <Text fontWeight="thin" fontSize="2xl" mt={2}>
                                    {googleProfile.name}
                                </Text>
                                <Text fontWeight="thin" fontSize="sm" mt={2}>
                                    {googleProfile.email}
                                </Text>
                            </Flex>
                        </Flex>

                        <Grid
                            justifyContent="center"
                            gridTemplateColumns="repeat(2, 1fr)"
                            gap={3}
                            p={3}
                        >
                            <Link
                                as={RouterLink}
                                to={`/my-tasks`}
                                _focus={{ outline: 0 }}
                                style={{ textDecoration: 'none' }}
                            >
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

                            <Link
                                as={RouterLink}
                                to={`/my-tasks`}
                                _focus={{ outline: 0 }}
                                style={{ textDecoration: 'none' }}
                            >
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
                            <Link
                                as={RouterLink}
                                to={`/my-tasks`}
                                _focus={{ outline: 0 }}
                                style={{ textDecoration: 'none' }}
                            >
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
                            <Link
                                as={RouterLink}
                                to={`/my-tasks`}
                                _focus={{ outline: 0 }}
                                style={{ textDecoration: 'none' }}
                            >
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
                        <Flex
                            h="100%"
                            w="90%"
                            mx="auto"
                            my={2}
                            bgGradient="linear(to-l,purple.400, purple.700)"
                            justifyContent="space-around"
                            p={5}
                        >
                            <Text fontSize="xl" fontWeight="thin">
                                Informational Data
                            </Text>
                            <Image src={img} alt="logo" width={100} />
                        </Flex>
                    </Grid>
                </Box>
            </Hide>
            <Show below="xl">
                <Hide below="lg">
                    <Box
                        h="100vh"
                        w="30vw"
                        position="fixed"
                        right={0}
                        boxShadow="dark-lg"
                    >
                        <Flex mt={8} px={5} justifyContent="center">
                            <Avatar
                                src={googleProfile.picture}
                                size="lg"
                                name={googleProfile.name}
                            />
                            <Flex flexDirection="column" mx={4} alignItems="start">
                                <Text fontWeight="thin" fontSize="xl" mt={2}>
                                    {googleProfile.name}
                                </Text>
                                <Text fontWeight="thin" fontSize="xs">
                                    {googleProfile.email}
                                </Text>
                            </Flex>
                        </Flex>

                        <Grid
                            justifyContent="center"
                            gridTemplateColumns="repeat(2, 1fr)"
                            gap={3}
                            p={3}
                            my={4}
                        >
                            <Link
                                as={RouterLink}
                                to={`/my-tasks`}
                                _focus={{ outline: 0 }}
                                style={{ textDecoration: 'none' }}
                            >
                                <Box
                                    alignItems="start"
                                    justifyContent="space-evenly"
                                    flexDirection="column"
                                >
                                    <Text
                                        fontSize="sm"
                                        textAlign="center"
                                        rounded="md"
                                        fontWeight="thin"
                                        bg="purple.400"
                                        borderLeft="4px"
                                        borderColor="white"
                                        p={1}
                                    >
                                        Assigned Tasks
                                        <Text fontWeight="medium" fontSize="md">
                                            35
                                        </Text>
                                    </Text>
                                </Box>
                            </Link>

                            <Link
                                as={RouterLink}
                                to={`/my-tasks`}
                                _focus={{ outline: 0 }}
                                style={{ textDecoration: 'none' }}
                            >
                                <Box
                                    alignItems="start"
                                    justifyContent="space-evenly"
                                    flexDirection="column"
                                    rounded="md"
                                >
                                    <Text
                                        fontSize="sm"
                                        textAlign="center"
                                        rounded="md"
                                        fontWeight="thin"
                                        borderLeft="4px"
                                        borderColor="purple.400"
                                        bg="gray.600"
                                        boxShadow="md"
                                        p={1}
                                    >
                                        Completed Tasks
                                        <Text fontWeight="medium" fontSize="md">
                                            35
                                        </Text>
                                    </Text>
                                </Box>
                            </Link>
                            <Link
                                as={RouterLink}
                                to={`/my-tasks`}
                                _focus={{ outline: 0 }}
                                style={{ textDecoration: 'none' }}
                            >
                                <Box
                                    alignItems="start"
                                    justifyContent="space-evenly"
                                    flexDirection="column"
                                    rounded="md"
                                >
                                    <Text
                                        fontSize="md"
                                        textAlign="center"
                                        rounded="sm"
                                        fontWeight="thin"
                                        borderLeft="4px"
                                        borderColor="purple.400"
                                        bg="gray.600"
                                        boxShadow="md"
                                        p={1}
                                    >
                                        Available Points
                                        <Text fontWeight="medium" fontSize="md">
                                            356
                                        </Text>
                                    </Text>
                                </Box>
                            </Link>
                            <Link
                                as={RouterLink}
                                to={`/my-tasks`}
                                _focus={{ outline: 0 }}
                                style={{ textDecoration: 'none' }}
                            >
                                <Box
                                    alignItems="start"
                                    justifyContent="space-evenly"
                                    flexDirection="column"
                                    rounded="md"
                                >
                                    <Text
                                        fontSize="sm"
                                        textAlign="center"
                                        rounded="md"
                                        fontWeight="thin"
                                        bg="purple.400"
                                        borderLeft="4px"
                                        borderColor="white"
                                        p={1}
                                    >
                                        Pending Orders
                                        <Text fontWeight="medium" fontSize="md">
                                            3
                                        </Text>
                                    </Text>
                                </Box>
                            </Link>
                        </Grid>
                        <Flex
                            h={130}
                            w="90%"
                            mx="auto"
                            my={2}
                            bgGradient="linear(to-l,purple.400, purple.700)"
                            justifyContent="space-around"
                            p={5}
                        >
                            <Text fontSize="sm" fontWeight="thin">
                                Informational Data
                            </Text>
                            <Image src={img} alt="logo" width={100} />
                        </Flex>
                    </Box>
                </Hide>
            </Show>
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
                        <Avatar
                            src={googleProfile.picture}
                            size="lg"
                            name={googleProfile.name}
                        />
                        <Flex flexDirection="column" alignItems="start" ml={5} mt={-2}>
                            <Text fontSize="xl">{googleProfile.name}</Text>
                            <Text fontWeight="thin" fontSize="sm" mt={2}>
                                {googleProfile.email}
                            </Text>
                        </Flex>
                    </Flex>

                    <Grid
                        justifyContent="center"
                        gridTemplateColumns="repeat(2, 1fr)"
                        gap={3}
                        p={3}
                    >
                        <Link
                            as={RouterLink}
                            to={`/my-tasks`}
                            _focus={{ outline: 0 }}
                            style={{ textDecoration: 'none' }}
                        >
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

                        <Link
                            as={RouterLink}
                            to={`/my-tasks`}
                            _focus={{ outline: 0 }}
                            style={{ textDecoration: 'none' }}
                        >
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
                        <Link
                            as={RouterLink}
                            to={`/my-tasks`}
                            _focus={{ outline: 0 }}
                            style={{ textDecoration: 'none' }}
                        >
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
                        <Link
                            as={RouterLink}
                            to={`/my-tasks`}
                            _focus={{ outline: 0 }}
                            style={{ textDecoration: 'none' }}
                        >
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
        </>
    );
};

export default observer(ProfileWidget);
