import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-light">
  <form class="container-fluid justify-content-start">
    <a class="navbar-brand title" href="#">Vocab-YOU-Lary</a>
    <button class="btn btn-outline-success me-2" type="button" id="add-entry">Create Entry</button>
    <button class="btn btn-sm btn-outline-secondary" type="button" id="all-words">All Words</button>
  </form>
<div id="logout-button"</div>
</nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
