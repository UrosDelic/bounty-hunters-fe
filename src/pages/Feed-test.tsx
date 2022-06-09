import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Avatar,
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Image,
  AlertDescription,
  Alert,
} from '@chakra-ui/react';
import StyledTable from '../components/core/StyledTable';
import TableRow from '../components/core/HorizontalCard';
import StyledCard from '../components/core/StyledCard';
import sticker from '../img/sticker.jpg';
import mug from '../img/mug.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faBullseye,
  faBoxOpen,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
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
    desc: 'just ordered a Quantox mug!',
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
    desc: 'just ordered a Quantox mug!',
    data: { img: mug },
  },
  {
    id: 5,
    name: 'Milan Stevic',
    desc: 'just ordered a Quantox mug!',
    data: { img: mug },
  },
];

const newTasks = [
  {
    id: 1,
    name: 'Admin',
    desc: 'New Task "Writte Article on React"',
    data: '10/19/2022',
  },
  {
    id: 2,
    name: 'Admin',
    desc: 'New Task "Writte Article on Angular"',
    data: '10/19/2022',
  },
  {
    id: 3,
    name: 'Admin',
    desc: 'New Task "Writte Article on Node"',
    data: '10/19/2022',
  },
  {
    id: 4,
    name: 'Admin',
    desc: 'New Task "Writte Article on PHP"',
    data: '10/19/2022',
  },
  {
    id: 5,
    name: 'Admin',
    desc: 'New Task "Writte Article about Event XYZ"',
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
  },
  {
    id: 8,
    title: 'Your order for new Mug is processed!',
  },
  {
    id: 9,
    title: 'New Login at 12:00!',
  },
  {
    id: 10,
    title: 'New Task assigned to you!',
  },
  {
    id: 11,
    title: 'Your order for new Mug is processed!',
  },
  {
    id: 13,
    title: 'New Task assigned to you!',
  },
  {
    id: 14,
    title: 'Your order for new Mug is processed!',
  },
  {
    id: 15,
    title: 'New Task assigned to you!',
  },
  {
    id: 16,
    title: 'Your order for new Mug is processed!',
  },
  {
    id: 17,
    title: 'New Login at 02:00!',
  },
  {
    id: 11,
    title: 'Your order for new Mug is processed!',
  },
  {
    id: 18,
    title: 'New Task assigned to you!',
  },
  {
    id: 19,
    title: 'New Login at 19:00!',
  },
  {
    id: 20,
    title: 'Your order for new Mug is processed!',
  },
];

const avatars = [
  'https://bit.ly/dan-abramov',
  'https://bit.ly/kent-c-dodds',
  'https://bit.ly/ryan-florence',
  'https://bit.ly/prosper-baba',
  'https://bit.ly/code-beast',
];
const backgrounds = [
  "url('/bg/bg1.png')",
  "url('/bg/bg2.png')",
  "url('/bg/bg3.png')",
  "url('/bg/bg4.png')",
  "url('/bg/bg5.png')",
];
const Feed = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <>
      <Grid
        templateRows={{ base: 'repeat(2, 1fr)', md: '1fr' }}
        templateColumns={{ base: '1fr', md: '  0.5fr 1fr 0.5fr' }}
      >
        <GridItem
          overflow="auto"
          bgGradient="linear(to-r, purple.300, purple.600)"
          color="white"
        >
          <Box p={4} maxH={{ base: 400, md: '100vh' }}>
            <StyledTable
              loading={loading}
              title={'Check out Latest Orders!'}
              type={'column'}
            >
              {latestOrders.map((order, key) => (
                <StyledCard width={300} height={250} direction='column'>
                  <Box
                    display="flex"
                    flexDirection={'column'}
                    alignItems="center"
                    backgroundImage={backgrounds[key]}
                    bgPosition="center"
                    textAlign="center"
                    w="full"
                    minH={'70%'}
                    py={5}
                  >
                    <Avatar size="lg" src={avatars[key]} />
                    <Text fontSize="md">
                      {order.name}
                      <Text fontSize="sm">{order.desc}</Text>
                    </Text>
                  </Box>
                  <Image
                    src={order.data.img}
                    objectFit="cover"
                    maxW={200}
                    mt={-10}
                  />
                </StyledCard>
              ))}
            </StyledTable>
          </Box>
        </GridItem>

        <GridItem boxShadow="2xl">
          <Box
            w={{ base: '100%', md: 'auto' }}
            m={{ base: 0, md: 4 }}
            mt={{ base: 8, md: 0 }}
          >
            <Tabs mt={9} mx={2} variant="soft-rounded" colorScheme="purple">
              <TabList>
                <Tab onClick={() => setLoading(true)}>New Tasks</Tab>
                <Tab>Tasks Completed</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={2}>
                  <Box width={{ base: '90vw', md: 'full' }}>
                    <StyledTable
                      type={'table-row'}
                      loading={loading}
                      title={'Check out New Tasks!'}
                    >
                      {/* {newTasks.map((task, key) => (
                        <TableRow bg={backgrounds[key]} loading={false}>
                          <Flex
                            flexDirection={{ base: 'column', md: 'row' }}
                            alignItems="center"
                          >
                            <Flex
                              flexDirection={{ base: 'column', md: 'row' }}
                              alignItems="center"
                            >
                              <Avatar size="lg" src={avatars[key]} m={2} />
                              <Box textAlign={{ base: 'center', md: 'start' }}>
                                <Text fontSize="md">{task.name}</Text>
                                <Text fontSize="xs" as="sub">
                                  {task.data} : 20:00
                                </Text>
                              </Box>
                            </Flex>
                          </Flex>
                          <Text fontSize="md" mt={2}>
                            {task.desc}
                          </Text>
                          <Flex flexDirection="column" textAlign='center'>
                            <Text mt={4} fontSize="xs" as="sub">
                              <FontAwesomeIcon icon={faCalendarAlt} /> Deadline:{' '}
                              {task.data}
                            </Text>
                            <Text mt={3} fontSize="xs" as="sub">
                              <FontAwesomeIcon icon={faBullseye} /> Points: 10
                            </Text>
                          </Flex>
                        </TableRow>
                      ))} */}
                    </StyledTable>
                  </Box>
                </TabPanel>
                <TabPanel p={2}>
                  <GridItem colSpan={2} width={{ base: '90vw', md: 'full' }}>
                    <StyledTable
                      loading={loading}
                      title={'Check out Completed Tasks!'}
                      type={'table-row'}
                    >
                      {/* {taskComplete.map((task, key) => (
                        <TableRow bg={backgrounds[key]} loading={false}>
                          <Flex
                            flexDirection={{ base: 'column', md: 'row' }}
                            alignItems="center"
                          >
                            <Avatar size="lg" src={avatars[key]} m={2} />
                            <Box>
                              <Text fontSize="lg" textAlign="start">
                                {task.name}
                              </Text>
                              <Text as="sup" textAlign="start" fontSize="xs">
                                {task.date} : 20:00
                              </Text>
                            </Box>
                          </Flex>
                          <Text mx={6} textAlign="center">
                            {task.desc}
                          </Text>
                        </TableRow>
                      ))} */}
                    </StyledTable>
                  </GridItem>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </GridItem>

        <GridItem
          boxShadow="2xl"
          backgroundImage={backgrounds[3]}
          bgPosition="center"
          color="white"
        >
          <Flex flexDirection="column" justifyContent="space-between">
            <Box
              minH={'30vh'}
              display="flex"
              alignItems="center"
              flexDirection="column"
              mt={8}
            >
              <Text textAlign={'center'} fontSize="3xl" mb={4}>
                Welcome back, User
              </Text>
              <Avatar
                size="xl"
                name="Kent Dodds"
                src="https://bit.ly/dan-abramov"
              />
              <Box
                display="flex"
                justifyContent="space-between"
                mt={10}
                mb={{ base: 5, md: 0 }}
              >
                <Text fontSize="md" mx={6} textAlign={'center'}>
                  Available Points
                  <Text fontSize="xl">
                    520 <FontAwesomeIcon icon={faBullseye} />
                  </Text>
                </Text>
                <Text fontSize="md" mx={6} textAlign={'center'}>
                  Pending Bounties
                  <Text fontSize="xl" px={2}>
                    5 <FontAwesomeIcon icon={faBoxOpen} />
                  </Text>
                </Text>
              </Box>
            </Box>

            <Box
              overflow="auto"
              maxH={{ base: 400, md: 550 }}
              p={4}
              w="90%"
              mx="auto"
              mt={2}
            //bg='gray.50'
            >
              {notification.map((n: any) => (
                <Alert bg="purple.100" my={2} color="purple.500" rounded="md">
                  <AlertDescription mr={2}>
                    <FontAwesomeIcon icon={faBell} fontSize={15} /> {n.title}
                  </AlertDescription>
                </Alert>
              ))}
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default Feed;
