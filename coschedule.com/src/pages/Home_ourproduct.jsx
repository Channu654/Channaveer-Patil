import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

const Home_ourproduct = () => {
  return (
    <Box py={10}>
      <VStack spacing={2} textAlign='center'>
        <Heading as='h1' fontSize='4xl'>
          Our Products
        </Heading>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box width={'400px'} height={'200px'}>
            <Box height='90px' background={'rgb(247,172,141)'}></Box>
            <Heading fontWeight='500' fontSize='2xl'>
              Marketing Calender
            </Heading>
            <VStack justifyContent='center'>
              <Text fontSize='sm' fontWeight='600'>
                A calendar that helps you see, schedule, and share your
                marketing.
              </Text>
            </VStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            px={4}
            width={'400px'}
            borderBottomRadius={'3xl'}>
            <List spacing={4} textAlign='start' px={15}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                See everything together in one place
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Share your progress with higher-ups
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Show what your marketing is doing.
              </ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button
                w='full'
                colorScheme='red'
                variant='outline'
                background={'rgb(167,143,222)'}>
                Explore more
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box width={'400px'} height={'200px'}>
            <Box height='90px' background={'rgb(221,151,184)'}></Box>
            <Heading fontWeight='500' fontSize='2xl'>
              Marketing Suite
            </Heading>
            <VStack justifyContent='center'>
              <Text fontSize='sm' fontWeight='600'>
                A family of agile marketing products to coordinate your team,
                projects, and process.
              </Text>
            </VStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            px={4}
            width={'400px'}
            borderBottomRadius={'3xl'}>
            <List spacing={4} textAlign='start' px={15}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Manage marketing requests
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Eliminate content bottlenecks
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Maximize resources to increase output{' '}
              </ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button
                w='full'
                colorScheme='red'
                variant='outline'
                background={'rgb(167,143,222)'}>
                Explore more
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
      <HStack spacing={2}>
        <PriceWrapper>
          <Box width={'400px'} height={'200px'}>
            <Box height='90px' background={'rgb(119,157,226)'}></Box>
            <Heading fontWeight='500' fontSize='2xl'>
              Headline Studio
            </Heading>
            <VStack justifyContent='center'>
              <Text fontSize='sm' fontWeight='600'>
                Write better headlines that will boost your traffic.
              </Text>
            </VStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            px={4}
            width={'400px'}
            borderBottomRadius={'3xl'}>
            <List spacing={4} textAlign='start' px={15}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Score your headlines based on proven data
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Improve headlines with smart suggestions
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Find the high-scoring words instantly
              </ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button
                w='full'
                colorScheme='red'
                variant='outline'
                background={'rgb(167,143,222)'}>
                Explore more
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box width={'400px'} height={'200px'}>
            <Box height='90px' background={'rgb(167,143,222)'}></Box>
            <Heading fontWeight='500' fontSize='2xl'>
              Actionable Marketing Institute
            </Heading>
            <VStack justifyContent='center'>
              <Text fontSize='sm' fontWeight='600'>
                Develop new marketing skills in 30 minutes (or less).
              </Text>
            </VStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            px={4}
            width={'400px'}
            borderBottomRadius={'3xl'}>
            <List spacing={4} textAlign='start' px={15}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Improve your marketing with fluff-free training
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Spend less time learning & more time doing
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color='green.500' />
                Learn from industry pros you trust
              </ListItem>
            </List>
            <Box w='80%' pt={7}>
              <Button
                w='full'
                colorScheme='red'
                variant='outline'
                background={'rgb(167,143,222)'}>
                Explore more
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </HStack>
    </Box>
  );
};

export default Home_ourproduct;
