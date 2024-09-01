function emailSend() {
    var subject = document.getElementById('subject').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var messagebody = message + "<br/> from:" + email;
    var messagesubject = subject;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ffithub@gmail.com",
        Password: "A17D8F42EDC5E02B2A21EDEECCADDF164040",
        To: 'ffithub@gmail.com',
        From: "ffithub@gmail.com",
        Subject: messagesubject,
        Body: messagebody
    }).then(function (message) {
        if (message === 'OK') {
            swal("Great!", "Your message has been sent successfully! We'll reply ASAP", "success");
        } else {
            swal("OOPS!", "Your message hasn't been sent successfully, please try again", "error");
        }
    });
}