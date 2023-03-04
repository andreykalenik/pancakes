import { FlexContainer } from "../styled/FlexContainer";
import styled from 'styled-components';

const CommentsPage = () => {
    const comments = JSON.parse(localStorage.getItem('comments'));
    let commentsList = [];
    return (
        <FlexContainer>
        {
            commentsList = comments.map((item) => {
                return (
                <CommentContainer>
                    <h1 key={item.id}>{item.name}</h1>
                    <div key={item.name}>{item.body}</div>
                </CommentContainer>
                )
            })
        }
        </FlexContainer>
    )
}

export default CommentsPage;

const CommentContainer = styled.div `
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    
`