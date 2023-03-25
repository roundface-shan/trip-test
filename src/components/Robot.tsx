import React from "react";
import styles from './Robot.module.css'
 
interface IRobotProps {
    id: number;
    name: string;
    email: string;
    children?: React.ReactNode
}

const Robot: React.FC<IRobotProps> = (props) => {
    const {id, name, email, children} = props
    return (
    <div className={styles.cardContainer}>
        <img alt="robot" src={`https://robohash.org/${id}`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    )
}

export default Robot;