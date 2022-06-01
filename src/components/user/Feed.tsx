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
} from '@chakra-ui/react';
import CustomTable from '../core/CustomTable';

import shirt from '../../img/shirt.jpg';
import sticker from '../../img/sticker.jpg';
import mug from '../../img/mug.jpg';


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

const Feed = () => {
  return (
    <>
      <Box m="auto" p={{ base: 0, md: 5 }}>
        <SimpleGrid gap={8} p={6}>
          <Flex alignItems={'center'}>
            <Avatar src="https://bit.ly/ryan-florence" mx={2} size="lg" />
            <Heading as={'h3'} mt={2} ml={2} fontWeight={'bold'}>
              Welcome Back, User!
            </Heading>
          </Flex>

          <GridItem>
            <Grid templateColumns={{ base: '90vw', xl: '60% 40%' }} gap={8}>

              <GridItem>
                <CustomTable data={latestOrders} title="Latest Orders!" />
              </GridItem>
              <GridItem>
                <CustomTable data={taskCreated} title="New Task Created" />
              </GridItem>
              <GridItem>
                <CustomTable data={taskComplete} title="Completed Tasks" />
              </GridItem>
            </Grid>
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Feed;
