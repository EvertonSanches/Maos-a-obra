import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Email" />
            <br />
            
            <input type="password" placeholder="Senha" />
            <br />

            <button onClick={() => navigate('/home')}>Entrar</button>
        </div>
    )
}

export default Login