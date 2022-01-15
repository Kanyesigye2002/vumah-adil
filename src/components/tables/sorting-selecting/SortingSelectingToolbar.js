import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
// material
import { useTheme, styled } from '@mui/material/styles';
import {
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Button
} from '@mui/material';
import { useState } from 'react';
import { FilterListRounded } from '@mui/icons-material';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

// ----------------------------------------------------------------------

SortingSelectingToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function SortingSelectingToolbar({ numSelected, title, isVehicleTable }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const [isOpenList, setOpenList] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isOpen, setOpen] = useState(null);

  const handleClickListItem = (event) => {
    setOpenList(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenList(null);
  };

  const OPTIONS = ['All', 'Car', 'Motorcycle', 'Bicycle'];

  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: isLight ? 'primary.main' : 'text.primary',
          bgcolor: isLight ? 'primary.lighter' : 'primary.dark'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography variant="h6" id="tableTitle" component="div">
          {title}
        </Typography>
      )}

      {isVehicleTable && (
        <>
          <Tooltip title="Filter list">
            <Button variant="outlined" onClick={handleClickListItem} endIcon={<FilterListRounded />}>
              <ListItemText primary="" secondary={OPTIONS[selectedIndex]} />
            </Button>
          </Tooltip>
          <Menu keepMounted id="lock-menu" anchorEl={isOpenList} onClose={handleClose} open={Boolean(isOpenList)}>
            {OPTIONS.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </RootStyle>
  );
}
