import React from 'react';
import './favorites.scss';
import { connect } from 'react-redux';
import Gridlist from '../common/gridlist/gridlist';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.getUnique = this.getUnique.bind(this);
  }

  render() {
    return (
      <div className="favorites">
         <h1 className="favorites_title">Favorites ({this.getUnique(this.props.listImages.map(item => item = item.item), 'id').length})</h1>
         <Gridlist images={this.getUnique(this.props.listImages.map(item => item = item.item), 'id')} />
       </div>
    )
  }

  getUnique(arr, comp) {
    const unique = arr
    .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e]).map(e => arr[e]);
    return unique;
  }

}

const mapStateToProps = state => ({
  listImages: state.favoritesReducers
})


export default connect(
  mapStateToProps,
  null
)(Favorites)

