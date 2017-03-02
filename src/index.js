import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/createStore";
import "./styles/main.styl";
import Header from "./components/Header";
import Body from "./components/Body";



class Main extends React.Component{

	render(){
		return (
			<Provider store={ store } >
				<main className="main">
					<Header />
					<Body />
				</main>
			</Provider>
		)
	}

};

ReactDOM.render( <Main />, document.getElementById("root") );