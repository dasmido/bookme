import React from 'react'

const ClincInfo = (props: any) => {
    const {data,handleChange} = props

    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <h1>Select Doctor</h1>
            <form className="mb-10 bg-white shadow-md px-8 pt-6 pb-8 mb-4">
                <div className="mb-10">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="clinic"
                    >
                        Select Doctor
                    </label>
                    <select
                        className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="clinic"
                        value={data.doctor}
                        onChange={handleChange}
                    >
                        <option value="abc">Dr. ABC</option>
                        <option value="def">Dr. DEF</option>
                        <option value="ghi">Dr. GHI</option>
                    </select>
                </div>

                <div className="mb-10">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialise">
                        Specialise
                    </label>
                    <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="specialise" type="text" placeholder="Specialise..." value={data.specialise} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default ClincInfo