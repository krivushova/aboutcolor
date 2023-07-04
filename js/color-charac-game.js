const containers = document.querySelectorAll(".screen");

const showActiveContainer = () => {
  if (!localStorage.getItem("colorCharacGamePageNumber")) {
    localStorage.setItem("colorCharacPageNumber", 0);
  }
  const pageNumber = Number(localStorage.getItem("colorCharacPageNumber"));

  containers.forEach((container, index) => {
    if (index === pageNumber) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
};

function nextPage() {
  const pageNumber = Number(localStorage.getItem("colorCharacGamePageNumber"));
  localStorage.setItem("colorCharacGamePageNumber", pageNumber + 1);
  showActiveContainer();
}

function prevPage() {
  const pageNumber = Number(localStorage.getItem("colorCharacGamePageNumber"));
  localStorage.setItem("colorCharacGamePageNumber", pageNumber - 1);
  showActiveContainer();
}

showActiveContainer();
