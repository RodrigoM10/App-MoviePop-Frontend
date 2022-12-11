import { GoogleLogout } from "react-google-login";
import useGapi from "../../customHooks/gapi";

const clientId = process.env.REACT_APP_CLIENT_GOOGLE_ID;

function LogoutGoogle() {

    const onSucces = () => {
        console.log("Log out successfull!");
    }
    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSucces}
            />
        </div>
    )
}

export default LogoutGoogle