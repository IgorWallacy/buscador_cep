import { useState } from "react";
import "./App.css";

import { InputText } from "primereact/inputtext";
import { Card } from 'primereact/card';


function App() {
  const [value, setValue] = useState();

  return (
    
    <Card>
    <div className="container">
      <div className="title">
        <h1>Buscador de CEP</h1>
      </div>
      <div className="containerInput">
      <span className="p-input-icon-left">
      <i className="pi pi-search" />
        <InputText placeholder="Digite um cep ..." className="p-inputtext p-inputtext-lg block" value={value} onChange={(e) => setValue(e.target.value)} />
      </span>
      </div>
    </div>
    </Card>
  );
}

export default App;
