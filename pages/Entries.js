import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDOM('#get', domString);
};

const showEntries = (array) => {
  clearDom();

  // const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-entry-btn">Add A entry</button>';
  // renderToDom('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.Language}</h6>
    <p class="card-text">${item.Description}.</p>
    <hr>
    <i class="btn btn-success fas fa-eye"
    <i id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-entry-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>`;
  });

  renderToDOM('#get', domString);
  console.warn('gotcha');
};

export { showEntries, emptyEntries };
