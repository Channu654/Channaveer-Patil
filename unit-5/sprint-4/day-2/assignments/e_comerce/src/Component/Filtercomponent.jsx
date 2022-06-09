import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Products/Action';

const Filtercomponent = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const dispatch = useDispatch();
  const [categoryvalues, setCategorvalues] = useState(
    searchParams.getAll('category') || []
  );

  const catagoryHandler = (values) => {
    setCategorvalues(values);
  };

  //using SearchParams changing url
  useEffect(() => {
    setSearchparams({ category: categoryvalues }, { replace: true });
    //using searchParams filtering data
    let params = {
      category: searchParams.getAll('category'),
    };
    dispatch(fetchData(params));
  }, [categoryvalues, setSearchparams, searchParams, dispatch]);

  return (
    <Box>
      <Box display={{ base: 'none', md: 'block' }} p='1rem 2rem'>
        <Text fontSize='2xl'>Filter</Text>
        <Text>Category</Text>
        <CheckboxGroup
          colorScheme='green'
          defaultValue={categoryvalues}
          onChange={catagoryHandler}>
          <VStack alignItems={'baseline'}>
            <Checkbox value="men's clothing">Mens Clothes</Checkbox>
            <Checkbox value="women's clothing">Women's Clothes</Checkbox>
            <Checkbox value='bags'>bags</Checkbox>
            <Checkbox value='jewelery'>Jewelery</Checkbox>
            <Checkbox value='electronics'>Electronics</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{ base: 'block', md: 'none' }} p='0rem 2rem'>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme='blue'>
            MenuItem
          </MenuButton>
          <MenuList minWidth='240px'>
            <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
              <MenuItemOption value='asc'>Ascending</MenuItemOption>
              <MenuItemOption value='desc'>Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title='Country' type='checkbox'>
              <MenuItemOption value='email'>Email</MenuItemOption>
              <MenuItemOption value='phone'>Phone</MenuItemOption>
              <MenuItemOption value='country'>Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Filtercomponent;
