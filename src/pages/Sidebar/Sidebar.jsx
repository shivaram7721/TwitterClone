import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import { TweetArea } from "../../components/tweetArea/tweetArea";
import Dialog from '@mui/material/Dialog';
import { Logout } from "../../components/logout/logout";
// import TextField from '@mui/material/TextField';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import FormDialog from "../../components/dialog/dialog";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <div className="iconss">
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile"  />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" onClick={handleClickOpen} className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <Dialog className="dialog" open={open} onClose={handleClose}>
        <DialogTitle className="dialogTitle">Subscribe</DialogTitle>
        <DialogContent className="dialogContent">
          <DialogContentText className="dialogContentText">
            {/* To subscribe to this website, please enter your email address here. We
            will send updates occasionally. */}
            <TweetArea />
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        {/* <DialogActions className="dialogActions">
          <Button onClick={handleClose}>Tweet</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>

      <div>
        <Logout />
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
