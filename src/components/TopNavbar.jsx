import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import ProfileImg from '../assets/images/WIN_20220905_06_49_26_Pro.jpg';

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div className="top-navbar m-3">
      <div className="left-bar">
        <div className="github-hamburger" onClick={toggleHamburger}>
          <div className={`bar ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="github-logo">
            <GitHubIcon className="git-icon"/>
        </div>
        <div className="user-name">
            <span className="text-white">Amritgrg1</span>
        </div>
      </div>
      <div className="right-bar">
        <span className="search-icon">
            <SearchIcon className="icon"/>
        </span>
        <span className="unread-icon">
            <MarkAsUnreadOutlinedIcon className="icon"/>
        </span>
        <div className="profile-image">
            <img src={ProfileImg} alt="profile image" className="img-size"/>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
