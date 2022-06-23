import { Flex, Text, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { observer } from 'mobx-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}: PaginationProps) {
  return (
    <Flex alignItems="center" padding="10px 22px">
      <IconButton
        size="xs"
        color="transperent"
        aria-label="Left"
        icon={<ChevronLeftIcon />}
        variant="outlined"
        border="1px solid white"
        _focus={{ outline: 'none' }}
        onClick={onPrev}
      />
      <Text margin="0px 15px">{`${currentPage} of ${totalPages}`}</Text>
      <IconButton
        size="xs"
        color="transperent"
        aria-label="Right"
        icon={<ChevronRightIcon />}
        variant="outlined"
        border="1px solid white"
        _focus={{ outline: 'none' }}
        onClick={onNext}
      />
    </Flex>
  );
}

export default observer(Pagination);
