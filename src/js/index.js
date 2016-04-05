import React from 'react';
import ReactDOM from 'react-dom';
import SingleView from './single-view';
import ListView from './list-view';
import Profile from './profile-constructor';
import myArtists from './profile-constructor';
import AddContactForm from './form-view';
import Dropzone from 'react-dropzone';



function renderListView(){
ReactDOM.render(
	<ListView users={myArtists} onSelect={renderSingleView} onNew={renderForm} />
	, document.querySelector('.app')
	);	
}



function renderSingleView(user){
ReactDOM.render(
	<SingleView user={user} onBack={renderListView}/>
	, document.querySelector('.app')
	);
}



function addContactAndRenderList(newItem) {
  Profile.push(newItem);
  renderListView();
}

function renderForm() {
ReactDOM.render(
	<AddContactForm onAdd={addContactAndRenderList}  />
	, document.querySelector('.app')
	);
}


renderListView();


