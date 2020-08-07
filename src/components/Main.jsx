import React from "react";
import '../assets/css/components/main.css'
function Main() {
  return (
    <>
      <section className="main">
        <h2 className="main__title">Que quieres ver hoy?</h2>
        <input type="text" className="input" placeholder="Buscar..." />
      </section>
    </>
  );
}
export default Main;
