import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
  
    render(){
      return (
        <div className="Item">
            {this.props.url}
        </div>
      );
    }
  }
  
  export default ListItem;