import React, { useEffect } from 'react';
import Routes from './Routes';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
