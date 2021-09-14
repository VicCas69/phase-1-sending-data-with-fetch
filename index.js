// Add your code here
function submitData(username,emailAddress){
    const f = fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept : 'application/json',
        },
        body: JSON.stringify({
            name : username,
            email: emailAddress 
        })
        
    }).then(resp => resp.json())
    .then(user => {
        document.body.innerHTML = user.id;
    })
    .catch((message => { 
        document.body.innerHTML = `Error: " ${message}`;
    }))
    return f;
}
submitData('victor', 'victor@hotmail.com')
