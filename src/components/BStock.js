import React, { Component } from 'react';

class BStock extends Component {
    render() {
        const {ticker, name, type, price} = this.props.stock
        return (
            <div>
                <div className="card" >
                    <div className="card-body" onClick={() => this.props.sellStocks(this.props.stock)}>
          
                    <h5 className="card-title">{
                        name
                    }</h5>
                <p className="card-text">
                ({ticker}) 
                </p>
            <p>Price: {price}</p>
            
        </div>
      </div>
            </div>
        );
    }
}

export default BStock;