import React from 'react'

const Footer = () => {

  var today = new Date();

  return (
    <footer className='container'>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h4>Team Member Allocation App - {today.getFullYear()}</h4>
        </div>
      </div>
    </footer >
  )
}

export default Footer