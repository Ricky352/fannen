import styled from 'styled-components'

const StyledCard = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || '16px'};
    justify-content: center;
    margin: ${props => props.margin || '20px 0px'};
    padding: 16px 20px;
    width: 100%;
`

export function Card(props) {
    return (
        <>
            <StyledCard gap={props.gap} margin={props.margin}>
                {props.children}
            </StyledCard>
        </>
    )
}

// DONE
