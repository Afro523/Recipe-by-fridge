import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRecipe } from '../../actions'

class SingleRecipe extends Component{

    
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchRecipe(id);
    }

    render(){
        let recipe = this.props.recipe;
        if(!recipe.name) {
            return (
                <div>Loading...</div>
            )
        }
        return(
            <div>
                <div className="col-12 text-center">
                    <p style={{"fontSize":"30px"}}>
                        {recipe.name}
                    </p>
                    <p>
                        Serves: {recipe.serving.serveLow} - {recipe.serving.serveHigh}
                    </p>
                    

                </div>
            </div>
        )    
    }
}

function mapStateToProps(state){
    return {recipe: state.recipe};
}

export default connect(mapStateToProps, { fetchRecipe })(SingleRecipe);
