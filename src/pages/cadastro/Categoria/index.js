import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

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
      const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
      const { value } = infosDoEvento.target;
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
          <FormField 
            label = 'Nome da Categoria: '
            type = 'text'
            name = 'nome'
            value = {values.nome}
            onChange={handleChange}
          />

          <FormField 
            label = 'Descriçao: '
            type = 'text'
            name = 'descricao'
            value = {values.descricao}
            onChange={handleChange}
          />
          {/* <div>
            <label>
              Descrição:
              <input 
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
              />
            </label>
          </div> */}
          
          <FormField 
            label = 'Cor: '
            type = 'color'
            name = 'cor'
            value = {values.cor}
            onChange={handleChange}
          />

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