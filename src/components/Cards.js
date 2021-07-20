import React from 'react'
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core'

import CountUp from 'react-countup'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  card: {
    margin: 10,
    padding: 10,
    width: 275,
    textAlign: 'start',
    marginBottom: 7,
    background: '#121212',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 435,
    },
  },
  newUpdate: {
    color: '#018786',
    marginTop: 7,
  },
}))

const Cards = ({ data, country }) => {
  const classes = useStyles()
  return data === null ? (
    <h1>Loading...</h1>
  ) : (
    <Grid container>
      <Grid item>
        <Card variant='outlined' className={classes.card}>
          <CardContent>
            <Typography gutterBottom>Total Confirmed</Typography>
            <Typography variant='h4' component='h2'>
              <CountUp
                start={0}
                end={data.TotalConfirmed}
                duration={2}
                separator=','
              />
            </Typography>
            {!country && (
              <Typography variant='subtitle1' className={classes.newUpdate}>
                &#9650;{' '}
                <CountUp
                  start={0}
                  end={data.NewConfirmed}
                  duration={2}
                  separator=','
                />
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card variant='outlined' className={classes.card}>
          <CardContent>
            <Typography gutterBottom>Total Deaths</Typography>
            <Typography variant='h4' component='h2'>
              <CountUp
                start={0}
                end={data.TotalDeaths}
                duration={2}
                separator=','
              />
            </Typography>
            {!country && (
              <Typography variant='subtitle1' className={classes.newUpdate}>
                &#9650;{' '}
                <CountUp
                  start={0}
                  end={data.NewDeaths}
                  duration={2}
                  separator=','
                />
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card variant='outlined' className={classes.card}>
          <CardContent>
            <Typography gutterBottom>Total Recovered</Typography>
            <Typography variant='h4' component='h2'>
              <CountUp
                start={0}
                end={data.TotalRecovered}
                duration={2}
                separator=','
              />
            </Typography>
            {!country && (
              <Typography variant='subtitle1' className={classes.newUpdate}>
                &#9650;{' '}
                <CountUp
                  start={0}
                  end={data.NewRecovered}
                  duration={2}
                  separator=','
                />
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cards
