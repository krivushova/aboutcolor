const containers = document.querySelectorAll(".screen");

const showActiveContainer = () => {
  if (!localStorage.getItem("colorCombinationPageNumber")) {
    localStorage.setItem("colorCombinationPageNumber", 0);
  }
  const pageNumber = Number(localStorage.getItem("colorCombinationPageNumber"));

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
  const pageNumber = Number(localStorage.getItem("colorCombinationPageNumber"));
  localStorage.setItem("colorCombinationPageNumber", pageNumber + 1);
  showActiveContainer();
}

function prevPage() {
  const pageNumber = Number(localStorage.getItem("colorCombinationPageNumber"));
  localStorage.setItem("colorCombinationPageNumber", pageNumber - 1);
  showActiveContainer();
}

showActiveContainer();
