import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import WalletStore from '../stores/wallet';
import Pagination from './Pagination';
import { observer } from 'mobx-react';
import { WalletTask } from '../types/wallet';

type TaskTableProps = {
  data: WalletTask[];
};

function TasksTable({ data }: TaskTableProps) {
  const { taskPage, totalTaskPages } = WalletStore;

  return (
    <Flex flex="1" direction="column" justifyContent="space-between">
      <TableContainer>
        <Table variant="unstyled" wordBreak="break-word">
          <Thead>
            <Tr color="#B3C5CD">
              <Th wordBreak="break-word" textTransform="uppercase">
                Tasks
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
      </TableContainer>
      <Pagination
        totalPages={totalTaskPages}
        currentPage={taskPage}
        onNext={() => WalletStore.increaseTaskPage()}
        onPrev={() => WalletStore.decreaseTaskPage()}
      />
    </Flex>
  );
}

export default observer(TasksTable);
