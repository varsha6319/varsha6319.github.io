//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Scientist-Intern",
    cardImage: "assets/images/experience-page/AIA.jpeg",
    place: "AI Australia, Melbourne, Australia",
    time: "(Aug 2020 – present)",
    desp: "<li></li>",
  },
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/saltwatersolutions.png",
    place: "Saltwater Media Solutions, Melbourne, Australia",
    time: "(Jul 2020 – Aug 2020)",
    desp: "<li>Building an ensemble model to determine the success of an interview.</li>",
  },
  {
    title: "Junior Software Engineer",
    cardImage: "assets/images/experience-page/mimyk.jpeg",
    place: "Mimyk Medical Simulations Pvt. Ltd, Bangalore, India",
    time: "(Jul 2019 – Jan 2020)",
    desp:"<li>Developing Virtual Reality (VR) and Haptic–based surgical simulators</li>",
  },
  {
    title: "Software & Data Science Intern",
    cardImage: "assets/images/experience-page/thingscloud.png",
    place: "ThingsCloud Technologies Pvt. Ltd, Bangalore, India",
    time: "(Jan 2019 – Mar 2019)",
    desp:"<li>Development of the website using Angular.js and automating the model for the users who have no knowledge about Machine learning and its dependent features.</li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/nucarbn.jpg",
    place: "Nucarbn, Bangalore, India",
    time: "(Jul 2017 – Apr 2018)",
    desp:"<li>A deep learning algorithm for detection of diabetes with the features including SSPG, blood pressure, blood sugar using Convolutional Neural Network, Long Short-term memory and SVM.</li><li>Smart contact for the private blockchain with Solidity was deployed.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
// ];
//
// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `
//       <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2>
//           <p class="copy">${description}</p></div>
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);
//
//
// // Mentorship Card
//
//
// const mentorshipcards = document.querySelector(".mentorship-cards");
// const mentor = [
//   {
//     title: "HakinCode",
//     image: "assets/images/experience-page/hakin.png",
//     time: "06/2020 - 08/2020",
//     desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
//   },
// ];
//
// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, time, desp}) =>
//       (output += `
//       <div class="column mentorshipCard">
//       <div class="card card2">
//         <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
//         <div class="information">
//         <div class="card-body">
//           <h5 class="card-title">${title}</h5>
//           <p class=""sub-title">${time}</p>
//         </div>
//         <div class="more-information">
//         <ul class="list-group list-group-flush p-0 right-aligned">
//           <div class="list-group-item card2 disclaimer">${desp}</div>
//         </ul>
//         </div>
//         </div>
//       </div>
//       </div>
//       `)
//   );
//   mentorshipcards.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
