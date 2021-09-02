import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Collapse, Tooltip, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover, PopoverBody } from 'reactstrap';
import CVVExampleImage from '../../assets/img/cvv-example.jpg';

export default function BankDetails() {
  const [showAddBankDetailsModal, setShowAddBankDetailsModal] = useState(false);
  //const [dropdownOpen, setDropdownOpen] = useState(false);
  const [bankDetailsList, setBankDetailsList] = useState(false);
  const [openCVVPopover, setOpenCVVPopover] = useState(false);
  const [bankDetailsSelected, setBankDetailsSelected] = useState(0);
  const [, forceUpdate] = useState(0);

  const modalCloseBtn = <button type="button" className="btn close p-0" onClick={() => {
    setShowAddBankDetailsModal(false)
  }}>
    <span aria-hidden="true"><i className="fas fa-times-circle fa-lg"></i></span>
  </button>;

  const [bankDetails, setBankDetails] = useState([
    {
      checked: true,

      brand: 'visa',
      name: 'John Smith',
      last4: '1234',
      exp: '01/23'
    }, {
      brand: 'mastercard',
      name: 'John Smith 2',
      last4: '4242',
      exp: '12/24'
    }, {
      brand: 'amex',
      name: 'John Smith 3',
      last4: '0000',
      exp: '08/30'
    }
  ]);

  function dropDownToggle(index) {
    if (!bankDetails[index]) return;

    bankDetails[index].modal = !(bankDetails[index].modal);
    setBankDetails(bankDetails);

    setTimeout(() => {
      forceUpdate(e => !e);
    }, 50);
  };

  function selectCard(index) {
    if (!bankDetails[index]) return;

    bankDetails.map((a, index) => {
      bankDetails[index].checked = false;
    });

    bankDetails[index].checked = true;
    setBankDetails(bankDetails);

    setTimeout(() => {
      forceUpdate(e => !e);
    }, 50);
  };

  function deleteCard(index) {
    bankDetails.splice(index, 1);
    if (bankDetails[0]) {
      bankDetails[0].checked = true;
    }
    setBankDetails(bankDetails);

    setTimeout(() => {
      forceUpdate(e => !e);
    }, 50);
  };

  let selectedDetails = bankDetails.find((item) => item.checked);

  const primaryDetails = !selectedDetails ? null : <div style={{alignItems:'center', display:'flex', flexWrap:'wrap'}}>
    <img src={
      selectedDetails.brand === 'visa'
        ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
        : (
          selectedDetails.brand === 'mastercard'
            ? 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png'
            : 'https://s1.q4cdn.com/692158879/files/images/brand_imagery/AXP_BlueBoxLogo_Alternate_REGULARscale_RGB_DIGITAL_700x700.png'
        )
    } style={{
      width: '40px',
      height: 'auto',
    }} />
    <b style={{
      textTransform: 'capitalize',
      marginLeft: '10px',
      marginRight: '5px'
    }}>{ selectedDetails.brand }</b>
    ending in {selectedDetails.last4}
    <div style={{width: '100%'}}>
    Billing address: Same as business address
    </div>
  </div>;

  return (
    <>
      <div className="account-grid" data-aos="fade-up">
        <div className="bank-details">
          <div className="d-flex align-items-center account-update-field mb-4 justify-content-between ">
            <h2 className="m-0">Bank Details</h2>
            { bankDetails.length !== 0 && (bankDetailsList
              ? <button
                  className="btn btn-light"
                  onClick={toggleBankDetailsList}
                  style={{marginLeft: 'auto', marginRight: '10px'}}
                >
                  Collapse
                  <i className="fas fa-chevron-up" style={{marginLeft: '5px'}} />
                </button>
              : <button
                className="btn btn-light"
                onClick={toggleBankDetailsList}
                style={{marginLeft: 'auto'}}
              >
                Change
                <i className="fas fa-chevron-down" style={{marginLeft: '5px'}} />
              </button>
            )}

            { (bankDetailsList || bankDetails.length === 0) &&
              <button className="common-btn" onClick={toggleAddBankDetailsModal}>Add</button>
            }
          </div>
          <div className="custom-table-main">
            { bankDetails.length === 0 &&
              <>
                No data to show
              </>
            }
            { !bankDetailsList && bankDetails.length !== 0 && primaryDetails }
            { (bankDetailsList && bankDetails.length !== 0) &&
              <table className="table" cellpedding="0" cellspacing="0">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Brand</th>
                    <th scope="col">Card Number</th>
                    <th scope="col">Name on Card</th>
                    <th scope="col">Expiry Date</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    bankDetails.map((bank,index) => (
                      <tr key={'card-' + index} onClick={()=>selectCard(index)}>
                        <th>
                          <input
                            type="radio"
                            name="bank-details"
                            checked={bank.checked}
                            onChange={()=>{}}
                          />
                        </th>
                        <td>
                          <img src={
                            bank.brand === 'visa'
                              ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
                              : (
                                bank.brand === 'mastercard'
                                  ? 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png'
                                  : 'https://s1.q4cdn.com/692158879/files/images/brand_imagery/AXP_BlueBoxLogo_Alternate_REGULARscale_RGB_DIGITAL_700x700.png'
                              )
                          } style={{
                            width: '40px',
                            height: 'auto',
                          }} />
                        </td>
                        <td>
                          **** {bank.last4}
                        </td>
                        <td>
                          {bank.name}
                        </td>
                        <td>{bank.exp}</td>
                        <td>
                          <Dropdown isOpen={bank.modal} toggle={
                            (e) => {
                              e.stopPropagation();
                              dropDownToggle(index)
                          }}>
                            <DropdownToggle caret={false} className="btn btn-light dropdown-toggle">
                              <i className="fas fa-ellipsis-v"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem onClick={toggleAddBankDetailsModal}>
                                <i className="fas fa-edit"></i>
                                Edit
                              </DropdownItem>
                              <DropdownItem onClick={()=>deleteCard(index)}>
                                <i className="fas fa-trash"></i>
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            }
          </div>
        </div>
      </div>

      {/* <!-- add bank details modal --> */}
      <Modal isOpen={showAddBankDetailsModal} toggle={toggleAddBankDetailsModal} className='bank-detail-popup'>
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
                      <input type="text" className="form-control" placeholder="Security Code"
                        aria-label="Security Code" aria-describedby="cvv-details" />
                      <div className="input-group-append">
                        <span className="input-group-text h-100" id="cvv-details">
                          <i className="fas fa-info-circle pointer"></i>
                        </span>
                        <Popover placement="bottom" isOpen={openCVVPopover} target="cvv-details" toggle={toggleCVVPopover} className="blog-card-grid">
                          <PopoverBody>
                            <img src={CVVExampleImage} className="mb-4" />
                            <p>Visa, Mastercard, Discover or Maestro</p>
                            <ul>
                              <li>
                                <i className="fas fa-circle margin-right-five fa-xs"></i>
                                This 3-digit number is on the back of the card next to signature panel.
                              </li>
                            </ul>
                            <p>American Express</p>
                            <ul>
                              <li>
                                <i className="fas fa-circle margin-right-five fa-xs"></i>
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
              <div className="contact-form-field  checkbox-field">
                <input type="checkbox" id="t3" name="" className="styled-checkbox" checked={true} />
                <label for="t3">Same billing address as original</label>
                <div className="mt-4 bill-show-form">
                  <div className="contact-form-field mb-4 ">
                    <input type="number" placeholder="Street Address" />
                  </div>
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Street Address 2" />
                  </div>
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="City" />
                  </div>
                  <div className="contact-form-field mb-4 ">
                    <div className="select-outer">
                      <select>
                        <option disabled selected hidden>Country (Optional)</option>
                        <option>India</option>
                        <option>UK</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Post Code" />
                  </div>
                </div>
              </div>
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
  };

  function toggleBankDetailsList(e) {
    if (e) e.preventDefault();
    setBankDetailsList(!bankDetailsList);
  };

  function toggleCVVPopover() {
    setOpenCVVPopover(!openCVVPopover);
  };
}
