import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import AuthStorage from './src/utils/authStorage';




export default function App() {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}

