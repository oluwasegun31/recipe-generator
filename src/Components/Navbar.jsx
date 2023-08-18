import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
function Navbar(){
    const navStyle = {
        active: {font: "500 1.5rem 'Tabular-Medium'", color: 'crimson'},
        notActive: {font: "400 1.5rem 'Tabular-Regular'", color: '#000'}
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