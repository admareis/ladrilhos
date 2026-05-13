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
   inserirIMG (elemento.download_url,elemento.author); // puxa url e autor da imagem// 
    });
}
// função para estilizar os elementos da página// 
function estilizarMural (){
body.className = "flex items-center justify-center px-5 pt-10";
body.style.transition = "background-color 1.5s";
main.classList.add ("columns-2", "md:columns-3", "gap-5", "*:mt-5"); // md = ajusta largura da tela para pc, e colums 2 padrão para mobile//
}

estilizarMural();

function inserirIMG(url){
    const img = document.createElement('img'); //cria o elemento IMG//
    img.src = url // adiciona o valor da URL recebida dentro da propriedade src//
    main.appendChild(img);    
}

const btnTema = document.getElementById('btnTema');
const imgMoon = document.getElementById('imgMoon');
const imgSun  = document.getElementById('imgSun');

btnTema.className = "fixed top-2 right-5 cursor-pointer hover:scale-125 w-6 h-6";

btnTema.addEventListener('click', () => {
    body.classList.toggle('bg-gray-950');

    if (body.classList.contains('bg-gray-950')) {
        imgMoon.src = 'imagem/sun-solid-full.svg';
    } else {
        imgMoon.src = './imagem/moon-solid.png';
    }
});
