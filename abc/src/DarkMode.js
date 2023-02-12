import React, { useEffect } from 'react';
import './styles/globals.scss';

const DarkMode = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  const onChange = (e) => {
    e.target.checked
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'light');
  };
  const onChange2 = (e) => {
    e.target.checked
      ? document.documentElement.setAttribute('data-theme', 'red')
      : document.documentElement.setAttribute('data-theme', 'blue');
  };
  return (
    <>
      <div>
        <input type="checkbox" id="switch" name="mode" onChange={onChange} />
        <label htmlFor="switch">흑백</label>
        <input type="checkbox" id="switch1" name="mode" onChange={onChange2} />
        <label htmlFor="switch">빨파</label>
      </div>
    </>
  );
};

export default DarkMode;
