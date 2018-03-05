import React, { Component } from "react";
import axios from "axios";
import Gallery from "./Gallery/Gallery";
import Button from "../Button/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: "",
      imageUrl: "",
      imageUser: ""
    };
  }

  componentDidMount() {
    if (this.props.match.url === "/journal/edit") {
      let searchParam = new URLSearchParams(this.props.location.search);
      let idToGet = searchParam.get("id");
      axios.get("/api/journal/" + idToGet).then(response => {
        let { title, text, imageUrl, imageUser } = response.data;
        this.setState({ title, text, imageUrl, imageUser });
      });
    }
  }

  onSubmitHandler = () => {
    let { title, text, imageUrl, imageUser } = this.state;
    if (!(title === "" || text === "" || imageUrl === "")) {
      if (this.props.match.url === "/journal/new") {
        axios
          .post("/api/journal", { title, text, imageUrl, imageUser })
          .then(response => {
            this.props.history.push("/");
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        let searchParam = new URLSearchParams(this.props.location.search);
        let idToGet = searchParam.get("id");
        axios
          .put("/api/journal/" + idToGet, { title, text, imageUrl, imageUser })
          .then(response => {
            this.props.history.push("/journal/" + idToGet);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };

  onTitleChangeHandler = e => {
    this.setState({ title: e.target.value });
  };

  onTextChangeHandler = e => {
    this.setState({ text: e.target.value });
  };

  onImageSelectedHandler = (imageUrl, imageUser) => {
    this.setState({ imageUrl, imageUser });
  };

  render() {
    let buttonText =
      this.props.match.url === "/journal/new" ? "+ Add Post" : "Publish Edits";

    return (
      <div className="Form">
        <input
          className="Form__input Form__input--title"
          placeholder="title"
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          type="text"
        />
        <textarea
          className="Form__input Form__input--text"
          placeholder="text"
          value={this.state.text}
          onChange={this.onTextChangeHandler}
          type="text"
        />
        <Gallery
          initial={this.state.imageUrl}
          onImageSelect={this.onImageSelectedHandler}
        />
        <Button classes={"Form__button"} onClick={this.onSubmitHandler}>
          {buttonText}
        </Button>
      </div>
    );
  }
}

export default Form;
