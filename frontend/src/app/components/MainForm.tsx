"use client";
import { useState } from 'react'
import UserNameEmail from './PatientsInfo'
import DobGender from './DobGender'
import Address from './Address'
import DatesAndTimes from './DatesAndTimes';
import ClincInfo from './CllinicInfo';

const MainForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "male",
        dates: "",
        times: "",
        clinic: "",
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };


    const [activeTab, setActiveTab] = useState(0)

    const formElements = [
        <UserNameEmail data={data} handleChange={handleChange} />,
        <DobGender data={data} handleChange={handleChange} />,
        <DatesAndTimes data={data} handleChange={handleChange} />,
        <ClincInfo data={data} handleChange={handleChange}/>
        /*<Address data={data} setData={setData} />*/
    ]

    const handleSubmit = (data: any) => {
        console.log(data);
        alert(data)
    }

    return (
        <div className='min-h-screen flex flex-col justify-center bg-custom-color'>
            
            <div>
            <h1 className='justify-center text-align-center'>Book Me</h1>
                {
                    formElements[activeTab]
                }
            </div>
            <div className='flex flex-wrap gap-x-6 mx-auto'>
                <button
                    disabled={activeTab === 0 ? true : false}
                    onClick={() => setActiveTab(prev => prev - 1)}
                    className={`px-4 py-2  bg-red-600 text-white ${activeTab === 0 ? "opacity-50 " : "opacity-100"}`}>
                    Back
                </button>
                <button
                    disabled={activeTab === formElements.length - 1 ? true : false}
                    onClick={() => setActiveTab(prev => prev + 1)}
                    className={`px-4 py-2  bg-button-custom-color text-white ${activeTab === formElements.length - 1 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>Next</button>
                {
                    activeTab === formElements.length - 1 ? <button className='px-4 py-2 bg-blue-600 text-white' onClick={() => handleSubmit(JSON.stringify(data))}>Submit</button> : null
                }
            </div>
        </div>
    )
}

export default MainForm