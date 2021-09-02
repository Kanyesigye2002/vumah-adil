import SkeletonAvatar from 'antd/lib/skeleton/Avatar';
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Collapse } from 'reactstrap';
import Avatar from '../../assets/img/avatar.png';
import BankDetails from '../../components/bank-details';

export default function Account() {

  const [showDeactivateAccountModal, setShowDeactivateAccountModal] = useState(false);
  const [showSorryToSeeYouGoModal, setShowSorryToSeeYouGoModal] = useState(false);
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [showAddBankDetailsModal, setShowAddBankDetailsModal] = useState(false);
  const [showUpdateBusinessDetailsModal, setShowUpdateBusinessDetailsModal] = useState(false);
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);
  const [showUpdateMobileModal, setShowUpdateMobileModal] = useState(false);
  const [file, setFile] = useState("");
  const [avatar, setAvatar] = useState("");

  const [showBusinessInformationSection, setShowBusinessInformationSection] = useState(true);

  const [imagesData, setImagesData] = useState({
    frontOfLicence: null,
    backOfLicence: null
  });

  const handleUplooad = (event) => {
    setFile(event.target.files[0]);
  }

  const handleProfileUpload = (event => {
    setAvatar(event.target.files[0]);
  });

  const modalCloseBtn = <button type="button" className="btn close p-0" onClick={closeAllModal}>
    <span aria-hidden="true"><i className="fas fa-times-circle fa-lg"></i></span>
  </button>;

  return (
    <>
      <section className="account-main padd-top-60 padd-bottom-60">
        <div className="container">
          <div className="service-header  mb-5">
            <h2>Account</h2>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="account-grid" data-aos="fade-up">
                <div className="account-profile-box mb-4">
                  <div className="circle account-profile">
                    {file && (
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                    )}
                  </div>
                  <div className="p-image account-profile-icon">
                    <label htmlFor="plus-up" className="m-0 pointer"><i className="fas fa-plus"></i></label>
                    <input id="plus-up" onChange={handleUplooad} className="file-upload" type="file" accept="image/*" />
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
                </div>
                <div className="status-number">
                  <p className="mb-3">Company House Number</p>
                  <div className="d-flex align-items-center">
                    <span className="margin-right-ten">00 44 303 123 4500</span>
                    <p className="ml-3"><i className="fas fa-check margin-right-five"></i>Approved</p>
                  </div>
                </div>
                <div className="bank-details mt-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="contact-form-field mb-2">
                        <label className="text-dark-white">Licence Details</label>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="box Licence-upload-grid ">
                            <div className="js--image-preview" style={{ backgroundImage: `url(${imagesData.frontOfLicence})` }}></div>
                            <div className="upload-options">
                              <label className="m-0 w-100 h-100">
                                <i className="fas fa-cloud-upload-alt margin-right-five"></i>
                                Upload front of Licence
                                <input type="file" className="image-upload" name='frontOfLicence' accept="image/*" onChange={onImageUpload} />
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
                                <input type="file" className="image-upload" name='backOfLicence' accept="image/*" onChange={onImageUpload} />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="status-number mt-4">
                        <p><i className="fas fa-check margin-right-five"></i>Approved</p>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <BankDetails />
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
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="add-staff-member" data-aos="fade-up">
                <div className="row align-items-center mb-4">
                  <div className="col-8">
                    <h2 className="m-0">Add Staff members</h2>
                  </div>
                  <div className="col-4 text-right-align">
                    <button className="add-icon mr-2 p-0" onClick={toggleAddStaffModal}><i
                      className="fas fa-plus"></i></button>
                  </div>
                </div>
                <div className="custom-table-main">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Admin Acces</th>
                        <th scope="col">Last login Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="header-profile m-0">
                            <div className="header-profile-img">
                              <i className="fas fa-user"></i>
                            </div>
                          </div>
                        </th>
                        <td>Aloe waealay</td>
                        <td>Aloe55@gmail.com</td>
                        <td>Account Owner</td>
                        <td>May 10 2021,02:30</td>
                        <td>
                          <div className="dropdown table-row-popup">
                            <button className="row-dot btn dropdown-toggle" type="button"
                              id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              <i className="fas fa-ellipsis-v"></i>
                            </button>
                            <div className="dropdown-menu  row-action"
                              aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" data-toggle="modal"
                                data-target="#add-staff-member">Edit</a>
                              <a className="dropdown-item">Delete</a>

                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="header-profile m-0">
                            <div className="header-profile-img">
                              <i className="fas fa-user"></i>
                            </div>
                          </div>
                        </th>
                        <td>Aloe waealay</td>
                        <td>Aloe55@gmail.com</td>
                        <td>Account Owner</td>
                        <td>May 10 2021,02:30</td>
                        <td>
                          <div className="dropdown table-row-popup">
                            <button className="row-dot btn dropdown-toggle" type="button"
                              id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              <i className="fas fa-ellipsis-v"></i>
                            </button>
                            <div className="dropdown-menu  row-action"
                              aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" data-toggle="modal"
                                data-target="#add-staff-member">Edit</a>
                              <a className="dropdown-item">Delete</a>

                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="header-profile m-0">
                            <div className="header-profile-img">
                              <i className="fas fa-user"></i>
                            </div>
                          </div>
                        </th>
                        <td>Aloe waealay</td>
                        <td>Aloe55@gmail.com</td>
                        <td>Account Owner</td>
                        <td>May 10 2021,02:30</td>
                        <td>
                          <div className="dropdown table-row-popup">
                            <button className="row-dot btn dropdown-toggle" type="button"
                              id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              <i className="fas fa-ellipsis-v"></i>
                            </button>
                            <div className="dropdown-menu  row-action"
                              aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" data-toggle="modal"
                                data-target="#add-staff-member">Edit</a>
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
          </div>
        </div>
      </section>

      {/* <!-- deactivate account modal --> */}
      <Modal isOpen={showDeactivateAccountModal} toggle={toggleAccountDeactivateModal} className='loginPopupMain add-listing-main'>
        <ModalHeader toggle={toggleAccountDeactivateModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="login-inner">
            <h4 className="text-center mt-4 text-dark-white">Are you sure?</h4>
            <p className="mt-3 text-dark-white">Deactivating will permanently remove your account from the platform. If you wish
              to continue to use the platform after this action you will be required to create a new
              account
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button className="common-btn margin-right-five" onClick={toggleAccountDeactivateAndShowSorryToSeeYouGoModal}>Yes</button>
            <button className="common-btn" onClick={toggleAccountDeactivateModal}>No</button>
          </div>
        </ModalBody>
      </Modal>
      {/* <!-- deactivate account modal --> */}

      {/* <!-- deactivate account modal --> */}
      <Modal isOpen={showSorryToSeeYouGoModal} toggle={toggleSorryToSeeYouGoModal} className='loginPopupMain add-listing-main'>
        <ModalHeader toggle={toggleSorryToSeeYouGoModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="login-inner">
            <h5 className="text-center mb-2 text-dark-white">Sorry to see you go!</h5>
          </div>
          {/* <div className="d-flex justify-content-center align-items-center mt-4">
            <button className="common-btn margin-right-five" onClick={toggleSorryToSeeYouGoModal}>OK</button>
          </div> */}
        </ModalBody>
      </Modal>
      {/* <!-- deactivate account modal --> */}

      {/* <!-- add staff member modal --> */}
      <Modal isOpen={showAddStaffModal} toggle={toggleAddStaffModal} className='addstaffMember-main'>
        <ModalHeader toggle={toggleAddStaffModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="add-member-header text-center mb-5">
            <h2>
              Add Staff Members</h2>
          </div>
          <form>
            <div className="account-grid p-0 border-0">
              <div className="account-profile-box mb-4">
                <div className="circle account-profile">
                  {avatar ? (
                      <img src={URL.createObjectURL(avatar)} alt={avatar.name} />
                    ): (
                      <img src={Avatar} alt="avatar" />
                    )}
                </div>
                <div className="p-image account-profile-icon">
                  <label for="avatar" className="m-0"><i className="fas fa-plus"></i></label>
                  <input id="avatar" className="file-upload" onChange={handleProfileUpload} type="file" accept="image/*" />
                </div>
              </div>

              <div className="contact-form-field mb-4 ">
                <input type="text" placeholder="Name" />
              </div>
              <div className="contact-form-field mb-4 ">
                <input type="email" placeholder="Email" />
              </div>
              <div className="contact-form-field mb-4 ">
                <div className="select-outer">
                  <select>
                    <option disabled selected hidden>Admin Level</option>
                    <option>Admin Level 1</option>
                    <option>Admin Level 2</option>
                  </select>
                </div>
              </div>
              <div className="contact-form-field submit-contact text-center mt-4">
                <input type="Submit" value="Add" onClick={toggleAddStaffModal} />
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
      {/* <!-- add staff member modal --> */}

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
                        aria-label="Security Code" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <span className="input-group-text h-100" id="basic-addon2">
                          <i className="fas fa-info-circle"></i>
                        </span>
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
                    <input type="text" placeholder="Street Address 2" />
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
              </div>
              <div className="contact-form-field submit-contact text-center mt-5">
                <input type="Submit" value="Save" onClick={toggleUpdateBusinessModal} />
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
  }

  function toggleAccountDeactivateAndShowSorryToSeeYouGoModal(e) {
    if (e) e.preventDefault();
    setShowDeactivateAccountModal(false);
    setShowSorryToSeeYouGoModal(true);
  };

  function toggleSorryToSeeYouGoModal(e) {
    if (e) e.preventDefault();
    setShowSorryToSeeYouGoModal(!showSorryToSeeYouGoModal);
  };

  function toggleAddStaffModal(e) {
    if (e) e.preventDefault();
    setShowAddStaffModal(!showAddStaffModal);
    setAvatar("");
  }

  function toggleAddBankDetailsModal(e) {
    if (e) e.preventDefault();
    setShowAddBankDetailsModal(!showAddBankDetailsModal);
  }

  function toggleUpdateBusinessModal(e) {
    if (e) e.preventDefault();
    setShowUpdateBusinessDetailsModal(!showUpdateBusinessDetailsModal);
  }

  function toggleUpdatePasswordModal(e) {
    if (e) e.preventDefault();
    setShowUpdatePasswordModal(!showUpdatePasswordModal);
  }

  function toggleUpdateMobileModal(e) {
    if (e) e.preventDefault();
    setShowUpdateMobileModal(!showUpdateMobileModal);
  }

  function closeAllModal() {
    setShowDeactivateAccountModal(false);
    setShowAddStaffModal(false);
    setShowAddBankDetailsModal(false);
    setShowUpdateBusinessDetailsModal(false);
    setShowUpdatePasswordModal(false);
    setShowUpdateMobileModal(false);
    setShowSorryToSeeYouGoModal(false);
  }

  function toggleBusinessInformationSection() {
    setShowBusinessInformationSection(!showBusinessInformationSection);
  }

  function onImageUpload(e) {
    const { name, files } = e.target;

    setImagesData({
      ...imagesData,
      [name]: URL.createObjectURL(files[0])
    });
  }
}
