import React from "react";
import ReactDOM from "react-dom";
import "./Thumbler.styl";

class Thumbler extends React.Component{
	render(){

		const { title, desc, switches } = this.props.thumblerData

		return(
			<div className="thumbler">
				<div className="thumbler__info">
					<div className="thumbler__title">{ title }</div>
					<div className="thumbler__desc"> { desc } </div>
				</div>
				<div className="thumbler__box">
					{
						switches.map( (item, i) => {
							return(
								<label className="thumbler__switcher" key={item + i} >
									<input checked={ item.checked } name={ item.title } value={ item.name } type="radio" />
									<span>{item.name}</span>
								</label>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default Thumbler;