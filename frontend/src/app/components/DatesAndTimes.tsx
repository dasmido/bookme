import React from 'react'

const DatesAndTimes = (props: any) => {
    const {data,handleChange} = props

    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <h1>Select Date and times</h1>
            <form className="mb-10 bg-white shadow-md px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="dates"
                    >
                        Select Date
                    </label>
                    <select
                        className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="dates"
                        value={data.dates}
                        onChange={handleChange}
                    >
                        <option value="01.Jan.2024">01.Jan.2024</option>
                        <option value="02.Jan.2024">02.Jan.2024</option>
                        <option value="03.Jan.2024">03.Jan.2024</option>
                    </select>
                </div>


                <div className="mb-10">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="times"
                    >
                        Select Times
                    </label>
                    <select
                        className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="times"
                        value={data.times}
                        onChange={handleChange}
                    >
                        <option value="13">13:00</option>
                        <option value="14">14:00</option>
                        <option value="17">17:00</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default DatesAndTimes