import React from 'react';

import styled from 'styled-components'

const StyledCard = styled.div`
    width: 20%;
    padding: 2% 0%;
    margin: 2%;
    background: rgba(0,0,0,.6);
    color: white
`

export default function MemberCard(props) {
    return (

        <StyledCard>
            <h1>{props.data.Name}</h1>
            <h2>Email: {props.data.Email}</h2>
            <h3>Role: {props.data.Role}</h3>

        </StyledCard>
    )

}