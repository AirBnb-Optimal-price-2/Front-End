import { axiosWithAuth } from "../../utils/axiosWithAuth"
import history from "../../history"

// Logs in the user
// Saves Authorization token to localStorage
// Sends user to dashboard
export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth().post("/api/auth/login", credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userID', res.data.user_id)
            dispatch({ type: LOGIN_SUCCESS })
            history.push("/dashboard")
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.reponse }))
} 

// Registers the user
// Saves authorization token to localStorage
// Sends users to dashboard
export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"
export const register = credentials => dispatch => {
    dispatch({ type: REGISTER_START})
    axiosWithAuth().post("/api/auth/register", credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userID', res.data.user_id)      
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.message })
            history.push("/dashboard")
        })
        .catch(err => {
            console.log(err.response.data.detail)
            dispatch({ type: REGISTER_FAILURE, payload: err.response.data.detail })})
}
