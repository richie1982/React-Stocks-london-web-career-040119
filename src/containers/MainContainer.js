import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import { getStocks } from '../api'

class MainContainer extends Component {

  state = {
    stocks: [],
    boughtStocks: [],
    filter: "",
    sortPrice: false,
    sortAlpha: false
  }

  handleChange = (e) => {
    this.setState({filter: e.target.value})
  }

  filterStocks = (stocks) => {
    return stocks.filter(stock => stock.type.includes(this.state.filter))
  }

 componentDidMount () {
  getStocks()
    .then(stocks => this.setState({stocks}))
 }

 buyStocks = (stock) => {
   !this.state.boughtStocks.find(st => st.name === stock.name) &&
    this.setState({ boughtStocks: [stock, ...this.state.boughtStocks]})
 }

 sellStocks = (stock) => {
  //  this.state.boughtStocks.find(st => st.name === stock.name) &&
    this.setState({ boughtStocks: this.state.boughtStocks.filter(st => st.name !== stock.name)})
 }

 handleSortAlpha = () => {
  this.setState({
    sortAlpha: !this.state.sortAlpha
  })
 }

 handleSortPrice = () => {
  this.setState({
    sortPrice: !this.state.sortPrice
  })
 }

 sortStocks = (stocks) => {
  const stocksCopy = [...stocks]
  if (this.state.sortPrice) {
    return stocksCopy.sort((a, b) => a.price - b.price)
  } else if (this.state.sortAlpha) {
    return stocksCopy.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
  } else {
    return stocks
  }
 }


  render() {
    const { stocks, boughtStocks } = this.state
    const { filterStocks, sortStocks } = this
    console.log('stocks:', stocks)
    return (
      <div>
        <SearchBar handleChange={this.handleChange} handleSortAlpha={this.handleSortAlpha} handleSortPrice={this.handleSortPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={sortStocks(filterStocks(stocks))} buyStocks={this.buyStocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={filterStocks(boughtStocks)} sellStocks={this.sellStocks} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
