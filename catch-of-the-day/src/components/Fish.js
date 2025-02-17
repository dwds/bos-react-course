import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };
  
  render() {
    const data = this.props.data;
    const isAvailable = data.status === "available";

    return (
      <li className="menu-fish">
        <img src={data.image} alt={data.name} />
        <h3 className="fish-name">{data.name}
          <span className="price">{formatPrice(data.price)}</span>
        </h3>
        <p>{data.desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}>
          {isAvailable ? '+ Add To Cart' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
