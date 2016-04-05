import React, {Component, PropTypes} from 'react';

export default class ListView extends React.Component {

	static propTypes = {

		users: PropTypes.arrayOf(PropTypes.shape ({

		name: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired

		})),

		onSelect: PropTypes.func ,
		onNew: PropTypes.func.isRequired,

	}

getUser(user){
	return <li key={user.name} onClick={() => this.props.onSelect(user)}> 
			<img src={user.photo}/>
			{user.name}
			</li>
}


render(){
	let { users, onNew } = this.props;

	return (

		<div className ="list-view-wrapper">
			
			<div className="LV-header">
				<h1>CONTACTS</h1>
				<button onClick={onNew}> <i className="fa fa-plus-circle"></i> Add New </button>
					<br/>
		

			
			</div>


			<ul className="LV-username">
			
			{ users.map(this.getUser.bind(this))}
			</ul>


		</div>

		)

	}

}
