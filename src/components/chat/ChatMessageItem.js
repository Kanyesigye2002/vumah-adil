import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
// material
import { styled } from '@mui/material/styles';
import { Avatar, Box, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import VehicleRequestMessage from './BookingMessages/VehicleRequestMessage';
import BookingChangeRequest from './BookingMessages/BookingChangeRequest';
import BookingCancel from './BookingMessages/BookingCancel';
import BookingDeclined from './BookingMessages/BookingDeclined';
import BookingRequest from './BookingMessages/BookingRequest';
import BookingAccepted from './BookingMessages/BookingAccepted';
import BookingRequestDeclined from './BookingMessages/BookingRequestDeclined';
import BookingRequestAccepted from './BookingMessages/BookingRequestAccepted';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(3)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 460,
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral
}));

const InfoStyle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(0.75),
  color: theme.palette.text.secondary
}));

const MessageImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  cursor: 'pointer',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up('md')]: {
    height: 200,
    minWidth: 296
  }
}));

// ----------------------------------------------------------------------

ChatMessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  conversation: PropTypes.object.isRequired,
  onOpenLightbox: PropTypes.func
};

export default function ChatMessageItem({ message, onOpenLightbox }) {
  const { user } = useAuth();

  const senderDetails = message.sender;

  const isMe = message.sender.id === user.id;
  const isImage = message.contentType === 'image';
  const firstName = message.sender.firstName;

  const getMessageBody = () => {
    console.log('Message: ', message);

    if (message.booking !== null) {
      if (message.booking.isAccepted) return <BookingAccepted message={message} />;
      if (message.booking.isDeclined) return <BookingDeclined message={message} />;
      return <BookingRequest message={message} />;
    }
    if (message.bookingChangeRequest !== null) {
      if (message.bookingChangeRequest.isAccepted) return <BookingRequestAccepted message={message} />;
      if (message.bookingChangeRequest.isDeclined) return <BookingRequestDeclined message={message} />;
      return <BookingChangeRequest message={message} />;
    }
    if (message.cancelBooking !== null) return <BookingCancel message={message} />;
    return (
      <>
        {isImage ? (
          <MessageImgStyle alt="attachment" src={message.body} onClick={() => onOpenLightbox(message.body)} />
        ) : (
          <Typography variant="body2">{message.body}</Typography>
        )}
      </>
    );
  };

  return (
    <RootStyle>
      <Box
        sx={{
          display: 'flex',
          ...(isMe && {
            ml: 'auto'
          })
        }}
      >
        {!isMe && (
          <Avatar alt={senderDetails.firstName} src={senderDetails.avatar} sx={{ width: 32, height: 32, mr: 2 }} />
        )}

        <div>
          <InfoStyle variant="caption" sx={{ ...(isMe && { justifyContent: 'flex-end' }) }}>
            {!isMe && `${firstName},`}&nbsp;
            {formatDistanceToNowStrict(new Date(message.createdAt), {
              addSuffix: true
            })}
          </InfoStyle>

          <ContentStyle
            sx={{
              ...(isMe && { color: 'grey.800', bgcolor: 'primary.lighter' }),
              ...(isImage && { p: 0 })
            }}
          >
            {getMessageBody()}
          </ContentStyle>
        </div>
      </Box>
    </RootStyle>
  );
}
