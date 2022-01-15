import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// material
import { Box, Container, List, Typography } from '@mui/material';
//
import ChatConversationItem from './ChatConversationItem';
import { motion } from 'framer-motion';
import { varFadeInDown } from '../animate';
import React from 'react';

// ----------------------------------------------------------------------

ChatConversationList.propTypes = {
  conversations: PropTypes.array,
  isOpenSidebar: PropTypes.bool,
  activeConversationId: PropTypes.string
};

export default function ChatConversationList({ conversations, isOpenSidebar, activeConversationId, ...other }) {
  const navigate = useNavigate();

  const handleSelectConversation = (conversationId) => {
    // let conversationKey = '';
    // const conversation = conversations.byId[conversationId];
    // if (conversation.type === 'GROUP') {
    //   conversationKey = conversation.id;
    // } else {
    //   const otherParticipant = conversation.participants.find(
    //     (participant) => participant.id !== '8864c717-587d-472a-929a-8e5f298024da-0'
    //   );
    //   conversationKey = otherParticipant.username;
    // }
    navigate(`/bookings/${conversationId}`);
  };

  return (
    <List disablePadding {...other}>
      {conversations.length < 1 && (
        <Box sx={{ position: 'relative' }}>
          <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5 }}>
            <motion.div variants={varFadeInDown}>
              <Typography variant="body1">There are no bookings for display</Typography>
            </motion.div>
          </Container>
        </Box>
      )}

      {conversations.map((conversation) => (
        <ChatConversationItem
          key={conversation.id}
          isOpenSidebar={isOpenSidebar}
          conversation={conversation}
          isSelected={activeConversationId === conversation}
          onSelectConversation={() => handleSelectConversation(conversation.id)}
        />
      ))}
    </List>
  );
}
