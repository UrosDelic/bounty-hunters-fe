import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

type TransactionTableProps = {
  data: any;
};

function TransactionTable({ data }: TransactionTableProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr color="#B3C5CD">
            <Th textTransform="uppercase">Transaction</Th>
            <Th textTransform="uppercase">Date</Th>
            <Th textTransform="uppercase">Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: any) => {
            const { id, name, points, date } = item;
            return (
              <Tr key={id}>
                <Td maxWidth="150px" color="#FFFFFF" wordBreak="break-word">
                  {name}
                </Td>
                <Td maxWidth="150px" color="#B3C5CD" wordBreak="break-word">
                  {date}
                </Td>
                <Td maxWidth="150px" color="#FFFFFF" wordBreak="break-word">
                  {points}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;
