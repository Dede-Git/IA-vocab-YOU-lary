import { createEntry, getEntries, updateEntry } from '../api/EntryData';
import { showEntries } from '../pages/Entries';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A Entry
    if (e.target.id.includes('submit-entry')) {
      // console.warn('CLICKED SUBMIT ENTRY', e.target.id);

      const payload = {
        Title: document.querySelector('#title').value,
        Language: document.querySelector('#type').value,
        Definition: document.querySelector('#definition').value,
        uid: user.uid
      };

      // console.warn(payload);
      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateEntry(patchPayload).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A ENTRY
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      // console.warn('CLICKED UPDATE BOOK', e.target.id);
      console.warn(firebaseKey);

      const payload = {
        Title: document.querySelector('#title').value,
        Language: document.querySelector('#type').value,
        Definition: document.querySelector('#definition').value,
        firebaseKey,
      };

      updateEntry(payload).then(() => {
        getEntries(user.uid).then(showEntries);
      });
    }
  });
};

export default formEvents;
