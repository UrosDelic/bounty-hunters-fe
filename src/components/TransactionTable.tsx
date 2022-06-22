import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

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
            const { createdAt, name, title, price, points, id, orderId } = item;
            return (
              <Tr key={id || orderId}>
                <Td maxWidth="150px" color="#FFFFFF" wordBreak="break-all">
                  {name || title}
                </Td>
                <Td maxWidth="150px" color="#B3C5CD" wordBreak="break-all">
                  {dayjs(createdAt).format('DD/MM/YYYY')}
                </Td>
                <Td
                  maxWidth="150px"
                  color="#FFFFFF"
                  wordBreak="break-all"
                  textAlign="right"
                >
                  {price || points}
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
