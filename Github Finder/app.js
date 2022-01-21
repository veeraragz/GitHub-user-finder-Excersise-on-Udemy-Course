// create instance for github
const github =new Github;
const ui=new UI();
// search input
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup',(e)=>{
    const userText=e.target.value;

    if(userText!==''){
        // console.log(userText);
        github.getUser(userText)
        .then(data =>{
            if(data.profileData.message==='Not Found'){
                // alert
                ui.showAlert('User Not Found','alert alert-danger');
            }else{
                // show profile
                ui.showProfile(data.profileData);
                ui.showRepos(data.repos);
            }
        })
    }else{
        // clear profile
        ui.clearProfile();
    }

});