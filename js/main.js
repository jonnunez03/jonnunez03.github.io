const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".site-nav a");

// set active highlight to link of page user is on
navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();

  if (currentPage === linkPage) {
    link.classList.add("active-link");
  }

  if (
    window.location.pathname.includes("/case-studies/") &&
    linkPage === "projects.html"
  ) {
    link.classList.add("active-link");
  }
});
