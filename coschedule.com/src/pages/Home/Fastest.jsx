import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  HStack,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
const Fastest = () => {
  return (
    <Box>
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Heading fontSize={'6xl'} fontFamily={'body'}>
            Gartner
          </Heading>
          <Text as='h6'>Magic Quaradrant</Text>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            The Gartner Magic Quadrant™ for Content Marketing Platforms 2022
          </Text>
        </Box>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Heading
            fontSize={'6xl'}
            fontFamily={'body'}
            color={'dark.500'}
            width='250px'>
            Inc .5000
          </Heading>
          <Text as='h6'>Magic Quaradrant</Text>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            One Of The Fastest-Growing Marketing Platforms 3 Years In a Row
          </Text>
        </Box>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <img
            src='	https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=96&q=75'
            alt=''
          />
          <Text fontWeight={600} color={'gray.500'} mb={4} width='200px'>
            Awarded High Performer in 7 Product Categories
          </Text>
        </Box>
      </Center>
      <HStack>
        <Box
         
          width={'full'}
          height={'200px'}
          background={'rgb(247,158,117)'}>
          <Heading color={'rgb(255,255,255)'} fontSize={"30px"}>
        
            Organize all of your marketing in one place
          </Heading>
          <Button marginY={'100px'}>Get Started</Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default Fastest;
