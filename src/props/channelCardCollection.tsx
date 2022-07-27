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

    enum ChannelType {
        'Text channel' = 0,
        'DM channel' = 1,
        'Voice channel' = 2,
        'GroupDM' = 3,
        'Guild Category' = 4,
        'Guild News' = 5,
        'Guild News Thread' = 10,
        'Guild Public Thread' = 11,
        'Guild Private Thread' = 12,
        'Guild Stage Voice' = 13,
        'GuildD irectory' = 14,
        'Guild Forum' = 15,
    }

    function channelType(type: number) {
        console.log(ChannelType[type])
        return <div className='channelCardType'><p>{ChannelType[type]}</p></div>
    }

    return (
        <div id='channelCardCollection'>
            <Grid className="grid-container" container spacing={2} justify="center" >
                {data.map((row: interfaces.channelProps) => (
                    <div className='channelCard' style={{ border: `2px solid #${row.color}` }} onClick={() => window.open(`http://localhost:3000/channel/${row.channelID}`, '_self')}>
                        <div id='channelCardText'>
                            <p id='channelCardChannelname' key={row.id}>{row.channelName}</p>
                            <p id='channelCardTopic'>{row.channelTopic ?? 'No topic'}</p>
                            <p id='channelCardMessages'>{row.messageCount} messages send</p>
                        </div>
                        <p id='channelCardType'>{channelType(row.type)}</p>
                    </div>
                ))}
            </Grid>
        </div>
    );
}