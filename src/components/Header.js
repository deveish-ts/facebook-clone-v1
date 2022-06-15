import React, { useContext } from 'react';
import './Header.css';
import logo from '../imgs/Facebook-logo.png';
import Context from './Context';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineFlag,
  AiOutlineAppstore,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import {
  MdOutlineSubscriptions,
  MdOutlineForum,
  MdOutlineNotifications,
  MdOutlineExpandMore,
} from 'react-icons/md';

import { GrAddCircle } from 'react-icons/gr';
const Header = () => {
  const ctx = useContext(Context);
  const user = ctx.user;
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img src={logo} alt="Facebook" />
          <div className="header__input">
            <AiOutlineSearch />
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="header__middle">
          <div className="header__option    header__option--active">
            <AiOutlineHome fontSize="30px" />
          </div>
          <div className="header__option">
            <AiOutlineFlag fontSize="30px" />
          </div>
          <div className="header__option">
            <MdOutlineSubscriptions fontSize="30px" />
          </div>
          <div className="header__option">
            <AiOutlineAppstore fontSize="30px" />
          </div>
          <div className="header__option">
            <AiOutlineUsergroupAdd fontSize="30px" />
          </div>
        </div>

        <div className="header__right">
          <div className="header__info">
            <Stack direction="row" spacing={0}>
              <Avatar src={user.photoURL} />
            </Stack>
            <h4>{user.displayName}</h4>
            <div className="header__iconButton">
              <GrAddCircle fontSize="30px" className="iconButton" />
              <MdOutlineForum fontSize="30px" className="iconButton" />
              <MdOutlineNotifications fontSize="30px" className="iconButton" />
              <MdOutlineExpandMore fontSize="30px" className="iconButton" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
