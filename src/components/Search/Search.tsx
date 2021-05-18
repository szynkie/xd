import React, {Component} from "react";
import './Search.css'

class Search extends Component<any, any>{
    render() {
        return(
            <div className="sTest">
                <input className="srchInput"/>
                <button className="srchBtn">Search</button>
            </div>
        );
    }
}
export default Search