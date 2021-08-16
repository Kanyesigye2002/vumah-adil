import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
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
      <div className="dark-light-mode-main">
        <label>
          <input className='toggle-checkbox' type='checkbox' onChange={toggleDarkMode}></input>
          <div className='toggle-slot'>
            <div className='sun-icon-wrapper'>
              <Icon icon="feather-sun" className="sun-icon" />
            </div>
            <div className='toggle-button'></div>
            <div className='moon-icon-wrapper'>
              <Icon icon="feather-moon" className="moon-icon" />
            </div>
          </div>
        </label>
      </div>
    </>
  );

  function toggleDarkMode(e) {
    if (e.target.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}

export default App;
