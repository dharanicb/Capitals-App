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
  state = {selectCapital: countryAndCapitalsList[0].id}

  onChangeList = event => {
    this.setState({selectCapital: event.target.value})
  }

  getCountry = () => {
    const {selectCapital} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.filter(
      eachCapital => eachCapital.id === selectCapital,
    )

    return activeCountryAndCapital[0].country
  }

  render() {
    const {selectCapital} = this.state
    const country = this.getCountry(selectCapital)

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select name="countries" id="country" onChange={this.onChangeList}>
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="country">is capital of which country</label>
            <p>{country}</p>
          </div>
        </div>
      </div>
    )
  }
}
// Write your code here

export default Capitals
