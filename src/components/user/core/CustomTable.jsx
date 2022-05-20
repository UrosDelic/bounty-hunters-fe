import React from 'react';
import {
  Table,
  Avatar,
  Tbody,
  Tr,
  Td,
  Text,
  TableContainer,
  Image,
  Flex,
} from '@chakra-ui/react';

function CustomTable({ data, title, color }) {
  if (data)
    return (
      <TableContainer rounded={'xl'} bg="white">
        <Text fontSize="xl" m={2}>
          {title}
        </Text>
        <Table variant="striped" size="sm">
          <Tbody>
            {data.map(row => {
              return (
                <Tr key={row.id}>
                  <Td>
                    <Flex flexDirection="column" alignItems={'center'}>
                      <Avatar size="sm" name={row.name} />
                      <Text fontWeight="bold" mt={2} fontSize="sm">
                        {row.name}
                      </Text>
                    </Flex>
                  </Td>

                  <Td p={0}>
                    <Text fontSize="sm">{row.desc}</Text>
                  </Td>
                  <Td>
                    <Text fontSize="sm">
                      {row.data?.img ? (
                        <Image
                          boxSize="60px"
                          objectFit="cover"
                          src={row.data.img}
                        />
                      ) : (
                        row.data
                      )}
                    </Text>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
}

export default CustomTable;