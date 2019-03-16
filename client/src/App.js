import React, { Component } from 'react';
// import * as $ from 'axios';
// import Kudo from './components/Kudo';
import Header from './components/Header';
// import NavModal from './components/NavModal';
import { Container, Row, Col, Button } from 'reactstrap';


class App extends Component {

  state = {
    show: false
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Row>
            <Col></Col>
            <Col xs='8'>
              <h1>New Kudo site</h1>
              <p>
                <Button color='danger'>Click</Button>
              </p>
            </Col>
            <Col>
            

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
