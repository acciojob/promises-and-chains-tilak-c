const age = document.getElementById("age");
const name = document.getElementById("name");
const buttonElement = document.getElementById("btn");

buttonElement.addEventListener("click", function () {
  const ageValue = age.value;
  const nameValue = name.value;
  let promise;

  if (!ageValue || !nameValue) {
    alert("Please enter valid details");
    return;
  }

  if (Number(ageValue) > 18) {
    promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Welcome, ${nameValue}. You can vote.`);
      }, 4000);
    });
  } else {
    promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Oh sorry ${nameValue}. You aren't old enough.`);
      }, 3000);
    });
  }

  promise.then((data) => {
    alert(data);
  });
});