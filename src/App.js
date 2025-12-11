import React, { Component } from 'react';

import Introduce from './components/introduce/Introduce';
import Sidebar from './components/sidebar/Sidebar';
import Competencies from './components/competencies/Competencies';
import Work from './components/work/Work';
import About from './components/about/About';
import { Switch } from 'antd';

import 'antd/dist/antd.css';
import './scss/index.scss';

class App extends Component {
  state = {
    isDarkTheme: false,
  };

  setTheme = () => {
    this.setState({
      isDarkTheme: !this.state.isDarkTheme,
    });
  };

  render() {
    const { isDarkTheme } = this.state;
    document.body.style.backgroundColor = isDarkTheme ? '#333' : '#f5f5f5';
    return (
      <div className={`wrapper ${isDarkTheme ? 'theme--dark' : ''}`}>
        <Switch
          checkedChildren='護眼'
          unCheckedChildren='一般'
          onChange={this.setTheme}
          defaultChecked
        />
        <main className='resume-container'>
          <Introduce />
          <div className='resume-body'>
            <Sidebar />
            <div className='resume-main'>
              <About />
              <Competencies />
              <Work />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
