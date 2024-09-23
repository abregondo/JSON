let form = document.getElementById("infoForm");
let outputDiv = document.getElementById("jsonOutput");

form.addEventListener("submit", displayInfo);

function displayInfo(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let hobby = document.getElementById("hobby").value;

  console.log(`Full Name: ${fullName}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
  console.log(`Hobby: ${hobby}`);

  let userInfo = {
    fullName: fullName,
    age: age,
    email: email,
    hobby: hobby,
  };

  let jsonOutput = `<pre>${JSON.stringify(userInfo, null, 2)}</pre>`;
  outputDiv.innerHTML = jsonOutput;
}
