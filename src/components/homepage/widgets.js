import React, { Component } from 'react';
import '../../styles/home.css';
import Widget from './singlewidget';

const axios = require('axios');


class Widgets extends Component {

  constructor(props) {
    super(props);
    this.state = {widgets: []};
  }

  componentDidMount(){
    //initial call for data
    axios({
      method: 'get',
      url: 'https://test-store-server.vercel.app/widget',
      headers : {'Content-Type' : 'application/json'}
    }).then((res) =>{
      this.setState({widgets : res.data.widgets})
    }).catch((err) => {
    })

  }


  render() {
    const mealtypes = this.state.widgets
    const selectedCity = this.props.selCity
      return (

        <main className="holders">
        <p className="quick">Quick Searches</p>
        <p className="quick_des">Discover restaurants by type of meals</p>
        <div className="container-fluid">
            <div className="row">

          {mealtypes.map((item) => {
            return <Widget name={item.name} selectedCity={selectedCity}/>
          })}


              </div>
          </div>
    </main>

      );
    }
}

export default Widgets;
