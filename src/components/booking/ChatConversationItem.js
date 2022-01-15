import { last } from 'lodash';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
// material
import { styled } from '@mui/material/styles';
import { Box, Avatar, ListItemText, ListItemAvatar, ListItemButton } from '@mui/material';
//
import BadgeStatus from '../BadgeStatus';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

const AVATAR_SIZE = 48;
const AVATAR_SIZE_GROUP = 32;

const RootStyle = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  transition: theme.transitions.create('all')
}));

const AvatarWrapperStyle = styled('div')({
  position: 'relative',
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  '& .MuiAvatar-img': { borderRadius: '50%' },
  '& .MuiAvatar-root': { width: '100%', height: '100%' }
});

// ----------------------------------------------------------------------

const getDetails = (conversation, currentUserId) => {
  const otherParticipants = conversation.participants.filter((participant) => participant.id !== currentUserId);
  const displayNames = otherParticipants.reduce((names, participant) => [...names, participant.name], []).join(', ');
  let displayText = '';
  const lastMessage = conversation.messages[conversation.messages.length - 1];
  if (lastMessage) {
    const sender = lastMessage.senderId === currentUserId ? 'You: ' : '';
    const message = lastMessage.contentType === 'image' ? 'Sent a photo' : lastMessage.body;
    displayText = `${sender}${message}`;
  }
  return { otherParticipants, displayNames, displayText };
};

ChatConversationItem.propTypes = {
  isSelected: PropTypes.bool,
  conversation: PropTypes.object.isRequired,
  isOpenSidebar: PropTypes.bool,
  onSelectConversation: PropTypes.func
};

export default function ChatConversationItem({ isSelected, conversation, isOpenSidebar, onSelectConversation }) {
  // const details = getDetails(conversation, '8864c717-587d-472a-929a-8e5f298024da-0');
  const details = conversation;
  const lastActivity = conversation.lastActivity;
  const isUnread = lastActivity.read;

  const { user } = useAuth();

  const findParticipant = () => {
    if (user.id !== conversation.owner1.id) return conversation.owner1;
    if (user.id !== conversation.owner2.id) return conversation.owner2;

    return {};
  };

  const participant = findParticipant();

  const isOnlineGroup = false;

  return (
    <RootStyle
      onClick={onSelectConversation}
      sx={{
        ...(isSelected && { bgcolor: 'action.selected' })
      }}
    >
      <ListItemAvatar>
        <Box>
          <AvatarWrapperStyle className="avatarWrapper" key={participant.id}>
            <Avatar alt={participant.userName} src={participant.avatar} />
            <BadgeStatus status={participant.status} sx={{ right: 2, bottom: 2, position: 'absolute' }} />
          </AvatarWrapperStyle>

          {isOnlineGroup && <BadgeStatus status="online" sx={{ right: 2, bottom: 2, position: 'absolute' }} />}
        </Box>
      </ListItemAvatar>

      {isOpenSidebar && (
        <>
          <ListItemText
            primary={participant.firstName + ' ' + participant.lastName}
            primaryTypographyProps={{
              noWrap: true,
              variant: 'subtitle2'
            }}
            secondary={lastActivity.message}
            secondaryTypographyProps={{
              noWrap: true,
              variant: isUnread ? 'subtitle2' : 'body2',
              color: isUnread ? 'textPrimary' : 'textSecondary'
            }}
          />

          <Box
            sx={{
              ml: 2,
              height: 44,
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column'
            }}
          >
            <Box
              sx={{
                mb: 1.25,
                fontSize: 12,
                lineHeight: '22px',
                whiteSpace: 'nowrap',
                color: 'text.disabled'
              }}
            >
              {formatDistanceToNowStrict(new Date(lastActivity.date), {
                addSuffix: false
              })}
            </Box>
            {isUnread && <BadgeStatus status="unread" size="small" />}
          </Box>
        </>
      )}
    </RootStyle>
  );
}
