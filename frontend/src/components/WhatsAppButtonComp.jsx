import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { styled } from '@mui/system';

const FloatingButton = styled('a')(({ theme }) => ({
  position: 'fixed',
  width: '60px',
  height: '60px',
  bottom: '40px',
  right: '40px',
  backgroundColor: '#25d366',
  color: '#FFF',
  borderRadius: '50px',
  textAlign: 'center',
  fontSize: '30px',
  boxShadow: '2px 2px 3px #999',
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor: '#128C7E',
    transform: 'scale(1.1)',
  },
}));

const WhatsAppButtonComp = () => {
  const phoneNumber = "5591981179825";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <FloatingButton href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp />
    </FloatingButton>
  );
};

export default WhatsAppButtonComp;
