import React, { useState, useEffect } from 'react'
import axios from "axios"

const UserList = () => {
    const [userData, setuserData] = useState(null)
    const fetchUserlist = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/userList`)
            console.log(res)
            setuserData(res.data.users)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchUserlist()
    }
        , [])
    return (
        <table className='w-full'>
            <thead className='text-center'>
                <tr>
                    <td>NAME</td>
                    <td>Email</td>
                    <td>Phone No.</td>
                </tr>
            </thead>
            <tbody>
                {userData?.map((curr, index) => {
                    return <tr key={index}>
                        <td>{curr.name}</td>
                        <td>{curr.email}</td>
                        <td>{curr.phone}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default UserList