import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Table = () => {
    const location = useLocation()
    const [state, useLocationState] = useState({FormData})

    useEffect(() => {
      let state =location.state
      useLocationState(state)
    }, [location.state])

    const navigate= useNavigate()
    const handleRowClick = ()=>{
        navigate('/table')
    }
    
    return (
        <>
            <Navbar/>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20'>
                    <div className="container mx-auto">
                        <h1 className="text-2xl font-bold mb-4">Information</h1>
                        <table className="min-w-full border rounded-lg shadow-md">
                            <thead className=" text-white uppercase text-sm">
                                <tr>
                                    <th className="py-3 px-4 border">Name</th>
                                    <th className="py-3 px-4 border">Email</th>
                                    <th className="py-3 px-4 border">Number</th>
                                    <th className="py-3 px-4 border">Address1</th>
                                    <th className="py-3 px-4 border">Address2</th>
                                    <th className="py-3 px-4 border">City</th>
                                    <th className="py-3 px-4 border">State</th>
                                    <th className="py-3 px-4 border">Pincode</th>
                                    <th className="py-3 px-4 border">Country</th>
                                    <th className="py-3 px-4 border">Files</th>
                                    <th className="py-3 px-4 border">Options</th>
                                </tr>
                            </thead>
                            <tbody className="text-white text-sm">
                                {state && (
                                <tr onClick={handleRowClick}>
                                    <td className="py-2 px-4 border">{state.name}</td>
                                    <td className="py-2 px-4 border">{state.email}</td>
                                    <td className="py-2 px-4 border">{state.number}</td>
                                    <td className="py-2 px-4 border">{state.address1}</td>
                                    <td className="py-2 px-4 border">{state.address2}</td>
                                    <td className="py-2 px-4 border">{state.city}</td>
                                    <td className="py-2 px-4 border">{state.states}</td>
                                    <td className="py-2 px-4 border">{state.pincode}</td>
                                    <td className="py-2 px-4 border">{state.country}</td>
                                    <td className="py-2 px-4 border">{state.files}</td>
                                    <td className="py-2 px-4 border">{state.options}</td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    )
}

export default Table
