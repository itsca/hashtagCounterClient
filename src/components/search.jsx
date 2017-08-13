import React from 'react';
import {Glyphicon, Modal, Button, FormGroup, FormControl, InputGroup, ListGroup, ListGroupItem, Clearfix} from 'react-bootstrap';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtagSearchValue: "",
    }
  }

  render() {
    return (
      <FormGroup>
        <InputGroup>
          <FormControl type="text"
                       placeholder="Serch user by email"
                       onChange={event => this.setState({hashtagSearchValue: event.target.value})}
                       />
          <InputGroup.Button>
            <Button className="btn-success"
                    onClick={() => {}}
            >
              Search
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    );
  }
}
