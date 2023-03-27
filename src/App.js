import logo from './logo.svg';
import './App.css';
import * as PeopleController from './controllers/People';
import Field from './ui/Field';
import PeopleList from './ui/PeopleList';
import { useState, useEffect, useRef, useCallback } from 'react';


function App() {

  const [dados, setDados] = useState({
                          'firstName':'nome',
                          'lastName':'sobrenome', 
                          'email':'teste@gmail.com', 
                          'cpf':'318.157.820-72', 
                          'address':{'street':'rua teste', 
                                  'city':'new cross'}
                        });

  const handleInput = (evt, item) => {
    let name = evt.target.name;
    let value = evt.target.value;
    
    if (item != undefined){
      setDados({...dados, [item]:{...dados[item], [name]:value}});
    } else {
      setDados({...dados, [name]:value});
    }
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
    PeopleController.save(dados).then(() => listRef.current.refresh());
  }

  //funcao para identificar quando a tela é carregada
  useEffect(() => {
    console.log("Carregou a tela")
    listRef.current.refresh();
  },[]);//adicione esses dois colchetes para garantir que só será acionada uma vez
  //essa função na verdade fica verificando qualquer variável
  //se voce quiser, pode usá-la para saber quando uma variável mudou de valor

  //useRef irá permitir chamar uma função de dentro de outro componente
  const listRef = useRef();

  const editPerson = (data) => {
    console.log(data)
  }

  return (
    <div className="App container">
      
      {/* aqui nós usaremos o bootstrap do HTML, mas você pode optar por instalar os componentes do bootstrap */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>

      <h1>Pessoas</h1>

      <form onSubmit={handleSubmit}>

      <div className="d-flex justify-content-center align-items-center">
        
        <div className="container card col-sm-4 text-start">

          <Field name="firstName" label="Primeiro nome" 
              value={dados.firstName}
              onChange={(evt) => handleInput(evt)}></Field>

          <Field name="lastName" label="Último nome"
              value={dados.lastName}
              onChange={(evt) => handleInput(evt)}></Field>

          <Field name="email" label="E-mail"
              value={dados.email}
              onChange={(evt) => handleInput(evt)}></Field>

          <Field name="cpf" label="CPF"
              value={dados.cpf}
              onChange={(evt) => handleInput(evt)}></Field>

          <Field name="street" label="Rua"
              value={dados.address.street}
              onChange={(evt) => handleInput(evt, 'address')}></Field>

          <Field name="city" label="Cidade"
              value={dados.address.city}
              onChange={(evt) => handleInput(evt, 'address')}></Field>

          <div className="row p-3">
            <button className="btn btn-primary col-sm-6">Salvar</button>
          </div>

        </div>
      </div>

      </form>

      <PeopleList ref={listRef} onEdit={editPerson}></PeopleList>
      
    </div>
  );
}

export default App;
