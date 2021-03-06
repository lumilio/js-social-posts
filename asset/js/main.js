
/* Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.


Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.


const

Un secondo array conterrĂ  solo gli id dei posts a cui abbiamo dato like.


BONUS:
Bonus 1: Date formattate come tempo relativo (es. "due mesi fa")
Bonus 2: Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Sofia Perlari > SP)
Bonus 3: Click al pulsante "Mi Piace" incrementa il counter dei like al post. */
 

const postILike = []
const posts = [

    {
        id:1111,
        autore:{ 
            nome:'Giacomo Rossi', 
            avatar:"",
        },
        contenuto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor repellat eaque distinctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?',
        immagine:"https://picsum.photos/id/9/800/400",
        likes:50,
        data: new Date("2021, 08")
    },
    {
        id:2222,
        autore:{ 
            nome:'Giovanni Verdi', 
            avatar:"https://picsum.photos/id/19/80/80",
        },
        contenuto:'orem ipsum, ctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?',
        immagine:"https://picsum.photos/id/55/800/400",
        likes:100,
        data:new Date("2021, 03")
    },
    {
        id:3333,
        autore:{ 
            nome:'Aldo Neri', 
            avatar:"https://picsum.photos/id/31/80/80",
        },
        contenuto:'rem distinctio a consequuntur ducimus dicta maiores, recusandanostrum nobis?',
        immagine:"https://picsum.photos/id/98/800/400",
        likes:30,
        data:new Date("2021, 01")
    },
    {
        id:4444,
        autore:{ 
            nome:'Lorenzo Mari', 
            avatar:"",
        },
        contenuto:'em ipsum, dolor sit amet consectetur adipisicing elit. nostrum nobis?',
        immagine:"https://picsum.photos/id/77/800/400",
        likes:200,
        data:new Date("2020, 06")
    },
]



feedGeneretor();

const likeButton = document.getElementsByClassName('likebutton')
const avatarPlace = document.getElementsByClassName("fallbackPlace")


// genero i post con un template comune
function feedGeneretor() {
    let postlayout = '';
    for (let i = 0; i < posts.length; i++) {
        postlayout +=
        `<div class="the-post bg-white d-flex justify-content-center flex-column p-4 m-4">
            <div id="the-user" class="d-flex justify-content-start align-items-center flex-row mb-3">
                <div class='fallbackPlace'><img src="${posts[i].autore.avatar}"  class="rounded-circle" alt=""></div> 
                <div class="m-3">
                    <div>${posts[i].autore.nome}</div>
                    <div>${monthDiff(posts[i].data)} mesi fa</div>
                </div>
            </div>
            <h4 class="mb-4 mt-2">${posts[i].contenuto}</h4>
            <img src="${posts[i].immagine}"alt="">
            <div id="likes-container" class="d-flex justify-content-start flex-row">

                <button data-post-id="${posts[i].id}" class="likebutton w-50 d-flex justify-content-center align-items-center pt-5 pb-3">mi piace &nbsp;<i class="fas fa-thumbs-up"></i></button>
                <div class="w-50 d-flex justify-content-center pt-5 pb-3">Piace a&nbsp<span id="like-counter-${posts[i].id}" class="n_likes">${posts[i].likes}</span>&nbsppersone</div>

            </div>
        </div>`
    document.getElementById('container-posts').innerHTML = postlayout;
    }
}


//per date post
function monthDiff(x) {
    const dataToday = new Date;
    return dataToday.getMonth() - x.getMonth() + (12 * (dataToday.getFullYear() - x.getFullYear()));
}



//per azione pulsanti like 
for (let i = 0; i < likeButton.length; i++) {
    const button_like = likeButton[i]
    button_like.addEventListener("click", pressLike) 
}

function pressLike() {
    const postId = this.getAttribute("data-post-id");
    const counterLikeEl = document.getElementById("like-counter-" + postId);

    if (this.classList.contains("liked")) {
        this.classList.remove("liked")
        counterLikeEl.innerHTML = parseInt(counterLikeEl.innerHTML) - 1
        for( var i = 0; i < postILike.length; i++){ 
            if ( postILike[i] === postId) { 
                postILike.splice(i, 1); 
            }
        }
        
    } else {
        this.classList.add("liked");
        counterLikeEl.innerHTML = parseInt(counterLikeEl.innerHTML) + 1
        postILike.push(postId);
    }

    console.log(postILike);
}



//per fallback con le iniziali
function iniziali(x) {
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (element == " ")
            return i + 1;
    }
}

for (let i = 0; i < posts.length; i++) {
    if (posts[i].autore.avatar == "") {
        avatarPlace.item(i).innerHTML = posts[i].autore.nome[0];
        avatarPlace.item(i).insertAdjacentHTML("beforeend", posts[i].autore.nome[iniziali(posts[i].autore.nome)]);
        avatarPlace.item(i).style.width = "50px"
        avatarPlace.item(i).style.height = "50px"
        avatarPlace.item(i).style.lineHeight = "50px"
        avatarPlace.item(i).style.textAlign = "center"
        avatarPlace.item(i).style.backgroundColor = "skyblue"
        avatarPlace.item(i).style.borderRadius = "50%"
    }
}






