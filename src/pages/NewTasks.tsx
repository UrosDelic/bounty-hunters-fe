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
  Avatar,
  Skeleton

} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import { Search2Icon } from '@chakra-ui/icons'
import StyledTable from '../components/core/StyledTable'
import TableRow from '../components/core/HorizontalCard'


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
const backgrounds = [
  "url('/bg/bg1.png')",
  "url('/bg/bg2.png')",
  "url('/bg/bg3.png')",
  "url('/bg/bg4.png')",
  "url('/bg/bg5.png')",
];
const avatars = [
  'https://bit.ly/dan-abramov',
  'https://bit.ly/kent-c-dodds',
  'https://bit.ly/ryan-florence',
  'https://bit.ly/prosper-baba',
  'https://bit.ly/code-beast',
];


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



          <GridItem colSpan={2} width={{ base: '80%', md: '60%' }} m='auto' >

            <StyledTable
              loading={loading}
              title={'Check out New Tasks!'}
              type={'table-row'}
            >
              {/* {data.map((task, key) => (
                <TableRow bg={backgrounds[key]} loading={false}>
                  <Flex alignItems='center'>
                    <Avatar size="lg" src={avatars[key]} m={2} />


                    <Text as="sup" textAlign='start' fontSize="xs" >
                      {task.posted_at} : 20:00
                    </Text>

                  </Flex>
                  <Text>{task.title}</Text>
                  <Flex flexDirection='column'>
                    <Text my={3} fontSize="sm" as="sup">
                      <FontAwesomeIcon icon={faCalendarAlt} />{' '}{task.deadline}
                    </Text>
                    <Text my={3} fontSize="sm" as="sup">
                      <FontAwesomeIcon icon={faBullseye} />{task.points}
                    </Text>
                  </Flex>
                </TableRow>
              ))} */}
            </StyledTable>


          </GridItem>

        </Grid>

      </Box>

    </>
  )
}

export default NewTasks