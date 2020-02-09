import React from 'react';
import logo from '../Octocat.png';
import GithubSearch from "./organisms/GithubSearch";

const styles = require('./App.module.css');

const App = () => (
  <div className={styles.App}>
    <header className={styles.AppHeader}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <div>Search for Github users.</div>
    </header>
    <section className={styles.GithubSearch}>
      <GithubSearch/>
    </section>
  </div>
);

export default App;
