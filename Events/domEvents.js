import { deleteEntry, getEntries, getSingleEntry } from '../api/EntryData';
import addEntryForm from '../Forms/addEntryForm';
import { showEntries } from '../pages/Entries';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A ENTRY
    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ENTRY', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A ENTRY
    if (e.target.id.includes('add-entry-btn')) {
      console.warn('ADD ENTRY');
      addEntryForm(user.uid);
    }

    // TODO: CLICK EVENT EDITING/UPDATING A ENTRY
    if (e.target.id.includes('edit-entry-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(entryObj));
      console.warn('EDIT ENTRY', e.target.id);
      console.warn(e.target.id.split('--'));
    }
  });
};

export default domEvents;
