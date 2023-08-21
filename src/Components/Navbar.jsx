import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
function Navbar(){
    const navStyle = {
        active: {font: "700 1.5rem 'Tabular-Bold'", color: 'crimson'},
        notActive: {font: "700 1.5rem 'Tabular-Bold'", color: '#000'}
    }
    
    return(
        <nav className={classes.nav}>
            <NavLink 
                to="/"
                style={({isActive})=> isActive ?  navStyle.active: navStyle.notActive}
            >
                Home
            </NavLink>
            <NavLink
                to="search"
                style={({isActive})=> isActive ?  navStyle.active: navStyle.notActive}
            >
                Recipe
            </NavLink>
        </nav>
    )
}

export default Navbar