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
  transaction: string;
};

function TransactionTable({ data, transaction }: TransactionTableProps) {
  return (
    <TableContainer flex="1">
      <Table variant="unstyled" wordBreak="break-word">
        <Thead>
          <Tr color="#B3C5CD">
            <Th wordBreak="break-word" textTransform="uppercase">
              {transaction}
            </Th>
            <Th textTransform="uppercase">Date</Th>
            <Th textAlign="right" textTransform="uppercase">
              Amount
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: any) => {
            const { id, name, points, date } = item;
            return (
              <Tr key={id}>
                <Td maxWidth="150px" color="#FFFFFF" wordBreak="break-all">
                  {name}
                </Td>
                <Td maxWidth="150px" color="#B3C5CD" wordBreak="break-all">
                  {date}
                </Td>
                <Td
                  maxWidth="150px"
                  color="#FFFFFF"
                  wordBreak="break-all"
                  textAlign="right"
                >
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
