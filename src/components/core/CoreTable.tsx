import { Box, Grid, Progress, Flex, Button, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

type TextAlign = 'end' | 'left' | 'center' | 'right' | 'start' | undefined;

const CoreTable = ({
    columns,
    templateColumns,
    children,
    page,
    totalCount,
    dataLength,
    setPage,
    loading,
}: any) => {

    const prevStatus = () => {
        return page <= 1 ? true : false;
    };

    const nextStatus = () => {
        return totalCount - page * 10 >= 1 ? false : true;
    };
    const handleNextPage = () => {
        setPage((page += 1));
    };
    const handlePreviousPage = () => {
        setPage((page -= 1));
    };

    return (
        <Box>
            <Flex alignItems="center" justifyContent="end" p={2}>
                <Box mx={2} fontSize="xs">
                    <Flex alignItems="center">
                        <Text mr={2}>
                            {dataLength} of {totalCount}
                        </Text>
                        <Button
                            _focus={{ boxShadow: 'none', outline: 'none' }}
                            bg="transparent"
                            fontSize="2xl"
                            onClick={() => handlePreviousPage()}
                            p={2}
                            disabled={prevStatus()}
                        >
                            <ChevronLeftIcon />
                        </Button>
                        <Button
                            _focus={{ boxShadow: 'none', outline: 'none' }}
                            bg="transparent"
                            fontSize="2xl"
                            onClick={() => handleNextPage()}
                            p={2}
                            disabled={nextStatus()}
                        >
                            <ChevronRightIcon />
                        </Button>
                    </Flex>
                </Box>
            </Flex>
            <Grid
                gridTemplateColumns={templateColumns}
                bg="gray.600"
                color="gray.300"
                rounded="md"
                fontSize="md"
                p={2}
                mx="auto"
                width="100%"
                fontWeight="medium"
            >
                {columns.map((c: any, key: any) => {
                    const alignText = {
                        textAlign: c.align as TextAlign,
                    };
                    return (
                        <Box style={alignText} key={key}>
                            {c.title}
                        </Box>
                    );
                })}
            </Grid>

            <Box minH="10px">
                {loading && (
                    <Progress colorScheme="purple" size="xs" value={10} isIndeterminate />
                )}
            </Box>

            <Grid
                rowGap={0}
                color="gray.400"
                fontSize="lg"
                mx="auto"
                width="100%"
                minH={600}
                alignContent="start"
            >
                {children}
            </Grid>
        </Box>
    );
};

export default CoreTable;
