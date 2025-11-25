function myfunc(event) {
    event.preventDefault();

    var inputFirstName = document.getElementById("inputFirstName").value;
    var inputLastName = document.getElementById("inputLastName").value;
    var inputAddress = document.getElementById("inputAddress").value;
    var inputDescription = document.getElementById("inputDescription").value;
    var inputCity = document.getElementById("inputCity").value;
    var inputZip = document.getElementById("inputZip").value;

    localStorage.setItem("inputFirstName",inputFirstName);
    localStorage.setItem("inputLastName",inputLastName);
    localStorage.setItem("inputAddress",inputAddress);
    localStorage.setItem("inputDescription",inputDescription);
    localStorage.setItem("inputCity",inputCity);
    localStorage.setItem("inputZip",inputZip);


}
    const form = document.querySelector("form");
    form.addEventListener("submit",myfunc);
