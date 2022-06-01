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
import StyledCard from './StyledCard'
type TableProps = {
  data : any, 
  title: any, 
}


function CustomTable({ data, title} : TableProps) {
  if (data) {
    return (
      <TableContainer rounded={'xl'} bg="white" boxShadow="dark-lg">
        <Text fontSize="xl" m={2}>
          {title}
        </Text>
        <Table   size="sm">
          <Tbody>
            {data.map((row:any) => {
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

  return <Text>No Data to display</Text>
   
}

export default CustomTable;
