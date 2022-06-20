import { Box, Text, Flex, Skeleton, IconButton, } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

type TableProps = {
  type: any,
  children: any,
  loading: Boolean,
  title: String
};
const StyledTable = ({ type, children, loading, title }: TableProps) => {
  return (
    <>
      <Flex justifyContent='space-between' flexWrap='wrap' alignItems='center' rounded='2xl' p={4} >
        <Text fontWeight='bold' fontSize='3xl'>{title}</Text>
        <Box display='flex' alignItems='center'>
          <Text fontSize='xs'>1-5 of 13 records</Text>
          <IconButton
            color='transperent'
            aria-label='Left'
            icon={<ChevronLeftIcon />}
            variant='outlined'
          />
          <IconButton

            color='transperent'
            aria-label='Right'
            icon={<ChevronRightIcon />}
            variant='outlined'
          />

        </Box>

      </Flex>
      {loading ? type === 'table-row' ? [...Array(5)].map((_, i) => (<Skeleton width='full' height={{ base: 250, md: 120 }} my={8} />)) :
        [...Array(5)].map((_, i) => (<Skeleton width='330px' height='260px' mx={'auto'} my={8} />))
        : <Box pb={1}>
          {children}
        </Box>}
    </>
  )



};

export default StyledTable;
