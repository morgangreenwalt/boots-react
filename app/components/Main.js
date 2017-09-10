import React, {Component} from "react";
import helpers from "./utils/helpers";

// Importing components
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Watching from "./Watching";
import Results from "./Results";

export default class Main extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                id: '',
                reset: false,
                results: []
            };

            this.handleClear = this.handleClear.bind(this);
            this.handleClick = this.handleClick.bind(this);
    }

    // Show data in database
    componentDidMount(){
        helpers.getAllData().then(
            function(response) {
            console.log("scraped data loaded");
            if (response !== this.state.results) {
                this.setState({ results: response.data });
            }
            else{
                <h2>Could not find a boot match. Try another brand or size! </h2>
            }
            }.bind(this)
        );
    }

    // Fire when you search, watch, save etc (every time you complete action/ change)
    componentDidUpdate(){
        if (this.state.watch === "true") {
            helpers.watchingData().then(
                function(response) {
                    console.log("scraped data loaded");
                    if (response !== this.state.results) {
                        this.setState({ results: response.data });
                    }
                    }.bind(this)
            );
          }
          
        //   When "Reset" button is clicked,  clear results
          if (this.state.reset === "true") {
            helpers.resetData().then(
                function(response) {
                    window.location.reload();
                    console.log("boots cleared");
                }.bind(this)
              );
          }
    }

    //   When "Reset" button is clicked,  clear results
    handleClear(event){
        event.preventDefault();
        this.setState({ reset: "true" });
      }

    //   When "Watching" button is clicked,  update boot to "Watching" (doesn't work)
    handleClick(){
        this.setState({ id: _id, watch: "true" });
      }

    render() {
        return(
            <div className="main-wrapper">
                <div className="boots">
                    <h1 className="boots-title">Boots For Less</h1>
                    <img src="https://www.lucchese.com/media/cache/24/bd/24bdf81e45bd58ee063abb8d4f8ab59a.jpg" width="100%"/>
                </div>
                <Header reset={this.handleClear}/>
                <div className="container">
                    <Search/>
                    
                    <Results bootsData={this.state.results} onWatchClick={this.handleClick}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

// <Watching watchBoots={this.state.results}/>