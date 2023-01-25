import React, { useState } from 'react'

function EMICalc(props) {
  const [data,setData] = useState({
    amount: '', interest: '', month: ''
  });
  const [out,setOut] = useState(0);

  const readValue = (e) => {
    const {name, value } = e.target;
    setData({...data, [name]: Number(value) });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`data =`, data);
    let rate = (data.interest) / (12 * 100);
    console.log('rate =', rate);
    let x = (rate * Math.pow(1+rate,data.month))/ (Math.pow(1+rate,data.month) - 1);
    let output = data.amount * x;
    console.log(`output =`, output.toFixed(2));
    setOut(output.toFixed(2));
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-secondary'>EMI Calculator</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={submitHandler} >
                <div className='form-group mt-2'>
                  <label htmlFor='amount'>Loan Amount ( in &#8377;)</label>
                  <input type='number' name='amount' value={data.amount} onChange={readValue} id='amount' className='form-control' required />
                </div>
                <div className='form-group mt-2'>
                  <label htmlFor='interest'>interest (in %)</label>
                  <input type='number' name='interest' value={data.interest} onChange={readValue} id='interest' className='form-control' required />
                </div>
                <div className='form-group mt-2'>
                  <label htmlFor='month'>month'</label>
                  <input type='number' name='month' value={data.month} onChange={readValue} id='month' className='form-control' required />
                </div>
                <div className='form-group mt-2'>
                  <input type='submit' value='Calculator EMI' className='btn btn-success' />
                </div>
                
              </form>
            </div>
            <div className='card-footer'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <strong>Loan Amount</strong>
                  <span className='float-end'> &#8377; {data.amount} </span>
                </li>
                <li className='list-group-item'>
                  <strong>Interest</strong>
                  <span className='float-end'> {data.interest} % </span>
                </li>
                <li className='list-group-item'>
                  <strong>Tenure(Months</strong>
                  <span className='float-end'> {data.month} month </span>
                </li>
                <li className='list-group-item'>
                  <strong>EMI</strong>
                  <span className='float-end'> {out} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EMICalc