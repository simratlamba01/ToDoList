import React from 'react'
import "./output.css"
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage'
import ToDoPage from './Pages/ToDoPage'
import GfGWeatherApp from './Pages/Weather';
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<ProfilePage />}></Route>
            <Route path="/todo" element={<ToDoPage />}></Route>
            <Route path="/weather" element={<GfGWeatherApp />}></Route>
        </Routes>
    )
}

export default App
