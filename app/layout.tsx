import {Slot} from 'expo-router';
import { AuthProvider } from '../ctx/Auth';

export default function Root() {
  return (
    <AuthProvider>
      <Slot/>
    </AuthProvider>
  );
}