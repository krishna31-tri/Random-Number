import React, { useState } from 'react'
import './App.css';
import Month from './components/Month'
function App() {
  const [year1, setYear1] = useState(false)
  const [year2, setYear2] = useState(false)
  const [year3, setYear3] = useState(false)

  const handleChange1 = (event) => {
    setYear1(event.target.checked);
  }

  const handleChange2 = (event) => {
    setYear2(event.target.checked);
  }

  const handleChange3 = (event) => {
    setYear3(event.target.checked);
  }
  return (
    <div className="app">
      <div className='year'>
        <fieldset>
          <input type="checkbox" name="2021" id="year1" onChange={handleChange1} />
          <label for="year1">2021</label>
        </fieldset>
        <fieldset>
          <input type="checkbox" name="2022" id="year2" onChange={handleChange2} />
          <label for="year2">2022</label>
        </fieldset>
        <fieldset>
          <input type="checkbox" name="2023" id="year3" onChange={handleChange3} />
          <label for="year3">2023</label>
        </fieldset>
      </div>
      <div className='months'>

        {
          year1 ? <Month /> : null
        }
        {
          year2 ? <Month /> : null
        }
        {
          year3 ? <Month /> : null
        }
      </div>

    </div>
  );
}

export default App;