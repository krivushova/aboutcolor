const containers = document.querySelectorAll(".screen");

const showActiveContainer = () => {
  if (!localStorage.getItem("summary")) {
    localStorage.setItem("summary", 0);
  }
  const pageNumber = Number(localStorage.getItem("summary"));

  containers.forEach((container, index) => {
    if (index === pageNumber) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
};

function nextPage() {
  const pageNumber = Number(localStorage.getItem("summary"));
  localStorage.setItem("summary", pageNumber + 1);
  showActiveContainer();
}

function prevPage() {
  const pageNumber = Number(localStorage.getItem("summary"));
  localStorage.setItem("summary", pageNumber - 1);
  showActiveContainer();
}

showActiveContainer();
