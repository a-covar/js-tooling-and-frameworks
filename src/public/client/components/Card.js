import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// <CSSTransitionGroup transition="like"
//   transitionEnterTimeout={500}
//   transitionLeaveTimeout={500}>
//   <span key={this.props.item.likes} className="likes-heart">{this.props.item.likes}</span>
// </CSSTransitionGroup>
class Card extends Component {

  render() {
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${this.props.item.id}`}>
            <img src={this.props.item.img} alt={this.props.item.name} className='grid-photo' />
          </Link>


          <figcaption>
            <h2>{this.props.item.name}</h2>
            <div className='control-buttons'>
              <button onClick={this.props.like.bind(null,this.props.item.id)} className='likes'>👍🏻 {this.props.item.likes}</button>
              <button onClick={this.props.dislike.bind(null,this.props.item.id)} className='likes'>👎🏻 {this.props.item.dislikes}</button>
            </div>
          </figcaption>

        </div>
      </figure>
    );
  }

}

export default Card;
