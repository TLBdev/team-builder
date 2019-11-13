import React, { useState } from 'react';
import Data from './components/Data'
import './App.css';
import styled from 'styled-components'
import MemberCard from './components/MemberCard';
import Form from './components/Form'
const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap
    
`

function App() {
  const [teamMembers, addMember] = useState([...Data])
  const addNewMember = member => {
    const newMember = {
      ID: Date.now(),
      Name: member.Name,
      Email: member.Email,
      Role: member.Role
    }
    addMember([...teamMembers, newMember])
  }
  return (
    <div className="App">
      <h1>The Team</h1>
      <StyledContainer>
        {teamMembers.map(member => {
          return <MemberCard key={member.ID} data={member} />
        })}
      </StyledContainer>
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
