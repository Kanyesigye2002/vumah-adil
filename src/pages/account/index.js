import React, { useState } from 'react';
import BankDetails from '../../components/bank-details';
import LoadingScreen from '../../components/LoadingScreen';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Switch } from '@mui/material';
import UpdatePasswordModal from './UpdatePasswordModal';
import UpdatePhoneNumberModal from './UpdatePhoneNumberModal';
import useAuth from '../../hooks/useAuth';
import useDroidDialog from '../../hooks/useDroidDialog';
import ApprovalStatus from './ApprovalStatus';
import AccountInformation from './AccountInformation';
import StaffTable from './StaffTable';
import UnauthorizedAccess from '../../layouts/authGuard/UnauthorizedAccess';
import Account from './Account';

export default function Index() {
  const { isAuthenticated } = useAuth();
  return <>{!isAuthenticated ? <UnauthorizedAccess /> : <Account />}</>;
}
