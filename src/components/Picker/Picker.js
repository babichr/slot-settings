import React from "react";
import ReactDOM from "react-dom";
import "./Picker.styl";

class Picker extends React.Component{
	render(){
	const { title, list, name } = this.props.pickerData
		return(
			<div className="picker">
				<h2 className="picker__title">
					{
						title
					}
				</h2>
				<div className="picker__list">
				{
					list.map((item, i)=> {
						return (
							<label key={i} className="picker__item">
								<input type="radio" checked={item.checked} name={name} value={item.value} />
								<span>
									{
										item.value
									}
								</span>
							</label>
						)
					})
				}
				</div>
			</div>
		)
	}
}

export default Picker;