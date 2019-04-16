
async function login(event) {
  event.preventDefault();
  console.log('attempting to login');
  const username = document.getElementById('inputUsername').value;
  const password = document.getElementById('inputPassword').value;

  const credentials = {
    username,
    password
  };

  try {
    const resp = await fetch('http://localhost:8080/users/login',{
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    })
    console.log(resp);

    if (resp.status === 401) {
      document.getElementById('login-error').innerText = 'Invalid Credentials'
    } else if (resp.status === 200) {
      // redirect to home page
      alert('Successfully logged in');
    } else {
      document.getElementById('login-error').innerText = 'Cannot Login At This Time'
    }
  } catch (err) {
    console.log(err);
  }
}