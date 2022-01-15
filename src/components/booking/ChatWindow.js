import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
// material
import { Box, Divider, Stack } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store/store';
import {
  addRecipients,
  onSendMessage,
  getConversation,
  getParticipants,
  markConversationAsRead,
  resetActiveConversation
} from '../../redux/slices/chat';
//
import ChatRoom from './ChatRoom';
import ChatMessageList from './ChatMessageList';
import ChatHeaderDetail from './ChatHeaderDetail';
import ChatMessageInput from './ChatMessageInput';
import ChatHeaderCompose from './ChatHeaderCompose';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_CONTACT_BY_ID, GET_WEATHER_QUERY, SEND_MESSAGE } from '../../graphql/Queries';

// ----------------------------------------------------------------------

const conversationSelector = (state) => {
  const { conversations, activeConversationId } = state.chat;
  const conversation = activeConversationId ? conversations.byId[activeConversationId] : null;
  if (conversation) {
    return conversation;
  }
  const initState = {
    id: '',
    messages: [],
    participants: [],
    unreadCount: 0,
    type: ''
  };
  return initState;
};

export default function ChatWindow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { conversationKey } = useParams();

  const { contacts, recipients, participants, activeConversationId } = useSelector((state) => state.chat);
  // const conversation = useSelector((state) => conversationSelector(state));

  const [GetUserContactById, { data, error, loading }] = useLazyQuery(GET_USER_CONTACT_BY_ID, {
    variables: { id: conversationKey }
  });

  const mode = conversationKey ? 'DETAIL' : 'COMPOSE';
  // const displayParticipants = participants.filter((item) => item.id !== '8864c717-587d-472a-929a-8e5f298024da-0');

  useEffect(() => {
    const getDetails = async () => {
      try {
        await GetUserContactById();
      } catch (error) {
        console.error(error);
        navigate('chat/new');
      }
    };
    if (conversationKey) {
      getDetails().then((r) => {
        // console.log('conversations: ', data, error, loading);
      });
    } else if (activeConversationId) {
      dispatch(resetActiveConversation());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationKey]);

  // useEffect(() => {
  //   const getDetails = async () => {
  //     dispatch(getParticipants(conversationKey));
  //     try {
  //       await dispatch(getConversation(conversationKey));
  //     } catch (error) {
  //       console.error(error);
  //       navigate('chat/new');
  //     }
  //   };
  //   if (conversationKey) {
  //     getDetails();
  //   } else if (activeConversationId) {
  //     dispatch(resetActiveConversation());
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [conversationKey]);
  //
  // useEffect(() => {
  //   if (activeConversationId) {
  //     dispatch(markConversationAsRead(activeConversationId));
  //   }
  // }, [dispatch, activeConversationId]);
  //
  // const handleAddRecipients = (recipients) => {
  //   dispatch(addRecipients(recipients));
  // };

  return (
    <Stack sx={{ flexGrow: 1, minWidth: '1px' }}>
      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        {!loading && data && (
          <>
            <Stack sx={{ flexGrow: 1 }}>
              {mode === 'DETAIL' && (
                <>
                  <ChatHeaderDetail conversation={data.GetUserContactById} />

                  <Divider />
                </>
              )}
              <ChatMessageList conversation={data.GetUserContactById} />

              <Divider />

              <ChatMessageInput conversationId={conversationKey} disabled={pathname === 'chat/new'} />
            </Stack>

            {mode === 'DETAIL' && <ChatRoom contact={data.GetUserContactById} />}
          </>
        )}
      </Box>
    </Stack>
  );
}
