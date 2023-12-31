/* menu-icon modal  */
import projectDetails from './js/project_details.js';

const menuIcon = document.querySelector('#menu-icon');

const modal = document.querySelector('.modal');

const modalCloseButton = document.querySelector('.close');

const isVisible = 'is-visible';

const menuItems = document.querySelectorAll('#menu > li');

menuIcon.addEventListener('click', () => {
  modal.classList.add(isVisible);
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove(isVisible);
});

menuItems.forEach((menuItem) => menuItem.addEventListener('click', () => {
  modal.classList.remove(isVisible);
}));

/* project details modal */

const aboutSection = document.querySelector('.about');

const section = document.createElement('section');
section.className = 'project-details';
const div = document.createElement('div');
div.className = 'card';
const h2 = document.createElement('h2');
const ul = document.createElement('ul');
ul.className = 'list-items';
const buttonUl = document.createElement('ul');
buttonUl.className = 'button-list';
const liveLi = document.createElement('li');
const sourceLi = document.createElement('li');
const liveLink = document.createElement('a');
const sourceLink = document.createElement('a');
const liveIcon = document.createElement('img');
const sourceIcon = document.createElement('img');
const para = document.createElement('p');
const coverImage = document.createElement('img');
const detailCloseButton = document.createElement('span');
detailCloseButton.textContent = 'X';
const isClosed = 'is-closed';
const titleButtonsContainer = document.createElement('div');
titleButtonsContainer.className = 'title-buttons';

let projectWorkId = 0;

const addSectionDetails = (buttonIndex) => {
  const ScreenWidth = window.matchMedia('(min-width: 992px)');
  coverImage.alt = 'Portfolio Detail image';
  projectWorkId = buttonIndex;
  projectDetails.forEach((project) => {
    h2.textContent = project[buttonIndex].name;
    liveIcon.src = project[buttonIndex]['live-version-link']['link-icon'];
    sourceIcon.src = project[buttonIndex]['source-link']['link-icon'];
    liveLink.textContent = project[buttonIndex]['live-version-link']['link-text'];
    liveLink.href = project[buttonIndex]['live-version-link']['link-href'];
    sourceLink.textContent = project[buttonIndex]['source-link']['link-text'];
    sourceLink.href = project[buttonIndex]['source-link']['source-href'];
    liveLink.append(liveIcon);
    sourceLink.append(sourceIcon);
    liveLi.appendChild(liveLink);
    sourceLi.appendChild(sourceLink);
    buttonUl.appendChild(liveLi);
    buttonUl.appendChild(sourceLi);
    para.textContent = project[buttonIndex].description;
    let listLength = project[buttonIndex].technologies.length;
    if (ScreenWidth.matches) {
      coverImage.src = project[buttonIndex].image;
      project[buttonIndex].technologies.forEach((listItem) => {
        if (ul.children.length < listLength) {
          const li = document.createElement('li');
          li.textContent = listItem;
          ul.appendChild(li);
        }
      });
      div.appendChild(detailCloseButton);
      div.appendChild(coverImage);
      titleButtonsContainer.appendChild(h2);
      titleButtonsContainer.appendChild(buttonUl);
      div.appendChild(titleButtonsContainer);
      div.appendChild(ul);
      div.appendChild(para);
    } else {
      listLength = project[buttonIndex].technologies.length;
      coverImage.src = project[buttonIndex].image;
      project[buttonIndex].technologies.forEach((listItem) => {
        if (ul.children.length > listLength) {
          while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
        }
        if (ul.children.length === 0 || ul.children.length < listLength) {
          const li = document.createElement('li');
          li.textContent = listItem;
          ul.appendChild(li);
        }
      });
      div.appendChild(coverImage);
      div.appendChild(detailCloseButton);
      div.appendChild(h2);
      div.appendChild(ul);
      div.appendChild(para);
      div.append(buttonUl);
    }
    section.appendChild(div);
    document.body.insertBefore(section, aboutSection);
  });
};

const seeProjectButtonsNodeList = document.querySelectorAll('.project-button');

const seeProjectButtons = Array.from(seeProjectButtonsNodeList);

seeProjectButtons.forEach((seeProjectButton) => {
  const buttonId = seeProjectButton.id;
  seeProjectButton.addEventListener('click', () => {
    addSectionDetails(buttonId);
    document.body.style.overflow = 'hidden';
  });
});

const removeSectionDetails = () => {
  section.classList.remove(isClosed);
  document.body.removeChild(section);
};

detailCloseButton.addEventListener('click', () => {
  section.classList.add(isClosed);
  document.body.style.overflow = 'auto';
  removeSectionDetails();
});

const onWindowResize = (e) => {
  const width = e.target.outerWidth;
  if (width < '992' || width >= '992') {
    if (section) {
      document.body.removeChild(section);
      addSectionDetails(projectWorkId);
    }
  }
};

window.addEventListener('resize', (e) => {
  onWindowResize(e);
});

/* Contact form email validation */
const contactForm = document.querySelector('#contact-me');

const EMAIL_ERROR_MESSAGE = 'Form not Submitted. Email Address must be in lowercase! Enter valid Email!';

const showErrorMessage = (inputValue, message, type) => {
  const emailMessage = inputValue.parentNode.querySelector('span');
  emailMessage.textContent = message;
  if (type === true) {
    emailMessage.className = 'success';
  } else if (type === false) {
    emailMessage.className = 'error';
  }
  return type;
};

const validateEmail = (inputValue, message) => {
  const email = inputValue.value.trim();
  if (email !== email.toLowerCase()) {
    return showErrorMessage(inputValue, message, false);
  }
  return true;
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = contactForm.elements.email;
  const validEmail = validateEmail(emailInput, EMAIL_ERROR_MESSAGE);
  if (validEmail) {
    contactForm.submit();
  }
});

