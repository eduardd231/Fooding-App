import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartBtn.module.css'
import {useContext, useEffect, useState} from 'react'
import CartContext from "../../store/cart-context";

const HeaderCartBtn = props => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    const {items} =cartCtx;

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

      const timer = setTimeout( () => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
    )
}

export default HeaderCartBtn;

//reduce transforma un array intr o singura variabila sau numar