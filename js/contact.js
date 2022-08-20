function sendEmail(){
Email.send({
    Host : "smtp.gmail.com",
    Username : "123web.site8@gmail.com",
    Password : "obktvhspdnlhxhxq",
    To : '123web.site8@gmail.com',
    From : document.getElementById("email").value,
    Subject : "From portfolio Website",
    Body : "Name: " + document.getElementById("name").value +"<br> Email: " + document.getElementById("email").value + "<br> Message: " +document.getElementById("message").value
}).then(
  message => alert("Message send successfully")
  );
}
