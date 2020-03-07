import React, { Component } from 'react';
import classes from './MainPanel.module.css';
import Medical from '../Medical/Medical';
import Engineering from '../Engineering/Engineering';
import Commerce from '../Commerce/Commerce';
import Arts from '../Arts/Arts';
import Axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SidePanal from '../SidePanal/SidePanal';


class MainPanal extends Component {
  state = {
    data: [],
    commerce: [],
    engineering: [],
    medical: [],
    arts: [],
  }
  componentDidMount() {
    Axios.get(`http://www.mocky.io/v2/5e411ba42f000052005831d0?mocky-delay=2000ms`)
      .then(res => {
        const data = res.data;
        const commerce = data.filter((o) => Object.values(o).includes('Commerce'))
        const engineering = data.filter((o) => Object.values(o).includes('Engineering'))
        const medical = data.filter((o) => Object.values(o).includes('Medical'))
        const arts = data.filter((o) => Object.values(o).includes('Arts'))

        this.setState({
          data: data,
          commerce: commerce,
          engineering: engineering,
          medical: medical,
          arts: arts
        })
      })
  }
  render() {
    const { engineering, commerce, medical, arts } = this.state;


    return (
      <BrowserRouter>
      <div className={classes.MainPanal}>
        <div>
        <SidePanal />
        </div>
        <div className={classes.Container}>
        <Switch>
          <Route
            path='/' exact component={Home}
          />
          <Route
            path='/medical'
            render={(props) => <Medical data={medical} {...props} />}
          />

          <Route
            path='/engineering'
            render={(props) => <Engineering data={engineering} {...props} />}
          />
          <Route
            path='/commerce'
            render={(props) => <Commerce data={commerce} {...props} />}
          />
          <Route
            path='/arts'
            render={(props) => <Arts data={arts} {...props} />}
          />
        </Switch>
        </div>
      </div>
       </BrowserRouter> 
    );
  }
}

const Home = () => (
  <div>
    <h1>Please visit left side panal</h1>
  </div>
);

export default MainPanal;