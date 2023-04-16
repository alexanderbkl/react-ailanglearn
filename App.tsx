import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import AuthStorage from './src/utils/authStorage';
import { useFonts } from 'expo-font';




export default function App() {

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}

