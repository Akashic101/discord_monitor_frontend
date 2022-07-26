import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import interfaces from '../interfaces/interfaces';
import './singleUser.css';

type SingleUserType = {
  userID: string
}

export const UserProfile: React.FC<SingleUserType> = ({ userID }) => {

  let { userid } = useParams();

  // initialize data state variable as an empty array
  const [data, setData] = useState<interfaces.userProps | undefined>(undefined);

  // make the fetch the first time your component mounts
  useEffect(() => {
    axios.get(`http://localhost:5000/user/${userid}`).then(response => {
      setData(response.data);
    })
  }, []);

  return (
    <div>
      <Grid className="grid-container" container spacing={2}>
        <Grid item id='singleUserGrid' xs={1}>
          <div id='singleUserPFP'>
            <div id='singleUserPFPContainer'>
              <img src={data?.avatar}></img>
            </div>
          </div>
        </Grid>
        <Grid item>
          <h1>{data?.username}</h1>
          <h3>#{data?.discriminator}</h3>
        </Grid>
        <Grid >
          <h4>Account created at {data?.createdAt}</h4>
        </Grid>
      </Grid>

    </div>
  )
}