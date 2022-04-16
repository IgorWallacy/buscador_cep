import { useState, useRef } from "react";
import "./App.css";

import { InputText } from "primereact/inputtext";

import { Button } from "primereact/button";

import { Toast } from 'primereact/toast';



import api from "./service/index";

function App() {
  const [value, setValue] = useState();
  const [resultado, setResultado] = useState({});
  const toast = useRef(null);

  const handleSearch = async () => {
    try {
       await api
        .get(`${value}/json`)
        .then((data) => setResultado(data.data));
    } catch (error) {
      toast.current.show({severity:'error', summary: 'Error Message', detail:` Erro ao retornar um cep!   ${error}`, life: 3000});
    }
  };

  return (
    <>
    <Toast ref={toast} position="bottom-center" />
    
    <div className="container">
      <div className="title">
        <h1>Buscador de CEP</h1>
      </div>
      <div className="containerInput">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Digite um cep ..."
            className="p-inputtext p-inputtext-lg block"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </span>
      </div>

      <div>
        <Button
          className="p-button-rounded"
          label="Buscar"
          icon="pi pi-search"
          onClick={() => handleSearch()}
        />
      </div>
      {Object.keys(resultado).length > 0 && (
        <div className="resultado">
          <p>
            <h2> CEP : {resultado.cep} </h2>
            <h2> Bairro : {resultado.bairro}</h2>
            <h2> Complemento :{resultado.complemento}</h2>
            <h2> DDD: {resultado.ddd}</h2>
            <h2> GIA : {resultado.gia}</h2>
            <h2> IBGE : {resultado.ibge}</h2>
            <h2> LOCALIDADE: {resultado.localidade}</h2>
            <h2> LOGRADOURO: {resultado.logradouro}</h2>
            <h2> SIAFI :{resultado.siafi}</h2>
            <h2> UF :{resultado.uf}</h2>
          </p>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
