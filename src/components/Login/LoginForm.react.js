import { jsx as _jsx } from "react/jsx-runtime";
import FacebookLogin from 'react-facebook-login';
export default function LoginForm({ appId }) {
    const handleFacebookCallback = (response) => {
        if ("status" in response && response.status === "401") {
            console.error('Sorry!', 'Something went wrong with facebook Login.');
            return;
        }
        console.log(response);
    };
    return (_jsx(FacebookLogin, { appId: appId.toString(), autoLoad: false, fields: "name,email,picture", callback: handleFacebookCallback }));
}
;
