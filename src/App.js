import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/:post_id' component={Post}/>
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
