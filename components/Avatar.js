import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name: name,
      }),
  };
}

class Avatar extends Component {
  state = {
    photo: "https://i.ibb.co/rvKtQJc/avatar-default.jpg",
  };

  key = "A51A868B-071E4F4B-B0FAD844-FC0C3FFC";

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: new Headers({
        "X-API-KEY": this.key,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          photo: response[0].photo,
          // photo: response.results[0].picture.medium,
        });
        this.props.updateName(response[0].name);
        // this.props.updateName(response.results[0].name.first);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
