import { EnglishFilter, getEntries, oldEnglishFilter } from '../api/EntryData';
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

  document.querySelector('#old-english').addEventListener('click', () => {
    oldEnglishFilter(user.uid).then(showEntries);
    console.warn('CLICKED oldEnglish');
  });

  document.querySelector('#english').addEventListener('click', () => {
    EnglishFilter(user.uid).then(showEntries);
    console.warn('CLICKED English');
  });
};

export default navigationEvents;
