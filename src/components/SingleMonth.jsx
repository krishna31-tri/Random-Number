import React, { useState } from 'react'
import "./singlemonth.css"
function SingleMonth(props) {
    const [month, setMonth] = useState(props.month)
    const [month1, setMonth1] = useState()
    const [month2, setMonth2] = useState()
    const [month3, setMonth3] = useState()
    const [month4, setMonth4] = useState()
    if (props.month == "1") {
        setMonth1("Jan")
        setMonth1("Feb")
        setMonth1("March")
        setMonth1("April")
    } else if (month == 2) {
        setMonth1("May")
        setMonth1("June")
        setMonth1("july")
        setMonth1("Aug")
    } else if (month == 3) {
        setMonth1("Sep")
        setMonth1("Oct")
        setMonth1("Nov")
        setMonth1("Dec")
    }

    return (
        <div className='singlemonth'>
            <label for="year1">{month1}</label>
            <input type="number" name="m1" id="m1" />
            <label for="year1">2021</label>
            <input type="number" name="m2" id="m2" />
            <label for="year1">2021</label>
            <input type="number" name="m3" id="m3" />
            <label for="year1">2021</label>
            <input type="number" name="m4" id="m4" />

            <button className='cal'> Calculate </button>
        </div>
    )
}

export default SingleMonth