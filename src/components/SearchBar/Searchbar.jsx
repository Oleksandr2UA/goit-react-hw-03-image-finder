import { Component } from 'react';
export class SearchBar extends Component {
  state = {
    value: '',
  };

  onInputChange = e => {
    this.setState({ value: e.currentTarget.value });
  };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value.trim());
    this.reset();
  };
  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onFormSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
