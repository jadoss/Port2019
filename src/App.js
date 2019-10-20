import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'
import './App.css'
import ScrollArea from 'react-scrollbar'


class App extends Component {
  render() {
    return (
      <div className="demo-content">
          <Layout>
              <Header className="header-color" title="Portfolio" scroll>
                  <Navigation>
                      <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/projects">Projects</Link>      
                  </Navigation>
              </Header>
              <Drawer title="James Doss">
                  <Navigation>
                      <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                      <Link to="/about">About</Link>                      
                      <Link to="/projects">Projects</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <ScrollArea>
                    <Main />
                  </ScrollArea>
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
