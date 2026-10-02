import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

const gatunki = {
  1: 'Powieść',
  2: 'Kryminał',
  3: 'Fantastyka',
  4: 'Biografia',
};

function App() {
  const [tytul, setTytul] = useState('');
  const [autor, setAutor] = useState('');
  const [gatunek, setGatunek] = useState('');

  const dodaj = () => {
    console.log(
      `tytul: ${tytul}; autor: ${autor}; gatunek: ${gatunki[gatunek] ?? ''}`
    );
  };

  return (
    <form>
      <div className="tytuldiv">
        <label htmlFor="Tytul">Tytuł książki</label>
        <input
          type="text"
          className="form-control"
          id="Tytul"
          value={tytul}
          onChange={(e) => setTytul(e.target.value)}
        />
      </div>

      <div className="autordiv">
        <label htmlFor="autorr">Autor książki</label>
        <input
          type="text"
          className="form-control"
          id="autorr"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>

      <div className="gatunekdiv">
        <label htmlFor="gatunek">Gatunek</label>
        <select
          className="form-control"
          id="gatunek"
          value={gatunek}
          onChange={(e) => setGatunek(e.target.value)}
        >
          <option value=""></option>
          <option value="1">Powieść</option>
          <option value="2">Kryminał</option>
          <option value="3">Fantastyka</option>
          <option value="4">Biografia</option>
        </select>
      </div>

      <button type="button" className="btn btn-primary" onClick={dodaj}>
        Dodaj
      </button>
    </form>
  );
}

export default App;
