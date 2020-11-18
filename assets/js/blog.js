/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Decision Tree — Part 1",
    cardImage: "assets/images/blog-page/DT1.jpeg",
    description: "Step by Step Mathematics to split the nodes for Classification problems",
    Previewlink: "https://medium.com/analytics-vidhya/decisiontree-57a90d266995",
  },
  {
    title: "Decision Tree — Part 2",
    cardImage: "assets/images/blog-page/DT2.jpeg",
    description:"Splitting of nodes for Regression problems",
    Previewlink: "https://medium.com/analytics-vidhya/decision-tree-part-2-c6e57a0a2c61",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink}) =>
      (output += `
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
