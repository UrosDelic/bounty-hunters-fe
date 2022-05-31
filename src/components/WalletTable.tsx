import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from '@chakra-ui/react';

type WalletTableProps = {
  data: any;
  headers: any;
  title: any;
};

function WalletTable({ data, headers, title }: WalletTableProps) {
  return (
    <TableContainer>
      <Text fontSize="xl" m={2}>
        {title}
      </Text>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>{headers[0]}</Th>
            <Th>{headers[1]}</Th>
            <Th isNumeric>{headers[2]}</Th>
          </Tr>
        </Thead>
        <Tbody wordBreak="break-word">
          {data.map((item: any) => {
            const { id, name, points, date } = item;
            return (
              <Tr key={id}>
                <Td maxWidth="150px">{name}</Td>
                <Td maxWidth="150px">{points}</Td>
                <Td maxWidth="150px" isNumeric>
                  {date}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default WalletTable;
