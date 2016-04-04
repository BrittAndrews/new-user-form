import React, { Component, PropTypes } from 'react';
import SSF from 'react-simple-serial-form';



export default class addContactForm extends Component {

  static propTypes = {
    onAdd: PropTypes.func.isRequired,

  }

  dataHandler(contactFormData) {
    this.props.onAdd(contactFormData);
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

          <div className="formfields">
            <label>
              Photo URL:
              <input type="URL" name="photo"/>
            </label>
          </div>

          <button>Save!</button>
        </SSF>
      </div>
    );
  }
}



