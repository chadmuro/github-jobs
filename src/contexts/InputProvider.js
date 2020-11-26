import React, { useState } from 'react';
import InputContext from './InputContext';

const InputProvider = (props) => {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [fulltime, setFulltime] = useState(false);

    return (
        <InputContext.Provider value={{
            description,
            location,
            fulltime,
            setDescription,
            setLocation,
            setFulltime
        }}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputProvider;