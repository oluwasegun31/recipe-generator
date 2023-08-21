import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import classes from './RecipeDetails.module.css';
import diamond from '../Assets/Images/icons8-diamond-48.png';
import blueDiamond from '../Assets/Images/icons8-diamond-blue.png';
import backArrow from '../Assets/Images/icons8-arrow-48.png';

function RecipeDetails(){
    // to get the pos in the params from the useNavigate, the data from the location.state 
    const {pos} = useParams();
    const location = useLocation();
    const data = location.state;
    const recipeData = data[pos].recipe;

    // Scroll to the top of the recipe details component
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    // to store the useNavigate function in a variable
    const navigate = useNavigate();

    return(
        <section className={classes.detailsContainer} onClick={()=> navigate(-1)}>
            <section className={classes.back} >
                <img src={backArrow} alt="backArr" />
            </section>
            <section className={classes.detailsHeading}>
                <h1 className={classes.detailName}>{recipeData.label}</h1>
                <div className={classes.type}>
                    <p className={classes.dishType}>Dish Type: {recipeData.dishType}</p>
                    <p className={classes.mealType}>Meal Type: {recipeData.mealType}</p>
                    <p className={classes.calories}>Calories: {(recipeData.calories).toFixed()} Cal</p>
                </div>
            </section>
            <section className={classes.ingredient}>
                <h3>
                    <img src={diamond} alt="diamond" />
                    Ingredient
                </h3>
                <div className={classes.ingredientList}>
                    <div className={classes.list}>
                        {recipeData.ingredientLines.map((item, pos) => {
                            return <p key={pos}>
                                        <img src={blueDiamond} alt="blue" />
                                        {item}
                                    </p>
                        })}
                        <h5 className={classes.source}>Source by {recipeData.source}</h5>
                    </div>
                    <div className={classes.detailImg}>
                        <img src={recipeData.image} alt="recipeImg" />
                    </div>
                </div>
            </section>
            <section className={classes.healthLabel}>
                <h3>
                    <img src={diamond} alt="diamond" />
                    Health Labels
                </h3>
                <div className={classes.label}>
                    {recipeData.healthLabels.map((item, pos)=> {
                        return <p key={pos}>
                                <img src={blueDiamond} alt="blue" />
                                {item}
                               </p>
                    })}
                </div>
            </section>
        </section>
    )
}

export default RecipeDetails