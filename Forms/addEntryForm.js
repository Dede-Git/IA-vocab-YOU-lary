import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addEntryForm = (obj = {}) => {
  console.warn('yes');
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
      <div class="title">
        <label for="title" class="title">Title</label>
        <input type="text" class="form-control" id="title" value="${obj.Title || ''}" aria-describedby="title" required>
      </div>
      <div class="type">
        <label for="type" class="type">type</label>
        <input type="text" class="form-control" id="type" value="${obj.Language || ''}" aria-describedby="type" required>
      </div>
      <div class="definition">
        <label for="definition" class="definition">definition</label>
        <input type="text" class="form-control" id="definition" value"${obj.Definition || ''}" aria-describedby="definition" required>
      </div>
  
      <button type="submit" class="btn btn-primary" id="Submit">Add</button>
    </form>`;

  renderToDOM('#form-container', domString);
  console.warn('gotcha');
};

export default addEntryForm;
