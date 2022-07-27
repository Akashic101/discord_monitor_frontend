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

    function isBot(user: interfaces.userProps, bot: boolean) {
        if (bot) {
            return <div className='userCardbot' style={{backgroundColor: `red`}}><p>Bot</p></div>
        }
        else {
            return <div className='userCardbot' style={{backgroundColor: `${user.accentColor}`}} ><p>{user.highestRoleName}</p></div>;
        }
    }

    return (
        <div id='userCardCollection'>
        <Grid className="grid-container" container spacing={2} justify="center" >
            {data.map((row: interfaces.userProps) => (
                <div className='userCard' style={{border: `2px solid ${row.accentColor}`}} onClick={() => window.open(`http://localhost:3000/user/${row.userId}`, '_self')}>
                    <div id='userCardPFPdiv'>
                        <img id='userCardPFP' src={row.avatar}></img>
                    </div>
                    <div id='userCardText'>
                        <p id='userCardUsername' key={row.id}>{row.username}</p>
                        <p id='userCardTag'>#{row.discriminator}</p>
                    </div>
                    <p id='userCardBot'>{isBot(row, row.bot)}</p>
                </div>
            ))}
        </Grid>
    </div>
    );
}