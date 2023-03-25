import React from "react";
import styles from './ShoppingCart.module.css'

interface Props {

}

interface State {
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            isOpen: false,
        }
    }
    render(){
        return <div>
            <button>购物车 2 （件）</button>
            <div>
                <ul>
                    <li>robot1</li>
                    <li>robot2</li>
                </ul>
            </div>
        </div>
    }
}