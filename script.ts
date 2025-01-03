

const from=document.getElementById('resumeForm') as HTMLFormElement;
    const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;


    //Handle from submission
    from.addEventListener('submit',(event:Event)=>{
        event.preventDefault();
    
    // Get references to form elements using their IDs
    const name = (document.getElementById('name')as HTMLInputElement ).value;
    const email=( document.getElementById('email')as HTMLInputElement). value;
    const phone=( document.getElementById('phone') as HTMLInputElement). value;
    const education =( document.getElementById('education')as HTMLInputElement). value;
    const experience =( document.getElementById('experience') as HTMLInputElement). value;
    const skills= (document.getElementById('skills')as HTMLInputElement) .value;

    

        // Create resume danamcly
        const resumeHTML = `
        <h2><b> Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone Number:</b><span contenteditable="true"> ${phone}</span></p

        <h3>Education</h3>
        <p  contenteditable="true">${education}</p>

        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        `;

        // display the genreted resumre
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }else{
            console.error('The resume display is missing.');
        }
    });



