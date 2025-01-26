document.addEventListener('DOMContentLoaded', function () {
    const form= document.getElementById('registration-form');
    const feedbackDiv=document.getElementById('form-feedback');

    // Form Submission Event Listener
    form.addEventListener('submit' , function (event){
        event.preventDefault();
        const username=document.getElementById('username').value.trim()
        const email=document.getElementById('email').value.trim();
        const password=document.getElementById('password').value.trim();

        let isValid=true;
        let message=[];

        //Validating username
        if(username.length<3){
            isValid=false;
            message.push('Username must be at least 3 characters long.')
        } 

        //validating Email
        if(/[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}/.test(email)){
            isValid=true;
           
        }else{
            isValid=false
            message.push('your email is not correct')
        }

        //validating Password
        if(password.length<8){
            isValid=false
            message.push("Weak password")
        }
        

        if(isValid==false){
            feedbackDiv.style.display="block";
             feedbackDiv.innerHTML=`${message.map(i => i).join('<br>')}`
          
        }
        else{
          feedbackDiv.style.display="block";
          feedbackDiv.style.color="#28a745";
          feedbackDiv.textContent="Registration successful!";
        }
    })

})