import "./Avisos.css";

export default function Avisos({ darkMode }) {
  return (
    <div className={darkMode ? "avisos dark" : "avisos light"}>
      
      <div className="avisos-label">
        AVISOS
      </div>

      <div className="avisos-content">
        <span>Entrega Projeto dia das Mulheres – 16/03</span>
        <span>Apresentação Livro – 07/04</span>
      </div>

    </div>
  );
}