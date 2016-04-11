import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import users from './profile-constructor';



// render a page with propTypes//////////////////////


// export default class ListView extends React.Component {

// 	static propTypes = {

// 		users: PropTypes.arrayOf(PropTypes.shape ({

// 		name: PropTypes.string.isRequired,
// 		photo: PropTypes.string.isRequired

// 		})),

// 		onSelect: PropTypes.func ,
// 		onNew: PropTypes.func.isRequired,

// 	}

// getUser(user){
// 	return <li key={user.name} onClick={() => this.props.onSelect(user)}> 
// 			<img src={user.photo}/>
// 			{user.name}
// 			</li>
// }


// render(){
// 	let { users, onNew } = this.props;

// 	return (

// 		<div className ="list-view-wrapper">
			
// 			<div className="LV-header">
// 				<h1>CONTACTS</h1>
// 				<button onClick={onNew}> <i className="fa fa-plus-circle"></i> Add New </button>
// 					<br/>
		

			
// 			</div>


// 			<ul className="LV-username">
			
// 			{ users.map(this.getUser.bind(this))}
// 			</ul>


// 		</div>

// 		)

// 	}

// }





export default class ListView extends Component {


getUser(user){
	return <li key={user.name}> 
			<Link to='/singleview'>
			<img src={user.photo}/>
			{user.name}
			</Link>
			</li>
}


render(){

	return (

		<div className ="list-view-wrapper">
			
			<div className="LV-header">
				<h1>CONTACTS</h1>
				<Link to='/addcontact'> <i className="fa fa-plus-circle"></i> Add New </Link>
					<br/>
		

			
			</div>


			<ul className="LV-username">
			
			{ users.map(this.getUser.bind(this))}
			</ul>


		</div>

		)

	}

}
