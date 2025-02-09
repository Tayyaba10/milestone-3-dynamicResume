const resumeForm = document.getElementById('resumeForm ') as HTMLElement ;
const resumeDisplay = document.getElementById('resumeOutput ') as HTMLDivElement ;


    resumeForm.addEventListener('submit',(event : Event) => {
        event.preventDefault(); 

        const name = ( document.getElementById('name') as HTMLInputElement).value;
        const email = ( document.getElementById('email') as HTMLInputElement).value;
        const contactNumber = ( document.getElementById('contact number') as HTMLInputElement).value;
        const education = ( document.getElementById('education') as HTMLInputElement).value;
        const experience = ( document.getElementById('experience') as HTMLInputElement).value;
        const skill = ( document.getElementById('skills') as HTMLInputElement).value;

        const resumeHTML = `
        <h2> <b> Generated Resume </b></h2>
        <h3> PERSONAL INFORMATION </h3>
        <p><b>Name :</b> ${name}</p>
        <p><b>Email :</b> ${email}</p>
        <p><b>Contact Number :</b> ${contactNumber}</p>
        
        <h3>EDUCATION</h3>
        <p>${education}</p>

        <h3>EXPERIENCE</h3>
        <p>${experience}</p>

        <h3>SKILLS</h3>
        <p>${skill}</p>

        `;
        
        if (resumeDisplay){
            resumeDisplay.innerHTML = resumeHTML;
        } else {
            console.error('The resume dislay is missing.');
            
        }
    });
