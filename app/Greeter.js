// Greeter.js
//var config = require('./config.json');
//module.exports = function() {
//    var greet = document.createElement('div');
//    greet.textContent = config.greetText;
//    return greet;
//};


import React,{Component} from 'react'
import config from './config.json'
import style from './Greeter.css'
class Greeter extends Component{
    render(){
        return (
            <div className={style.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter
