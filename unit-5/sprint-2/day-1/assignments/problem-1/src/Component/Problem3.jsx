import { Box, Flex, Grid, GridItem, Square, Text } from '@chakra-ui/react';

const Problem3 = () => {
  return (
    <Box border={'1px solid red'} m='5px 0px'>
      <Text fontWeight={'bold'} fontSize='19' textAlign={'center'}>
        Layout 3
      </Text>
      <Box p='4'>
        <Box flex='8'>
          <Text textAlign='center'></Text>
        </Box>
        <Box flex='8'>
          <Text textAlign='center'></Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Problem3;
