// material
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Radio,
  FormControlLabel,
  RadioGroup,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  Typography
} from '@mui/material';
// components
import Scrollbar from '../../components/Scrollbar';
import { Done, MoreVert, Remove } from '@mui/icons-material';
import createAvatar from '../../utils/createAvatar';
import { MAvatar } from '../../components/@material-extend';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_STAFF_MEMBERS } from '../../graphql/Queries';
import { motion } from 'framer-motion';
import { varBounceIn, varFadeInDown } from '../../components/animate';
import { SeverErrorIllustration } from '../../assets';

// ----------------------------------------------------------------------

const options = ['Edit Permissions', 'Delete Member'];

const ITEM_HEIGHT = 48;

// ----------------------------------------------------------------------

export default function StaffMembersListing() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { loading, error, data } = useQuery(GET_STAFF_MEMBERS);

  console.log('data: ', data);
  //GetStaffMembers

  const image = '/static/mock-images/avatars/avatar_default.jpg';

  return (
    <Scrollbar>
      <TableContainer sx={{ minWidth: 200, my: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              {/*<TableCell align='right'>Name</TableCell>*/}
              <TableCell align="left" sx={{ p: '8px' }}>
                Email
              </TableCell>
              <TableCell align="left" sx={{ p: '8px' }}>
                Permissions
              </TableCell>
              <TableCell align="left" sx={{ p: '8px' }}>
                Last Login
              </TableCell>
              <TableCell align="left" sx={{ p: '8px' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          {!loading && data && (
            <TableBody>
              {data.GetStaffMembers.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
                    <MAvatar
                      src={image}
                      alt={'Allan'}
                      color={image ? 'default' : createAvatar('Allan Kanye').color}
                      sx={{ mx: 'auto', mb: 2, height: 30, width: 30, fontSize: '20px' }}
                    >
                      {createAvatar('Allan Kanye').name}
                    </MAvatar>
                  </TableCell>
                  {/*<TableCell component='th' scope='row' sx={{ whiteSpace: 'nowrap' }}>{row.user.name}</TableCell>*/}
                  <TableCell component="th" scope="row">
                    {row.user.email}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.roleGroup.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.lastLogin}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls="long-menu"
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVert />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        'aria-labelledby': 'long-button'
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '20ch'
                        }
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Edit Permissions'} onClick={handleClose}>
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {!loading && data && (
        <>
          {data.GetStaffMembers.length < 1 && (
            <>
              <Box sx={{ position: 'relative' }}>
                <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5 }}>
                  <motion.div variants={varFadeInDown}>
                    <Typography variant="body1">There are no staff members yet for display</Typography>
                  </motion.div>
                </Container>
              </Box>
            </>
          )}
        </>
      )}
    </Scrollbar>
  );
}
