export function submitClick() {
  const mailBox = document.querySelector(".scard__mailbox");
  const errorMsg = document.querySelector(".scard__mailerror");
  const signUpCard = document.querySelector(".scard");
  const messageCard = document.querySelector(".mcard");
  const mailID = document.querySelector(".mcard__email");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

  const hasUpperCase = /[A-Z]/.test(mailBox.value);

  if (hasUpperCase || !emailRegex.test(mailBox.value)) {
    displayError();
  } else {
    signUpCard.style.display = "none";
    setTimeout(() => {
      messageCard.style.display = "flex";
      mailID.innerHTML = mailBox.value;
    }, 500);
  }

  // Add an input event listener to reset styles when the user types
  mailBox.addEventListener('input', () => {
    const hasUpperCase = /[A-Z]/.test(mailBox.value);
    if (!hasUpperCase && emailRegex.test(mailBox.value)) {
      // If the input is valid, hide the error
      resetError();
    } else {
      // If the input is invalid, show the error
      displayError();
    }
  });
}

// Function to display error
function displayError() {
  const mailBox = document.querySelector(".scard__mailbox");
  const errorMsg = document.querySelector(".scard__mailerror");

  errorMsg.style.display = "block";
  mailBox.style.color = "var(--Tomato)";
  mailBox.style.backgroundColor = "hsla(4, 100%, 67%, 0.226)";
  mailBox.style.borderColor = "var(--Tomato)";
}

// Function to reset error
function resetError() {
  const mailBox = document.querySelector(".scard__mailbox");
  const errorMsg = document.querySelector(".scard__mailerror");

  errorMsg.style.display = "none";
  mailBox.style.color = ""; // Reset to default
  mailBox.style.backgroundColor = ""; // Reset to default
  mailBox.style.borderColor = ""; // Reset to default
}

export function dismissClick() {
  const signUpCard = document.querySelector(".scard");
  const messageCard = document.querySelector(".mcard");

  messageCard.style.display = "none";
  setTimeout(() => {
    signUpCard.style.display = "flex";
  }, 500);
}
