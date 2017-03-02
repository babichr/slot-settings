import React from "react";
import ReactDOM from "react-dom";
import { HeaderData } from "../../data/data";
import "./Header.styl";

class Header extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
		return(
			<div className="header">
				<div className="header__top">
					{
						HeaderData.map((item, i)=> {
							return(
								<div className={ `header__item  header__item_${item.width} ${item.active}` } key={i}>
									<img alt="" src={item.icon} /> 
								</div>
							)
						})
					}
				</div>
				<div className="header__name">
					settings
				</div>
			</div>
		)
	}
}


export default Header;