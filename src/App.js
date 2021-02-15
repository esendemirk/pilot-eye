import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <video autoPlay loop muted id='video'>
        <source src='https://vod-progressive.akamaized.net/exp=1613372327~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4305%2F17%2F446527892%2F1958634583.mp4~hmac=1dd90ef5a1abba373ca1debc4c7c6f272ab8be6d5c3da0e8baab66f00d23dee3/vimeo-prod-skyfire-std-us/01/4305/17/446527892/1958634583.mp4?filename=production+ID%3A5077714.mp4' type='video/mp4'/>
      </video>
    </div>
  );
}

export default App;
