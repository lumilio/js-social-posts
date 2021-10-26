
/* Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.


Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.


const

Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.


BONUS:
Bonus 1: Date formattate come tempo relativo (es. "due mesi fa")
Bonus 2: Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Sofia Perlari > SP)
Bonus 3: Click al pulsante "Mi Piace" incrementa il counter dei like al post. */
 
const postsID = []
const posts = [
    {
        id:1,
        autore:{ 
            nome:'Giacomo', 
            avatar:"https://picsum.photos/id/14/80/80",
        },
        contenuto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor repellat eaque distinctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?',
        immagine:"https://picsum.photos/id/9/800/400",
        likes:50,
        data: new Date().toLocaleString('it')
    },
    {
        id:1,
        autore:{ 
            nome:'Giovanni', 
            avatar:"https://picsum.photos/id/19/80/80",
        },
        contenuto:'orem ipsum, ctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?',
        immagine:"https://picsum.photos/id/55/800/400",
        likes:100,
        data:new Date().toLocaleString('it')
    },
    {
        id:1,
        autore:{ 
            nome:'Aldo', 
            avatar:"https://picsum.photos/id/31/80/80",
        },
        contenuto:'rem distinctio a consequuntur ducimus dicta maiores, recusandanostrum nobis?',
        immagine:"https://picsum.photos/id/98/800/400",
        likes:30,
        data:new Date().toLocaleString('it')
    },
    {
        id:1,
        autore:{ 
            nome:'Lorenzo', 
            avatar:"",
        },
        contenuto:'em ipsum, dolor sit amet consectetur adipisicing elit. nostrum nobis?',
        immagine:"https://picsum.photos/id/77/800/400",
        likes:200,
        data:new Date().toLocaleString('it')
    },
]


feedGeneretor(posts);
const avatarPlace = document.getElementsByClassName("fallbackPlace")
const likeButton = document.getElementsByClassName('likebutton')


function feedGeneretor(posts) {
    let postlayout = '';
    for (let i = 0; i < posts.length; i++) {
        postlayout +=
        `<div class="the-post bg-white d-flex justify-content-center flex-column p-4 m-4">
            <div id="the-user" class="d-flex justify-content-start align-items-center flex-row mb-3">
                <div class='fallbackPlace'><img src="${posts[i].autore.avatar}"  class="rounded-circle" alt=""></div> 
                <div class="m-3">
                    <div>${posts[i].autore.nome}</div>
                    <div>${posts[i].data}</div>
                </div>
            </div>
            <h4 class="mb-4 mt-2">${posts[i].contenuto}</h4>
            <img src="${posts[i].immagine}"alt="">
            <div id="likes-container" class="d-flex justify-content-start flex-row">
                <button class="likebutton w-50 d-flex justify-content-center align-items-center pt-5 pb-3">mi piace &nbsp;<i class="fas fa-thumbs-up"></i></button>
                <div class="w-50 d-flex justify-content-center pt-5 pb-3">Piace a ${posts[i].likes} persone</div>
            </div>
        </div>`
    document.getElementById('container-posts').innerHTML = postlayout;
    }
}


for (let i = 0; i < posts.length; i++) {
    if (posts[i].autore.avatar == "") {
        avatarPlace.item(i).innerHTML = posts[i].autore.nome[0];
    }
}