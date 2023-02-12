import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/navigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigator />
    </>
  );
}

