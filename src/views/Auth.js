import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../component/Button';
import Input from '../component/Input';
import { AuthContext } from '../context/auth';
const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1"



const Auth = () => {
    const {isAuth, loginSucces, loginFailed} = useContext(AuthContext)
    const [login, setLogin] = useState(true)
    const [error, setError] = useState("")
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIserror] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isLogin = () => setLogin(!login)
    const userLogin = async() => {
        setIsloading(true)
        const user = {
            email, password
        }
        try {
            const res = await axios.post(`${baseUrl}/user/signin`, user)
            localStorage.setItem("token", res.data.token)
            setEmail("")
            setPassword("")
            loginSucces()
            setIsloading(false)
        } catch (err) {
            setIserror(true)
            setError(err.response.data.errors)
            setIsloading(false)
            setEmail("")
            setPassword("")
            setTimeout(() => {
                setIserror(false)
                setError("")
                loginFailed()
            }, 2000)
        }
    }

    const userRegister = async ()=> {
        setIsloading(true)
        const user = {
            email, password, name
        }
        try {
            const res = await axios.post(`${baseUrl}/user/signup`, user)
            localStorage.setItem("token", res.data.token)
            setName("")
            setEmail("")
            setPassword("")
            setIsloading(false)
        } catch (err) {
            setIserror(true)
            setError(err.response.data.errors)
            setIsloading(false)
            setName("")
            setEmail("")
            setPassword("")
            setTimeout(() => {
                setIserror(false)
                setError("")
            }, 2000)
        }
    }

    if(isAuth) {
        return <Navigate to="/task" />
    }

    return  (
        <div style={box} >
            <h3 style={head}>{login ? "Login" : "Register"}</h3>
            <div>
                {!login && <Input type="text" placeholder="name" value={name} change={(e) => setName(e.target.value)}/>}
                <Input type="email" placeholder="email" value={email} change={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="password" value={password} change={(e) => setPassword(e.target.value)}/>    
            </div>
            <div style={btn}>
                {isError && (
                    <div>
                        {error && error.map((item) => <p style={{ color: "red", margin: "0.4rem 0" }}>{item.msg}</p>)}
                    </div>
                )}
                <Button variant="primary" load={isLoading} text={login ? "Login" : "Register"}  action={login ? userLogin : userRegister}/>
            </div>
            {login ? (
                <div style={paragraph}>
                    <p>Belum Punya Akun? Silahkan <span style={textBtn} onClick={isLogin}>Register</span></p>
                </div>
            ) : (
                <div style={paragraph}>
                    <p>Sudah Punya Akun? Silahkan <span style={textBtn} onClick={isLogin}>Login</span></p>
                </div>
            )
        }
            
        </div>
    );
}

export default Auth;

const textBtn = {
    color: "#57ea4f",
    fontSize: "15px",
    cursor: "pointer"
}

const head = {
    textAlign: "center",
    marginBottom: "0.4rem"
}

const btn = {
    textAlign: "center",
    marginTop: "0.5rem"
}

const paragraph = {
    textAlign: "center",
    marginTop: "0.5rem",
    fontSize: "14px"
}

const box = {
    background: "#fff",
    width: "25%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "0.7rem"
}