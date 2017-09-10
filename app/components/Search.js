import React, {Component} from "react";

export default class Search extends React.Component {
    render() {
        return(
        <div className="row">
            <div className="col-md-12">
                <div className="option-toggle">
                    <div className="panel panel-default">
                    <div className="panel-heading">Filter Options</div>
                        <div className="panel-body">
                            <form action="/scrape" method="POST"> 
                                <div className="form-group row">
                                <label htmlFor="gender" className="col-sm-2 col-form-label">Gender:</label>
                                <div className="col-sm-10">
                                    <select name="gender">
                                    <option value="women" name="women">Women</option>
                                    <option value="men" name="men">Men</option>
                                    </select> 
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="brand" className="col-sm-2 col-form-label">Brand:</label>
                                <div className="col-sm-10">
                                    <select name="brand">
                                    <option value="lucchese" name="lucchese">Lucchese</option>
                                    <option value="ariat" name="ariat">Ariat</option>
                                    <option value="old+gringo" name="old+gringo">Old Gringo</option>
                                    <option value="dan+post" name="dan+post">Dan Post</option>
                                    <option value="tony+lama" name="tony+lama">Tony Lama</option>
                                    <option value="corral" name="corral">Corral</option>
                                    <option value="justin" name="justin">Justin</option>
                                    <option value="frye" name="frye">Frye</option>
                                    <option value="stetson" name="stetson">Stetson</option>
                                    <option value="dingo" name="dingo">Dingo</option>
                                    </select> 
                                </div>
                                </div>
                                <div className="form-group row">
                                <label htmlFor="shoeSize" className="col-sm-2 col-form-label">Shoe Size:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control size-options" id="size-options" name="size" placeholder="Enter Size Here"/>
                                </div>
                                </div>
                                <button type="submit" className="btn btn-secondary" id="filter-search" name="filter-search">Search</button>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}