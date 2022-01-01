import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Dialog, DialogContent, DialogTitle, IconButton, Toolbar } from '@mui/material';
import { Close } from '@mui/icons-material';



const initialState = {
  header: '',
  open: false,
  content: <>Hello</>,
  onOpen: (header, content) => {console.log("open")},
  onClose: () => {console.log("close")}
};

const DroidDialogContext = createContext(initialState);

DroidDialogProvider.propTypes = {
  children: PropTypes.node
};

function DroidDialogProvider({ children }) {

  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(<>Hello</>);
  const [header, setHeader] = useState('Hello false');

  const handleOpen = (header, content) => {
    setHeader(header)
    setContent(content)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DroidDialogContext.Provider
      value={{
        header: header,
        open: open,
        content: content,
        onOpen: handleOpen,
        onClose: handleClose
      }}
    >
      {children}
      {/* <!-- Droid Dialog --> */}
      <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
          {header}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {content}
        </DialogContent>
      </BootstrapDialog>
      {/* <!-- Droid Dialog --> */}
    </DroidDialogContext.Provider>
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export { DroidDialogProvider, DroidDialogContext };