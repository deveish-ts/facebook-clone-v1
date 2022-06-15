import './App.css';
import React, { useContext } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import Context from './components/Context';
function App() {
  const ctx = useContext(Context);

  const user = ctx.user;

  return (
    <div className="app">
      <>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="appBody">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default App;
