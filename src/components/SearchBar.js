import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSumbit(this.state.term);
  };

  render(){
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label><h3>Video search</h3></label>
            <input
            type="text"
            value = {this.state.term}
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
