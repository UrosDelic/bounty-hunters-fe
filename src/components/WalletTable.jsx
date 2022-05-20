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

function WalletTable({ data, headers, title }) {
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
          {data.map(item => {
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
