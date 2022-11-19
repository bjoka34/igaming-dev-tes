import React, { useState } from 'react';
import './App.css';
import Register from './pages/Register';
import { UserData } from './types/UserData';
import { RegisterContext } from './utils/RegisterContext';

function App() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState<UserData>({} as UserData);

    return (
        <RegisterContext.Provider value={{ step, setStep, userData, setUserData }}>
            <div className="App">
                <Register />
            </div>
        </RegisterContext.Provider>
    );
}

export default App;
