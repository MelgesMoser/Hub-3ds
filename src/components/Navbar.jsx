import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={darkMode ? "navbar dark" : "navbar light"}>
      <div className="logo">3° DS</div>

      <ul className="menu">
        <li>Turma</li>
        <li>Matérias</li>
        <li>Calendário</li>
        <li>Contato</li>
      </ul>

      <div className="actions">
        <button
          className="toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "⏾" : "☀︎︎"}
        </button>
      </div>
    </nav>
  );
}