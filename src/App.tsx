import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';

interface Props {

}
interface State {
  robotGallery: any[],
}

class App extends React.Component<Props, State> {
  constructor(props){
    super(props);
    this.state = {
      robotGallery: [],
    }
  }
  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => this.setState({robotGallery: data}))
  }

  render (){
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo"/>
          <h1>机器人工厂人渣老板黄鹤和小姨子跑路了，剩下的机器人全部大减价处理</h1>
        </div>
          <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(i => <Robot id={i.id} email={i.email} name={i.name}/>)}
        </div>
      </div>
    );
    }
}

export default App;
