import { Authenticator} from '@aws-amplify/ui-react';
import { deleteUser } from 'aws-amplify/auth';

async function handleDeleteUser() {
  try {
    await deleteUser();
  } catch (error) {
    console.log(error);
  }
}
import '@aws-amplify/ui-react/styles.css';
import './App.css';


function App() {
  return (
    <>
    <Authenticator signUpAttributes={['birthdate']}>
      {({ signOut, user }) => (
        
        <main>
          <h1>Hello {user?.username}</h1>

          <button onClick={handleDeleteUser}>Delete</button>
          <button onClick={signOut}>Sign out</button>
          
        </main>
      )}
    </Authenticator>
    </>
  );
}
export default App;
