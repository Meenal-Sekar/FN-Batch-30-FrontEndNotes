
let userData={};

async function getUser()
{
    const username = document.getElementById("uname").value;
    console.log(username)

     try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log(response)  
        const data = await response.json();
        console.log(data)

        userData = data;
        alert("User Data Loaded ✅");

      }
       catch (error)
       {
        console.error("Error:", error);
      }

}


function UserDetails()
{
      document.getElementById("container").innerHTML = `
      
       <div class="card">
           <img src="${userData.avatar_url}" />

          <h3>${userData.login}</h3>
          <h3>${userData.location}</h3>
          <h2>${userData.bio}</h2>
        </div>

      
      `

}