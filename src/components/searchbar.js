import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.submit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitHandler} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
