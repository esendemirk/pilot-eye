import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted id='video'>
        <source src='https://vod-progressive.akamaized.net/exp=1613367022~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4305%2F17%2F446527892%2F1958634570.mp4~hmac=880a6ad2b5492258feb07ba12751726c5ae669c141b3eb10a1de921958701995/vimeo-prod-skyfire-std-us/01/4305/17/446527892/1958634570.mp4' type='video/mp4'/>
      </video>
    </div>
  );
}

export default App;
