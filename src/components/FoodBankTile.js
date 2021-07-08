import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 20
  },
  gutterTopAndBottom: {
    margin: 20
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 350
  }
}))

function FoodBankTile ({ name, status, website, address, latitude, longitude }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid item xs={10}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Typography paragraph variant='body2'>
              {address}
            </Typography>
            <Typography paragraph variant='body2'>
              {website}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              onClick={() => {
							  if (latitude && longitude) {
							    return window.open('https://maps.google.com?q=' + latitude + ',' + longitude)
							  } else {
							    return window.open(`https://maps.google.com?q=${address.replaceAll(' ', '+')}`)
							  }
              }}
            >
              Open in Google Maps
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  )
}

export default FoodBankTile
