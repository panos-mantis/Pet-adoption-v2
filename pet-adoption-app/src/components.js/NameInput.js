import React from 'react'

const NameInput = ({value, handleChange}) => {
  return (
    <div>
        <label className=''>name</label>
        <input className='' type='text' placeholder='Enter your name here' value={value} /* required */ onChange={(e)=>handleChange(e)}></input>
    </div>
  )
}

export default NameInput