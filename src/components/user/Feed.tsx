import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Avatar,
  Heading,
  SimpleGrid,
  Flex,
  Container,
  Spacer,
  Alert,

  Stack
} from '@chakra-ui/react';
import CustomTable from '../core/CustomTable';

import shirt from '../../img/shirt.jpg';
import sticker from '../../img/sticker.jpg';
import mug from '../../img/mug.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBullseye, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
const taskComplete = [
  {
    id: 1,
    name: 'Stefan Stevic',
    desc: 'Stefan Stevic just successfully completed the task “Task X” and got 1000 points!',
    date: '10/19/2022',
  },
  {
    id: 2,
    name: 'Mila Stevic',
    desc: 'Stefan Stevic just successfully completed the task “Task X” and got 1000 points!',
    date: '10/19/2022',
  },
  {
    id: 3,
    name: 'Jovan Jokic',
    desc: 'Stefan Stevic just successfully completed the task “Task X” and got 1000 points!',
    date: '10/19/2022',
  },
  {
    id: 4,
    name: 'Milan Stevic',
    desc: 'Stefan Stevic just successfully completed the task “Task X” and got 1000 points!',
    date: '10/19/2022',
  },
  {
    id: 5,
    name: 'Milan Stevic',
    desc: 'Stefan Stevic just successfully completed the task “Task X” and got 1000 points!',
    date: '10/19/2022',
  },
];
const latestOrders = [
  {
    id: 1,
    name: 'Stefan Stevic',
    desc: 'just ordered a Quantox Sticker!',
    data: { img: mug },
  },
  {
    id: 2,
    name: 'Mila Stevic',
    desc: 'just ordered a Quantox Sticker!',
    data: { img: sticker },
  },
  {
    id: 3,
    name: 'Jovan Jokic',
    desc: 'just ordered a Quantox Mug!',
    data: { img: mug },
  },
  {
    id: 4,
    name: 'Milan Stevic',
    desc: 'just ordered a Quantox Shirt!',
    data: { img: shirt },
  },
  {
    id: 5,
    name: 'Milan Stevic',
    desc: 'just ordered a Quantox Shirt!',
    data: { img: shirt },
  },
];

const taskCreated = [
  {
    id: 1,
    name: 'Admin',
    desc: 'New Task "Writte Article"',
    data: '10/19/2022',
  },
  {
    id: 2,
    name: 'Admin',
    desc: 'New Task "Writte Article"',
    data: '10/19/2022',
  },
  {
    id: 3,
    name: 'Admin',
    desc: 'New Task "Writte Article"',
    data: '10/19/2022',
  },
  {
    id: 4,
    name: 'Admin',
    desc: 'New Task "Writte Article"',
    data: '10/19/2022',
  },
  {
    id: 5,
    name: 'Admin',
    desc: 'New Task "Writte Article"',
    data: '10/19/2022',
  },
];
const notification = [
  {
    id: 1,
    title: 'You have received 100 points for task XY!',
  },
  {
    id: 2,
    title: 'Your order for new Mug is processed!',
  },
  {
    id: 3,
    title: 'Your order for new Shirt is processed!',
  },
  {
    id: 4,
    title: 'Your order for new Mug is processed!',
  },
  {
    id: 5,
    title: 'New Task assigned to you!',
  },
  {
    id: 6,
    title: 'Your order for new Mug is processed!',
  },
  {
    id: 7,
    title: 'New Login at 09:00!',
  }, {
    id: 8,
    title: 'Your order for new Mug is processed!',
  }, {
    id: 9,
    title: 'New Login at 12:00!',
  }, {
    id: 10,
    title: 'New Task assigned to you!',
  }, {
    id: 11,
    title: 'Your order for new Mug is processed!',
  }, {
    id: 13,
    title: 'New Task assigned to you!',
  }, {
    id: 14,
    title: 'Your order for new Mug is processed!',
  }, {
    id: 15,
    title: 'New Task assigned to you!',
  }, {
    id: 16,
    title: 'Your order for new Mug is processed!',
  }, {
    id: 17,
    title: 'New Login at 02:00!',
  }, {
    id: 11,
    title: 'Your order for new Mug is processed!',
  }, {
    id: 18,
    title: 'New Task assigned to you!',
  }, {
    id: 19,
    title: 'New Login at 19:00!',
  }, {
    id: 20,
    title: 'Your order for new Mug is processed!',
  }
]
const Feed = () => {
  return (
    <>
      <Box >
        <Grid templateRows={{ base: 'repeat(2, 1fr)', md: '1fr' }} templateColumns={{ base: '1fr', md: '2fr 1fr' }}>
          <GridItem>
            <Grid templateRows={'repeat(3, 1fr)'} p={5}>
              <GridItem colSpan={2} width={{ base: '90vw', md: 'full' }} > <CustomTable data={taskComplete} /></GridItem>
              <GridItem colSpan={2} width={{ base: '90vw', md: 'full' }} >  <CustomTable data={taskCreated} /></GridItem>
              <GridItem colSpan={2} width={{ base: '90vw', md: 'full' }}  >  <CustomTable data={latestOrders} /></GridItem>
            </Grid>
          </GridItem>

          <GridItem bg='gray.50'>
            <Flex flexDirection='column' justifyContent='space-between'   >
              <Box
                minH={'30vh'} display='flex' alignItems='center' flexDirection='column' mt={10} >
                <Text textAlign={'center'} fontSize='5xl' mb={4}>Welcome Back, User</Text>
                <Avatar size='2xl' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Box display='flex' justifyContent='space-between' mt={10} mb={{ base: 5, md: 0 }}>
                  <Text fontSize='xl' mx={10} textAlign={'center'}> Points Available: <b>500</b> <FontAwesomeIcon icon={faBullseye} /></Text>
                  <Text fontSize='xl' mx={10} textAlign={'center'}>Pending Bounties: <b>5</b> <FontAwesomeIcon icon={faBoxOpen} /> </Text>
                </Box>
              </Box>


              <Box overflow='auto' borderTop='1px solid lightgray ' maxH={{ base: 600, md: 600 }} w='90%' mx='auto' mt={{ base: 10, md: 10 }} >
                {notification.map((n: any) => (
                  <Stack>
                    <Alert bg='purple.200' m={2} w='600' boxShadow='lg' key={n.id} px={8} rounded="md">
                      <FontAwesomeIcon icon={faBell} fontSize={20} />
                      <Text fontSize='xl' mx={4}>{n.title}</Text>
                    </Alert>
                  </Stack>
                ))}
              </Box>

            </Flex>



          </GridItem>
        </Grid>

      </Box >
    </>
  );
};

export default Feed;
