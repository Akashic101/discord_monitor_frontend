import '../props/userCard.css';
import { Grid } from '@material-ui/core';
import { NavigationCard } from '../props/navigationCard';

function HomePage() {
  return (
    <div id="container">
      <Grid item xs={12} sm={6} md={4}>
        <NavigationCard externalLink={'user/'} linkName={'Users'} logo={'https://cdn.discordapp.com/avatars/235148962103951360/ed3dac3b6e7a851df781632a4295fcb9.webp?size=256'} />
        <NavigationCard externalLink={'channel/'} linkName={'Channels'} logo={'https://cdn.discordapp.com/avatars/235148962103951360/ed3dac3b6e7a851df781632a4295fcb9.webp?size=256'} />
      </Grid>
    </div>
  )
}

export default HomePage;
