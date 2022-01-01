import { useEffect } from 'react';
// material
import { Card, Container } from '@mui/material';
// redux
import { useDispatch } from '../../redux/store';
import { getConversations, getContacts } from '../../redux/slices/chat';
// components
import { ChatSidebar, ChatWindow } from '../../components/chat';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function Chat() {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container maxWidth={false}>
      <Card sx={{ height: 'calc(100vh - 100px)', display: 'flex', mt: 1 }}>
        <ChatSidebar />
        {/*<ChatWindow />*/}
      </Card>
    </Container>
  );
}
