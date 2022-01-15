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
      lastActivity {
        id
        userId
        message
        date
        unread
        read
      }
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
      bookings {
        id
        earning
        startTime
        endTime
        declineReason
        isAccepted
        isDeclined
        isCancelled
        isLateReturn
        isCheckInComplete
        isCheckOutComplete
        vehicleRented {
          id
          name
          reg
          vehicleType
          make
          model
          fuelType
          year
          mileage
          hourlyRates
          dailyRates
          freeCancellation
          cancellationPercentage
          cancellationDescription
          description
          status
          user {
            id
            email
            firstName
            lastName
            avatarUrl
          }
          location {
            id
            address
            city
            area
            state
            placeId
            lat
            lng
          }
          features {
            id
            name
          }
          images {
            id
            url
          }
        }
      }
    }
  }
`;

export const GET_USER_CONTACT_BY_ID = gql`
  query GetUserContactById($id: ID!) {
    GetUserContactById(id: $id) {
      id
      unreadCount
      lastActivity {
        id
        userId
        message
        date
        unread
        read
      }
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
        bookingChangeRequest {
          id
          isAccepted
          isDeclined
          declineReason
          startTime
          endTime
          booking {
            id
            earning
            startTime
            vehicleRented {
              id
              name
              reg
              vehicleType
              description
              make
              model
              hourlyRates
              dailyRates
              freeCancellation
              cancellationPercentage
              cancellationDescription
            }
          }
        }
        cancelBooking {
          id
          confirmed
          reason
          description
          booking {
            id
            earning
            startTime
            vehicleRented {
              id
              name
              reg
              vehicleType
              description
              make
              model
              hourlyRates
              dailyRates
              freeCancellation
              cancellationPercentage
              cancellationDescription
            }
          }
        }
        booking {
          id
          earning
          startTime
          endTime
          declineReason
          isAccepted
          isDeclined
          isCancelled
          isLateReturn
          isCheckInComplete
          isCheckOutComplete
          vehicleRented {
            id
            name
            reg
            vehicleType
            make
            model
            fuelType
            year
            mileage
            hourlyRates
            dailyRates
            freeCancellation
            cancellationPercentage
            cancellationDescription
            description
            status
            user {
              id
              email
              firstName
              lastName
              avatarUrl
            }
            location {
              id
              address
              city
              area
              state
              placeId
              lat
              lng
            }
            features {
              id
              name
            }
            images {
              id
              url
            }
          }
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
      bookings {
        id
        earning
        startTime
        endTime
        declineReason
        isAccepted
        isDeclined
        isCancelled
        isLateReturn
        isCheckInComplete
        isCheckOutComplete
        vehicleRented {
          id
          name
          reg
          vehicleType
          make
          model
          fuelType
          year
          mileage
          hourlyRates
          dailyRates
          freeCancellation
          cancellationPercentage
          cancellationDescription
          description
          status
          user {
            id
            email
            firstName
            lastName
            avatarUrl
          }
          location {
            id
            address
            city
            area
            state
            placeId
            lat
            lng
          }
          features {
            id
            name
          }
          images {
            id
            url
          }
        }
      }
    }
  }
`;

export const GET_USER_CONTACT_BY_ID_S = gql`
  subscription GetUserContactById($id: ID!) {
    GetUserContactById(id: $id) {
      id
      unreadCount
      lastActivity {
        id
        userId
        message
        date
        unread
        read
      }
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
        booking {
          id
          earning
          startTime
          endTime
          isCancelled
          isLateReturn
          isCheckInComplete
          isCheckOutComplete
          vehicleRented {
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
            freeCancellation
            cancellationPercentage
            cancellationDescription
            description
            status
            user {
              id
              email
              firstName
              lastName
              avatarUrl
            }
            location {
              id
              address
              city
              area
              state
              placeId
              lat
              lng
            }
            features {
              id
              name
            }
            images {
              id
              url
            }
          }
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
    CreateContact(receiverID: $receiverID) {
      id
      unreadCount
      lastActivity {
        id
        userId
        message
        date
        unread
        read
      }
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
  mutation SendMessage($contactID: Int, $message: MessageInput) {
    SendMessage(contactID: $contactID, message: $message) {
      status
      message
    }
  }
`;

export const GET_USER_MESSAGE_CONTACTS = gql`
  {
    GetUserMessageContacts {
      id
      unreadCount
      lastActivity {
        id
        userId
        message
        date
        unread
        read
      }
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

export const GET_USER_MESSAGE_CONTACT_BY_ID = gql`
  query GetUserMessageContactById($id: ID!) {
    GetUserMessageContactById(id: $id) {
      id
      unreadCount
      lastActivity {
        id
        userId
        message
        date
        unread
        read
      }
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

export const CREATE_MESSAGE_CONTACT = gql`
  mutation CreateMessageContact($receiverID: Int) {
    CreateMessageContact(receiverID: $receiverID) {
      id
      unreadCount
      lastActivity {
        id
        userId
        message
        date
        unread
        read
      }
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

export const SEND_MESSAGE_CONTACT = gql`
  mutation SendMessageContact($contactID: Int, $message: MessageInput) {
    SendMessageContact(contactID: $contactID, message: $message) {
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
      favorites {
        id
        make
        model
        images {
          id
          url
        }
      }
      paymentCards {
        id
        cardName
        cardNumber
        cardExpired
        cardCvv
      }
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
        favorites {
          id
          make
          model
          images {
            id
            url
          }
        }
        paymentCards {
          id
          cardName
          cardNumber
          cardExpired
          cardCvv
        }
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

export const VEHICLE_ADD_TO_FAVOURITES = gql`
  mutation AddFavoritesToUser($vehicleID: ID) {
    AddFavoritesToUser(vehicleID: $vehicleID) {
      status
      message
    }
  }
`;

export const VEHICLE_REMOVE_FROM_FAVOURITES = gql`
  mutation RemoveFavoritesFromUser($vehicleID: ID) {
    RemoveFavoritesFromUser(vehicleID: $vehicleID) {
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

export const GET_VEHICLE_BY_ID = gql`
  query VehicleById($id: ID) {
    VehicleById(id: $id) {
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
      description
      hourlyRates
      dailyRates
      freeCancellation
      cancellationPercentage
      cancellationDescription
      status
      user {
        id
        email
        firstName
        lastName
        avatarUrl
      }
      location {
        id
        address
        city
        area
        state
        placeId
        lat
        lng
      }
      reviews {
        id
        Head
        comment
        rating
        postedAt
        user {
          id
          email
          firstName
          lastName
          avatarUrl
        }
      }
      features {
        id
        name
      }
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

export const GET_USER_FAVORITES = gql`
  {
    GetUserFavorites {
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
      user {
        id
        email
        firstName
        lastName
        avatarUrl
      }
      location {
        id
        address
        city
        area
        state
        placeId
        lat
        lng
      }
      reviews {
        id
        Head
        comment
        rating
        postedAt
        user {
          id
          email
          firstName
          lastName
          avatarUrl
        }
      }
      features {
        id
        name
      }
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

export const GET_VEHICLES = gql`
  {
    Vehicles {
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

export const GET_USER_PROFILE = gql`
  {
    GetCurrentUserProfile {
      firstName
      lastName
      userName
      cover
      avatarUrl
      description
      hostLevel
      responseTime
      responseRate
      vehicles
      reviews
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateUserProfile($newProfile: ProfileInput) {
    UpdateUserProfile(newProfile: $newProfile) {
      firstName
      lastName
      userName
      cover
      avatarUrl
      description
      hostLevel
      responseTime
      responseRate
      vehicles
      reviews
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

export const CREATE_BOOKING = gql`
  mutation CreateBooking($bookingRequest: BookingRequest) {
    CreateBooking(bookingRequest: $bookingRequest) {
      booking {
        id
        startTime
        endTime
        vehicleRented {
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
          user {
            id
            email
            firstName
            lastName
            avatarUrl
          }
          location {
            id
            address
            city
            area
            state
            placeId
            lat
            lng
          }
          reviews {
            id
            Head
            comment
            rating
            postedAt
            user {
              id
              email
              firstName
              lastName
              avatarUrl
            }
          }
          features {
            id
            name
          }
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
      contact {
        id
      }
    }
  }
`;

export const ACCEPT_BOOKING = gql`
  mutation AcceptBooking($bookingID: ID) {
    AcceptBooking(bookingID: $bookingID) {
      id
    }
  }
`;

export const DECLINE_BOOKING = gql`
  mutation DeclineBooking($bookingID: ID, $reason: String) {
    DeclineBooking(bookingID: $bookingID, reason: $reason) {
      id
    }
  }
`;

export const CANCEL_BOOKING = gql`
  mutation CancelBooking($bookingID: ID, $reason: String, $description: String) {
    CancelBooking(bookingID: $bookingID, reason: $reason, description: $description) {
      id
    }
  }
`;

export const REQUEST_BOOKING_CHANGE = gql`
  mutation RequestBookingChange($bookingID: ID, $startTime: String, $endTime: String) {
    RequestBookingChange(bookingID: $bookingID, startTime: $startTime, endTime: $endTime) {
      id
    }
  }
`;

export const ACCEPT_BOOKING_CHANGE = gql`
  mutation AcceptBookingChange($bookingID: ID) {
    AcceptBookingChange(bookingID: $bookingID) {
      id
    }
  }
`;

export const DECLINE_BOOKING_CHANGE = gql`
  mutation DeclineBookingChange($bookingID: ID, $reason: String) {
    DeclineBookingChange(bookingID: $bookingID, reason: $reason) {
      id
    }
  }
`;
