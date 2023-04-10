
const form = document.getElementById('form')


form.addEventListener('submit', (evento) => {
     evento.preventDefault()
    let titulo = document.getElementById("titulo").value
    let author = document.getElementById("autor").value
    let imagem = document.getElementById("imagem").value
    let texto = document.getElementById("textarea").value
    
    adicionar(titulo,author,imagem,texto)
    
})

// aqui vou adicionar
async function adicionar(titulo,author,imagem,texto){  //aqui vou 
    const post = {
        "title": titulo,
        "author": author,
        "image": imagem,
        "text": texto,
    }

    await createpost(post)
}


async function createpost(dados){
        await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
    }
  async function getposts(){
  const apiResponse = await fetch('http://localhost:3000/posts')
  const posts = await apiResponse.json()
      console.log(posts)
      posts.forEach(post => exibirposts(post))
      console.log(posts)
}
window.addEventListener('DOMContentLoaded', () => {
    getposts();
})

async function exibirposts(post) {
    let armazenar = document.getElementById("armazenar")
    armazenar.innerHTML += `<div class="imprimir">
    <div class="titulo">
    <img class="imagem23" src="${post.image}" alt="">
    </div>
    <div class="titulo1">
        <h5>${post.title}</h5>
    </div>
    <div>
        <p>${post.author}</p>
    </div>
    <div>
        <p>${post.text}</p>
    </div>
    <button class="botao2" onclick="removerpost(${post.id})">Deletar</button>

</div>`
}


async function removerpost(id) {
   await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE"
  })
}
