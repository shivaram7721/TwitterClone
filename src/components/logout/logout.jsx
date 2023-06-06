import styles from "./logout.module.css";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

export function Logout() {

  const loginName = JSON.parse(localStorage.getItem('loginName'))
  const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    localStorage.setItem('isLogin', JSON.stringify(false));
    navigate('/login')
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.imgOutContainer}>
        <img
          className={styles.imgOut}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="pic"
          onClick={handleLogout}
        />
        <div className={styles.userContainer}>
          <span className={styles.userName}>{loginName}</span>
          <span className={styles.userMention}>@{loginName}</span>
        </div>
      </div>
      <div className={styles.dotsIcon}>
        {/* <BiDotsHorizontalRounded style={{ color: "white" }} /> */}
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <BiDotsHorizontalRounded style={{ color: "white" }} />
      </Button>
      <Menu
      className={styles.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className={styles.menuItem} >Add an existing account</MenuItem>
        <MenuItem className={styles.menuItem} onClick={handleLogout}>Logout @{loginName}</MenuItem>
      </Menu>
      </div>
    </div>
  );
}