import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id="get"></div>
  </div>`;
  renderToDOM('#start', domString);
};

export default domBuilder;
