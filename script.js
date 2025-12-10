function myfunc(event) {
  event.preventDefault();

  var inputFName = document.getElementById("inputFirstName").value;
  var inputLName = document.getElementById("inputLastName").value;
  var inputAdd = document.getElementById("inputAddress").value;
  var inputDesc = document.getElementById("inputDescription").value;
  var inputC = document.getElementById("inputCity").value;
  var inputZ = document.getElementById("inputZip").value;

  console.log("first name is " + inputFName);

  localStorage.setItem("inputFirstName", inputFName);
  localStorage.setItem("inputLastName", inputLName);
  localStorage.setItem("inputAddress", inputAdd);
  localStorage.setItem("inputDescription", inputDesc);
  localStorage.setItem("inputCity", inputC);
  localStorage.setItem("inputZip", inputZ);
    
//   Storing in table 
  var tablebody = document.querySelector(" tbody");
  var tablerow = document.createElement("tr");
  let rownumber = tablebody.querySelectorAll("tr").length + 1;

  tablerow.innerHTML = `<th scope="col">${rownumber}</th>
    <td>${inputFName}</td>
    <td>${inputLName}</td>
    `;

  tablebody.appendChild(tablerow);
}
const form = document.querySelector("form");
form.addEventListener("submit", myfunc);



