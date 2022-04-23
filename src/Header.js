import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { get } from './api';



function Header() {
     const [apiData ,  setApiData] = useState([]);

    const getHeaderData = async () => {
        const {data} = await get();
        setApiData(data);
    }

    useEffect(() => {
        getHeaderData();
    }, [])

    return (
        <div className="Header">
        <h1 style={{background : "aquamarine" , margin :"0" }} >Header Api Data  "{apiData[0]?.mykey}"</h1>
        </div>
    );
}

export default Header;
