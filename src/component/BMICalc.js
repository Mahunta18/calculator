    import React, {useState} from 'react'

    /* 
      BMI       result
      below 18  underweight
      18.0-24.9 normal
      25.0-29.9  overweight
      30.0-34.9   obesity class-1
      35.0-39.9   obesity class-2
      Above 40    obesity class-3
      */

    function BMICalc(props) {
        const [data,setData] = useState({
          weight: 100,
          height: 180
        });
        const [status,setStatus] = useState("");
        const [css,setCss] = useState("text-dark");
        const [out,setOut] = useState(0);

        const readValue = (event) => {
          console.log(`${event.target.name}:${event.target.value}`);
          const {name,value} = event.target;
          setData({...data, [name]:value })
        };
        const submitHandler = (e) => {
          e.preventDefault(); // to avoid page refresh
          console.log(`output =`, data);
          let result = (Number(data.weight)/ (Number(data.height) + 0.01)).toFixed(2);
          console.log('result =', result);
            let key = Number(result);
                    setOut(key);
                  if (key < 18 ){
                          setStatus("Underweight");
                          setCss("text-danger");
                  }
                  else if (key >= 18.0 && key <= 24.9 ) {
                    setStatus("Normal");
                    setCss("text-success");
                  }
                  else if (key >= 25.0 && key <= 29.9 ) {
                    setStatus("Overwight");
                    setCss("text-warning");
                  }
                  else if (key >= 30.0 && key <= 34.9 ) {
                    setStatus("Obesity class-1");
                    setCss("text-danger");
                  }
                  else if (key >= 35.0 && key <= 39.9 ) {
                    setStatus("Obesity class-2");
                    setCss("text-danger");
                  }
                  else if (result >= 40 ) {
                    setStatus("Obesity class-3");
                    setCss("text-danger");
                  }
                  else {
                    setStatus("Check Your Input");
                    setCss("text-secondary");
                  }
        };
        return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='display-3 text-seondary'>BMI Calculator</h3>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <div className='card'>
                <div className='card-body'>
                  <form onSubmit={submitHandler} >
                    <div className='form-group mt-2 mb-2'>
                      <label htmlFor='weiht'>Weight (kg) </label>
                      <input type="number" name="weight" id="weight" value={data.weight} onChange={readValue} className="form-control" required />
                    </div>
                    <div className='form-group mt-2 mb-2'>
                      <label htmlFor='height'>Height (cm) </label>
                      <input type="number" name="height" id="height" value={data.height} onChange={readValue} className="form-control" required />
                    </div>
                    <div className='form-group mt-2 mb-2'>
                      <input type='submit' value="Calculate" className='btn btn-success' />
                      </div>
                  </form>
                </div>
                <div className='card-footer'>
                  <h5> Result : <span className={css} > {status} BMI= {out} </span> </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    export default BMICalc