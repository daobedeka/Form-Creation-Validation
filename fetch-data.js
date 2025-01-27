 async function fetchUserData() {
    const apiUrl='https://jsonplaceholder.typicode.com/users';
    const dataContainer=document.getElementById('api-data');
    const userList=document.createElement('ul');
    
    
    
    try{
        const response= await fetch(apiUrl);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const users=await response.json()
        console.log('success', users)
        dataContainer.innerHTML = '';

     users.forEach(e=> {
        const li=document.createElement('li')
        const node=document.createTextNode(e.name)
        li.appendChild(node)
       console.log( userList.appendChild(li))
        })
        
      dataContainer.append(userList)

    }


    catch(error){
        dataContainer.innerHTML = ''
        dataContainer.innerHTML= 'Failed to load user data.'
        

    }

}
document.addEventListener('DOMContentLoaded',fetchUserData());