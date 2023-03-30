import React, {useState, useEffect} from 'react';
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

const App: React.FC = (props) => {
  const [robotGallery, setRobotG] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try{
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    // .then(resp => resp.json())
    // .then(data => setRobotG(data))
      const data = await resp.json()
      setRobotG(data)
      } catch(e){
        if (e instanceof Error){
          setError(e.message)
        }
      }
      setLoading(false)
    }
    fetchData()
  }, [])

    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo"/>
          <h1>机器人工厂人渣老板黄鹤和小姨子跑路了，剩下的机器人全部大减价处理</h1>
        </div>
          <ShoppingCart />
          {(!error || error != '') && <div>错误信息：{error}</div>}
          { !loading ? (
            <div className={styles.robotList}>
              {robotGallery.map(i => <Robot id={i.id} email={i.email} name={i.name}/>)}
            </div>
           ) : (<h2>加载中</h2>)
          }
      </div>
    );
    }

export default App;
