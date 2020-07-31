import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: ""
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
      // chave: nome, descricao, bla, bli
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      })
    }

    function handleChange(infosDoEvento){
      const { getAttribute, value } = infosDoEvento.target;
      setValue(
        getAttribute('name'),
        value
      );
    }

    return (
      <PageDefault>
        <h1>Cadastro de categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          // console.log('Você tentou enviar o form né?');
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>
          <div>
            {/* State */}
            <label>
              Nome da Categoria:
              <input
              type="text"
              value={values.nome}
              name="nome"
              onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Descrição:
              <input 
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
              />
            </label>
          </div>
          
          <div>
            <label>
              Cor:
              <input 
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
              />
            </label>
          </div>

          <button>
            Cadastrar
          </button>
        </form>
        
        <ul>
          {categorias.map((categoria, indice) => {
            return (
              // para garantir a duplicidade do valor
              <li key={`${categoria}${indice}`}> 
                {categoria.nome}
              </li>
            )
          })}
        </ul>


        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }
  export default CadastroCategoria;