import { SingleCard } from '../components/index';
import { Box } from '@chakra-ui/react';
import { productsList } from '../testData/TestData';

function Products() {
  return (
    <Box maxW="1200px" margin="auto" marginTop="50px" padding="0px 25px 25px">
      {productsList.map(product => {
        const { id, name, points } = product;
        return <SingleCard key={id} name={name} points={points} />;
      })}
    </Box>
  );
}

export default Products;
