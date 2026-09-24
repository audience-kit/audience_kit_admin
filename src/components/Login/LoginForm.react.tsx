import FacebookLogin from '@greatsumini/react-facebook-login';
import type { FailResponse, SuccessResponse } from '@greatsumini/react-facebook-login';

interface Props {
    appId: bigint
}

export default function LoginForm ({ appId } : Props)  {
    const handleFacebookSuccess = (response: SuccessResponse) => {
        console.log(response);
    }

    const handleFacebookFailure = (error: FailResponse) => {
        console.error('Sorry!', 'Something went wrong with facebook Login.', error);
    }

    return (
        <FacebookLogin
            appId={appId.toString()}
            autoLoad={false}
            fields="name,email,picture"
            onSuccess={handleFacebookSuccess}
            onFail={handleFacebookFailure}/>
    );
}
