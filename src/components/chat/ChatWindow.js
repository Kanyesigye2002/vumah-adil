import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
// material
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../redux/store';
//
import ChatRoom from './ChatRoom';
import ChatMessageList from './ChatMessageList';
import ChatHeaderDetail from './ChatHeaderDetail';
import ChatMessageInput from './ChatMessageInput';
import { useLazyQuery, useSubscription } from '@apollo/client';
import { GET_USER_CONTACT_BY_ID, GET_USER_CONTACT_BY_ID_S, SEND_MESSAGE } from '../../graphql/Queries';
import { motion } from 'framer-motion';
import { varFadeInDown } from '../animate';

// ----------------------------------------------------------------------

export default function ChatWindow() {
  const { pathname } = useLocation();
  const { conversationKey } = useParams();

  const [GetUserContactById, { data, error, loading }] = useLazyQuery(GET_USER_CONTACT_BY_ID, {
    variables: { id: conversationKey }
  });

  // const { data, error, loading } = useSubscription(GET_USER_CONTACT_BY_ID_S, {
  //   variables: { id: conversationKey }
  // });

  console.log('Data: ', loading, data, error);

  const mode = conversationKey ? 'DETAIL' : 'COMPOSE';

  useEffect(() => {
    const getDetails = async () => {
      try {
        await GetUserContactById();
      } catch (error) {
        console.error(error);
      }
    };
    if (conversationKey) {
      getDetails().then(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationKey]);

  return (
    <Stack sx={{ flexGrow: 1, minWidth: '1px' }}>
      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        {!conversationKey && (
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 5,
              width: '100%',
              height: '100%'
            }}
          >
            <motion.div variants={varFadeInDown}>
              <Typography variant="body1">Select a Contact for display</Typography>
            </motion.div>
          </Container>
        )}

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

              <ChatMessageInput conversationId={conversationKey} disabled={pathname === 'booking' || 'message'} />
            </Stack>

            {mode === 'DETAIL' && <ChatRoom contact={data.GetUserContactById} />}
          </>
        )}
      </Box>
    </Stack>
  );
}
