import React, { Component } from 'react';
import * as $ from 'axios';
import Kudo from './components/Kudo';
import Header from './components/Header';
import { Container, Row, Col } from 'reactstrap';
import './App.css';


class App extends Component {
  state = {
    usersList: [],
    kudosList: [],
    title: '',
    body: '',
    sender: '',
    receiver: ''
  }

  getAllkudos = (data) => {
    const kudoArray = [];
    for(let i = 0; i < data.length; i++) {
      const username = data[i].username;
      const kudos = data[i].kudos;
      for (let j = 0; j < kudos.length; j++) {
        const clone = {...kudos[j]}
        clone.username = username;
        kudoArray.push(clone);
      }
    }
    const sortById = (a, b) => {
        let x = a._id.toLowerCase();
        let y = b._id.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    }
    this.setState({ kudosList: kudoArray.sort(sortById) });
  }

  getAllUsers = () => {
    $.get('/api/users')
      .then((res) => {
        this.setState({ usersList: res.data });
        this.getAllkudos(res.data);
      });
  }

  componentDidMount = () => {
    this.getAllUsers();
  }

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
		this.setState({ [name]: value });
  }

  handleClick = () => {
    // const {title, body, fromUser, toUser} = this.state;
    const newKudo = {
      title: this.state.title,
      body: this.state.body,
      fromUser: this.state.sender,
      toUser: this.state.receiver
    }
    $.post('/api/kudo', newKudo)
      .then((data) => {
        this.getAllUsers();
      });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header
            usersList={this.state.usersList}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
          <Row style={{overflowY: 'scroll', height: '650px'}} >
            <Col></Col>
            <Col xs='9'>
              <Kudo kudosList={this.state.kudosList} />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
