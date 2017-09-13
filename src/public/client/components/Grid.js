import React from 'react';
import Card from './Card';

const Grid = React.createClass({
  
  render() {
    return (
      <div className="photo-grid">
       {this.props.items.map((item, idx) => <Card {...this.props} key={idx} i={idx} item={item}/>)}
      </div>
    );
  }

});

export default Grid;
