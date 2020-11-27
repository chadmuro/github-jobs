import React, { useContext } from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import InputContext from '../contexts/InputContext';

const Header = () => {
    const { setDescription, setLocation, setFulltime, setPage } = useContext(InputContext);

    const handleClear = () => {
        setDescription('');
        setLocation('');
        setFulltime(false);
        setPage(1);
        console.log('home clicked');
    }

    return (
        <Toolbar>
            <Typography color="primary" variant="h4" component="h1" onClick={handleClear} style={{ cursor: 'pointer' }}>GitHub Jobs</Typography>
        </Toolbar>
    )
}

export default Header;