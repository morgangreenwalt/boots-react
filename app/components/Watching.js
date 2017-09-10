import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class Watching extends React.Component {  
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
            {this.props.watchBoots.map((data, i) => {

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <a href={data.link} target="_blank"><img src={data.image} width="100%"/></a>
                        </div>
                        <div className="col-md-8">
                            <div id="boots">
                                <h4 className="boots-name">{data.title}</h4>
                                <a href={data.link} target="_blank"><p>View More</p></a>
                                <p>Price: {data.price}</p>
                                <h4 className="watching">Watching!</h4>
                                <button type="submit" name="unwatch" className="btn btn-secondary" id={data._id}>Unwatch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );

        })}
        </div>
        )
    }
}

// <form action="/unwatch/{data.id}" method="POST">
//     <button type="submit" id="unwatch" className="btn btn-secondary" name="#">Unwatch</button>
// </form>