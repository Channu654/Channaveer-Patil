import React from 'react';
import {
  Box,
  Heading,
  Center,
  Text,
  Stack,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const Pricing = () => {
  return (
    <Box>
      <Box marginLeft={'580px'}>
        <img
          src='https://coschedule.com/img/cos-logo-full-color.svg'
          alt=''
          width={'200px'}
        />
      </Box>{' '}
      <br />
      <Box>
        <Heading as='h3'>Choose Your All-In-One Marketing Calendar</Heading>
        <p>Create your calendar free today. No credit card required.</p>
      </Box>
      <br />
      <br />
      <Box>
        <HStack marginLeft={'280px'}>
          <Card />
          <Card1 />
          <Card2 />
        </HStack>
        <Stack>
          <Card3 />
        </Stack>
      </Box>
      <Center>
        <Box border={'1px solid white'} w={'1000px'} h={'200px'}>
          <HStack w={'100px'} spacing={"50px"}>
            <img
              src='https://coschedule.com/img/testimonials/g2-best-estimated-roi.png'
              alt=''
            />
            <img
              src='https://coschedule.com/img/testimonials/g2-best-estimated-roi.png'
              alt=''
            />
            <img src='https://coschedule.com/img/testimonials/g2-best-estimated-roi.png'  w={"150px"}/>
            <img
              src='	https://coschedule.com/img/testimonials/g2-high-performer.png'
              alt=''
            />
            <img
              src='	https://coschedule.com/img/testimonials/g2-easiest-setup.png'
              alt=''
            />
            <img
              src='	https://coschedule.com/img/testimonials/g2-easiest-setup.png'
              alt=''
            />
            <img
              src='	https://coschedule.com/img/testimonials/g2-easiest-to-do-business-with.png'
              alt=''
            />
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

function Card() {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            FREE
          </Text>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Heading as='h6'>Marketing Calendar</Heading>
          <p>
            The forever-free marketing calendar to see everything in one place.
          </p>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              79
            </Text>
            <Text color={'gray.500'}>per/month</Text>
          </Stack>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'rgb(243,126,93)',
            }}
            _focus={{
              bg: 'green.500',
            }}>
            Get started Free
          </Button>
        </Box>
        <Box>Marketing Calendar Free includes</Box>
        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color='green.400' />
              Personal Project & Task Management
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color='green.400' />
              Unlimited Marketing Projects and Content
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color='green.400' />
              Social Media Publishing Up to 2 Profiles
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color='green.400' />
              Self-Serve Knowledge Base
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color='green.400' />
              Basic Support{' '}
            </ListItem>
          </List>
        </Box>
      </Box>
    </Center>
  );
}

function Card1() {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            FREE
          </Text>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Heading as='h6'>Marketing Calendar</Heading>
          <p>
            The forever-free marketing calendar to see everything in one place.
          </p>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              58
            </Text>
            <Text color={'gray.500'}>/month</Text>
          </Stack>

          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'rgb(243,126,93)',
            }}
            _focus={{
              bg: 'green.500',
            }}>
            Get started Free
          </Button>
          <Box>Marketing Calendar Free includes</Box>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Personal Project & Task Management
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Unlimited Marketing Projects and Content
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Social Media Publishing Up to 2 Profiles
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Self-Serve Knowledge Base
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Basic Support{' '}
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

function Card2() {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            FREE
          </Text>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Heading as='h6'>Marketing Suite</Heading>
          <p>
            A family of agile marketing products that helps you coordinate your
            process, projects, and teams.
          </p>
          <Box>
            <p width='20px'>Let's Talk</p>
          </Box>
          <Button
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'rgb(243,126,93)',
            }}
            _focus={{
              bg: 'green.500',
            }}>
            Contact sales
          </Button>
          <Box>Marketing Calendar Free includes</Box>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Personal Project & Task Management
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Unlimited Marketing Projects and Content
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Social Media Publishing Up to 2 Profiles
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Self-Serve Knowledge Base
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.400' />
                Basic Support{' '}
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

function Card3() {
  return (
    <Center>
      <Stack py={6}>
        <Heading as='h6'>
          See Why 50,000+ Marketing Teams Trust CoSchedulee
        </Heading>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <Center w={'100px'} align={'center'} margin='50px'>
              <img
                src='	https://coschedule.com/img/testimonials/gartner-text.png'
                alt=''
              />
            </Center>
            <Box>
              <p>Gartner Magic Quadrant for Content Marketing Platforms</p>
            </Box>
          </Box>
        </Box>
      </Stack>
      <Stack>
        <HStack>
          <Box
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
              <Center w={'100px'} align={'center'} margin='50px'>
                <img
                  src='	https://coschedule.com/img/testimonials/forbes-badge.png'
                  alt=''
                />
              </Center>
            </Box>
          </Box>
        </HStack>
      </Stack>
    </Center>
  );
}

export default Pricing;
