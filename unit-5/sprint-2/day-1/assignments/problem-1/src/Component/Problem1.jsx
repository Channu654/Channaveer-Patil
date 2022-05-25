import { Box, Flex, Grid, GridItem, Square, Text } from '@chakra-ui/react';

const Problem1 = () => {
  return (
    <Box border={'1px solid red'} m='5px 0px'>
      <Text fontWeight={'bold'} fontSize='19' textAlign={'center'}>
        Layout 1
      </Text>
      <Box display='flex' p='4'>
        <Flex direction='column'>
          <Text textAlign='center'>MOBILE</Text>
          <Flex alignItems='center' gap='2' direction='column' flex={2}>
            <Square bg='#a186bd' size='150px'></Square>
            <Square bg='tomato' size='150px'></Square>
            <Square bg='#6ccff6' size='150px'></Square>
          </Flex>
        </Flex>
        <Box flex='8'>
          <Text textAlign='center'>DESKTOP</Text>

          <Grid
            gap={2}
            templateColumns='repeat(3,1fr)'
            templateRows='repeat(3, 150px)'
            w='70%'
            margin='auto'>
            <GridItem bg='#a186bd' rowSpan='2' colSpan='2' />
            <GridItem bg='tomato' rowSpan='3' />
            <GridItem bg='#6ccff6' colSpan='2' />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Problem1;
