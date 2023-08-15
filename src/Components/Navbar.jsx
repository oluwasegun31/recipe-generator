import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
function Navbar(){
    return(
        <header className={classes.header}>
            <nav className={classes.nav}>
                <p className={classes.logo}>RecGen</p>
                <div className={classes.navItem}>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="search">
                        Recipe
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar