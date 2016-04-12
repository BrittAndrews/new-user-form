import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import users from './profile-constructor';


// export default class SingleView extends React.Component {

// 	static propTypes = {

// 		user: PropTypes.shape ({

// 		name: PropTypes.string.isRequired,
// 		email: PropTypes.string.isRequired,
// 		phone: PropTypes.string.isRequired,
// 		location: PropTypes.string.isRequired,
// 		photo: PropTypes.string.isRequired

// 		}),

// 		onBack: PropTypes.func

// 	}



// render(){
// 	let {user} = this.props;
// 	return (

// 		<div className ="single-view-wrapper">
// 			<div className="SV-header">
// 				<button onClick={this.props.onBack}> <i className="fa fa-arrow-left"/> </button>
// 				<img src={user.photo} alt={user.name}/>
// 			</div>

// 			<ul>
// 				<li> 
// 				<i className="fa fa-user"/>
// 				{user.name} 
// 				</li>

// 				<li> 
// 				<i className="fa fa-envelope"/>
// 				{user.email} 
// 				</li>

// 				<li> 
// 				<i className="fa fa-mobile"/>
// 				{user.phone} 
// 				</li>

// 				<li> 
// 				<i className="fa fa-globe"/>
// 				{user.location} 
// 				</li>

// 			</ul>

// 		</div>

// 		)

// 	}

// }


export default class SingleView extends Component {
render(){
	let { user_name } = this.props.params;
	let user = users.find(user => user.name === user_name);
	return (

		<div className ="single-view-wrapper">
			<div className="SV-header">
				<Link to='/'> <i className="fa fa-arrow-left"/> </Link>
				<img src={user.photo} alt={user.name}/>
			</div>

			<ul>
				<li> 
				<i className="fa fa-user"/>
				{user.name} 
				</li>

				<li> 
				<i className="fa fa-envelope"/>
				{user.email} 
				</li>

				<li> 
				<i className="fa fa-mobile"/>
				{user.phone} 
				</li>

				<li> 
				<i className="fa fa-globe"/>
				{user.location} 
				</li>

			</ul>

		</div>

		)

	}

}



