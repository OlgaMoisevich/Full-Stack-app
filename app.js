const card = post => {
    return `
    <div class="card z-depth-4">
                        <div class="card-content">
                            <span class="card-title">${post.title}</span>
                            <p>${post.text}</p>
                            <small>${post.date}</small>
                        </div>
                        <div class="card-action">
                            <button class="btn btn-small red">
                                <i class="material-icons">delete</i>
                            </button>
                        </div>
                    </div>
                `
};

let posts = [];
const BASE_URL = '/api/post';
class PostApi {
    static fetch(){
        console.log('!!!')
        return fetch(BASE_URL, {method: 'get'})
            .then(res =>res.json()
        )
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    PostApi.fetch()
        .then(backendPosts =>{
            posts = backendPosts.concat();
            renderPosts(posts);
        })
});


function renderPosts(_posts = []) {
    const $posts = document.querySelector('#posts');
    console.log('$posts', $posts);

    if(_posts.length>0){
        $posts.innerHTML= _posts.map(post=>card(post)).join('');
    }else {
        $posts.innerHTML = `<div class="center">Постов пока нет</div>`
    }
}