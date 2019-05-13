const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Header

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelectorAll("a");

function addNavContent() {
  for (let i = 0; i < nav.length; i++) {
    nav[i].textContent = siteContent.nav[`nav-item-${i}`];
  }
}

function AHrefElement(insertText) {
  let a = document.createElement('a');
  a.href = "#";
  a.textContent = insertText;
  return a;
}

nav[0].parentNode.appendChild(AHrefElement("hello"));
nav[0].parentNode.prepend(AHrefElement("bye"));

addNavContent();

// Update img src for cta img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Update img src for middle img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// 1st attempt - couldn't get appendChild() and prepend() to work
// let nav = document.getElementsByTagName("nav")[0];

// let navChildren = nav["children"];
// for (let i = 0; i < navChildren.length; i++) {
//   navChildren[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
//   navChildren[i].style.color = "green";
// }

// // Creates <a href="#"></a>
// let navElement = document.createElement("a");
// let href = document.createAttribute("href");
// href.value = "#";
// navElement.setAttributeNode(href);
// navElement.style.color = "green";

// // Append Child
// let appendChild = navElement;
// appendChild.innerText = "Append Child";
// nav.appendChild(appendChild);

// // Prepend Child
// let prependChild = navElement;
// prependChild.innerText = "Prepend Child";
// nav.prepend(prependChild);

// // Call-to-Action
// let h1 = document.querySelector("h1");
// h1ContentUpdated = siteContent.cta.h1.indexOf(" ");

// h1.innerHTML = siteContent.cta.h1.replace(/\s/g, "<br>");

// let button = document.getElementsByTagName("button")[0];
// button.textContent = siteContent.cta.button;

// // Update img src for cta img
// let ctaImg = document.getElementById("cta-img");
// ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// // Main Content
// let h4 = document.querySelectorAll("h4");

// h4[0].textContent = siteContent["main-content"]["features-h4"];
// let featuresContent = document.querySelector(".text-content p");
// featuresContent.textContent = siteContent["main-content"]["features-content"];

// h4[1].textContent = siteContent["main-content"]["about-h4"];
// let topContent = document.querySelectorAll(".top-content p");
// topContent[1].textContent = siteContent["main-content"]["about-content"];

// h4[2].textContent = siteContent["main-content"]["services-h4"];
// let servicesContent = document.querySelector(".bottom-content .text-content p");
// servicesContent.textContent = siteContent["main-content"]["services-content"];

// let bottomContent = document.querySelectorAll(".bottom-content p");

// h4[3].textContent = siteContent["main-content"]["product-h4"];
// bottomContent[1].textContent = siteContent["main-content"]["product-content"];

// h4[4].textContent = siteContent["main-content"]["vision-h4"];
// bottomContent[2].textContent = siteContent["main-content"]["vision-content"];


// // Update img src for middle img
// let middleImg = document.getElementById("middle-img");
// middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// // Contact
// h4[5].textContent = siteContent["contact"]["contact-h4"];

// let contact = document.getElementsByClassName("contact")[0];
// siteContent.contact.address = "123 Way 456 Street\n Somewhere, USA";

// contact.children[1].innerText = siteContent.contact.address;
// contact.children[2].textContent = siteContent.contact.phone;
// contact.children[3].textContent = siteContent.contact.email;

// // Footer
// let footer = document.getElementsByTagName("footer")[0];

// footer.textContent = siteContent.footer.copyright;
