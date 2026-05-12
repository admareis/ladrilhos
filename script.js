const url = `https://picsum.photos/v2/list`;
const body = document.querySelector(`body`);
const main = document.querySelector(`main`);



//criação de  função assincrona para buscar dos dados da url

async function getDados(url){ // variavel para armazenar os dados do fetch// 
    const dados = await((await fetch(url)).json()) //fetch vai pegar os dados//
    //o primeiro await dentro dos parenteses aguarda o retorno da busca//
    //o segundo await aguarda os dados serem transformados em json//
    //console.table(dados);//
    filtrarDados(dados);
}

getDados(url); // inicia a função getDados e passa a variavel urel como parametro de busca//

function filtrarDados (dados){
    const urlIMG = dados.forEach((elemento)=>{
   inserirIMG (elemento.download_url);
    });
}
// função para estilizar os elementos da página// 
function estilizarMural (){
body.className = "flex items-center justify-center px-5 pt-10";
main.classList.add ("columns-3", "gap-5", "*:mt-5");
}

estilizarMural();

function inserirIMG(url){
    const img = document.createElement('img'); //cria o elemento IMG//
    img.src = url // adiciona o valor da URL recebida dentro da propriedade src//
    main.appendChild(img);    
}
function criarBotao(){
    const btn = document.createElement('button');
    btn.className = "fixed top-2 right-2 cursor-pointer";

    const img = document.createElement('img');
    img.src = "imagem/moon-solid.png";
    img.alt = "modoDark"
    img.className = "w-6 h-6 bg-900";

    btn.appendChild(img);

    btn.addEventListener('click', ()=>{
        if (img.src == './imagem/moon-solid.png'){
            body.className = "bg-gray-950";
            img.src = 'imagem/sun-regular.png';
            console.log(img.src)
        }
        else{
            body.className = "bg-white";
            img.src = './imagem/sun-regular.png';

        }



    });

}
criarBotao();
