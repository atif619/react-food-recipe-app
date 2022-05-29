import React from "react";
import Loader from "./Loader.js";
const Recipe = ({ data,loading }) => {
    // console.log(data);
    return (
        <>
        {
            loading ? <Loader /> : (
                <div className="container">
                {
                    data.map((cVal, index) => {
                        return (
                            <div key={index} className="col">
                                <div className="imgbox">
                                    <img src={cVal.recipe.image} alt="image" />
                                </div>
                                <div className="info">
                                    <h4>{cVal.recipe.label}</h4>
                                </div>
                                <div className="buttons">
                                    <a href="">Ingredients</a>
                                    <a href="">Full Recipe</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            )
        }
           
            {/* <h1>{data[1].recipe.label}</h1> */}
        </>
    );
};

export default Recipe;
