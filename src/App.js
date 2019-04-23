import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'
import './App.css'



class App extends Component {
  render() {
    return (
      <div className="demo-content">
          <Layout>
              <Header className="header-color" title="Portfolio" scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/projects">Projects</Link>
                  </Navigation>
              </Header>
              <Drawer title="James Doss">
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/projects">Projects</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  
                    <Main />
                  
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
