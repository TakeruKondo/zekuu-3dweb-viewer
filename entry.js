import globeGif from "./lib/Styles/globe.gif";
import "./lib/Styles/loader.css";

async function loadMainScript() {
  return import("terriajs/lib/Core/prerequisites")
    .then(() => import("./index"))
    .then(({ default: terriaPromise }) => terriaPromise);
}

function createLoader() {
  const loaderDiv = document.createElement("div");
  loaderDiv.classList.add("loader-ui");

  const spinner = document.createElement("div");
  spinner.classList.add("loader-spinner");
  loaderDiv.appendChild(spinner);

  const loadingTextElement = document.createElement("div");
  loadingTextElement.innerHTML = "Loading<br>ZEKUU 3D Web Viewer";
  loadingTextElement.classList.add("loader-text");
  loadingTextElement.style.color = "#FFFFFF";
  loaderDiv.appendChild(loadingTextElement);

  loaderDiv.style.backgroundColor = "rgb(17, 24, 39)";
  document.body.appendChild(loaderDiv);

  loadMainScript()
    .catch((_err) => {
      // Ignore errors and try to show the map anyway
    })
    .then(() => {
      loaderDiv.classList.add("loader-ui-hide");
      setTimeout(() => {
        document.body.removeChild(loaderDiv);
      }, 2000);
    });
}

createLoader();
