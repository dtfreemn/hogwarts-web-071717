import React from 'react';
import Filter from './Filter';
import HogList from './HogList'
const hogsData = require('../porkers_data')

class HogPen extends React.Component {
  constructor() {
    super();

    this.state = {
      hogs: [],
      filters: ['All', 'Greased', 'Not Greased'],
      currentFilter: null,
      sorts: ['name', 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'],
      currentSort: null
    }
  }

  componentDidMount() {
    this.setState({
      hogs: hogsData.default
    })
  }

  handleFilterChange = (e) => {
    let filter
    if (e.target.value === 'Greased') {
      filter = true
    } else if (e.target.value === 'Not Greased') {
      filter = false
    } else {
      filter = null
    }
    this.setState({
      currentFilter: filter
    })
  }
    
  handleSortChange = (e) => {
    this.setState({
      currentSort: e.target.value
    })
  }

  sortHogs = (hogs) => {
    let sortedHogs
    const currentSort = this.state.currentSort
    if (currentSort !== 'name'){
      sortedHogs = hogs.sort(function(a,b){return a[currentSort] - b[currentSort]}) 
    } else if (currentSort === 'name') {
      sortedHogs = hogs.sort(function(a,b){
        let nameA = a.name
        let nameB = b.name
        if (nameA < nameB) {
          return -1
        } else if (nameA > nameB) {
          return 1
        }
        return 0
      })
    }
    return sortedHogs
  }

  render() {
    let filteredHogs = this.state.currentFilter === null ? this.state.hogs : this.state.hogs.filter(hog => hog.greased === this.state.currentFilter)
    if (this.state.currentSort !== null) {
      filteredHogs = this.sortHogs(filteredHogs)
    }
    return (
      <div className='ui grid container'>
          <Filter filters={this.state.filters} filterChangeCallback={this.handleFilterChange} />
          <button onClick={this.handleSortChange} value='name'>Sort by Name</button>
          <button onClick={this.handleSortChange} value='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'>Sort by Weight</button>
          <HogList hogs={filteredHogs}/>
      </div>
    )
  }
}


export default HogPen