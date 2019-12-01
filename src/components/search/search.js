import React from 'react';
import './search.scss';
import TextField from '@material-ui/core/TextField';
import giphyService from '../../service/giphy.service';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import Gridlist from '../common/gridlist/gridlist';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      images: [],
      limit: 8,
      offset: 0,
      loading: false
    };

    this.reset = this.reset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showUpFetchMoreButton = this.showUpFetchMoreButton.bind(this);
  }

  handleSubmit(e) {
    // avoid reload
    if (e) {
      e.preventDefault();
    }

    if (!this.state.query) {
      this.setState({ images: [] });
    } else {
      this.setState({ loading: true });
      // using giphy service for query pictures
      giphyService
        .searchImage({
          q: this.state.query,
          limit: this.state.limit,
          offset: this.state.offset
        })
        .then(res => {
          this.setState({ loading: false });
          //based on the length of data that returned to make the offset param for fetch more
          this.setState({ offset: this.state.offset + res.data.data.length });
          if (this.state.images.length === 0) {
            this.setState({ images: res.data.data });
          } else {
            const mergeImages = this.state.images.concat(res.data.data);
            this.setState({ images: mergeImages });
          }
        });
      // another services can be implement here
    }
  }

  handleChange(event) {
    console.log('g', event.target.value);
    this.setState({ query: event.target.value });
  }

  showUpFetchMoreButton(length) {
    if (length > 0) {
      return (
        <p className="fetchmore">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Fetch More !!!
          </Button>
        </p>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="search">
        <form noValidate autoComplete="off" onSubmit={this.reset}>
          <TextField
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Start searching for images!"
            className="search_input"
          />
        </form>
        <Gridlist images={this.state.images} />
        {this.showUpFetchMoreButton(this.state.images.length)}
      </div>
    );
  }

  reset(event) {
    event.preventDefault();
    if (this.state.images.length > 0) {
      this.setState({ images: [] });
    }
    setTimeout(() => {
      this.handleSubmit(null);
    });
  }
}

export default Search;
