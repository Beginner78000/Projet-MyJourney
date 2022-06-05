import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";
import { Fade, Tooltip } from "@mui/material";

import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import SearchBar from "../SearchBar/SearchBar";

const Button = ({}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",

    boxShadow: 24,
  };

  return (
    <div className="header">
      <div className="header--button">
        <Tooltip
          arrow
          placement="top"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          sx={{ m: 1 }}
          title="Vous êtes en panne d'inspiration pour trouver votre prochaine destination pour vos vacances ? Cliquez-ici "
        >
          <Link to="/quiz" className="header--button--destination">
            Inspiration
          </Link>
        </Tooltip>
        <a className="header--button--inspiration" onClick={handleOpen}>
          Destination
        </a>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SearchBar />
          </Box>
        </Modal>
        <Link to="/about" className="header--button--forum">
          A propos
        </Link>
      </div>
    </div>
  );
};

export default Button;
