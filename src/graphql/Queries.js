import { gql } from '@apollo/client';

export const GET_USERS = gql`
  {
    users {
      id
      userName
      firstName
      lastName
      email
      cover
      phoneNumber
      isBusiness
      isVerified
      address
      address2
      city
      country
      postalCode
      businessNumber
      mobileNotifications
      emailNotifications
    }
  }
`;

export const GET_GROUP_ROLES = gql`
  {
    GetRoleGroups {
      id
      name
      roles {
        id
        name
      }
    }
  }
`;

export const GET_USER_CONTACTS = gql`
  {
    GetUserContacts {
      id
      unreadCount
      lastActivity
      status
      position
      lastMessage
      type
      owner1 {
        id
        userName
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
      }
      owner2 {
        id
        userName
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
      }
    }
  }
`;

export const GET_USER_CONTACT_BY_ID = gql`
  query GetUserContacts($id: ID!) {
    GetUserContacts(id: $id) {
      id
      unreadCount
      lastActivity
      status
      position
      lastMessage
      type
      messages {
        id
        body
        contentType
        createdAt
        attachments {
          id
          url
        }
        sender {
          id
          userName
          firstName
          lastName
          email
          cover
          phoneNumber
          isBusiness
          isVerified
          address
          address2
        }
        receiver {
          id
          userName
          firstName
          lastName
          email
          cover
          phoneNumber
          isBusiness
          isVerified
          address
          address2
        }
      }
      owner1 {
        id
        userName
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
      }
      owner2 {
        id
        userName
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
      }
    }
  }
`;

export const CREATE_CONTACT = gql`
  mutation CreateContact($receiverID: Int) {
    CreateVehicle(receiverID: $receiverID) {
      id
      unreadCount
      lastActivity
      status
      position
      lastMessage
      type
      owner1 {
        id
        userName
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
      }
      owner2 {
        id
        userName
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation CreateVehicle($contactID: Int, $message: MessageInput) {
    CreateVehicle(contactID: $contactID, message: $message) {
      status
      message
    }
  }
`;

export const GET_STAFF_MEMBERS = gql`
  {
    GetStaffMembers {
      roleGroup {
        id
        name
        roles {
          id
          name
        }
      }
      user {
        id
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
        city
      }
      company {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    GetUserByEmail(email: $email) {
      id
      userName
      firstName
      lastName
      email
      cover
      phoneNumber
      isBusiness
      isVerified
      address
      address2
      city
      country
    }
  }
`;

export const GET_CURRENT_USER = gql`
  {
    GetCurrentUser {
      id
      userName
      firstName
      lastName
      email
      cover
      phoneNumber
      isBusiness
      isVerified
      address
      address2
      city
      country
      postalCode
      businessNumber
      businessName
      mobileNotifications
      emailNotifications
    }
  }
`;

export const LOGIN = gql`
  mutation login($userName: String, $password: String) {
    login(userName: $userName, password: $password) {
      token
      user {
        id
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
        city
        country
        postalCode
        businessNumber
        businessName
        mobileNotifications
        emailNotifications
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation CreateUser($user: UserInput) {
    CreateUser(user: $user) {
      status
      message
    }
  }
`;

export const REGISTER_VEHICLE = gql`
  mutation CreateVehicle($vehicle: VehicleInput) {
    CreateVehicle(vehicle: $vehicle) {
      status
      message
    }
  }
`;

export const GET_VEHICLE_DETAILS = gql`
  query VehicleDetailsByReg($reg: String) {
    VehicleDetailsByReg(reg: $reg) {
      Fuel
      Year
      Make
      Model
      Colour
      WheelPlan
      Taxed
    }
  }
`;

export const GET_USER_VEHICLES = gql`
  {
    GetUserVehicles {
      id
      name
      reg
      vehicleType
      description
      make
      model
      fuelType
      year
      mileage
      hourlyRates
      dailyRates
      description
      status
      availability {
        id
        timeType
        label
        dayStart
        dayEnd
      }
      images {
        id
        url
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUserInfo($user: UserInput) {
    UpdateUserInfo(user: $user) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const SEND_EMAIL_VERIFICATION = gql`
  mutation CreateMailVerification($userName: String) {
    CreateMailVerification(userName: $userName) {
      status
      message
    }
  }
`;

export const EMAIL_VERIFICATION = gql`
  mutation VerifyEmail($token: String) {
    VerifyEmail(token: $token) {
      status
      message
    }
  }
`;

export const SEND_CREATE_FORGOT_PASSWORD = gql`
  mutation CreateForgotPassword($userName: String) {
    CreateForgotPassword(userName: $userName) {
      status
      message
    }
  }
`;

export const FORGOT_PASSWORD_VERIFICATION = gql`
  mutation VerifyForgotPassword($token: String) {
    VerifyForgotPassword(token: $token) {
      status
      message
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation CreateNewPassword($updatePassword: UpdatePassword) {
    CreateNewPassword(updatePassword: $updatePassword) {
      status
      message
    }
  }
`;

export const PASSWORD_VERIFICATION = gql`
  mutation VerifyNewPassword($token: String) {
    VerifyNewPassword(token: $token) {
      status
      message
    }
  }
`;

export const UPDATE_PHONE_NUMBER = gql`
  mutation CreateNewNumber($number: String) {
    CreateNewNumber(number: $number) {
      status
      message
    }
  }
`;

export const PHONE_NUMBER_VERIFICATION = gql`
  mutation VerifyNewNumber($token: String) {
    VerifyNewNumber(token: $token) {
      status
      message
    }
  }
`;

export const CREATE_PAYMENT_CARD = gql`
  mutation CreateCard($paymentCard: PaymentCardInput) {
    CreateCard(paymentCard: $paymentCard) {
      cardName
      cardNumber
    }
  }
`;

export const CREATE_STAFF_MEMBER = gql`
  mutation CreateStaff($userName: String, $companyRoleGroup: CompanyRoleGroupInput) {
    CreateStaff(userName: $userName, companyRoleGroup: $companyRoleGroup) {
      user {
        id
        firstName
        lastName
        email
        cover
        phoneNumber
        isBusiness
        isVerified
        address
        address2
        city
      }
      company {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
