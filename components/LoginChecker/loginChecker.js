// function for checking token
const LoginChecker = () =>{
    if(localStorage.getItem('token')){
        window.location = '/Dashboard'
    }
}

export default LoginChecker