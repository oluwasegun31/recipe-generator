import classes from './SearchCard.module.css'
function SearchCard ({cardCalories, cardImg, cardName, style, onClick}){
    return(
        <section className={classes.infoItem} onClick={onClick}>
            <div className={classes.infoImage} style={style}>
                <img src={cardImg} alt="cards" />
            </div>
            <h4>{cardName}</h4>
            <p>Cal: {cardCalories}</p>
        </section>
    )
}

export default SearchCard