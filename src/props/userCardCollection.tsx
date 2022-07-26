import axios from 'axios';
import React, { useEffect, useState } from 'react';
import interfaces from '../interfaces/interfaces';
import './userCard.css';

import { Grid } from '@material-ui/core';

export const UserCardCollection: React.FC = () => {

    // initialize data state variable as an empty array
    const [data, setData] = useState([]);

    // make the fetch the first time your component mounts
    useEffect(() => {
        axios.get('http://localhost:5000/user').then(response => {
            setData(response.data);
        })
    }, []);

    return (
        <div id='userCardCollection'>
            <Grid className="grid-container" container spacing={2} >
                {data.map((row: interfaces.userProps) => (
                    <div className='userCard' onClick={() => window.open(`http://localhost:3000/user/${row.userId}`, '_self')}>
                        <div id='userCardPFPdiv'>
                            <img id='userCardPFP' src={row.avatar}></img>
                        </div>
                        <div id='userCardText'>
                            <p id='userCardUsername' key={row.id}>{row.username}</p>
                            <p id='userCardTag'>#{row.discriminator}</p>
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    );
}