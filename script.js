const url = `https://picsum.photos/v2/list`

async function getDados(url){
    const dados = await((await fetch(url)).json()) //fetch vai pegar os dados//
    console.table(dados);
}

getDados(url);