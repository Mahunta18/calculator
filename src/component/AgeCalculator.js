import React, {useState } from 'react'


function AgeCalculator(props) {
  const [date,setDate] = useState(new Date().toLocaleDateString());
  const [age,setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('data =', date);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3'>Age Calculator</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={submitHandler} >
            <div className='form-group mb-2 mt-2'>
              <label htmlFor='age'>Select your Age</label>
              <input type='date' name='date' id='date' onChange={(e)=> setDate(e.target.value)} value={date} className="form-control" required />
            </div>
            <div className='form-group mb-2 mt-2'>
              <input type='submit' value='Calculate' className='btn btn-success' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AgeCalculator