import React, { Component } from 'react';
import * as $ from 'axios';
// import Kudo from './components/Kudo';
import Header from './components/Header';
// import NavModal from './components/NavModal';
import { Container, Row, Col, Button } from 'reactstrap';


class App extends Component {
  state = {
    usersList: []
  }

  handleClick = () => {
    $.get('/api/users')
    .then((res) => {
      console.log(res);
      this.setState({ usersList: res.data });
    })
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header 
            handleClick={this.handleClick}
            usersList={this.usersList}
          />
          <Row>
            <Col></Col>
            <Col xs='8'>
              <h1>New Kudo site</h1>
              <p>
                <Button color='danger'>Click</Button>
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
