import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import editFill from '@iconify/icons-eva/edit-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { useTheme, styled } from '@mui/material/styles';
import {
  Box,
  useMediaQuery,
  Stack,
  Drawer,
  IconButton,
  Tooltip,
  Button,
  ListItemText,
  Menu,
  MenuItem
} from '@mui/material';
// redux
import { useSelector } from "../../redux/store";
// utils
import axios from '../../utils/axios';
//
import { MIconButton, MHidden } from '../@material-extend';
import Scrollbar from '../Scrollbar';
import ChatAccount from './ChatAccount';
import ChatSearchResults from './ChatSearchResults';
import ChatContactSearch from './ChatContactSearch';
import ChatConversationList from './ChatConversationList';
import { useQuery } from '@apollo/client';
import { GET_USER_CONTACTS } from '../../graphql/Queries';
import LoadingScreen from '../LoadingScreen';
import { FilterListRounded } from '@mui/icons-material';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 320;
const COLLAPSE_WIDTH = 96;

const ToggleButtonStyle = styled((props) => <IconButton disableRipple {...props} />)(({ theme }) => ({
  left: 0,
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  top: theme.spacing(13),
  borderRadius: `0 12px 12px 0`,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  boxShadow: theme.customShadows.primary,
  '&:hover': {
    backgroundColor: theme.palette.primary.darker
  }
}));

// ----------------------------------------------------------------------

export default function ChatSidebar() {

  const { loading, error, data } = useQuery(GET_USER_CONTACTS);

  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [openSidebar, setOpenSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setSearchFocused] = useState(false);
  const { conversations, activeConversationId } = useSelector((state) => state.chat);

  const displayResults = searchQuery && isSearchFocused;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isCollapse = !isMobile && !openSidebar;
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

  const OPTIONS = ['All', 'Requests', 'Ongoing', 'Complete', 'Rejected'];

  useEffect(() => {
    if (isMobile) {
      return handleCloseSidebar();
    }
    return handleOpenSidebar();
  }, [isMobile, pathname]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!openSidebar) {
      return setSearchFocused(false);
    }
  }, [openSidebar]);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const handleToggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const handleClickAwaySearch = () => {
    setSearchFocused(false);
    setSearchQuery('');
  };

  const handleChangeSearch = async (event) => {
    try {
      const { value } = event.target;
      setSearchQuery(value);
      if (value) {
        const response = await axios.get('/api/chat/search', {
          params: { query: value }
        });
        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchSelect = (username) => {
    setSearchFocused(false);
    setSearchQuery('');
    navigate(`user/${username}`);
  };

  const handleSelectContact = (result) => {
    if (handleSearchSelect) {
      handleSearchSelect(result.username);
    }
  };

  const renderContent = (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Box sx={{ py: 2, px: 3 }}>
            <Stack direction="row" alignItems="center" justifyContent="center">
              {!isCollapse && (
                <>
                  <ChatAccount />
                  <Box sx={{ flexGrow: 1 }} />
                </>
              )}

              {!isCollapse && (
                <>
                  <Tooltip title="Filter list">
                    <Button variant="outlined" onClick={handleClickListItem} endIcon={<FilterListRounded />}>
                      <ListItemText primary="" secondary={OPTIONS[selectedIndex]} />
                    </Button>
                  </Tooltip>
                  <Menu
                    keepMounted
                    id="lock-menu"
                    anchorEl={isOpenList}
                    onClose={handleClose}
                    open={Boolean(isOpenList)}
                  >
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

              <MIconButton onClick={handleToggleSidebar}>
                <Icon width={20} height={20} icon={openSidebar ? arrowIosBackFill : arrowIosForwardFill} />
              </MIconButton>
            </Stack>

            {!isCollapse && (
              <ChatContactSearch
                query={searchQuery}
                onFocus={handleSearchFocus}
                onChange={handleChangeSearch}
                onClickAway={handleClickAwaySearch}
              />
            )}
          </Box>

          <Scrollbar>
            {!displayResults ? (
              <ChatConversationList
                conversations={data.GetUserContacts}
                isOpenSidebar={openSidebar}
                activeConversationId={activeConversationId}
                sx={{ ...(isSearchFocused && { display: 'none' }) }}
              />
            ) : (
              <ChatSearchResults query={searchQuery} results={searchResults} onSelectContact={handleSelectContact} />
            )}
          </Scrollbar>
        </>
      )}
    </>
  );

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <MHidden width="mdUp">
            <ToggleButtonStyle onClick={handleToggleSidebar}>
              <Icon width={16} height={16} icon={peopleFill} />
            </ToggleButtonStyle>
          </MHidden>

          {/* Mobile */}
          <MHidden width="mdUp">
            <Drawer
              ModalProps={{ keepMounted: true }}
              open={openSidebar}
              onClose={handleCloseSidebar}
              sx={{
                '& .MuiDrawer-paper': { width: DRAWER_WIDTH }
              }}
            >
              {renderContent}
            </Drawer>
          </MHidden>

          {/* Desktop */}
          <MHidden width="mdDown">
            <Drawer
              open={openSidebar}
              variant="persistent"
              sx={{
                width: DRAWER_WIDTH,
                transition: theme.transitions.create('width'),
                '& .MuiDrawer-paper': {
                  position: 'static',
                  width: DRAWER_WIDTH
                },
                ...(isCollapse && {
                  width: COLLAPSE_WIDTH,
                  '& .MuiDrawer-paper': {
                    width: COLLAPSE_WIDTH,
                    position: 'static',
                    transform: 'none !important',
                    visibility: 'visible !important'
                  }
                })
              }}
            >
              {renderContent}
            </Drawer>
          </MHidden>
        </>
      )}
    </>
  );
}
