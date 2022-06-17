/* global google */
// @ts-nocheck
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import LoginStore from 'stores/Login';

const LoginTest = () => {
  const handleResponse = response => {
    console.log(response.credential, 'iz login test');
    LoginStore.loginTest(response);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleResponse,
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <div className="login-test">
      <div id="google-btn"></div>
    </div>
  );
};

export default observer(LoginTest);
