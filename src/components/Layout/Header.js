import {Fragment} from 'react';

import mealsImage from "../../assets/1.jpg"
import classes from './Header.module.css';
import HeaderCartBtn from './HeaderCartBtn';
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartBtn onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="a table full of food"/>
        </div>
    </Fragment>
}

export default Header;