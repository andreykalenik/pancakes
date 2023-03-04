import { FlexContainer } from "../styled/FlexContainer";
import ListItem from "../base/ListItem";
import { useEffect, useState } from "react";

const ItemsList = ({urlFetch, urlPage, localStorageKeyName}) => {
    const [itemList, setCommentList ] = useState([]);
    useEffect(() => {
        localStorage.setItem('test', 10)
        fetch(`${urlFetch}`)
        .then(res => res.json())
        .then(res => {
            setCommentList(res)
            console.log(res)
            localStorage.setItem(localStorageKeyName, JSON.stringify(res))
        }) 
    }, [])
    return (
        <FlexContainer direction='column' gap='20px' align='center'>
            <button>
                <ListItem url={urlPage}>
                    Show All
                </ListItem>
            </button>
            {
                itemList.map((item) => <ListItem key={item.id} url={`/${urlPage}/${item.id}`}> {item.name || item.title} </ListItem>)
            }
        </FlexContainer>
    )
}

export default ItemsList;