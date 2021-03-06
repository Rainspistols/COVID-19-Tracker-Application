import React from 'react';
import styles from './App.module.css';

import { CountryPicker, Chart, Cards } from './components';
import { container } from './App.module.css';
import { fetchData } from './api';

import covid19Image from './images/covid19.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={container}>
        <img className={styles.image} src={covid19Image} alt={'COVID - 19'} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
