import React, { Component } from "react";
import styled from "styled-components";

class Avatar extends Component {
  state = {
    photo: "https://i.ibb.co/rvKtQJc/avatar-default.jpg",
  };

  key = "A51A868B-071E4F4B-B0FAD844-FC0C3FFC";

  componentDidMount() {
    fetch("https://randomuser.me/api/?gender=male")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.results[0].picture.medium);
        this.setState({
          photo: response.results[0].picture.medium,
        });
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
