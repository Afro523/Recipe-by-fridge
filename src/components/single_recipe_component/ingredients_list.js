import React, {Component} from 'react';

export default class IngredientsList extends Component{
    constructor(props){
        super(props)
    }

    renderIngredients(){
        console.log(this.props)
        return this.props.ingredients.map((ingredient)=> {
            return (
                <div key={ingredient.name} className="row text-center">
                    <div className="col-6">
                        {ingredient.name}
                    </div>
                    <div className="col-6">
                        {ingredient.quantity}
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div 
                className="col-3" 
                style={{
                    "border":"1px solid black"
                }}
                >
                <div className="row text-center">
                    <div className="col-6">
                        Ingredient
                    </div>
                    <div className="col-6">
                        Quantity
                    </div>
                </div>
                    {this.renderIngredients()}
            </div>
        )
    }
}