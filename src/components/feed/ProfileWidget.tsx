import { Box, Text, Grid, Avatar, Hide, Show, Circle } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { StyledCard, NotificationWidget } from 'components/index';
const ProfileWidget = () => {
    return (
        <>
            <Show below="lg">
                <Grid
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
                </Grid>
            </Show>
            <Hide below="lg">
                <Box display="flex" flexDirection="column" alignItems="end" h={'10vh'}>
                    <Box rounded="lg" w="80%" mx="auto" mb={4} >
                        <Box>
                            <StyledCard>
                                <Avatar
                                    size="xl"
                                    src="https://bit.ly/prosper-baba"
                                    boxShadow="lg"
                                    mx="auto"
                                />
                            </StyledCard>
                        </Box>
                        <Box display="flex" justifyContent="space-between" mt={2}>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Circle
                                    mt={-12}
                                    boxShadow="lg"
                                    size="70px"
                                    bg="purple.500"
                                    color="white"
                                    border="1px"
                                    borderColor="white"
                                >
                                    350
                                </Circle>
                                <Text
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    fontWeight="thin"
                                    textAlign="center"
                                    mt={1}
                                >
                                    Available Points
                                </Text>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Circle
                                    mt={-12}
                                    boxShadow="lg"
                                    size="70px"
                                    bg="purple.300"
                                    color="white"
                                    border="1px"
                                    borderColor="white"
                                >
                                    2
                                </Circle>
                                <Text
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    fontWeight="thin"
                                    textAlign="center"
                                    mt={1}
                                >
                                    Assigned Tasks
                                </Text>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Circle
                                    mt={-12}
                                    boxShadow="lg"
                                    size="70px"
                                    bg="purple.500"
                                    color="white"
                                    border="1px"
                                    borderColor="white"
                                >
                                    3
                                </Circle>
                                <Text
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    fontWeight="thin"
                                    textAlign="center"
                                    mt={1}
                                >
                                    Pending Bounties
                                </Text>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Circle
                                    mt={-12}
                                    boxShadow="lg"
                                    size="70px"
                                    bg="purple.300"
                                    color="white"
                                    border="1px"
                                    borderColor="white"
                                >
                                    50
                                </Circle>
                                <Text
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    fontWeight="thin"
                                    textAlign="center"
                                    mt={1}
                                >
                                    Completed Tasks
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box w={'80%'} mt={2} mx="auto">
                        <NotificationWidget />
                    </Box>
                </Box>
            </Hide>
        </>
    );
};

export default observer(ProfileWidget);
