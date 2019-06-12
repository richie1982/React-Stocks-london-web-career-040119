import React from 'react'

class Stock extends React.Component {

  state={
    selected: false
  }

  render () {
    console.log(this.props)
    const {ticker, name, type, price} = this.props.stock
    return (
    <div>
      <div className="card" >
        <div className="card-body" onClick={() => this.props.buyStocks(this.props.stock)}>
          
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

    )
  }
}

export default Stock

// {
//   "id": 1,
//   "ticker": "GOOG",
//   "name": "Google",
//   "type": "Tech",
//   "price": 1194.8
//   }
