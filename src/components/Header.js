import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: '#3700b3',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Container>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Covid 19 Tracker
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
