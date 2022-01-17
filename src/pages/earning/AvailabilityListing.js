import React, { useEffect, useState } from 'react';
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
  IconButton,
  Paper,
  Typography,
  Container,
  TableHead,
  TableSortLabel
} from '@mui/material';
// components
import Scrollbar from '../../components/Scrollbar';
//
import SortingSelectingHead from '../../components/tables/sorting-selecting/SortingSelectingHead';
import SortingSelectingToolbar from '../../components/tables/sorting-selecting/SortingSelectingToolbar';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import { InsertPhoto, Visibility } from '@mui/icons-material';
import { varBounceIn, varFadeInDown } from '../../components/animate';
import { SeverErrorIllustration } from '../../assets';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';
import { GET_USER_VEHICLES } from '../../graphql/Queries';
import LoadingScreen from '../../components/LoadingScreen';
import moment from 'moment';
import { visuallyHidden } from '@mui/utils';
import { alpha } from '@mui/material/styles';

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

export default function AvailabilityListing() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [days, setDays] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { loading, error, data } = useQuery(GET_USER_VEHICLES);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const head = [
    {
      id: 'listing',
      numeric: false,
      disablePadding: false,
      label: 'Listing'
    },
    {
      id: 'reg',
      numeric: false,
      disablePadding: false,
      label: 'License Plate'
    }
    // {
    //   id: 'actions',
    //   numeric: false,
    //   disablePadding: false,
    //   label: 'Actions'
    // }
  ];

  const content = [
    {
      image: (
        <div className="booking-vechile-outer">
          <div className="bookingVechile-img margin-right-ten">
            <img src={Mercedes} alt="car" />
          </div>
          <div className="bookingVechile-detail mt-2">
            <h2 className="text-dark-white" style={{ textAlign: 'left' }}>
              Mercedes
            </h2>
            <p className="mb-0" style={{ textAlign: 'left' }}>
              <span style={{ fontWeight: '500', marginRight: '5px' }}>£24/hr</span>
              (£100/day)
            </p>
          </div>
        </div>
      ),
      reg: 'MA68LXG',
      sun: '04:00 - 16:00',
      mon: 'Available',
      tue: 'Unavailable',
      wed: '04:00 - 16:00',
      thu: 'Available',
      fri: '04:00 - 16:00',
      sat: 'Unavailable'
    }
  ];

  const color = (s) => {
    if (s === 'Unavailable') {
      return 'error.main';
    }
    if (s === 'Available') {
      return 'secondary.main';
    }
    return 'warning.main';
  };

  useEffect(() => {
    const doDays = [];

    for (let i = 0; i < 7; i++) {
      const day = moment().add(i, 'days');
      console.log(day.format('YYYY-MM-DD'));

      doDays.push({
        id: i,
        numeric: false,
        disablePadding: false,
        day: day
      });
    }

    setDays(doDays);

    console.log('Days: ', doDays);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty data.GetUserVehicles.
  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.GetUserVehicles.length) : 0;
  const emptyRows = 0;

  const SortingHead = (
    <TableHead>
      <TableRow>
        {head.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              // onClick={handleRequestSort(event, headCell.id)}
              // sx={{whiteSpace: 'nowrap'}}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {days.map((headCell) => (
          <TableCell key={headCell.id} align="center" padding="normal" sortDirection={false}>
            {headCell.day.format('ddd Do')}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Scrollbar>
            <SortingSelectingToolbar numSelected={0} title="Vehicles Availability" />

            {data && (
              <TableContainer sx={{ minWidth: 902 }}>
                <Table size={'small'}>
                  {SortingHead}

                  <TableBody>
                    {stableSort(data.GetUserVehicles, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                          >
                            <TableCell
                              align="left"
                              style={{
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
                            <TableCell component="th" id={labelId} scope="row" padding="none">
                              {row.reg}
                            </TableCell>
                            {row.availability.map((item) => {
                              if (item.label === days[0].day.format('dddd')) {
                                return (
                                  <TableCell align="center" sx={{ color: color(item.timeType) }}>
                                    {item.timeType === 'Custom Hours' ? (
                                      <>
                                        {new moment(item.dayStart).format('h:mm a')} <br />
                                        -
                                        <br /> {new moment(item.dayEnd).format('h:mm a')}
                                      </>
                                    ) : (
                                      item.timeType
                                    )}
                                  </TableCell>
                                );
                              }
                            })}
                            {row.availability.map((item) => {
                              if (item.label === days[1].day.format('dddd')) {
                                return (
                                  <TableCell align="center" sx={{ color: color(item.timeType) }}>
                                    {item.timeType === 'Custom Hours' ? (
                                      <>
                                        {new moment(item.dayStart).format('h:mm a')} <br />
                                        -
                                        <br /> {new moment(item.dayEnd).format('h:mm a')}
                                      </>
                                    ) : (
                                      item.timeType
                                    )}
                                  </TableCell>
                                );
                              }
                            })}
                            {row.availability.map((item) => {
                              if (item.label === days[2].day.format('dddd')) {
                                return (
                                  <TableCell align="center" sx={{ color: color(item.timeType) }}>
                                    {item.timeType === 'Custom Hours' ? (
                                      <>
                                        {new moment(item.dayStart).format('h:mm a')} <br />
                                        -
                                        <br /> {new moment(item.dayEnd).format('h:mm a')}
                                      </>
                                    ) : (
                                      item.timeType
                                    )}
                                  </TableCell>
                                );
                              }
                            })}
                            {row.availability.map((item) => {
                              if (item.label === days[3].day.format('dddd')) {
                                return (
                                  <TableCell align="center" sx={{ color: color(item.timeType) }}>
                                    {item.timeType === 'Custom Hours' ? (
                                      <>
                                        {new moment(item.dayStart).format('h:mm a')} <br />
                                        -
                                        <br /> {new moment(item.dayEnd).format('h:mm a')}
                                      </>
                                    ) : (
                                      item.timeType
                                    )}
                                  </TableCell>
                                );
                              }
                            })}
                            {row.availability.map((item) => {
                              if (item.label === days[4].day.format('dddd')) {
                                return (
                                  <TableCell align="center" sx={{ color: color(item.timeType) }}>
                                    {item.timeType === 'Custom Hours' ? (
                                      <>
                                        {new moment(item.dayStart).format('h:mm a')} <br />
                                        -
                                        <br /> {new moment(item.dayEnd).format('h:mm a')}
                                      </>
                                    ) : (
                                      item.timeType
                                    )}
                                  </TableCell>
                                );
                              }
                            })}
                            {row.availability.map((item) => {
                              if (item.label === days[5].day.format('dddd')) {
                                return (
                                  <TableCell align="center" sx={{ color: color(item.timeType) }}>
                                    {item.timeType === 'Custom Hours' ? (
                                      <>
                                        {new moment(item.dayStart).format('h:mm a')} <br />
                                        -
                                        <br /> {new moment(item.dayEnd).format('h:mm a')}
                                      </>
                                    ) : (
                                      item.timeType
                                    )}
                                  </TableCell>
                                );
                              }
                            })}
                            {row.availability.map((item) => {
                              if (item.label === days[6].day.format('dddd')) {
                                return (
                                  <TableCell align="center" sx={{ color: color(item.timeType) }}>
                                    {item.timeType === 'Custom Hours' ? (
                                      <>
                                        {new moment(item.dayStart).format('h:mm a')} <br />
                                        -
                                        <br /> {new moment(item.dayEnd).format('h:mm a')}
                                      </>
                                    ) : (
                                      item.timeType
                                    )}
                                  </TableCell>
                                );
                              }
                            })}
                            {/*<TableCell align='right'><IconButton><Visibility /></IconButton></TableCell>*/}
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: 53 * emptyRows
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Scrollbar>

          {data.GetUserVehicles.length < 1 && (
            <>
              <Box sx={{ position: 'relative' }}>
                <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5 }}>
                  <motion.div variants={varBounceIn}>
                    <SeverErrorIllustration sx={{ height: 200, my: { xs: 3, sm: 6 } }} />
                  </motion.div>

                  <motion.div variants={varFadeInDown}>
                    <Typography variant="body1">There are no data for display</Typography>
                  </motion.div>
                </Container>
              </Box>
            </>
          )}

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
        </>
      )}
    </>
  );
}
