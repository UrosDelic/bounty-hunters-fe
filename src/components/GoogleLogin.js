/* global google */
// @ts-nocheck
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import LoginStore from 'stores/Login';

const GoogleLogin = () => {
  const handleResponse = response => {
    LoginStore.login(response);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleResponse,
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      shape: 'pill',
      size: 'large',
      text: 'Signin with google',
      ux_mode: 'popup',
      width: '250px',
    });
  }, []);

  return <div id="google-btn"></div>;
};

export default observer(GoogleLogin);

/* <div id="g_id_onload"
     data-client_id="267868351623-8an5obdlb5j0s2n0dopo0ntp7g7ip3sv.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-login_uri="https://bounty-hunters-api.herokuapp.com/api/auth/login/google"
     data-auto_select="true">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="pill"
     data-theme="filled_blue"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left"
     data-width="250px">
</div>*/
