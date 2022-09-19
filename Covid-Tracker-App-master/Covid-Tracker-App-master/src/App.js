import { Component } from 'react';
import styles from './App.module.css';
import { Banner, CardMain, ChartApp, Footer, Header } from './components';
import { FetchApi } from './api'


class App extends Component {

  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  async componentDidMount() {
    const Fetchdata = await FetchApi()
    this.setState({ data: Fetchdata })
  }

  render() {
    return(
      <div className={styles.container}>
        <Header />
        <Banner />
        <CardMain data={this.state.data} />
        <ChartApp />
        <Footer />
      </div>
    )
  }
}

export default App;
