import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Square,
  Text,
} from '@chakra-ui/react';

const Problem2 = () => {
  return (
    <Box border={'1px solid red'} m='5px 0px'>
      <Text fontWeight={'bold'} fontSize='19' textAlign={'center'}>
        Layout 2
      </Text>
      <Flex p='4' gap='1'>
        <Box flex='8'>
          <Text textAlign='center'>DESKTOP</Text>
          <Flex justifyContent='center' color='white' gap='2'>
            <Square flex='2' bg='#0172bb' size='150px' h='400px'>
              NAV
            </Square>
            <Square flex='6' bg='#f8942d' size='150px' h='400px'>
              CONTENT
            </Square>
            <Square flex='2' bg='red' size='150px' h='400px'>
              WIDGET
            </Square>
          </Flex>
        </Box>
        <Box flex='2'>
          <Text textAlign='center'>MOBILE</Text>
          <Flex
            alignItems='center'
            direction='column'
            justifyContent='center'
            color='white'
            gap='2'>
            <Square bg='#0172bb' size='150px' h='128px'>
              NAV
            </Square>
            <Square bg='red' size='150px' h='128px'>
              WIDGET
            </Square>
            <Square bg='#f8942d' size='150px' h='128px'>
              CONTENT
            </Square>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Problem2;
