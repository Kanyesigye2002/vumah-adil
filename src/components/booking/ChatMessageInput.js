import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import micFill from '@iconify/icons-eva/mic-fill';
import roundSend from '@iconify/icons-ic/round-send';
import attach2Fill from '@iconify/icons-eva/attach-2-fill';
import roundAddPhotoAlternate from '@iconify/icons-ic/round-add-photo-alternate';
// material
import { styled } from '@mui/material/styles';
import { Input, Divider, IconButton, InputAdornment, Stack } from '@mui/material';
//
import EmojiPicker from '../EmojiPicker';
import { useLazyQuery, useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../../graphql/Queries';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: 56,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  paddingLeft: theme.spacing(2)
}));

// ----------------------------------------------------------------------

ChatMessageInput.propTypes = {
  disabled: PropTypes.bool,
  conversationId: PropTypes.string,
  onSend: PropTypes.func
};

export default function ChatMessageInput({ disabled, conversationId, ...other }) {
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState({
    body: '',
    contentType: 'text',
    attachments: [],
    createdAt: new Date()
  });

  const [SendMessage] = useMutation(SEND_MESSAGE, {
    variables: { contactID: conversationId, message: message }
  });

  const onSend = async () => {
    try {
      // dispatch(onSendMessage(value));
      return await SendMessage();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleChangeMessage = (event) => {
    setMessage({
      ...message,
      body: event.target.value
    });
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  const handleSend = () => {
    if (!message.body) {
      return '';
    }
    const d = {
      conversationId,
      messageId: uuidv4(),
      message,
      contentType: 'text',
      attachments: [],
      createdAt: new Date(),
      senderId: '8864c717-587d-472a-929a-8e5f298024da-0'
    };

    onSend().then((r) => {
      console.log(r);
      return setMessage({
        body: '',
        contentType: 'text',
        attachments: [],
        createdAt: new Date()
      });
    });
  };

  return (
    <RootStyle {...other}>
      <Input
        disabled={disabled}
        fullWidth
        value={message.body}
        disableUnderline
        onKeyUp={handleKeyUp}
        onChange={handleChangeMessage}
        placeholder="Type a message"
        startAdornment={
          <InputAdornment position="start">
            <EmojiPicker disabled value={message.body} setValue={setMessage} />
          </InputAdornment>
        }
        endAdornment={
          <Stack direction="row" spacing={0.5} mr={1.5}>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <Icon icon={roundAddPhotoAlternate} width={24} height={24} />
            </IconButton>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <Icon icon={attach2Fill} width={24} height={24} />
            </IconButton>
            <IconButton disabled={disabled} size="small">
              <Icon icon={micFill} width={24} height={24} />
            </IconButton>
          </Stack>
        }
        sx={{ height: '100%' }}
      />

      <Divider orientation="vertical" flexItem />

      <IconButton color="primary" disabled={!message.body} onClick={handleSend} sx={{ mx: 1 }}>
        <Icon icon={roundSend} width={24} height={24} />
      </IconButton>

      <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
    </RootStyle>
  );
}
