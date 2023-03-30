import React, {useContext} from "react";
import styles from './Robot.module.css';
import { appContext, appSetStateContext } from '../AppState';
 
interface IRobotProps {
    id: number;
    name: string;
    email: string;
    children?: React.ReactNode
}

const Robot: React.FC<IRobotProps> = (props) => {
    const value = useContext(appContext)
    const {id, name, email, children} = props
    const setState = useContext(appSetStateContext)
    const handleClick = () => {
        if(setState){
            setState(state => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, {id, name}]
                    }
                }
            })
        }
    }
    return (
    <div className={styles.cardContainer}>
        <img alt="robot" src={`https://robohash.org/${id}`} />
        <h2>{name}</h2>
        <p>{email}</p>
        <p>作者：@{value.username}</p>
        <button onClick={handleClick}>加入购物车</button>
    </div>
    )
}

export default Robot;