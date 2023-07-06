import React, { useState } from 'react';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>主应用</h1>
      <div className="mainapp-main">
        {/* 子应用 */}
        <main id="subapp-viewport"></main>
      </div>
    </div>
  );
};

export default App;