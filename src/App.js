import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary />

      <footer className="text-center">
        Coded by{" "}
        <a href="https://lighthearted-pony-a59add.netlify.app/">
          Mariia Matviian
        </a>{" "}
        and code is{" "}
        <a href="https://github.com/o-ponchik/dictionary-project">
          open-sourced
        </a>{" "}
        on GitHub
      </footer>
    </div>
  );
}
