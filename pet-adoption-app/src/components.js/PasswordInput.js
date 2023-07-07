import React from 'react'

const PasswordInput = ({value, handleChange}) => {
  return (
    <div>
        <label className=''>password</label>
        <input className='' type='password' placeholder='Enter your password here' value={value} /* required */ onChange={(e)=>handleChange(e)}></input>
    </div>
  )
}

export default PasswordInput