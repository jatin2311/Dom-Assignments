const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody =document.querySelector(".accordian_body");
const faqs = [];

function showFaq(i) {
  let faqElements = document.querySelectorAll('p');
  if (faqElements[i].style.display == "block") {
    faqElements[i].style.display = "none";
  }else {
    faqElements[i].style.display = "block";
  }
}

function createFaq(ques, ans) {
  faqData.push({
    id:faqData.length,
    question:ques,
    answer:ans,
  })
};
createFaq("Hola", "Hello in Spanish");
  

function btnStatusUpdate(i) {
  let statusUpdate = document.querySelectorAll('p');
  if (statusUpdate[i].style.display == 'block') {
    document.querySelectorAll("button")[i].textContent = "-";
  }else {
    document.querySelectorAll("button")[i].textContent = "+";
  }
}

function Renderer() {
  faqData.forEach((e,i)=>{
    var title = document.createElement("div");
    title.classList.add('faq');
    accordianBody.appendChild(title);
    var heading = document.createElement("h3");
    var icon = document.createElement("button");
    icon.textContent = '+';
    icon.classList.add('show_btn');
    var headingData = document.createElement('p');
    heading.textContent = e.question;
    headingData.textContent = e.answer;
    title.appendChild(heading);
    title.appendChild(headingData);
    heading.appendChild(icon);
    icon.style.cssText = "float:right";
    headingData.classList.add("hidden");
    icon.addEventListener('click', ()=> {
      showFaq(i);
      btnStatusUpdate(i)
    })
  })
}
Renderer();