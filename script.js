const emailInput = document.querySelector(".input-wrapper input");
const btnGetStarted = document.querySelector(".input-wrapper button");
const form = document.querySelector(".input-wrapper");

const validateEmail = function (email) {
  if (email.indexOf("@") === -1 || typeof email !== "string") return false;

  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length === 0) {
    return false;
  }
  console.log(localPart, domain);

  const domainExtension = domain.split(".");
  console.log(domainExtension);

  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1] < 2
  ) {
    return false;
  }

  return true;
};

// validateEmail("dubemmbah@gmail.com");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("error");
    console.log("error class");
  } else {
    emailInput.classList.remove("error");
  }
});

// emailInput.addEventListener("input", validateEmail);
