import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-5 mt-5 me-2'>
      <div className='d-flex justify-content-between'>
      <h1>Profile</h1>
      <button className='btn btn-outlined-info'>

        <i class="fa-solid fa-angle-down"></i>
      </button>

    </div>
    <div className="row justify content center mt-3">
      <labe> 
        <input type="file" style=display:'none'}}/>
        <img width='200px'} height='200px'} className='rounded circle'  src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt=""/>
        
      </label>
      <div className='mt-3'>
        <input type="text" className='form-control' placeholder='Github'/>
        <br/>
                                                  
        <input type="text"  className='form-control' placeholder='LinkedIn'/>

      </div>

      <div className='mt-3 text-align-center d-grid'>
        <button className='btn btn-warning d-grid'>Update</button>
      </div>
    </div>
    </div>
  )
}

export default Profile