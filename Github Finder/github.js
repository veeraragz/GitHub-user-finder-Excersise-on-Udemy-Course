class Github{
    constructor(){
        this.client_id ='e400429e25f0987635b2';
        this.client_secret ='03920237c74eda1314cdae9792558e82c874a5e7';
        this.repose_count=5;
        this.repos_sort='craeted: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        client_id=${this.client_id} & client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id} & client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const repos= await reposResponse.json();

        return {
            profileData,
            repos
        }
    }
}