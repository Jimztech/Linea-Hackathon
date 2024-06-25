import React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';
import CollectionsIcon from '@mui/icons-material/Collections';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    navigate(newValue);
  };

  return (
    <BottomNavigation onChange={handleChange}>
      <BottomNavigationAction label="Messages" value="/messages" icon={<ChatIcon />} />
      <BottomNavigationAction label="Threads" value="/threads" icon={<ForumIcon />} />
      <BottomNavigationAction label="NFT" value="/nft" icon={<CollectionsIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
