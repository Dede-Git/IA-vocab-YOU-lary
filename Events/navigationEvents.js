import { getEntries } from '../api/EntryData';
import { showEntries } from '../pages/Entries';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: ALL BOOKS
  document.querySelector('#all-words').addEventListener('click', () => {
    getEntries(user.uid).then(showEntries);
    console.warn('CLICKED ALL ENTRIES');
  });
};

export default navigationEvents;
