import { Facebook, Google, LinkedIn } from '@mui/icons-material'
import logo from '../../assets/PrepIQLogo.png'
import "./loginform.css"
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <div className="login-main">
            <div className="cover">
                <img src={logo} alt="" />
                <h1>Login</h1>
                <input type="text" placeholder="nitishverma64@gmail.com" />
                <input type="password" placeholder="******" />

                <button className="btn" onClick={()=>{navigate("/")}}>Login</button>

                <p className="text">Or login using</p>

                <div className="alt-login">
                    <Facebook/>
                    <Google/>
                    <LinkedIn/>
                </div>
                
            </div>
        </div>
    )
}

export default LoginForm