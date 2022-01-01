import React from 'react';
import AddStaffMember from './AddStaffMemberNew';
import useDroidDialog from '../../hooks/useDroidDialog';
import StaffMembersListing from './StaffMembersListing';
import { Card } from '@mui/material';

function StaffTable() {

  const { onOpen } = useDroidDialog();

  return (
    <>
      <div className='col-md-6'>
        <div className='add-staff-member' data-aos='fade-up'>
          <div className='row align-items-center mb-4'>
            <div className='col-8'>
              <h2 className='m-0'>Add Staff members</h2>
            </div>
            <div className='col-4 text-right-align'>
              <button
                className='add-icon mr-2 p-0'
                onClick={() => onOpen('Add Staff Membern', <AddStaffMember />)}
              >
                <i className='fas fa-plus' />
              </button>
            </div>
          </div>
          <div className='custom-table-main'>
            <Card>
              <StaffMembersListing/>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffTable;