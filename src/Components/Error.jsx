import classes from './Error.module.css';
import closeIcon from '../Assets/Images/icons8-close-48.png'
function Error(){
    return(
        <section className={classes.errContainer}>
            <img src={closeIcon} alt="close" />
            <p>Unable to Load Content</p>
        </section>
    )
}

export default Error