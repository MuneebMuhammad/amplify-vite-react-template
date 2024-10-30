import { Authenticator} from '@aws-amplify/ui-react';
import { deleteUser } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';

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

  async function getUserAttributes() {
    try {
      const attributes = await fetchUserAttributes();
      console.log("attributes: ", attributes);
    } catch (error) {
      console.log('Error getting user attributes:', error);
    }
  }

  return (
    <>
    <Authenticator signUpAttributes={['birthdate']}>
      {({ signOut, user }) => (
        
        <main>
          <h1>Hello {user?.username}</h1>

          <button onClick={getUserAttributes}>Get attributes of user</button>
          <button onClick={signOut}>Sign out</button>
          
        </main>
      )}
    </Authenticator>
    </>
  );
}
export default App;
