import {BrowserRouter, Routes, Route,} from 'react-router-dom'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Login</h1>} />
                <Route path="/home" element={<h1>Home</h1>} />
            </Routes>
            </BrowserRouter>
    )
}

export default AppRoutes