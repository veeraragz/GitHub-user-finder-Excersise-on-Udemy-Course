class UI{
    constructor(){
        this.profileData = document.getElementById('profile');
    }
    showProfile(userText){
       this.profileData.innerHTML=`
       <div class="card card-body mb-3">
       <div class="row">
       <div class="col-md-3">
       <img class="img-fluid mb-2" src="${userText.avatar_url}">
       <a href="${userText.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
       </div>
       <div class="col-md-9">
            <span class="badge badge-primary">Public Repos:${userText.public_repos}</span>
            <span class="badge badge-secondary">Public Gists:${userText.Gists}</span>
            <span class="badge badge-success">Followers: ${userText.followers}</span>
            <span class="badge badge-info">Following: ${userText.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item">Company:${userText.company}</li>
            <li class="list-group-item">Website/Blog:${userText.blog}</li>
            <li class="list-group-item">Location:${userText.location}</li>
            <li class="list-group-item">Member Since:${userText.created_at}</li>
            </ul>
            </div>
            </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"><div>


       `;
    }
    showRepos(repos){
        let output='';
        repos.forEach(function(repo){
            output+=`
            <div class ="card card-body mb-2>
            <div class="row">
            <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers:${repo.watchers}</span>
            <span class="badge badge-success">Folks: ${repo.forms_count}</span>
            </div>
            </div>
            </div>
            `;
        });
        // output repos
        document.getElementById('repos').innerHTML =output;
    }

        
        
    clearProfile(){
        this.profileData.innerHTML='';
    }
    // clear alert
    clearAlert(){
        const currentAlert =document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    showAlert(message,className){
        // clear remaining alerts
        this.clearAlert();
        const div =document.createElement('div');
        div.className=className;
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchcontainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div,search);
        setTimeout(()=>{
            this.clearAlert();
        },3000);

    }
}