import React, { useEffect } from 'react';
import useAuth from './hooks/useAuth';
import Router from './routes';
import AOS from 'aos';
import NotistackProvider from './components/NotistackProvider';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import LoadingScreen from './components/LoadingScreen';
import { DroidDialogProvider } from './contexts/WebDroidDialog';

function App() {

  const { isInitialized } = useAuth();

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  
  // {
  //   "Authorization": "Bearer Token"
  // }


  // const {loading, error, data} = useQuery(GET_USERS)
  //
  // {console.log("Apollo data: ", loading, error, data)}

  // const [login, { loading, data, error }] = useLazyQuery(LOGIN, {
  //   variables: { userName: 'userName', password: 'password' }
  // });

  // const [CreateUser, { loading, data, error }] = useMutation(SIGNUP, {
  //   variables: { user: {
  //       id: 1,
  //       first_name: "Kanyesigye",
  //       last_name: "Kanyesigye",
  //       email: "jefferson.reichel@hotmail.com",
  //       userName: "Allan2002"
  //     } }
  // });
  //
  //
  // console.log('Login Data: ', loading, data, error);


  return (
    <>

      {/*<button style={{ marginTop: '200px' }} onClick={() => CreateUser()}> Search</button>

      {data && (<>
        <p>Name : {data.login.user.email} </p>
      {/*</>)}*/}


      {isInitialized ?
        <ThemeConfig>
          <NotistackProvider>
            <DroidDialogProvider>
              <GlobalStyles />
              <Router />
            </DroidDialogProvider>
          </NotistackProvider>
        </ThemeConfig>
        :
        <LoadingScreen />
      }
    </>
  );
}

// export default GoogleApiWrapper(
//
//{
//     apiKey: ('AIzaSyAfp5ZK1FeI94gQZE8ZC0nDrKqX8AS0E3U')
//   }
// )(App)
export default App;
