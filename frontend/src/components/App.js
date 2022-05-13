import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import GithubCorner from "react-github-corner";
import { API_BASE_URL } from '../config';

function App() {
  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/wallet/info`)
      .then(response => response.json())
      .then(json => setWalletInfo(json));
  }, []);

  const { address, balance } = walletInfo;

  return (
    <div className="App">
      <GithubCorner
        href="https://github.com/chrisstef/fichain"
        target="__blank"
        bannerColor="#e66"
        octoColor="#fff"
        size={62}
        direction="left"
      />
      <img className="logo" src={logo} alt="application-logo" />
      <br />
      <h3>Welcome to Fichain</h3>
      <br />
      <Link to="/blockchain">Blockchain</Link>
      <Link to="/conduct-transaction">Conduct a Transaction</Link>
      <Link to="/transaction-pool">Transaction Pool</Link>
      <br />
      <div className="WalletInfo">
        <div>Address: {address}</div>
        <div>Balance: {balance}</div>
      </div>
    </div>
  );
}

export default App;
