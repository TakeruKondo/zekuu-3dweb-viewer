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
  const loaderLogo = document.createElement("img");
  loaderLogo.src = "images/zekuu-creative-logo.png";
  loaderDiv.appendChild(loaderLogo);

  const loadingTextElement = document.createElement("div");
  loadingTextElement.textContent = "Loading ZEKUU 3D Viewer...";
  loadingTextElement.style.color = "#000000";
  loadingTextElement.style.position = "absolute";
  loadingTextElement.style.top = "calc(50% + 50px)";
  loadingTextElement.style.left = "50%";
  loadingTextElement.style.transform = "translateX(-50%)";
  loadingTextElement.style.fontFamily = "sans-serif";
  loaderDiv.appendChild(loadingTextElement);

  loaderDiv.style.backgroundColor = "#FFFFFF";
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
