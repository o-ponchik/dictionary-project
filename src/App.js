import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MyDictionary</h1>
        <main>
          <Dictionary />
        </main>
      </header>
      <div className="container">
        <footer className="text-center">Coded by Mariia Matviian</footer>
      </div>
    </div>
  );
}
