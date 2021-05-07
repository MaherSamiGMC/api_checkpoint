import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Table from './Table'


function UserList() {
const [user, setUser] = useState([])
const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData= async() => {
            try {
                const data=await axios.get("https://jsonplaceholder.typicode.com/users")
                setUser(data.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
            
        }
        fetchData()
    }, [])
    return (
        <div>
            {loading ? <p> Still loading... </p> : user.map(el=><Table name={el.name} phone={el.phone} email={el.email} company={el.company.name} website={el.website}   />)}
        </div>
    )
}

export default UserList
