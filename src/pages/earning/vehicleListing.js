import React, { useState } from 'react';
// material
import {
  Box,
  Table,
  Switch,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  FormControlLabel,
  Container,
  Typography
} from '@mui/material';
// components
import Scrollbar from '../../components/Scrollbar';
//
import SortingSelectingHead from '../../components/tables/sorting-selecting/SortingSelectingHead';
import SortingSelectingToolbar from '../../components/tables/sorting-selecting/SortingSelectingToolbar';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import { motion } from 'framer-motion';
import { varBounceIn, varFadeInDown } from '../../components/animate';
import { SeverErrorIllustration } from '../../assets';
import LoadingScreen from '../../components/LoadingScreen';
import { GET_USER_VEHICLES } from '../../graphql/Queries';
import { useQuery } from '@apollo/client';
import { InsertPhoto } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

const SORTING_SELECTING_TABLE = [];

const TABLE_HEAD = [
  {
    id: false,
    numeric: false,
    disablePadding: false,
    label: 'Status'
  },
  {
    id: false,
    center: true,
    numeric: false,
    disablePadding: false,
    label: 'Image'
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name'
  },
  {
    id: 'reg',
    numeric: false,
    disablePadding: false,
    label: 'License plate'
  },
  {
    id: false,
    numeric: true,
    disablePadding: false,
    label: 'Trips'
  },
  {
    id: 'rate',
    numeric: true,
    disablePadding: false,
    label: 'Rate'
  },
  {
    id: 'earnings',
    numeric: true,
    disablePadding: true,
    label: 'Earnings'
  }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function SortingSelecting() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (data) {
      if (event.target.checked) {
        const newSelecteds = data.GetUserVehicles.map((n) => n.id);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    }
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleClickState = (event, id) => {
    const selectedIndex = selectedState.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedState, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedState.slice(1));
    } else if (selectedIndex === selectedState.length - 1) {
      newSelected = newSelected.concat(selectedState.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selectedState.slice(0, selectedIndex), selectedState.slice(selectedIndex + 1));
    }
    setSelectedState(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  const isSelectedState = (id) => selectedState.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty data.GetUserVehicles.
  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.GetUserVehicles.length) : 0;
  const emptyRows = 0;

  const { loading, error, data } = useQuery(GET_USER_VEHICLES);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <SortingSelectingToolbar numSelected={0} title={'Vehicle Listing'} isVehicleTable={true} />

          {data && (
            <>
              <Scrollbar>
                <TableContainer sx={{ minWidth: 600 }}>
                  <Table size="small">
                    <SortingSelectingHead
                      order={order}
                      orderBy={orderBy}
                      headLabel={TABLE_HEAD}
                      numSelected={selected.length}
                      onRequestSort={handleRequestSort}
                      rowCount={data.GetUserVehicles.length}
                      onSelectAllClick={handleSelectAllClick}
                    />
                    <TableBody>
                      {stableSort(data.GetUserVehicles, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                          const isItemSelected = isSelected(row.id);
                          const isItemSelectedState = isSelectedState(row.id);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.name}
                              selected={isItemSelected}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox checked={isItemSelected} onClick={(event) => handleClick(event, row.id)} />
                              </TableCell>
                              <TableCell
                                component="th"
                                onClick={(event) => handleClickState(event, row.id)}
                                i
                                d={labelId}
                                sx={{ pr: 4, pl: 0 }}
                                style={{ paddingLeft: 0, paddingRight: 5 }}
                                scope="row"
                                padding="none"
                              >
                                <Switch checked={isItemSelectedState} />
                              </TableCell>
                              <TableCell
                                align="left"
                                sx={{
                                  px: 0,
                                  padding: '5px',
                                  display: 'flex',
                                  justifyContent: 'flex-start',
                                  alignItems: 'center'
                                }}
                              >
                                {row.images.length < 1 ? (
                                  <InsertPhoto
                                    sx={{
                                      width: '80px',
                                      height: '80px',
                                      color: (theme) => alpha(theme.palette.grey[900], 0.72)
                                    }}
                                  />
                                ) : (
                                  <>
                                    <div
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '5px',
                                        overflow: 'hidden'
                                      }}
                                    >
                                      <img src={row.images[0].url} alt={row.make} style={{ width: '90px' }} />
                                    </div>
                                  </>
                                )}
                              </TableCell>
                              <TableCell align="left" sx={{ px: 0 }}>
                                {row.make} ({row.model})
                              </TableCell>
                              <TableCell align="left" sx={{ px: 0 }}>
                                {row.reg}
                              </TableCell>
                              <TableCell align="right">{row.trips ? row.trips : 0}</TableCell>
                              <TableCell align="right" sx={{ px: 0 }}>
                                £{row.hourlyRates}/hr
                                <br />£{row.dailyRates}/day
                              </TableCell>
                              <TableCell align="right">£{row.earnings ? row.earnings : 0}.00</TableCell>
                            </TableRow>
                          );
                        })}

                      {emptyRows > 0 && (
                        <TableRow
                          style={{
                            height: (dense ? 33 : 53) * emptyRows
                          }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Scrollbar>
              <>
                {data.GetUserVehicles.length < 1 && (
                  <>
                    <Box sx={{ position: 'relative' }}>
                      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5 }}>
                        <motion.div variants={varFadeInDown}>
                          <Typography variant="body1">There are no vehicles on the account for display</Typography>
                        </motion.div>
                      </Container>
                    </Box>
                  </>
                )}
              </>
            </>
          )}

          {data && (
            <Box sx={{ position: 'relative' }}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.GetUserVehicles.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              <Box sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }} />
            </Box>
          )}
        </>
      )}
    </>
  );
}
