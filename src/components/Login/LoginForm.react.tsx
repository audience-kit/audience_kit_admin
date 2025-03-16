import * as React from 'react';
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from 'react-facebook-login';

interface Props {
    appId: bigint
}

export default function LoginForm ({ appId } : Props)  {
    const handleFacebookCallback = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        if ("status" in response && response.status === "401") {
            console.error('Sorry!', 'Something went wrong with facebook Login.');
            return;
        }
        console.log(response);
    }

    return (
        <FacebookLogin
            appId={appId.toString()}
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookCallback}/>
    );
};