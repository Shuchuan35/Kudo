import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Col,
  Input
} from 'reactstrap';

class NavModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="outline-info" onClick={this.toggle}>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {this.props.buttonLabel}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Give a kudo!</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Col>
                  <Input type="select" name="sender" id="sender" onChange={this.props.handleChange}>
                    <option>Select Sender...</option>
                    {this.props.usersList.map(x => (
                      <option key={x._id} value={x.username}>{x.username}</option>
                    ))}
                  </Input>
                </Col>
                <Col>
                  <Input type="select" name="receiver" id="receiver" onChange={this.props.handleChange}>
                    <option>Select Receiver...</option>
                    {this.props.usersList.map(x => (
                      <option key={x._id} value={x._id}>{x.username}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Input type="text" name="title" id="title" placeholder="Title" 
                  value={this.props.title}
                  onChange={this.props.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="body" id="body" placeholder="Kudo details" 
                  value={this.props.body}
                  onChange={this.props.handleChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle} onClickCapture={this.props.handleClick}>Give Kudos</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div >
    );
  }
}

export default NavModal;