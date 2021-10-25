
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
            nome:'giacomo', 
            avatar:"https://unsplash.it/80/80?image=",
        },
        contenuto:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor repellat eaque distinctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?',
        immagine:'https://unsplash.it/800/400?image=',
        likes:50,
        data:'aprile'
    },
    {
        id:1,
        autore:{ 
            nome:'giovanni', 
            avatar:"https://unsplash.it/80/80?image=",
        },
        contenuto:'orem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor repellat eaque distinctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?',
        immagine:'https://unsplash.it/800/400?image=',
        likes:100,
        data:'maggio'
    },
    {
        id:1,
        autore:{ 
            nome:'aldo', 
            avatar:"https://unsplash.it/80/80?image=",
        },
        contenuto:'rem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor repellat eaque distinctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?',
        immagine:'https://unsplash.it/800/400?image=',
        likes:30,
        data:'giugno'
    },
    {
        id:1,
        autore:{ 
            nome:'lorenzo', 
            avatar:"https://unsplash.it/80/80?image=",
        },
        contenuto:'em ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor repellat eaque distinctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?',
        immagine:'https://unsplash.it/800/400?image=',
        likes:200,
        data:'luglio'
    },
]

let postlayout = '';

for (let i = 0; i < posts.length; i++) {
    postlayout +=
    `
    <div class="the-post bg-white d-flex justify-content-center flex-column p-4 m-4">
                <div id="the-user" class="d-flex justify-content-start align-items-center flex-row mb-3">
                    <img src="https://unsplash.it/80/80?image=" class="rounded-circle" alt="">
                    <div class="m-3">
                        <div>nome</div>
                        <div>data</div>
                    </div>
                </div>
                <h4 class="mb-4 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor repellat eaque distinctio ut. Vero, ad eveniet. Deserunt odit distinctio a consequuntur ducimus dicta maiores, recusandae minima impedit nostrum nobis?</h4>
                <img src="https://unsplash.it/800/400?image=" alt="">
                <div id="likes-container" class="d-flex justify-content-start flex-row">
                    <div class="w-50 d-flex justify-content-center pt-5 pb-3">mi piace</div>
                    <div class="w-50 d-flex justify-content-center pt-5 pb-3">quanti likes</div>
                </div>
            </div>
    `
    
}

