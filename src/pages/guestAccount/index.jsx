import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Collapse, Tooltip, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover, PopoverBody } from 'reactstrap';
import CVVExampleImage from '../../assets/img/cvv-example.jpg';

export default function Account() {

  const [showDeactivateAccountModal, setShowDeactivateAccountModal] = useState(false);
  const [showAddBankDetailsModal, setShowAddBankDetailsModal] = useState(false);
  const [showUpdateBusinessDetailsModal, setShowUpdateBusinessDetailsModal] = useState(false);
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);
  const [showUpdateMobileModal, setShowUpdateMobileModal] = useState(false);

  const [showBusinessInformationSection, setShowBusinessInformationSection] = useState(true);
  const [showApprovalContent, setShowApprovalContent] = useState(true);

  const [openCVVPopover, setOpenCVVPopover] = useState(false);

  const [driverLicencetooltipOpen, setDriverLicencetooltipOpen] = useState(false);
  const [passportTooltipOpen, setPassportTooltipOpen] = useState(false);

  const [approvalDropdownOpen, setApprovalDropdownOpen] = useState(false);
  const [approvalTooltipOpen, setApprovalTooltipOpen] = useState(false);

  const [imagesData, setImagesData] = useState({
    frontOfLicence: null,
    backOfLicence: null,
    frontOfId: null,
    backOfId: null
  });

  const [selectLicenseType, setSelectLicenseType] = useState('');

  const modalCloseBtn = <button type="button" className="btn close p-0" onClick={closeAllModal}>
    <span aria-hidden="true"><i className="fas fa-times-circle fa-lg"></i></span>
  </button>;

  return (
    <>
      <section className="account-main padd-top-60 padd-bottom-60">
        <div className="container">
          <div className="service-header mb-5">
            <h2>Account</h2>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="account-grid" data-aos="fade-up">
                <h2>Contact information</h2>
                <div className="account-profile-box mb-4">
                  <div className="circle account-profile">

                  </div>
                  <div className="p-image account-profile-icon">
                    <label htmlFor="plus-up" className="m-0 pointer"><i className="fas fa-plus"></i></label>
                    <input id="plus-up" className="file-upload" type="file" accept="image/*" />
                  </div>
                </div>

                <div className="contact-form-field mb-4 field-label">
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>

                <div
                  className="d-flex align-items-center account-update-field mb-4 justify-content-between pr-sm-5 mr-sm-5">
                  <h2 className="m-0">Password</h2>
                  <button className="common-btn" onClick={toggleUpdatePasswordModal}>Update</button>
                </div>
                <div
                  className="d-flex align-items-center account-update-field justify-content-between pr-sm-5 mr-sm-5">
                  <h2 className="m-0">Mobile Number</h2>
                  <button className="common-btn" onClick={toggleUpdateMobileModal}>Update</button>
                </div>
              </div>
              <div className="account-grid" data-aos="fade-up">
                <div className="d-flex align-items-center account-update-field mb-4 justify-content-between">
                  <h2 className="m-0">Approval Status</h2>
                  <div className="d-flex align-items-center">
                    <div className="status-number">
                      <p><i className="fas fa-check"></i> Approved</p>
                    </div>
                    <Dropdown isOpen={approvalDropdownOpen} toggle={toggleApprovalDropdown}>
                      <DropdownToggle color="link">
                        <i className="fas fa-ellipsis-v pointer secondary-color"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Edit</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    {showApprovalContent && <i className="fas fa-sort-up pointer" onClick={toggleShowApprovalContent}></i>}
                    {!showApprovalContent && <i className="fas fa-sort-down pointer" onClick={toggleShowApprovalContent}></i>}
                  </div>
                </div>
                <Collapse isOpen={showApprovalContent}>
                  <div className="bank-details mt-4">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="mb-3">Drivers License <i className="fas fa-info-circle" id="driverLicencetooltip"></i></p>
                        <Tooltip placement="right" isOpen={driverLicencetooltipOpen} target="driverLicencetooltip" toggle={toggleDriverLicencetooltip}>
                          A Full drivers licence is required to rent cars, camper vans and Motor homes.
                        </Tooltip>
                      </div>
                      <div className="col-md-6">
                        <div className="box Licence-upload-grid ">
                          <div className="js--image-preview" style={{ backgroundImage: `url(${imagesData.frontOfLicence})` }}></div>
                          <div className="upload-options">
                            <label className="m-0 w-100 h-100">
                              <i className="fas fa-cloud-upload-alt margin-right-five"></i>
                              Upload front of Licence
                              <input type="file" className="image-upload" name="frontOfLicence" accept="image/*" onChange={onImageUpload} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="box Licence-upload-grid ">
                          <div className="js--image-preview" style={{ backgroundImage: `url(${imagesData.backOfLicence})` }}></div>
                          <div className="upload-options">
                            <label className="m-0 w-100 h-100">
                              <i className="fas fa-cloud-upload-alt margin-right-five"></i>
                              Upload Back of Licence
                              <input type="file" className="image-upload" name="backOfLicence" accept="image/*" onChange={onImageUpload} />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="company-review mt-4 mb-2 text-center-align">
                      <h2 className="mb-0">OR</h2>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-12 text-center">
                        <p className="mb-3">Provisional/Passport <i className="fas fa-info-circle" id="passportTooltip"></i></p>
                        <Tooltip placement="right" isOpen={passportTooltipOpen} target="passportTooltip" toggle={togglePassportTooltip}>
                          Either a provisional license or a passport will be required to rent bicycles and any non registered vehicles.
                        </Tooltip>
                      </div>
                      <div className="col-md-6">
                        <div className="box Licence-upload-grid ">
                          <div className="js--image-preview" style={{ backgroundImage: `url(${imagesData.frontOfId})` }}></div>
                          <div className="upload-options">
                            <label className="m-0 w-100 h-100">
                              <i className="fas fa-cloud-upload-alt margin-right-five"></i>
                              Upload front of ID
                              <input type="file" className="image-upload" name="frontOfId" accept="image/*" onChange={onImageUpload} />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="box Licence-upload-grid ">
                          <div className="js--image-preview" style={{ backgroundImage: `url(${imagesData.backOfId})` }}></div>
                          <div className="upload-options">
                            <label className="m-0 w-100 h-100">
                              <i className="fas fa-cloud-upload-alt margin-right-five"></i>
                              Upload back of ID
                              <input type="file" className="image-upload" name="backOfId" accept="image/*" onChange={onImageUpload} />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <span className="margin-right-five">Motorcycles License Types</span>
                        <i className="fas fa-info-circle" id="approvalTooltip"></i>
                        <Tooltip placement="right" isOpen={approvalTooltipOpen} target="approvalTooltip" toggle={toggleApprovalTooltip}>
                          <p className="pt-3 pb-3">
                            If you have a motorcycle license please select which box applies to you:
                            <br /> <hr />
                            A1 (Motorcycles upto 125cc)
                            <br /> <hr />
                            A2 (Riders aged 24+ are qualified for any motorcycle however if under the age of 24 the user will only be qualified for motorcycles up to 46Bhp)
                            <br /> <hr />
                            A (Any Motorcycle)
                          </p>
                        </Tooltip>
                      </div>
                    </div>
                    <div className="d-flex mt-4">
                      <button className={`${selectLicenseType === 'A1' ? 'btn-without-radius' : 'common-white-btn-without-radius'} margin-right-ten`} onClick={(e) => onChangeSelectedLicenseType(e, 'A1')}>A1</button>
                      <button className={`${selectLicenseType === 'A2' ? 'btn-without-radius' : 'common-white-btn-without-radius'} margin-right-ten`} onClick={(e) => onChangeSelectedLicenseType(e, 'A2')}>A2</button>
                      <button className={`${selectLicenseType === 'A' ? 'btn-without-radius' : 'common-white-btn-without-radius'} margin-right-ten`} onClick={(e) => onChangeSelectedLicenseType(e, 'A')}>A</button>
                    </div>
                    <div className="contact-form-field checkbox-field mt-4">
                      <button className="common-btn" onClick={toggleUpdateMobileModal}>Submit</button>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div className="account-grid" data-aos="fade-up">
                <div className="bank-details">
                  <div className="d-flex align-items-center account-update-field mb-4 justify-content-between ">
                    <h2 className="m-0">Bank Details</h2>
                    <button className="common-btn" onClick={toggleAddBankDetailsModal}>Add</button>
                  </div>
                  <div className="custom-table-main">
                    <table className="table" cellpedding="0" cellspacing="0">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Card Number</th>
                          <th scope="col">Name on card</th>
                          <th scope="col">Expiry date</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div className="contact-form-field radio-field">
                              <input type="radio" id="b1" name="radio-group" checked="" />
                              <label htmlFor="b1"></label>
                            </div>
                          </th>
                          <td>
                            **** **** 1258
                          </td>
                          <td>
                            John Smith
                          </td>
                          <td>01/2023</td>
                          <td>
                            <div className="dropdown table-row-popup">
                              <button className="row-dot btn dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v"></i>
                              </button>
                              <div className="dropdown-menu  row-action"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" data-toggle="modal"
                                  data-target="#bankdetailpopup">Edit</a>
                                <a className="dropdown-item">Delete</a>

                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="contact-form-field radio-field">
                              <input type="radio" id="b2" name="radio-group" checked="" />
                              <label htmlFor="b2"></label>
                            </div>
                          </th>
                          <td>
                            **** **** 1258
                          </td>
                          <td>
                            John Smith
                          </td>
                          <td>01/2023</td>
                          <td>
                            <div className="dropdown table-row-popup">
                              <button className="row-dot btn dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v"></i>
                              </button>
                              <div className="dropdown-menu  row-action"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" data-toggle="modal"
                                  data-target="#bankdetailpopup">Edit</a>
                                <a className="dropdown-item">Delete</a>

                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="contact-form-field radio-field">
                              <input type="radio" id="b3" name="radio-group" checked="" />
                              <label htmlFor="b3"></label>
                            </div>
                          </th>
                          <td>
                            **** **** 1258
                          </td>
                          <td>
                            John Smith
                          </td>
                          <td>01/2023</td>
                          <td>
                            <div className="dropdown table-row-popup">
                              <button className="row-dot btn dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v"></i>
                              </button>
                              <div className="dropdown-menu  row-action"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" data-toggle="modal"
                                  data-target="#bankdetailpopup">Edit</a>
                                <a className="dropdown-item">Delete</a>

                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="contact-form-field radio-field">
                              <input type="radio" id="b4" name="radio-group" checked={true} />
                              <label htmlFor="b4"></label>
                            </div>
                          </th>
                          <td>
                            **** **** 1258
                          </td>
                          <td>
                            John Smith
                          </td>
                          <td>01/2023</td>
                          <td>
                            <div className="dropdown table-row-popup">
                              <button className="row-dot btn dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v"></i>
                              </button>
                              <div className="dropdown-menu  row-action"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" data-toggle="modal"
                                  data-target="#bankdetailpopup">Edit</a>
                                <a className="dropdown-item">Delete</a>

                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="account-grid" data-aos="fade-up">
                <div className="bank-details">
                  <div className="d-flex align-items-center account-update-field mb-4 justify-content-between">
                    <h2 className="m-0">Business Information</h2>
                    <span className="pointer" onClick={toggleBusinessInformationSection}>
                      <i className="fas fa-sort-down"></i>
                    </span>
                  </div>
                  <Collapse isOpen={showBusinessInformationSection}>
                    <div className="collapsed" id="collapseExample">
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Legal Business Name <span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>business Phone Number <span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Street Address <span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Street Address2 <span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>City <span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Country (Optional) <span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Post Code<span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Full Legal Name<span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Full Address<span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Business Number<span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>Email<span className="float-sm-right">:</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                          <p>-</p>
                        </div>
                      </div>
                      <button className="common-btn mt-4" onClick={toggleUpdateBusinessModal}>Update</button>
                    </div>
                  </Collapse>
                </div>
              </div>
              <div className="account-grid" data-aos="fade-up">
                <div
                  className="d-flex align-items-center account-update-field mb-5 justify-content-between pr-sm-5 mr-sm-5">
                  <h2 className="m-0">Mobile Notifications</h2>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div
                  className="d-flex align-items-center account-update-field mb-4 justify-content-between pr-sm-5 mr-sm-5">
                  <h2 className="m-0">Email Notifications</h2>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="account-grid border-0" data-aos="fade-up">
                <div className="account-update-field">
                  <button className="common-btn" onClick={toggleAccountDeactivateModal}>Deactivate
                    my account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- deactivate account modal --> */}
      <Modal isOpen={showDeactivateAccountModal} toggle={toggleAccountDeactivateModal} className='loginPopupMain add-listing-main'>
        <ModalHeader toggle={toggleAccountDeactivateModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="login-inner">
            <h4 className="text-center mt-4">Are you sure?</h4>
            <p className="mt-3">Deactivating will permanently remove your account from the platform. If you wish
              to continue to use the platform after this action you will be required to create a new
              account
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button className="common-btn margin-right-five" onClick={toggleAccountDeactivateModal}>Yes</button>
            <button className="common-btn" onClick={toggleAccountDeactivateModal}>No</button>
          </div>
        </ModalBody>
      </Modal>
      {/* <!-- deactivate account modal --> */}

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

      {/* <!-- update business information modal --> */}
      <Modal isOpen={showUpdateBusinessDetailsModal} toggle={toggleUpdateBusinessModal} className='bank-detail-popup add-licence update-business-dialog'>
        <ModalHeader toggle={toggleUpdateBusinessModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="add-member-header text-center mb-5">
            <h2>
              Add basic information</h2>
          </div>
          <form>
            <div className="account-grid p-0 border-0">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Legal Business Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Business Phone Number" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Street Address" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Street Address2" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="City" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Country (Optional)" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Post Code" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Full Address" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Business Number" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form-field mb-4 ">
                    <input type="text" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="contact-form-field submit-contact text-center mt-5">
                <input type="Submit" value="Add" onClick={toggleUpdateBusinessModal} />
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
      {/* <!-- update business information modal --> */}

      {/* <!-- update password modal --> */}
      <Modal isOpen={showUpdatePasswordModal} toggle={toggleUpdatePasswordModal} className='loginPopupMain add-listing-main'>
        <ModalHeader toggle={toggleUpdatePasswordModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="login-inner">
            <form>
              <h2>Update your Password</h2>
              <div className="contact-form-field mb-3">
                <input type="email" placeholder="Old Password" />
              </div>
              <div className="contact-form-field mb-4">
                <input type="password" placeholder="New Password" />
              </div>
              <div className="contact-form-field mb-4">
                <input type="password" placeholder="Confirm Password" />
              </div>
              <div className="contact-form-field submit-contact text-center p-2">
                <input type="Submit" value="Update" onClick={toggleUpdatePasswordModal} />
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
      {/* <!-- update password modal --> */}

      {/* <!-- update mobile no modal --> */}
      <Modal isOpen={showUpdateMobileModal} toggle={toggleUpdateMobileModal} className='loginPopupMain add-listing-main'>
        <ModalHeader toggle={toggleUpdateMobileModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="login-inner">
            <form>
              <h2>Update your Mobile Number</h2>
              <div className="contact-form-field mb-3">
                <input type="email" placeholder="New Number" />
              </div>
              <div className="contact-form-field submit-contact text-center p-2">
                <input type="Submit" value="Update" onClick={toggleUpdateMobileModal} />
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
      {/* <!-- update mobile no modal --> */}

    </>
  );

  function toggleAccountDeactivateModal(e) {
    if (e) e.preventDefault();
    setShowDeactivateAccountModal(!showDeactivateAccountModal);
  };

  function toggleAddBankDetailsModal(e) {
    if (e) e.preventDefault();
    setShowAddBankDetailsModal(!showAddBankDetailsModal);
  };

  function toggleUpdateBusinessModal(e) {
    if (e) e.preventDefault();
    setShowUpdateBusinessDetailsModal(!showUpdateBusinessDetailsModal);
  };

  function toggleUpdatePasswordModal(e) {
    if (e) e.preventDefault();
    setShowUpdatePasswordModal(!showUpdatePasswordModal);
  };

  function toggleUpdateMobileModal(e) {
    if (e) e.preventDefault();
    setShowUpdateMobileModal(!showUpdateMobileModal);
  };

  function closeAllModal() {
    setShowDeactivateAccountModal(false);
    setShowAddBankDetailsModal(false);
    setShowUpdateBusinessDetailsModal(false);
    setShowUpdatePasswordModal(false);
    setShowUpdateMobileModal(false);
  };

  function toggleBusinessInformationSection() {
    setShowBusinessInformationSection(!showBusinessInformationSection);
  };

  function onImageUpload(e) {
    const { name, files } = e.target;

    setImagesData({
      ...imagesData,
      [name]: URL.createObjectURL(files[0])
    });
  };

  function toggleDriverLicencetooltip() {
    setDriverLicencetooltipOpen(!driverLicencetooltipOpen);
  };

  function togglePassportTooltip() {
    setPassportTooltipOpen(!passportTooltipOpen);
  };

  function toggleApprovalTooltip() {
    setApprovalTooltipOpen(!approvalTooltipOpen);
  }

  function toggleApprovalDropdown() {
    setApprovalDropdownOpen(prevState => !prevState);
  };

  function onChangeSelectedLicenseType(e, name) {
    e.preventDefault();
    setSelectLicenseType(name);
  };

  function toggleCVVPopover() {
    setOpenCVVPopover(!openCVVPopover);
  };

  function toggleShowApprovalContent() {
    setShowApprovalContent(!showApprovalContent);
  }
}
