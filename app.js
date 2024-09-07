function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // no javascript utiliza o camel case
let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
      section.innerHTML = "<p>nada foi encontrado<"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao ="";
    let tags = "";
    // Itera sobre os dados da pesquisa e constrói o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se no dado titulo includes campoPesquisa
      // entao, faça.....
      if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)){
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">mais informaçoes</a>
        </div>
      `;
      }
    }

    // se resultados nao existir faça isso 
    if(!resultados){
      resultados = "<p>nada foi encontrado</p>"
    }
  
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }