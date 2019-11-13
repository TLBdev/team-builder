import React, { useState } from 'react'

export default function MemberForm(props) {
    const [member, setMember] = useState({
        Name: '',
        Email: '',
        Role: ''
    })
    const changeHandler = e => {
        setMember({ ...member, [e.target.name]: e.target.value })
    }
    const submitForm = e => {
        e.preventDefault()
        props.addNewMember(member)
    }
    return (
        <form onSubmit={submitForm}>
            <label>
                Name: <input id='name' type='text' name='Name' onChange={changeHandler} value={member.name} />
            </label>
            <label>
                Email: <input id='email' type='text' name='Email' onChange={changeHandler} value={member.Email} />
            </label>
            <label>
                Role: <input id='role' type='text' name='Role' onChange={changeHandler} value={member.Role} />
            </label>
            <button type='submit'>Add Member</button>
        </form>
    )
} 