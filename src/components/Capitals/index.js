import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectCapital: 0}

  renderCapitals = () => {
    const {onChangeList} = this.props

    return countryAndCapitalsList.map(eachItem => {
      const {id, capitalDisplayText} = eachItem

      const onClickCapitalsList = () => {
        onChangeList(id)
      }

      return (
        <option
          key={id}
          className="option-list"
          value={id}
          onChange={onClickCapitalsList}
        >
          {capitalDisplayText}
        </option>
      )
    })
  }

  onChangeList = id => {
    this.setState({selectCapital: id})
  }

  render() {
    const {selectCapital} = this.state
    const countryList = countryAndCapitalsList[selectCapital].country

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select name="countries" id="country">
              {this.renderCapitals()}
            </select>
            <label htmlFor="country">is capital of which country</label>
            <p>{countryList}</p>
          </div>
        </div>
      </div>
    )
  }
}
// Write your code here

export default Capitals
