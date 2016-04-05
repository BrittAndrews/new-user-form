import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';



export default class addContactForm extends Component {

  static propTypes = {
    onAdd: PropTypes.func.isRequired,

  }

  constructor(props){
  	super(props)
  		this.state = {
  			preview: " http://www.offaxis.co.uk/themes/shared/common/images/placeholder.png " 
  	}
  }

  dataHandler(contactFormData) {
    this.props.onAdd(contactFormData);
  }


  dropHandler([file]){
  	 this.setState({preview: file.preview});
  }




  render() {

    return (
      <div className="form-view">
        <h1>Add Contact</h1>

        <SSF onData={::this.dataHandler}>
          
          <div className="formfields">
            <label>
              Full Name:
              <input type="text" name="name"/>
            </label>
          </div>

          <div className="formfields">
            <label>
              Email:
              <input type="email" name="email"/>
            </label>
          </div>

          <div className="formfields">
            <label>
              Phone:
              <input type="tel" name="phone"/>
            </label>
          </div>

          <div className="formfields">
            <label>
              Location:
              <input type="text" name="location"/>
            </label>
          </div>

          <br/> <br/>

          <div className="formfields">

          	<p> drag & drop a file to add a photo </p>


              <input type="hidden" value={ this.state.preview } name="photo"/>
              	<Dropzone onDrop={ ::this.dropHandler }>
              		<img src={ this.state.preview }/>
             	 </Dropzone>

           



          </div>


          <div className="button">
          <button>Save!</button>
          </div>

        </SSF>
      </div>
    );
  }
}



