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
import { WalletOrder } from '../types/wallet';

type OrdersTableProps = {
  data: WalletOrder[];
};

function OrdersTable({ data }: OrdersTableProps) {
  const { orderPage, totalOrderPages } = WalletStore;

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
            const { createdAt, name, price, orderId } = item;
            return (
              <Tr key={orderId}>
                <Td maxWidth="150px" color="#FFFFFF" wordBreak="break-all">
                  {name}
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
                  {price}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Pagination
        totalPages={totalOrderPages}
        currentPage={orderPage}
        onNext={() => WalletStore.increaseOrderPage()}
        onPrev={() => WalletStore.decreaseOrderPage()}
      />
    </TableContainer>
  );
}

export default observer(OrdersTable);
