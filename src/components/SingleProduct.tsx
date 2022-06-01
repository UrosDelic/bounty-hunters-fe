import {
  Box,
  Text,
  Flex,
  ButtonGroup,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Status } from '../pages/Products';

type SingleCardProps = {
  name: string;
  price: number;
  status: Status;
};

function SingleProduct({ name, price, status }: SingleCardProps) {
  const [productStatus, setProductStatus] = useState(status);
  const borderColor = productStatus === Status.INACTIVE ? 'main.gray' : '';
  const backgroundColor = productStatus === Status.INACTIVE ? '' : 'main.green';

  function changeStatus() {
    if (productStatus === Status.ACTIVE) {
      setProductStatus(Status.INACTIVE);
    } else {
      setProductStatus(Status.ACTIVE);
    }
  }

  return (
    <Flex
      direction={['column', 'row', 'row', 'row']}
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid"
      borderColor="main.gray"
      padding="20px 24px"
    >
      <Box>
        <Heading fontSize="18px">{name}</Heading>
        <Text fontSize="14px">{price} points</Text>
      </Box>
      <ButtonGroup>
        <Button
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          onClick={changeStatus}
        >
          Set as {productStatus === Status.INACTIVE ? 'active' : 'inactive'}
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default SingleProduct;
