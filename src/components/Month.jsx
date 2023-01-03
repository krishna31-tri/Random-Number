import React, { useState, useEffect } from 'react'
import "./month.css"
import "./singlemonth.css"
function Month() {
    const [value, setValue] = useState(0);

    const [valueno, setValueno] = useState();

    const [disable, setdisable] = useState(true);

    const [month1, setMonth1] = useState()
    const [month2, setMonth2] = useState()
    const [month3, setMonth3] = useState()
    const [month4, setMonth4] = useState()

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)
    const [value4, setValue4] = useState(0)

    const [disabled1, setDisabled1] = useState(false)
    const [disabled2, setDisabled2] = useState(false)
    const [disabled3, setDisabled3] = useState(false)
    const [disabled4, setDisabled4] = useState(false)

    useEffect(() => {
        if (value == 1) {
            setMonth1("Jan")
            setMonth2("Feb")
            setMonth3("March")
            setMonth4("April")
        } else if (value == 2) {
            setMonth1("May")
            setMonth2("June")
            setMonth3("july")
            setMonth4("Aug")
        } else if (value == 3) {
            setMonth1("Sep")
            setMonth2("Oct")
            setMonth3("Nov")
            setMonth4("Dec")
        }
        setValue1(0);
        setValue2(0);
        setValue3(0);
        setValue4(0);
    }, [value]);
    function handleChange(event) {
        setValue(event.target.value);
    }
    function handleValue1(event) {
        setValue1(event.target.value);

        if (disable) {
            setDisabled2(true)
            setDisabled3(true)
            setDisabled4(true)
        }
        setValueno(1)
    }
    function handleValue2(event) {
        setValue2(event.target.value);

        if (disable) {
            setDisabled1(true)
            setDisabled3(true)
            setDisabled4(true)
        }
        setValueno(2)
    }
    function handleValue3(event) {
        setValue3(event.target.value);

        if (disable) {
            setDisabled2(true)
            setDisabled1(true)
            setDisabled4(true)
        }

        setValueno(3)
    }
    function handleValue4(event) {
        setValue4(event.target.value);

        if (disable) {
            setDisabled2(true)
            setDisabled3(true)
            setDisabled1(true)
        }


        setValueno(4)

    }

    function reset() {
        setValue1(0)
        setValue2(0)
        setValue3(0)
        setValue4(0)

        setdisable(true)
    }

    function calculate() {
        if (valueno == 1) {
            setValue2(Math.floor((Math.random() * 200) + (value1 - 100)))
            setValue3(Math.floor((Math.random() * 200) + (value1 - 100)))
            setValue4(Math.floor((Math.random() * 200) + (value1 - 100)))
        }
        if (valueno == 2) {
            setValue1(Math.floor((Math.random() * 200) + (value2 - 100)))
            setValue3(Math.floor((Math.random() * 200) + (value2 - 100)))
            setValue4(Math.floor((Math.random() * 200) + (value2 - 100)))
        }
        if (valueno == 3) {
            setValue2(Math.floor((Math.random() * 200) + (value3 - 100)))
            setValue1(Math.floor((Math.random() * 200) + (value3 - 100)))
            setValue4(Math.floor((Math.random() * 200) + (value3 - 100)))
        }
        if (valueno == 4) {
            setValue2(Math.floor((Math.random() * 200) + (value4 - 100)))
            setValue3(Math.floor((Math.random() * 200) + (value4 - 100)))
            setValue1(Math.floor((Math.random() * 200) + (value4 - 100)))
        }

        setDisabled1(false)
        setDisabled2(false)
        setDisabled3(false)
        setDisabled4(false)

        setdisable(false)
    }
    return (
        <div className='month'>
            {
                value ? <button className='reset' onClick={reset}> Reset </button> : null
            }

            <label for="month">Choose Month</label>
            <select id="month" name="month" onChange={handleChange}>
                <option disabled selected value> -- select an option -- </option>
                <option value="1">Jan-Apr</option>
                <option value="2">May-Aug</option>
                <option value="3">Sep-Dec</option>
            </select>
            {
                value ? <div className='singlemonth'>
                    <label for="year1">{month1}</label>
                    <input type="number" name="m1" id="m1" value={value1} onChange={handleValue1} disabled={disabled1 ? "disabled" : ""} />
                    <label for="year1">{month2}</label>
                    <input type="number" name="m2" id="m2" value={value2} onChange={handleValue2} disabled={disabled2 ? "disabled" : ""} />
                    <label for="year1">{month3}</label>
                    <input type="number" name="m3" id="m3" value={value3} onChange={handleValue3} disabled={disabled3 ? "disabled" : ""} />
                    <label for="year1">{month4}</label>
                    <input type="number" name="m4" id="m4" value={value4} onChange={handleValue4} disabled={disabled4 ? "disabled" : ""} />

                    <button className='cal' onClick={calculate}> Calculate </button>
                </div> : null
            }


        </div>
    )
}
export default Month