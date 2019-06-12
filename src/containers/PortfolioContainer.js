import React, { Component } from 'react';
import BStock from '../components/BStock'

class PortfolioContainer extends Component {

  render() {

    const { stocks, sellStocks } = this.props
    return (
      <div>

        <h2>My Portfolio</h2>
          {stocks.map(stock => <BStock stock={stock} sellStocks={sellStocks}/>)
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
