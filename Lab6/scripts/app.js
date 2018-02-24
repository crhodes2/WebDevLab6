function myFunction() {
    document.getElementById("myForm").submit();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;

    var info = firstName + "" + lastName + "" + age + "years old.";

    document.getElementById("info").innerText = info;

    return false;
}