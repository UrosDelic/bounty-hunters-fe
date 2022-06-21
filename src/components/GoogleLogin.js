/* global google */
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import LoginStore from 'stores/Login';

const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleLogin = () => {
  const handleResponse = response => {
    LoginStore.login(response);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: client_id,
      callback: handleResponse,
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      shape: 'pill',
      size: 'large',
      text: 'Signin with google',
      width: '250px',
    });
    google.accounts.id.prompt();
  }, []);

  return <div id="google-btn"></div>;
};

export default observer(GoogleLogin);
