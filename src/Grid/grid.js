import React,{Component} from 'react';
import './grid.css';
class Square extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container" onClick={()=>this.props.gridClick(this.props.index)}>
            <p className="gridsquare">{this.props.grid[this.props.index]}</p>
            </div>
        );
    }
}

export default Square;