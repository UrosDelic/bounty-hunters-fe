import {
    TableContainer,
    Table,
    Tbody,
    Thead,
    Tr,
    Th,
    Td,
    Skeleton,
    Box
} from '@chakra-ui/react';


type TableProps = {

    columns: any,
    children: any,
    loading: any
}


const NewCustomTable = ({ children, columns, loading }: TableProps) => {

    return (
        <>
            {loading ? [...Array(6)].map((_, i) => (<Skeleton width='full' height='50px' my={2} />)) :
                <TableContainer boxShadow="2xl">
                    <Table size='lg' variant='striped' colorScheme={'facebook'}>
                        <Thead >
                            {columns.map((c: any) => (
                                <Th key={c.name}>{c.name}</Th>
                            ))}
                        </Thead>
                        <Tbody>{children}</Tbody>
                    </Table>
                </TableContainer>}
        </>
    )


}

export default NewCustomTable