var resumeForm = document.getElementById('resumeForm ');
var resumeDisplay = document.getElementById('resumeOutput ');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contact number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skill = document.getElementById('skills').value;
    var resumeHTML = "\n        <h2> <b> Generated Resume </b></h2>\n        <h3> PERSONAL INFORMATION </h3>\n        <p><b>Name :</b> ".concat(name, "</p>\n        <p><b>Email :</b> ").concat(email, "</p>\n        <p><b>Contact Number :</b> ").concat(contactNumber, "</p>\n        \n        <h3>EDUCATION</h3>\n        <p>").concat(education, "</p>\n\n        <h3>EXPERIENCE</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>SKILLS</h3>\n        <p>").concat(skill, "</p>\n\n        ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume dislay is missing.');
    }
});
