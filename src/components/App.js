import React from "react";
import unsplash from "../api/unsplash";
import "../styles.css";
import SearchBar from "./searchbar";
import ImageList from "./imagelist";

class App extends React.Component {
  state = { images: [] };
  submitResult = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    console.log(response.data.results)
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <SearchBar submit={this.submitResult} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
