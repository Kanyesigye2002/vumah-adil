/* eslint-disable */
import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Collapse,
  Tooltip,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverBody
} from 'reactstrap';
import CVVExampleImage from '../../assets/img/cvv-example.jpg';
import UpdateUserInfo from '../../pages/account/UpdateUserInfo';
import { Dialog, DialogContent, DialogTitle, IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close } from '@mui/icons-material';
import AddBankCard from '../../pages/account/AddBankCard';
import useDroidDialog from '../../hooks/useDroidDialog';

const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands'
];

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

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
          aria-label="close"
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

export default function BankDetails() {
  const { onOpen } = useDroidDialog();

  const [userActions, setUserActions] = useState({ header: '', content: <></> });
  const [openUserActions, setOpenUserActions] = React.useState(false);

  const handleCloseUserActions = () => {
    setOpenUserActions(false);
  };

  const [showAddBankDetailsModal, setShowAddBankDetailsModal] = useState(false);
  //const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bankDetailsList, setBankDetailsList] = useState(false);
  const [openCVVPopover, setOpenCVVPopover] = useState(false);
  const [openSameBillingAddress, setOpenSameBillingAddress] = useState(true);
  const [, forceUpdate] = useState(0);

  const modalCloseBtn = (
    <button
      type="button"
      className="btn close p-0"
      onClick={() => {
        setShowAddBankDetailsModal(false);
      }}
    >
      <span aria-hidden="true">
        <i className="fas fa-times-circle fa-lg" />
      </span>
    </button>
  );

  const [bankDetails, setBankDetails] = useState([
    {
      checked: true,

      brand: 'visa',
      name: 'John Smith',
      last4: '1234',
      exp: '01/23'
    },
    {
      brand: 'mastercard',
      name: 'John Smith 2',
      last4: '4242',
      exp: '12/24'
    },
    {
      brand: 'amex',
      name: 'John Smith 3',
      last4: '0000',
      exp: '08/30'
    }
  ]);

  function dropDownToggle(index) {
    if (!bankDetails[index]) return;

    bankDetails[index].modal = !bankDetails[index].modal;
    setBankDetails(bankDetails);

    setTimeout(() => {
      forceUpdate((e) => !e);
    }, 50);
  }

  function selectCard(index) {
    if (!bankDetails[index]) return;

    bankDetails.map((a, index) => {
      bankDetails[index].checked = false;
    });

    bankDetails[index].checked = true;
    setBankDetails(bankDetails);

    setTimeout(() => {
      forceUpdate((e) => !e);
    }, 50);
  }

  function deleteCard(index) {
    bankDetails.splice(index, 1);
    if (bankDetails[0]) {
      bankDetails[0].checked = true;
    }
    setBankDetails(bankDetails);

    setTimeout(() => {
      forceUpdate((e) => !e);
    }, 50);
  }

  let selectedDetails = bankDetails.find((item) => item.checked);

  const primaryDetails = !selectedDetails ? null : (
    <div className="my-button" style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap' }}>
      <img
        src={
          selectedDetails.brand === 'visa'
            ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
            : selectedDetails.brand === 'mastercard'
            ? 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png'
            : 'https://s1.q4cdn.com/692158879/files/images/brand_imagery/AXP_BlueBoxLogo_Alternate_REGULARscale_RGB_DIGITAL_700x700.png'
        }
        style={{
          width: '40px',
          height: 'auto'
        }}
      />
      <b
        style={{
          textTransform: 'capitalize',
          marginLeft: '10px',
          marginRight: '5px'
        }}
      >
        {selectedDetails.brand}
      </b>
      ending in {selectedDetails.last4}
      <div style={{ width: '100%' }}>Billing address: Same as business address</div>
    </div>
  );

  return (
    <>
      <div className="account-grid" data-aos="fade-up">
        <div className="bank-details">
          <div className="d-flex align-items-center account-update-field mb-4 justify-content-between ">
            <h2 className="m-0">Bank Details</h2>
            {bankDetails.length !== 0 &&
              (bankDetailsList ? (
                <button
                  className="btn btn-light my-button"
                  onClick={toggleBankDetailsList}
                  style={{ marginLeft: 'auto', marginRight: '10px' }}
                >
                  Collapse
                  <i className="fas fa-chevron-up" style={{ marginLeft: '5px' }} />
                </button>
              ) : (
                <button
                  className="btn btn-light my-button"
                  onClick={toggleBankDetailsList}
                  style={{ marginLeft: 'auto' }}
                >
                  Change
                  <i className="fas fa-chevron-down" style={{ marginLeft: '5px' }} />
                </button>
              ))}

            {(bankDetailsList || bankDetails.length === 0) && (
              <button
                className="common-btn"
                onClick={() => {
                  onOpen('Add Card', <AddBankCard />);
                }}
              >
                Add
              </button>
            )}
          </div>
          <div className="custom-table-main">
            {bankDetails.length === 0 && <>No data to show</>}
            {!bankDetailsList && bankDetails.length !== 0 && primaryDetails}
            {bankDetailsList && bankDetails.length !== 0 && (
              <table className="table" cellpedding="0" cellspacing="0">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th scope="col">Bank</th>
                    <th scope="col">Card Number</th>
                    <th scope="col">Name on Card</th>
                    <th scope="col">Expiry Date</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {bankDetails.map((bank, index) => (
                    <tr key={'card-' + index} onClick={() => selectCard(index)}>
                      <th>
                        <input type="radio" name="bank-details" checked={bank.checked} onChange={() => {}} />
                      </th>
                      <td>
                        <img
                          src={
                            bank.brand === 'visa'
                              ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
                              : bank.brand === 'mastercard'
                              ? 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png'
                              : 'https://s1.q4cdn.com/692158879/files/images/brand_imagery/AXP_BlueBoxLogo_Alternate_REGULARscale_RGB_DIGITAL_700x700.png'
                          }
                          style={{
                            width: '40px',
                            height: 'auto'
                          }}
                        />
                      </td>
                      <td>**** {bank.last4}</td>
                      <td>{bank.name}</td>
                      <td>{bank.exp}</td>
                      <td>
                        <Dropdown
                          isOpen={bank.modal}
                          toggle={(e) => {
                            e.stopPropagation();
                            dropDownToggle(index);
                          }}
                        >
                          <DropdownToggle className="btn btn-light dropdown-toggle bank-details-dropdown-toggle">
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={toggleAddBankDetailsModal}>
                              <i className="fas fa-edit" style={{ minWidth: '25px' }} />
                              Edit
                            </DropdownItem>
                            <DropdownItem onClick={() => deleteCard(index)}>
                              <i className="fas fa-trash" style={{ minWidth: '25px' }} />
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* <!-- add listing modal --> */}
      <BootstrapDialog
        onClose={handleCloseUserActions}
        aria-labelledby="customized-dialog-title"
        open={openUserActions}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseUserActions}>
          {userActions.header}
        </BootstrapDialogTitle>
        <DialogContent dividers>{userActions.content}</DialogContent>
      </BootstrapDialog>
      {/* <!-- add listing modal --> */}

      {/* <!-- add bank details modal --> */}
      <Modal isOpen={showAddBankDetailsModal} toggle={toggleAddBankDetailsModal} className="bank-detail-popup">
        <ModalHeader toggle={toggleAddBankDetailsModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="add-member-header text-center mb-5">
            <h2>Add Card</h2>
          </div>
          <form>
            <div className="account-grid p-0 border-0">
              <div className="contact-form-field mb-4 ">
                <input type="number" placeholder="Card Number" />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Expiry Date" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Security Code"
                        aria-label="Security Code"
                        aria-describedby="cvv-details"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text h-100" id="cvv-details">
                          <i className="fas fa-info-circle pointer" />
                        </span>
                        <Popover
                          placement="bottom"
                          isOpen={openCVVPopover}
                          target="cvv-details"
                          toggle={toggleCVVPopover}
                          className="blog-card-grid"
                        >
                          <PopoverBody>
                            <img src={CVVExampleImage} className="mb-4" />
                            <p>Visa, Mastercard, Discover or Maestro</p>
                            <ul>
                              <li>
                                <i className="fas fa-circle margin-right-five fa-xs" />
                                This 3-digit number is on the back of the card next to signature panel.
                              </li>
                            </ul>
                            <p>American Express</p>
                            <ul>
                              <li>
                                <i className="fas fa-circle margin-right-five fa-xs" />
                                This 4-digit number is on the front of the card above the credit card number.
                              </li>
                            </ul>
                          </PopoverBody>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Surname" />
                  </div>
                </div>
              </div>
              <div className="contact-form-field checkbox-field mb-3">
                <input
                  type="checkbox"
                  id="t3"
                  className="styled-checkbox"
                  checked={openSameBillingAddress}
                  onChange={(e) => {
                    setOpenSameBillingAddress(e.currentTarget.checked);
                  }}
                />
                <label for="t3">Same billing address as original</label>
              </div>

              {!openSameBillingAddress && (
                <>
                  <div className="contact-form-field mb-3">
                    <input type="text" placeholder="Street Address" />
                  </div>
                  <div className="contact-form-field mb-3">
                    <input type="text" placeholder="Street Address 2" />
                  </div>
                  <div className="contact-form-field mb-3">
                    <input type="text" placeholder="City" />
                  </div>
                  <div className="contact-form-field mb-3">
                    <div className="select-outer">
                      <select>
                        <option disabled selected hidden>
                          Country (optional)
                        </option>
                        {countryList.map((c) => (
                          <option>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="contact-form-field mb-3">
                    <input type="text" placeholder="Post Code" />
                  </div>
                </>
              )}

              <div className="contact-form-field submit-contact text-center mt-4">
                <input type="Submit" value="Add" onClick={toggleAddBankDetailsModal} />
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
      {/* <!-- add bank details modal --> */}
    </>
  );

  function toggleAddBankDetailsModal(e) {
    if (e) e.preventDefault();
    setShowAddBankDetailsModal(!showAddBankDetailsModal);
  }

  function toggleBankDetailsList(e) {
    if (e) e.preventDefault();
    setBankDetailsList(!bankDetailsList);
  }

  function toggleCVVPopover() {
    setOpenCVVPopover(!openCVVPopover);
  }
}
