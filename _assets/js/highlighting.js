document.addEventListener("DOMContentLoaded", () => {
  // Function to get the current top folder
  function getCurrentTopFolder() {
    return window.location.pathname.replace(/^\/|\/$/g, "").split("/")[0];
  }

  // Get the current top folder
  const currentTopFolder = getCurrentTopFolder();

  // Select all links in the navigation
  const navLinks = document.querySelectorAll("nav#nav-he > p > a");

  // Iterate through navigation links
  navLinks.forEach((link) => {
    // Check if the link's href contains the current top folder
    if (link.getAttribute("href").startsWith(`/${currentTopFolder}/`)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
