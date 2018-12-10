import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../actions'

class SingleRecipe extends Component{

    
    componentDidMount(){
        this.props.fetchRecipes();
    }

    render(){
        console.log(this.props)
        return(
            <div>
                Single Recipe
                {this.recipes}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {recipes: state.recipes};
}

export default connect(mapStateToProps, { fetchRecipes })(SingleRecipe);
