// material
import { Card, Button, Typography, CardHeader, CardContent } from '@mui/material';
// redux
import { Add } from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function CheckoutBillingInfo() {
  const { user } = useAuth();

  return (
    <Card sx={{ mb: 3 }} style={{ textAlign: 'start' }}>
      <CardHeader
        title="Billing Address"
        // action={
        //   <Button size="small" type="button" startIcon={<Add />} onClick={() => {}}>
        //     Add an Address
        //   </Button>
        // }
      />
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          {user.firstName} {user.lastName}&nbsp;
          <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
            (Default)
          </Typography>
        </Typography>
        <Typography variant="body2" gutterBottom>
          {user.address}, {user.address2}, {user.city} - ({user.country})
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {user.phoneNumber}
        </Typography>
      </CardContent>
    </Card>
  );
}
