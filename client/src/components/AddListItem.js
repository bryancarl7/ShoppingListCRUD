import React, { Component } from "react";
import { connect } from "react-redux";
import { createItem } from "../actions/item.js";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class AddListItem extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.newItem = this.newItem.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      quantity: 0
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  saveItem() {
    const { title, description, quantity } = this.state;

    this.props
      .createItem(title, description, quantity)
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          description: data.quantity,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newItem() {
    this.setState({
      id: null,
      title: "",
      description: "",
      quantity: 0
    });
  }

  render() {
    return (
      <div style={{height: "768px",width: "560px"}}>
          <h3>SHOPPING LIST</h3>
          <div>Add an Item</div>
          <div>Add your new item below</div>
          <Box sx={{ width: '100%', maxWidth: '100%',}}>
            <TextField fullWidth label="Title" id="fullWidth title" onchange="this.onChangeTitle"/>
            <TextField fullWidth label="Description" id="fullWidth description" onchange="this.onChangeDescription" />
            <TextField fullWidth label="Quantity" id="fullWidth quanity" onchange="this.onChangeQuantity"/>
          </Box>
          <Stack spacing={2} direction="row">
            <Button variant="text">Cancel</Button>
            <Button variant="contained" onClick="this.saveItem">Save</Button>
          </Stack>
      </div>
    );
  }
}

export default connect(null, { createItem })(AddListItem);