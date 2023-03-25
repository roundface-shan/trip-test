import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"/>
        <h1>机器人工厂人渣老板黄鹤和小姨子跑路了，剩下的机器人全部大减价处理</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map(i => <Robot id={i.id} email={i.email} name={i.name}/>)}
      </div>
    </div>
  );
}

export default App;
