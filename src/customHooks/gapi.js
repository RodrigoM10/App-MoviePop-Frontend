import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId = process.env.REACT_APP_CLIENT_GOOGLE_ID;;

function useGapi() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    }
    gapi.load("client:auth2", start);
  });
}

export default useGapi;
