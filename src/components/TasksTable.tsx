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
import WalletStore from '../stores/wallet';
import Pagination from './Pagination';
import { observer } from 'mobx-react';

type TransactionTableProps = {
  data: any;
};

function TasksTable({ data }: TransactionTableProps) {
  const { taskPage, totalTaskPages } = WalletStore;

  return (
    <TableContainer flex="1">
      <Table variant="unstyled" wordBreak="break-word">
        <Thead>
          <Tr color="#B3C5CD">
            <Th wordBreak="break-word" textTransform="uppercase">
              Orders
            </Th>
            <Th textTransform="uppercase">Date</Th>
            <Th textAlign="right" textTransform="uppercase">
              Amount
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: any) => {
            const { createdAt, title, points, id } = item;
            return (
              <Tr key={id}>
                <Td maxWidth="150px" color="#FFFFFF" wordBreak="break-all">
                  {title}
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
                  {points}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Pagination
        totalPages={totalTaskPages}
        currentPage={taskPage}
        onNext={() => WalletStore.increaseTaskPage()}
        onPrev={() => WalletStore.decreaseTaskPage()}
      />
    </TableContainer>
  );
}

export default observer(TasksTable);
