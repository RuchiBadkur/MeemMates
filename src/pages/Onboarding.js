import React from 'react'
import Nav from '../components/Nav'

const Onboarding = () => {

  function handleSubmit(){

  }

  function handleChange(){

  }

  return (
    <div className='onboarding'>
      <Nav 
        setShowModal={()=>{}}
        showModal={false}
      />

      <div className='onboarding-container'>
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit} className='onboarding-form'>
          <section className='onboard-profile'>
            profile
          </section>
          <section className='onboard-details'>
            <label htmlFor='first_naem'>First Name</label>
            <input 
              id='first_name'
              type='text'
              name='first_name'
              placeholder='First Name'
              required={true}
              value={""}
              onChange={handleChange}
            />
          </section>
          
        </form>
      </div>

    </div>
  )
}

export default Onboarding;