 async function fetchUserData() {
    const apiUrl='https://jsonplaceholder.typicode.com/users';
    dataContainer=document.getElementById('api-data');
    try{
        const response= await fetch(apiUrl);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const users=await response.json()
        console.log('success', users)
    }
    catch(error){
        console.error('Error',error)

    }

}

fetchUserData();