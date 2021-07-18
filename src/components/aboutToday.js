import React from 'react'
import './aboutToday.css'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class Today extends React.Component{

    constructor(props){
        super(props);
        this.state={
            todaydate:null,
            copyright:null,
            hdimage:null,
            explanation:null,
            title:null,
        };
        this.gotoApi=this.gotoApi.bind(this);
    }

   componentDidMount(){
       fetch("https://api.nasa.gov/planetary/apod?api_key=NELryzealMsDJXthW3MbZvVP8ILeevYPMk2u8PfX")
       .then(res=> res.json())
       .then(
           (result)=>{
               this.setState({
                   todaydate:result.date,
                   copyright:result.copyright,
                   hdimage:result.hdurl,
                   explanation:result.explanation,
                   title:result.title
               })
           },
       )

   }

   gotoApi(){
       alert("hello");
   }


    render(){
        return(
            <div class="aboutToday">
                <h3 id="date"> About Today: {this.state.todaydate}</h3>
                <img src={this.state.hdimage} alt="" />
                <p id="title">"{this.state.title}"</p>
                <p id="copyright">Copyright by: {this.state.copyright}</p>
                <p id="exp">{this.state.explanation}</p>
                <Button variant="outline-info" id="apibtn" href="https://api.nasa.gov/planetary/apod?api_key=NELryzealMsDJXthW3MbZvVP8ILeevYPMk2u8PfX" target="_blank">View API JSON</Button>

            </div>
        );
    }


}

export default Today;