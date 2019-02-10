import React from 'react'

class Checkbox extends React.Component {
    state = { checked: false }

    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })

    render() {
      return (
        <div>
            <input type="checkbox" />
        </div>    
      ) 
    }
  }

export default Checkbox