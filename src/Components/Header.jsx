import classes from './Header.module.css';
import headerImg from '../Assets/Images/fried-food-3329076_1280.png';
import {useNavigate} from 'react-router-dom';

function Header(){
    const navigate = useNavigate()
    return(
        <section className={classes.header}>
            <div className={classes.headLeft}>
                <h1>Explore Culinary Delights</h1>
                <p>Embark on a journey of culinary exploration with our Random Recipe Generator app. Discover a world of delightful flavors as we present you with a handpicked selection of diverse recipes.</p>
                <button onClick={()=> navigate("search")}>Search Recipe</button>
            </div>
            <div className={classes.headRight}>
                <img src={headerImg} alt="header" />
            </div>
        </section>
    )
}

export default Header