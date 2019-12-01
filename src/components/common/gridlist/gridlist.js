import React from "react";
import './gridlist.scss';
import { addFavorites } from '../../../actions/favorites.action';
import { connect } from 'react-redux';

class Gridlist extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.renderSkeleton = this.renderSkeleton.bind(this);
    this.toggleFavClass = this.toggleFavClass.bind(this);
    this.state = {
      activeIDs: [],
    };
  }

  render() {
    return (
      <div className="images">
        <div className="images_list">
          {this.props.images.map((item, index) => (
            <div className={
              this.state.activeIDs.filter(x => x === item.id).length > 0 ? 'images_container images_container-favorite' : 'images_container'
            } onClick={() => { this.toggleFavClass(item.id); this.props.addFavorites({ item }) }} key={index}>
              <img
                src={item.images.original.url}
                className="images_image"
              />
            </div>
          ))}
          {this.renderSkeleton()}
        </div>
      </div>
    )
  }

  toggleFavClass(id) {
    const activeIDs = this.state.activeIDs;
    activeIDs.push(id);
    this.setState({ activeIDs: activeIDs });
  }

  // for loading default while loading real url ( UI requested)
  renderSkeleton() {
    if (!this.props.loading) {
      return null;
    }
    return (
      <>
        <div className="images_container images_container-skeleton"><div className="images_image"></div></div>
        <div className="images_container images_container-skeleton"><div className="images_image"></div></div>
        <div className="images_container images_container-skeleton"><div className="images_image"></div></div>
        <div className="images_container images_container-skeleton"><div className="images_image"></div></div>
        <div className="images_container images_container-skeleton"><div className="images_image"></div></div>
        <div className="images_container images_container-skeleton"><div className="images_image"></div></div>
        <div className="images_container images_container-skeleton"><div className="images_image"></div></div>
        <div className="images_container images_container-skeleton"><div className="images_image"></div></div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: item => dispatch(addFavorites(item))
  }
};

export default connect(null, mapDispatchToProps)(Gridlist);