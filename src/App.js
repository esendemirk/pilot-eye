import React from 'react';
import './App.css';

function App() {
  return (
    <div
      className="video"
      style={{
        position: "fixed",
        height: 0,
        zIndex: -1
      }}
    >
      <iframe title="myVideo"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/q9Af1674wHQ`}
        frameBorder="0"
      />
    </div>
  );
};

export default App;
