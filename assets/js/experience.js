AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Product Engineer Intern",
    cardImage: "assets/images/experience-page/pep.jpeg",
    place: "Pepcoding",
    time: "(Jan, 2022 - present)",
    desp: "",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/drdo.png",
    place: "Defence Research and Development Organization",
    time: "(Nov, 2021 - Jan, 2022)",
    desp: "<li>Worked as a Research Intern at Solid State Physics Laboratory (SSPL) in Defence Research and Development Organization (DRDO).</li><li>Researched and made a report on the topic: 'Bulk Growth of Single Crystal - Silicon Carbide'.</li>",
  },
  {
    title: "Future Ready Talent Intern",
    cardImage: "assets/images/experience-page/frt.png",
    place: "Microsoft",
    time: "(Oct - Dec, 2021)",
    desp: "<li>Future Ready Talent is a virtual internship platform for students with an opportunity to learn the in-demand technology skills and work towards solving real world problem using the power of Microsoft Azure & GitHub tools.</li><li>The students can earn internship credits on completion of the program with an entry to exclusive career fairs.</li><li>Made a website with Aure services like Azure Storage, chatbot, maps, etc and deployed it using Github Pages.</li>",
  },
  {
    title: "Frontend Web Developer Intern",
    cardImage: "assets/images/experience-page/tsf.jpg",
    place: "The Sparks Foundation",
    time: "(Sep - Oct, 2021)",
    desp: "<li>The sparks foundation is working to bring parity in education, making sure children have equal opportunity at success, irrespective of the financial background.</li><li>Made a Payment Gateway Integration Website.</li>",
  },
  {
    title: "Campus Ambassador",
    cardImage: "assets/images/experience-page/imun.jpg",
    place: "International MUN",
    time: "(Sep - Oct, 2020)",
    desp: "<li>International Model United Nations (IMUN) brings youth together from around the world to learn and share ideas from a diverse set of experiences and backgrounds where the Executive Board, International Press and International Delegates consolidate to learn about diplomacy, international relations, and the United Nations.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
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
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Hacktober 2021",
    cardImage: "assets/images/experience-page/hack.jpg",
    description:
      "Contributed to the Open Source for Hacktober 2021 event.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "30 Days of Google CLoud",
    subtitle: "Google Cloud",
    image: "assets/images/experience-page/cloud.png",
    desp: "",
  },
  {
    title: "Code Jam 2022",
    subtitle: "Google",
    image: "assets/images/experience-page/g.png",
    desp: "",
  },
  {
    title: "Engineering Virtual Internship Program",
    subtitle: "Goldman Sachs",
    image: "assets/images/experience-page/gs.png",
    desp: "",
  },
  {
    title: "Hash Code 2022",
    subtitle: "Google",
    image: "assets/images/experience-page/g.png",
    desp: "",
  },
  {
    title: "Devfest 2021",
    subtitle: "Google Developer Groups (GDG)",
    image: "assets/images/experience-page/df.png",
    desp: "",
  },
  {
    title: "Kick Start 2022",
    subtitle: "Google",
    image: "assets/images/experience-page/g.png",
    desp: "",
  },
  {
    title: "AWS Community Days - South Asia",
    subtitle: "AWS",
    image: "assets/images/experience-page/aws.jpg",
    desp: "",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>  
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
