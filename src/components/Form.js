import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props){
      super(props)
      this.state = {
          name:'',
          tel: '',
          email: '',
          organization: '',
          message: '',
      };
    //   this.handleInputChange = this.handeInputChange.bind(this)
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
      event.preventDefault()
      alert(`Welcome ${this.state.name}`)
  }

  render() {
    return (
    <div className='row'>
      <form autocomplete='off' className='col-8' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='input-field col col-6'>
                <i className="material-icons prefix">account_circle</i>
                <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} require='true'/>
                <label for='name' style={{width: '0px', height: '0px'}}>Name</label>
            </div>
            </div>
            <div className='row'>
            <div className='input-field col s12'>
                <i className="material-icons prefix">phone</i>
                <input type='tel' name='tel' value={this.state.tel} onChange={this.handleInputChange} require='true'/>
                <label for='tel' style={{width: '0px', height: '0px'}}>Tel</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
                <i className="material-icons prefix">email</i>
                <input type='text' name='email' value={this.state.email} onChange={this.handleInputChange}/>
                <label for='email' style={{width: '0px', height: '0px'}}>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
                <i className="material-icons prefix">store</i>
                <input type='text' name='organization' value={this.state.organization} onChange={this.handleInputChange}/>
                <label for='organization' style={{width: '0px', height: '0px'}}>Organization</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
                <i className="material-icons prefix">message</i>
                <input type='text' name='message' value={this.state.message} onChange={this.handleInputChange} require='true'/>
                <label for='message' style={{width: '0px', height: '0px'}}>Message</label>
            </div>
          </div>
            <button type='submit'>Submit</button>
      </form>
    </div>
    )
  }
}
