import React from 'react'

const ClincInfo = (props: any) => {
    const {data,handleChange} = props

    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <h1>Select Clinic and Doctor</h1>
            <form className="mb-10 bg-white shadow-md px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="clinic"
                    >
                        Select Clinic
                    </label>
                    <select
                        className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="clinic"
                        value={data.clinic}
                        onChange={handleChange}
                    >
                        <option value="clinic1">Clinic 1</option>
                        <option value="clinic2">Clinic 2</option>
                        <option value="clinic3">Clinic 3</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default ClincInfo