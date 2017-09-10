import React, {Component} from "react";

export default class Results extends React.Component {
    constructor(props){
        super(props)
    }

   

    render() {
        return(
        <div>
        {this.props.bootsData.map((data, i) => {

        return(
            <div className="results">
                <div className="row">
                    <div className="col-md-4">
                        <a href={data.link} target="_blank"><img className="" src={data.image} alt="boot image goes here" width="100%"/></a>
                    </div>
                    <div className="col-md-8">
                        <div id="boots">
                            <form action="/" method="GET">
                            <h4 className="boots-name">{data.title}</h4>
                            </form>
                            <a href={data.link} target="_blank"><p>View More</p></a>
                            <p>Price:{data.price}</p>
                            <form onSubmit={this.props.onWatchClick} action="/" className="nav-link"><button type="submit" id={data._id} className="btn btn-secondary" name="watch">Watch</button></form>
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

// <form action="/watch/{data.id}" method="POST">
//     <button type="submit" id={data.id} className="btn btn-secondary" name="watch">Watch</button>
// </form>