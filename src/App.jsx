import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { InfiniteList, Stream, WordCountStream } from './components'

import './style/react-tabs.css';
import './style/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tom's Dev Environment</h1>
        </header>
        <Tabs>

          <TabList>
            <Tab>Subreddit list</Tab>
            <Tab>Stream</Tab>
            <Tab>Word Count Stream</Tab>
          </TabList>
          <TabPanel>
            <InfiniteList />
          </TabPanel>
          <TabPanel>
            <Stream />
          </TabPanel>
          <TabPanel>
            <WordCountStream />
          </TabPanel>
        </Tabs>
      </div>

    );
  }
}



export default App;
