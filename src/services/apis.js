const BASE_URL=process.env.REACT_APP_BASE_URL

export const auth=
{
    LOGIN_API:BASE_URL+'/login',
    SIGNUP_API:BASE_URL+'/signup',
    // RESETPASSWORDTOKEN_API:BASE_URL+'/reset-password-token',
    // RESETPASSWORD_API:BASE_URL+'/reset-password',
    SEND_OTP:BASE_URL+'/sendotp',
}