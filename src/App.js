import React, { Component } from 'react'
import Home from './pages/Home'
import TameImpala from './pages/TameImpalaPage'
import TomsStory from './pages/TomsStoryPage'
import Broncho from './pages/BronchoPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/tameimpala' exact component={TameImpala} />
            <Route path='/tomsstory' exact component={TomsStory} />
            <Route path='/broncho' exact component={Broncho} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
