import { getEntries } from '../api/EntryData';
import logoutButton from '../components/logoutButton';
import domEvents from '../Events/domEvents';
import formEvents from '../Events/formEvents';
import navigationEvents from '../Events/navigationEvents';
import { showEntries } from '../pages/Entries';
import domBuilder from '../shared.js/domBuilder';
import navBar from '../shared.js/navBar';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  domEvents(user);
  formEvents(user);
  navigationEvents(user);

  getEntries(user.uid).then((entries) => showEntries(entries));
};

export default startApp;
