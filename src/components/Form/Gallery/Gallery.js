import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar/SearchBar";
import Picture from "./Picture/Picture";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImage: this.props.initial || ""
    };
  }

  onSearchHandler = val => {
    console.log(val);
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${val}&client_id=f419039b7082dcd11d36d31bef94d758b6f7a11b0c941c8d2aa134512f5002ab`
      )
      .then(res => {
        this.setState({ images: res.data.results });
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  };

  onClickHandler = index => {
    let { images } = this.state;
    this.setState({ selectedImage: images[index] });
    this.props.onImageSelect(
      images[index].urls.regular,
      images[index].user.username
    );
  };

  render() {
    let { images, selectedImage } = this.state;
    let pictures = <p>Loading...</p>;
    if (images.length >= 0) {
      pictures = images.map((image, index) => {
        return (
          <Picture
            clicked={() => this.onClickHandler(index)}
            key={image.id}
            url={image.urls.thumb}
            classes="Gallery__picture"
          />
        );
      });
    }

    let selectedPhoto = <div />;
    if (selectedImage !== "") {
      selectedPhoto = (
        <Picture
          clicked={null}
          url={selectedImage.urls.regular}
          classes="Gallery__selected"
        />
      );
    }

    return (
      <div className="Gallery">
        <SearchBar search={this.onSearchHandler} />
        <div className="Gallery__pictures">{pictures}</div>
        <div>{selectedPhoto}</div>
      </div>
    );
  }
}

export default Gallery;
