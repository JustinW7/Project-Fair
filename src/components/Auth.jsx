import React from 'react'

function Auth({register}) {
  const isRegisterForm=register?true:false
  return (
    <div style={{width:'100',height:'100vh'}}>
      <div className="container w-75">
        <Link to={'/'} style={{textDecoration:'none',color:' blue',}}><i class="fa-solid fa-arrow-left"></i> Back to Home </Link>
        <div classname='card shadow p-5 bg-info'>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="https://miro.medium.com/max/1360/0*7Q3yvSIv_t0ioJ-Z.gif"className='rounded-start w=100' alt=""/>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center flex-column">
              <h1 className='fw-bolder text-light mt-2'><i class="fa-brands fa-stack-overflow fa-bounce">
                </i>Project-Fair</h1>
                {
                  isRegisterForm?'Sign up to your Account':'Sign in to your Account'
                }
            </div>
          </div>
        </div>
      </div>
      Auth</div>
  )
}

export default Auth