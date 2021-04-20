import React , { Component } from 'react' ;
import Login from './login';
import Dashboard from './dashboard';
import Master,{InsertMaster,UpdateMaster} from './mastertable';
import Pitched18,{InsertPitched18,UpdatePitched18} from './pc18';
import Pitched19 from './pc19';
import Pitched20 from './pc20';
import Past19 from './pr19';
import Past20 from './pr20';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

import List from './components/List';
import Note from './components/Note';
import axios from 'axios';
import urlFor from './helpers/urlFor';
import Flash from './components/Flash';
import kotta from './components/Kotta';

import Nav from './components/Nav';







class App extends Component {

  constructor() {
    super();
    this.state = {
      showNote: false,
      notes: [],
      note: {},
      newTag: false,
      error: ''
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote,
      note: {}
    })
  }

  getNotes = () => {
    axios.get(urlFor('notes'))
    .then((res) => this.setState({notes: res.data}) )
    .catch((err) => console.log(err.response.data) );
  }

  getNote = (id) => {
    axios.get(urlFor(`notes/${id}`))
    .then((res) => this.setState({note: res.data, showNote: true }) )
    .catch((err) => console.log(err.response.data) );
  }

  performSubmissionRequest = (data, id) => {
    if (id) {
      return axios.patch(urlFor(`notes/${id}`), data);
    } else {
      return axios.post(urlFor('notes'), data);
    }
  }

  submitNote = (data, id) => {
    this.performSubmissionRequest(data, id)
    .then((res) => this.setState({ showNote: false }) )
    .catch((err) => {
      const { errors } = err.response.data;
      if (errors.content) {
        this.setState({ error: "Missing Note Content!" });
      } else if (errors.title) {
        this.setState({ error: "Missing Note Title!" });
      }
    });
  }


   render() {

     return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/login" component={Login} />
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/showmaster" component={Master} />
          <Route exact path='/insertmaster' component={InsertMaster} />
          <Route exact path='/updatemaster' component={UpdateMaster} />
          <Route exact path="/showpitched18" component={Pitched18} />
          <Route exact path='/insertpitched18' component={InsertPitched18} />
          <Route exact path='/updatepitched18' component={UpdatePitched18} />
          <Route exact path='/pc19' component={Pitched19} />
          <Route exact path='/pc20' component={Pitched20} />
          <Route exact path='/pr19' component={Past19} />
          <Route exact path='/pr20' component={Past20} />
          <Route exact path='/notes' component={kotta} />
        </Switch>
    </Router> 
    </div>

  );
 }
}





export default App;
