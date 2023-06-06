import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";

import { popupState } from "../../atoms/atoms";
import { useRecoilState } from "recoil";

const optionsPopup = [
  "Not interested in this",
  "This trend is harmful or spammy",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      sx={{
        height: "20rem",
        width: "20rem",
        position: "absolute",
        marginLeft: "70%",
        marginTop: "15%",
      }}
      onClose={handleClose}
      open={open}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "grey",
        }}
      >
        {optionsPopup.map((popOpt, i) => (
          <ListItem key={i} disableGutters>
            <ListItemButton
              onClick={() => handleListItemClick(popOpt)}
              key={popOpt}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  ☹️
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={popOpt} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = useRecoilState(popupState);
  const [selectedValue, setSelectedValue] = useState(optionsPopup[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        ...
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
