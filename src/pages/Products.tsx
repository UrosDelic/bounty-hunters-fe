import {
  SingleProduct,
  SpinnerLoader,
  SearchByInput,
  AddProductModal,
} from '../components/index';
import {
  Box,
  Grid,
  GridItem,
  Text,
  Flex,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductsStore from '../stores/products';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

function Products() {
  const { loading, success, products, hasMore } = ProductsStore;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    ProductsStore.getProducts();
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <>
      {success && (
        <Box
          maxW="1200px"
          margin="auto"
          marginTop="50px"
          padding="0px 25px 25px"
          width="fit-content"
        >
          <Flex
            justifyContent="space-between"
            direction={['column', 'column', 'row']}
            marginBottom="50px"
          >
            <Box flex="1" marginBottom={['15px', '15px', '0px']}>
              <SearchByInput />
            </Box>
            <Button
              backgroundColor="green.500"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="180px"
              onClick={onOpen}
            >
              <AddIcon />
              <Text marginLeft="5px">Add new product</Text>
            </Button>
          </Flex>
          <InfiniteScroll
            dataLength={products.length}
            next={() => ProductsStore.loadMoreProducts()}
            hasMore={hasMore}
            loader={<Text margin="15px 0px 0px 15px">loading...</Text>}
          >
            <Grid
              p={2}
              templateColumns={[
                'repeat(1, minmax(260px, 400px))',
                'repeat(1, minmax(300px, 400px))',
                'repeat(2, minmax(240px, 360px))',
                'repeat(3, minmax(240px, 360px))',
              ]}
              gap={6}
              width="fit-content"
              margin="auto"
            >
              {products.map(product => {
                const { id, name, price, status, description, productMedia } =
                  product;
                return (
                  <GridItem key={id}>
                    <SingleProduct
                      id={id}
                      name={name}
                      price={price}
                      status={status}
                      description={description}
                      image={productMedia[productMedia.length - 1]?.url}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </InfiniteScroll>
        </Box>
      )}
      <AddProductModal
        isOpen={isOpen}
        onClose={onClose}
        name="Add new product"
      />
    </>
  );
}

export default observer(Products);
