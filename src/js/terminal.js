const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const month = monthNames[date.getMonth()];
const day = date.getDate();

const stringDay = (day) => {
  const endsWith = day.toString()[day.toString().length - 1];

  console.log(day, endsWith);
  let ending = "th";

  if (endsWith === "1" && day !== 11) {
    ending = "st";
  }

  if (endsWith === "2" && day !== 12) {
    ending = "nd";
  }

  if (endsWith === "3" && day !== 13) {
    ending = "rd";
  }

  return `${day}${ending}`;
};

const siteTerminal = document.getElementById("siteTerminal");
const caret = document.getElementById("caret");
const terminalInput = document.getElementById("terminalInput");

import { stringToFragment } from "./main";
import getCaretCoordinates from "./textarea-caret-position";

console.log(getCaretCoordinates);
siteTerminal.addEventListener("click", () => {
  terminalInput.focus();
});

let caretInterval;
terminalInput.addEventListener("focus", () => {
  if (caretInterval) return;
  caret.style.opacity = "1";
  caretInterval = setInterval(() => {
    const opacity = caret.style.opacity;
    caret.style.opacity = opacity === "1" ? "0" : "1";
  }, 500);
});

const moveCaret = () => {
  const move = getCaretCoordinates(terminalInput, terminalInput.selectionEnd);
  caret.style.left = move.left + "px";
};
["keyup", "click", "scroll"].forEach((event) => {
  terminalInput.addEventListener(event, moveCaret);
});

terminalInput.addEventListener("blur", () => {
  clearInterval(caretInterval);
  caret.style.opacity = "0";
  caretInterval = null;
});
terminalInput.addEventListener("input", (e) => {});

window.addEventListener("keyup", (e) => {
  if (e.code === "KeyT") {
    terminalInput.focus();
  }
});

terminalInput.addEventListener("keyup", (e) => {
  const fullText = e.target.value;
  const command = e.target.value.split(" ")[0].toLowerCase();
  let commandError = "";
  if (e.key === "Enter") {
    console.log("running terminal command", e.target.value);

    if (command === "easter-egg") {
      alert("Wow this is an easter egg. Good Job.");
    } else if (command === "github") {
      window.open("https://github.com/SamG06", "_blank").focus();
    } else if (command === "goto") {
      const area = e.target.value.split(" ")[1];
      if (area) {
        const areaReady = area.toLowerCase().trim();
        const scrollThere = (id) => {
          document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        };
        if (areaReady === "about") {
          scrollThere("aboutAnchor");
        } else if (areaReady === "projects") {
          scrollThere("projectsAnchor");
        } else if (areaReady === "home") {
          scrollThere("homeAnchor");
        } else {
          commandError = `${fullText.substr(
            fullText.indexOf(" ") + 1
          )} isn't a valid area.`;
        }
      }
    } else {
      commandError = `${command} is not a valid command.`;
    }

    const previous = stringToFragment(
      `<div>sam's-site:~ <span class="gray-out"></span>
      <div class="command-error"></div>
      </div>`
    );
    
    previous.querySelector('.gray-out').textContent = e.target.value;
    previous.querySelector('.command-error').textContent = commandError;
    
    console.log(previous);
    // previousCommands.append(previous);
    terminalInput.value = "";
    moveCaret();
  }
});

const completeDate = `${month} ${stringDay(day)}`;

const loggedInEl = document.getElementById("loggedIn");
const goto = document.getElementById("goto");
const typeText = (el, type) => {
  type.split("").forEach((letter, index) => {
    setTimeout(() => {
      el.innerHTML += letter;
    }, index * 20);
  });
};
const loggedInText = "Logged in " + completeDate;

typeText(loggedInEl, loggedInText);

setTimeout(() => {
  typeText(goto, "goto - goto home/about/projects ex: goto about");
}, loggedInText.length * 20);

setTimeout(() => {
  typeText(github, "github - opens my github in new tab");
}, loggedInText.length * 40);

setTimeout(() => {
  typeText(terminalLabel, "sam's-site:~");
  if (window.scrollY === 0) {
    terminalInput.focus();
  }
}, loggedInText.length * 60);
