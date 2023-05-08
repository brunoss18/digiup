const overlay ={
  backgroundImage: 'linear-gradient(to right, black, transparent)',
  position: 'absolute',
  top: '0',
  right: '0',
  left:' 0',
  bottom:' 0',
  width: '100%',
  height: '100%',
}

const backgroundImage = {
  position: 'relative',
  backgroundImage: 'url(images/dirt.jpg)',
  backgroundSize: 'cover',
  height: '43vh',
  width:'100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  color: 'white',
 
};


function App() {
  return (
    <div className="conteiner">
 
          <nav>
                <div className="logos">
                  <img src="images/aon.png" height="50px" width="83px" alt="Minha Imagem" />
                  <img src="images/nutrien.png" height="32px" width="79px" alt="Minha Imagem" />
                </div>
              <div>
                <a href="">Área Administrativa</a>
                <a href="">Contas</a>
                <a href="">Login</a>
              </div>
          </nav>
    <main>
        <div style={backgroundImage}>
        <div style={overlay}></div>
          <div className="main-text">
              <p>Um portal completo da maior corretora de seguros do mundo.<br></br> </p>

              <p> Simplicidade para contratar. Tranquilidade para decidir.  </p>

            
              <h1> O que você precisa hoje?</h1>
          </div>     
        </div>
    </main>

    <section className="price">
            <div className="step">
            <div><p><b>passo 3 de 6 </b></p>  <p>Coberturas e valores</p></div> 
            <ul>
              <li>1.Dados do Segurado</li>
              <li>2.Objeto segurado</li>
              <li>3.Coberturas e valores</li>
              <li>4.Dados da Proposta</li>
              <li>5.Forma de pagamento</li>
              <li>6.Conclusão</li>
            
            </ul>
          
            </div>
            <div className="price-number">
              <p>
              Cotação Seguro Agrícola
              </p>
              <p>
              Nº 234
              </p>
            </div>
            <div className="calculation-data">
              
              <p>
              Dados para fins de cálculo
              </p>
                <div className="labels">

                  <div className="label-select">
                  <label for="uf">UF:</label>
                    <select id="uf">
                      <option value="ac">Acre</option>
                      <option value="al">Alagoas</option>
                      <option value="ap">Amapá</option>
                      <option value="am">Amazonas</option>
                      <option value="ba">Bahia</option>
                      <option value="ce">Ceará</option>
                      <option value="df">Distrito Federal</option>
                      <option value="es">Espírito Santo</option>
                      <option value="go">Goiás</option>
                      <option value="ma">Maranhão</option>
                      <option value="mt">Mato Grosso</option>
                      <option value="ms">Mato Grosso do Sul</option>
                      <option value="mg">Minas Gerais</option>
                      <option value="pa">Pará</option>
                      <option value="pb">Paraíba</option>
                      <option value="pr">Paraná</option>
                      <option value="pe">Pernambuco</option>
                      <option value="pi">Piauí</option>
                      <option value="rj">Rio de Janeiro</option>
                      <option value="rn">Rio Grande do Norte</option>
                      <option value="rs">Rio Grande do Sul</option>
                      <option value="ro">Rondônia</option>
                      <option value="rr">Roraima</option>
                      <option value="sc">Santa Catarina</option>
                      <option value="sp">São Paulo</option>
                      <option value="se">Sergipe</option>
                      <option value="to">Tocantins</option>
                    </select>
                  </div>
                  <div className="label-select">
                  <label for="uf">Município:</label>
                  <select id="uf">
                      <option value="mineiros">mineiros</option>
                      <option value="mineiros">mineiros</option>
                      </select>
                  </div>

                    
                  <div className="label-select"> 
                  <label for="uf">Subvenção Estadual:</label>
                  <select id="uf">
                      <option value="yes">sim</option>
                      <option value="no">não</option>
                      </select>
                  </div>

                  
                  <div className="label-select">
                  <label for="uf">Subvenção Federal:</label>
                  <select id="uf">
                      <option value="yes">sim</option>
                      <option value="no">não</option>
                      </select>
                  </div>

                  <div className="label-select">
                  <label for="uf">Safra:</label>
                  <select id="uf">
                  <option value="safra">Safra Soja 2022/2023 - GO - M</option>
                  </select>
                  </div>
                  
                     
                    <div className="label-select">
                    <label for="uf">Cultura:</label>
                    <select id="uf">
                    <option value="safra">Soja</option>
                    </select>
                    </div>

                   
                </div>

               
      </div>
      <div className="coverage-card">
              <p>
              Coberturas
              </p>
              <div className="cards">
             <div className="card">
                <div className="flex-card">
                <p>Cobertura Básica</p>
                <input
                type="checkbox"
                name=""/>
                </div>
              <p>Granizo, Seca, Geada, Vendaval/Ventos Fortes, Tromba D´água, Chuva Excessiva, Inundação ou Alagamento, Variação Excessiva de Temperatura, Raio e Incêndio.</p>
             </div>

             <div className="card">
                <div className="flex-card">
                <p>Cobertura Adicional de Replantio</p>
                <input
                type="checkbox"
                name=""/>
                </div>
              <p>Sublimite para cobertura de Granizo, Tromba D' água e Chuva Excessiva(O valor indenizado por esta cobertura será deduzido do LMGA da Apólice)</p>
             </div>
            </div> 

            </div>
            <div className="options">
              <p>
              Cotações
              </p>
              <p>
              Selecione as suas preferências
              </p>
             
           <div className="flex-coverage">
              <div>
              <div className="list">
                  <p className="list-tittle">Produto</p>
                  <p className="list-item">Produtividade<a href="">X</a></p>  
                  <p className="list-item">Risco Nomeado<a href="">X</a></p>    
                  <p className="list-item">Faixas<a href="">X</a></p>  
                  <p className="list-item">Custeio<a href="">X</a></p>   
              </div>

              <div className="list">
                  <p className="list-tittle">Modalidade</p>
                  <p className="list-item">Área Total<a href="">X</a></p>  
                  <p className="list-item">Talhonado<a href="">X</a></p>    
                 
              </div>

              <div className="list">
                  <p className="list-tittle">Seguradora</p>
                  <p className="list-item">Swiss Re<a href="">X</a></p>  
                  <p className="list-item">BTG<a href="">X</a></p>    
                  <p className="list-item">Porto Seguro<a href="">X</a></p>  
                  <p className="list-item">Tokio Marine <a href="">X</a></p>   
              </div>
              </div>

              <div className="order">

              <div className="list">
                  <p className="list-tittle">Ordenar por</p>
                  <div className="list-flex">
                  <p className="list-item-order">Menor valor de prêmio</p>  
                  <p className="list-item-order">Maior produtividade segurada</p>   
                  </div>
                  
                  
              </div>

              <div className="list">
                  <p className="list-tittle">Condições</p>
                  <div className="list-flex">
                  <p className="list-item-order">Descrição resumida</p>  
                  <p className="list-item-order">Descrição detalhada</p>    
              </div>
              </div>
              <div className="list">
                  <p className="list-tittle">Resultados</p>
                  <div className="list-flex">

                  <p className="list-item-order">Mostrar todos</p>  
                  <p className="list-item-order">Mostrar selecionados</p>    
                  </div>
              </div>






              </div>
             
                <div className="restore">
                  <p>
                  Restaurar filtro padrão
                  </p>
                </div>

              </div>
             
            </div>
            <div className="productivity">
              
              <p>
              Selecione as suas preferências
              </p>


<div className="column-cards-list">

  <div className="allcards">

  <div className="org-card">
      <div className="productivity-card">


    <div>

        <div className="logo-card">
        <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
        </div>

        <div className="productivity-info">
            <p>Limite Segurado:</p>
            <p>Produtividade Esperada:</p>
            <p>Produtividade Segurada:</p>
            <p className="more-info">Mais informações</p>
        </div>

      <div className="productivity-price">
          <p>R$ 1.200.183,00</p>
          <p>53,89</p>
          <p>37,72</p>
    </div>

    </div>     


    </div>
      <div className="select">
  <p>Talhonado</p>
  <p>R$ 752.264,00</p>
  <p>
  <input
    type="checkbox"
    name=""/>
  Selecionar

  </p>
  
      </div>
      </div>

      <div className="org-card"> 
      <div className="productivity-card">


<div>

    <div className="logo-card">
    <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
    </div>

    <div className="productivity-info">
        <p>Limite Segurado:</p>
        <p>Produtividade Esperada:</p>
        <p>Produtividade Segurada:</p>
        <p className="more-info">Mais informações</p>
    </div>

  <div className="productivity-price">
      <p>R$ 1.200.183,00</p>
      <p>53,89</p>
      <p>37,72</p>
</div>

</div>     


</div>
  <div className="select">
<p>Talhonado</p>
<p>R$ 752.264,00</p>
<p>
<input
type="checkbox"
name=""/>
Selecionar

</p>

  </div>
  </div>
  <div className="org-card">
  <div className="productivity-card">


<div>

    <div className="logo-card">
    <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
    </div>

    <div className="productivity-info">
        <p>Limite Segurado:</p>
        <p>Produtividade Esperada:</p>
        <p>Produtividade Segurada:</p>
        <p className="more-info">Mais informações</p>
    </div>

  <div className="productivity-price">
      <p>R$ 1.200.183,00</p>
      <p>53,89</p>
      <p>37,72</p>
</div>

</div>     


</div>
  <div className="select">
<p>Talhonado</p>
<p>R$ 752.264,00</p>
<p>
<input
type="checkbox"
name=""/>
Selecionar

</p>

  </div>
  </div>
 
     
         
                 
              
</div>

<div className="allcards">

  <div className="org-card">
      <div className="productivity-card">


    <div>

        <div className="logo-card">
        <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
        </div>

        <div className="productivity-info">
            <p>Limite Segurado:</p>
            <p>Produtividade Esperada:</p>
            <p>Produtividade Segurada:</p>
            <p className="more-info">Mais informações</p>
        </div>

      <div className="productivity-price">
          <p>R$ 1.200.183,00</p>
          <p>53,89</p>
          <p>37,72</p>
    </div>

    </div>     


    </div>
      <div className="select">
  <p>Talhonado</p>
  <p>R$ 752.264,00</p>
  <p>
  <input
    type="checkbox"
    name=""/>
  Selecionar

  </p>
  
      </div>
      </div>

      <div className="org-card"> 
      <div className="productivity-card">


<div>

    <div className="logo-card">
    <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
    </div>

    <div className="productivity-info">
        <p>Limite Segurado:</p>
        <p>Produtividade Esperada:</p>
        <p>Produtividade Segurada:</p>
        <p className="more-info">Mais informações</p>
    </div>

  <div className="productivity-price">
      <p>R$ 1.200.183,00</p>
      <p>53,89</p>
      <p>37,72</p>
</div>

</div>     


</div>
  <div className="select">
<p>Talhonado</p>
<p>R$ 752.264,00</p>
<p>
<input
type="checkbox"
name=""/>
Selecionar

</p>

  </div>
  </div>
  <div className="org-card">
  <div className="productivity-card">


<div>

    <div className="logo-card">
    <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
    </div>

    <div className="productivity-info">
        <p>Limite Segurado:</p>
        <p>Produtividade Esperada:</p>
        <p>Produtividade Segurada:</p>
        <p className="more-info">Mais informações</p>
    </div>

  <div className="productivity-price">
      <p>R$ 1.200.183,00</p>
      <p>53,89</p>
      <p>37,72</p>
</div>

</div>     


</div>
  <div className="select">
<p>Talhonado</p>
<p>R$ 752.264,00</p>
<p>
<input
type="checkbox"
name=""/>
Selecionar

</p>

  </div>
  </div>
 
     
         
                 
              
</div>


<div className="allcards">

  <div className="org-card">
      <div className="productivity-card">


    <div>

        <div className="logo-card">
        <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
        </div>

        <div className="productivity-info">
            <p>Limite Segurado:</p>
            <p>Produtividade Esperada:</p>
            <p>Produtividade Segurada:</p>
            <p className="more-info">Mais informações</p>
        </div>

      <div className="productivity-price">
          <p>R$ 1.200.183,00</p>
          <p>53,89</p>
          <p>37,72</p>
    </div>

    </div>     


    </div>
      <div className="select">
  <p>Talhonado</p>
  <p>R$ 752.264,00</p>
  <p>
  <input
    type="checkbox"
    name=""/>
  Selecionar

  </p>
  
      </div>
      </div>

      <div className="org-card"> 
      <div className="productivity-card">


<div>

    <div className="logo-card">
    <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
    </div>

    <div className="productivity-info">
        <p>Limite Segurado:</p>
        <p>Produtividade Esperada:</p>
        <p>Produtividade Segurada:</p>
        <p className="more-info">Mais informações</p>
    </div>

  <div className="productivity-price">
      <p>R$ 1.200.183,00</p>
      <p>53,89</p>
      <p>37,72</p>
</div>

</div>     


</div>
  <div className="select">
<p>Talhonado</p>
<p>R$ 752.264,00</p>
<p>
<input
type="checkbox"
name=""/>
Selecionar

</p>

  </div>
  </div>
  <div className="org-card">
  <div className="productivity-card">


<div>

    <div className="logo-card">
    <img src="images/swissre.png" height="50px" width="83px" alt="Minha Imagem" />
    </div>

    <div className="productivity-info">
        <p>Limite Segurado:</p>
        <p>Produtividade Esperada:</p>
        <p>Produtividade Segurada:</p>
        <p className="more-info">Mais informações</p>
    </div>

  <div className="productivity-price">
      <p>R$ 1.200.183,00</p>
      <p>53,89</p>
      <p>37,72</p>
</div>

</div>     


</div>
  <div className="select">
<p>Talhonado</p>
<p>R$ 752.264,00</p>
<p>
<input
type="checkbox"
name=""/>
Selecionar

</p>

  </div>
  </div>
 
     
         
                 
              
</div>


<div className="next">
  <div>
  <button>
  Anterior
</button>

<a>Sair da Cotação</a>
  </div>
 
 <button>
  Próximo
 </button>
</div>
</div>


              
        
      </div>
    </section>
</div>

  );
}

export default App;

