import React, { Component } from 'react';
import { Link } from 'react-router';

class Card extends Component {
  render() {
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
            <img src={this.props.item.img} alt={this.props.item.name} className='grid-photo' />
          <figcaption>
            <h2>{this.props.item.name}</h2>
            <div className='control-buttons'>
              <button onClick={this.props.clickLike.bind(null,this.props.item.id, this.props.count)} className='likes'>👍🏻 {this.props.item.likes}</button>
              <button onClick={this.props.clickDislike.bind(null,this.props.item.id, this.props.count)} className='likes'>👎🏻 {this.props.item.dislikes}</button>
            </div>
          </figcaption>

        </div>
      </figure>
    );
  }

}

export default Card;
