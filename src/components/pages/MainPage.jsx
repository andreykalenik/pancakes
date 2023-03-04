import { FlexContainer } from '../styled/FlexContainer';
import ItemsList from '../lists/ItemsList';

const MainPage = () => {
    return (
      <section>
        <FlexContainer justify='space-between'>
          <ItemsList urlFetch='https://jsonplaceholder.typicode.com/comments' urlPage='/comments' localStorageKeyName='comments'/>
          <ItemsList urlFetch='https://jsonplaceholder.typicode.com/users' urlPage ='/users' localStorageKeyName='users'/>
          <ItemsList urlFetch='https://jsonplaceholder.typicode.com/posts' urlPage ='/posts' localStorageKeyName='posts'/>
        </FlexContainer>
      </section>
    );
  }
  
  export default MainPage;