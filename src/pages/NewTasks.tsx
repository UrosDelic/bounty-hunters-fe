import React, { useState, useEffect } from 'react'
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  InputGroup,
  InputRightElement,
  Input,
  Tr,
  Td,
  Skeleton

} from '@chakra-ui/react';

import { Search2Icon } from '@chakra-ui/icons'

import NewCustomTable from '../components/core/NewCustomTable'
const data = [
  {
    title: "Write Blog Post",
    points: 30,
    posted_at: '30/03/2022',
    deadline: '14/04/2022',
    bg: 'blue.300'
  },
  {
    title: "Interview",
    points: 10,
    posted_at: '30/03/2022',
    deadline: '14/04/2022',
    bg: 'purple.200'
  }
  , {
    title: "Do this, do that",
    points: 5,
    posted_at: '30/03/2022',
    deadline: '14/04/2022',
    bg: 'blue.200'
  },
  {
    title: "Something New",
    points: 25,
    posted_at: '15/02/2022',
    deadline: '14/04/2022',
    bg: 'purple.100'
  },
  {
    title: "Do this, do that",
    points: 15,
    posted_at: '30/03/2022',
    deadline: '14/04/2022',
    bg: 'blue'
  }
]
const columns = [
  {
    name: 'Title',
  },
  {
    name: 'Points',
  },
  {
    name: 'Posted at',
  },
  {
    name: 'Deadline',
  }
]



const NewTasks = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      <Box  >
        <Grid
          templateRows='250px, 1fr, 1fr'
          gap={10}
          p={10}
        >
          <GridItem colSpan={2} >
            <Flex justifyContent='space-between' flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
              <Text fontSize='2xl' mb={{ base: 2, md: 0 }}>
                <b>Search For New Tasks</b>
                <br />
              </Text>

              <Box >

                {loading ? (<Skeleton width='270px' height='50px' my={3} />) :
                  (<InputGroup>
                    <InputRightElement
                      pointerEvents='none'
                      children={<Search2Icon mt={2} color='gray.300' />}
                    />
                    <Input variant='outline' size='lg' placeholder='Search Tasks' />
                  </InputGroup>)
                }
              </Box>
            </Flex>
          </GridItem>


          <GridItem colSpan={2} width={{ base: '80vw', md: 'full' }} m='auto' >

            <NewCustomTable columns={columns} loading={loading}>

              {data.map((d: any) => (
                <Tr>
                  <Td>
                    {d.title}
                  </Td>
                  <Td>{d.points}</Td>
                  <Td>{d.posted_at}</Td>
                  <Td>{d.deadline}</Td>
                </Tr>
              ))}
            </NewCustomTable>


          </GridItem>

        </Grid>

      </Box>

    </>
  )
}

export default NewTasks