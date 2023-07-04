const containers = document.querySelectorAll(".main");
const navbar = document.querySelector(".navbar");

const showActiveContainer = () => {
  if (!localStorage.getItem("colorAssocPageNumber")) {
    localStorage.setItem("colorAssocPageNumber", 0);
  }
  const pageNumber = Number(localStorage.getItem("colorAssocPageNumber"));

  containers.forEach((container, index) => {
    if (index === pageNumber) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
  if (pageNumber === 0) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
};

function nextPage() {
  const pageNumber = Number(localStorage.getItem("colorAssocPageNumber"));
  localStorage.setItem("colorAssocPageNumber", pageNumber + 1);
  showActiveContainer();
}

function prevPage() {
  const pageNumber = Number(localStorage.getItem("colorAssocPageNumber"));
  localStorage.setItem("colorAssocPageNumber", pageNumber - 1);
  showActiveContainer();
}

showActiveContainer();
