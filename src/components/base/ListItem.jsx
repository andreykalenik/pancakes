import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListItem = ({children, url}) => {
    return (
        <ListItemWrapper>
            <Link to={url}>
                {children}
            </Link>
        </ListItemWrapper>
    )
}

let ListItemWrapper = styled.div `
    padding: 20px;
    border: 2px solid black;
    border-radius: 5px;
    width: 400px;
`

export default ListItem;