import classes from './Error404.module.css';
import bulbImg from '../Assets/Images/bulb.png';
import arrow from '../Assets/Images/icons8-arrow-50.png';
import { useNavigate } from 'react-router-dom';

function Error404(){
    const navigate = useNavigate();

    return(
        <section className={classes.container}>
            <div className={classes.bulb}>
                <img src={bulbImg} alt="bulb" />
            </div>
            <div className={classes.writeup}>
                <h1>404</h1>
                <p>Looks like you've lost</p>
                <p>the page you're looking for is not available!</p>
                <button type='button' onClick={()=> navigate('/')}>
                    Go to home
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
        </section>
    )
}

export default Error404