import React from "react";

class SearchBar extends React.Component {
  state = {
      term:''
  };

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video search</label>
            <input value={this.state.term} type='text' onChange={e => {this.setState({term:e.target.value})}} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;