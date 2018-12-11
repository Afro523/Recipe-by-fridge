import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../actions'

class SingleRecipe extends Component{

    
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchRecipe(id);
    }

    render(){
        console.log(this.props)
        return(
            <div>
                Single Recipe
                {this.recipe}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {recipe: state.recipe};
}

export default connect(mapStateToProps, { fetchRecipe })(SingleRecipe);
