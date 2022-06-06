
import {
    Flex,
} from '@chakra-ui/react';


type TableRowProps = {
    children: any,
    bg: any
}
const TableRow = ({ children, bg }: TableRowProps) => {

    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent='space-between'
            minH={30}
            backgroundImage={bg}
            bgPosition="center"
            my={8}
            rounded="md"
            boxShadow="dark-lg"
            color='white'
            overflow='auto'
            p={4}
            alignItems='center'>
            {children}
        </Flex>

    )
}

export default TableRow