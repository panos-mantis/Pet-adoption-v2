import React from 'react'

const EmailInput = ({value, handleChange}) => {
  return (
    <div>
        <label className=''>email</label>
        <input className='' type='text' placeholder='Enter your email here' value={value} /* required */ onChange={(e)=>handleChange(e)}></input>
    </div>
  )
}

export default EmailInput