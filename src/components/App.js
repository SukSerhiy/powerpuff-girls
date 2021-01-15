import React from 'react'
import { withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { history } from '../config'
import Home from '../containers/Home'
import Episode from '../containers/Episode'

const styles = {
  main: {
    height: '100%',
    padding: '0px 4%',
    width: '100%',
    boxSizing: 'border-box',
  },
}

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1056,
      lg: 1280,
      xl: 1920,
    },
  },
})

const App = (props) =>  {
  const { classes } = props
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <main className={classes.main}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/episodes/:id" render={(props) => <Episode {...props} />} />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default withStyles(styles)(App)