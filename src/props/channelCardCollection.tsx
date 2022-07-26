import axios from 'axios';
import React, { useEffect, useState } from 'react';
import interfaces from '../interfaces/interfaces';
import './channelCard.css';

import { Grid } from '@material-ui/core';

export const ChannelCardCollection: React.FC = () => {

    // initialize data state variable as an empty array
    const [data, setData] = useState([]);

    // make the fetch the first time your component mounts
    useEffect(() => {
        axios.get('http://localhost:5000/channel/').then(response => {
            setData(response.data);
        })
    }, []);

    return (
        <div id='channelCardCollection'>
            <Grid className="grid-container" container spacing={2} >
                {data.map((row: interfaces.channelProps) => (
                    <div className='channelCard' style={{border: `2px solid #${row.color}`}} onClick={() => window.open(`http://localhost:3000/channel/${row.channelID}`, '_self')}>
                        <div id='channelCardText'>
                            <p id='channelCardChannelname' key={row.id}>{row.channelName}</p>
                            <p id='channelCardTopic'>{row.channelTopic}</p>
                            <p id='channelCardMessages'>{row.messageCount} messages send</p>
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    );
}