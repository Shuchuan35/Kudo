import React, { Component } from 'react';
import * as $ from 'axios';
import Kudo from './components/Kudo';
import Header from './components/Header';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  state = {
    usersList: [],
    kudosList: [],
    title: '',
    body: '',
    sender: '',
    receiver: ''
  }

  getAllUsers = () => {
    $.get('/api/users')
    .then((res) => {
      // console.log(res.data);
      this.setState({ usersList: res.data });
    });
  }
  
  getAllkudos = () => {
    $.get('/api/kudos')
    .then((res) => {
      this.setState({ kudosList: res.data });
    });
    console.log(this.state.kudosList);
  }

  componentDidMount = () => {
    this.getAllkudos();
    this.getAllUsers();
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
    console.log(this.state.title, this.state.body, this.state.sender, this.state.receiver);
  }

  handleClick = () => {
    const newKudo = {
      title: this.state.title,
      body: this.state.body,
      fromUser: this.state.sender,
      toUser: this.state.receiver
    }
    $.post('/api/kudo', newKudo)
    .then( (data) => {
      console.log(data);
      // this.setState({
      //   kudosList: [...this.state.kudosList, data]
      // });
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
          <Row>
            <Col></Col>
            <Col xs='8'>
              <Kudo kudosList={this.state.kudosList}/>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
