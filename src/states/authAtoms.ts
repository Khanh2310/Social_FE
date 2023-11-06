import { atom } from 'recoil';
import { getUserFromLocalStorage } from '../components/hooks/useQueryUser';

export const authScreenAtom = atom({
  key: 'authScreenAtom',
  default: 'login',
});

export const userAtoms = atom({
  key: 'userAtoms',
  default: getUserFromLocalStorage(),
});
