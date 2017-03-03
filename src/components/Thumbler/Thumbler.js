import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./Thumbler.styl";


class Thumbler extends React.Component{
	render(){

		const { title, desc, switches } = this.props.thumblerData;
		const { activeSwitch, action, getSwitchValue } = this.props;

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
									<input onChange={ e => { getSwitchValue(e, action) } }  name={ item.group } checked={ activeSwitch === item.name }  value={ item.name } type="radio" />
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

const mapStateToProps = ( state ) =>({

});

const mapDispatchToProps = ( dispatch ) =>({
	getSwitchValue: (e, action) => { dispatch(action(e)) }
});

Thumbler = connect(mapStateToProps, mapDispatchToProps)(Thumbler);

export default Thumbler;