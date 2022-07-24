import React from 'react';

import {
  Menu,
  Box,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons';

const Hamber = () => {
  return (
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} size={'50px'} />
        <MenuList bg={'1px solid black'}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Shop By Category</MenuItem>
          <MenuItem>My List</MenuItem>
          <MenuItem>jioMart wallet</MenuItem>
          <MenuItem>jioMart Gift Store</MenuItem>
          <MenuItem>jioMart Gift Card</MenuItem>
          <MenuItem>Go Green with JioMart</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export { Hamber };
