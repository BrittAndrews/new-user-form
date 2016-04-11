import React from 'react';
import { render } from 'react-dom';
import SingleView from './single-view';
import ListView from './list-view';
import Profile from './profile-constructor';
import myArtists from './profile-constructor';
import AddContactForm from './form-view';
import Dropzone from 'react-dropzone';
import { Router, Route, hashHistory } from 'react-router';

import cookie from 'js-cookie';

// cookie.set('anything-key', 'anything-value');

cookie.remove('anything-key');

console.log( cookie.get('anything-key') );


// PAGE VIEWS via propTypes///////////////////////////////////////////////////////


// function renderListView(){
// render(
// 	<ListView users={myArtists} onSelect={renderSingleView} onNew={renderForm} />
// 	, document.querySelector('.app')
// 	);	
// }



// function renderSingleView(user){
// render(
// 	<SingleView user={user} onBack={renderListView}/>
// 	, document.querySelector('.app')
// 	);
// }



// function addContactAndRenderList(newItem) {
//   Profile.push(newItem);
//   renderListView();
// }

// function renderForm() {
// render(
// 	<AddContactForm onAdd={addContactAndRenderList}  />
// 	, document.querySelector('.app')
// 	);
// }


// renderListView();



// router stuff ///////////////////////////////////////////////////////////////
render((
  <Router history={hashHistory}>
    <Route path="/" component={ListView}/>
    <Route path="/singleview" component={SingleView}/>
    <Route path="/addcontact" component={AddContactForm}/>
  </Router>
), document.querySelector('.app'));







