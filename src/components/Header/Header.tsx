import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Hola! Soy <span className={styles.name}>Jose</span>
        </h1>
      </section>
      <section className={styles.aboutMe}>
        <p>
          Soy un <b>Desarrollador Web</b> especializado en <b>React</b>, aunque
          tengo experiencia en otras tecnologías como Angular o Vue
        </p>
        <p>
          También tengo experiencia en <b>investigación</b>. ¡Soy{" "}
          <b>Doctor en Genética</b>!
        </p>
        <p>
          Además, juego <b>Dungeons and Dragons</b>, me gusta tirar dados y
          sumar
        </p>
        <p>¡Se me da fatal hacer listas!</p>
      </section>
    </header>
  );
};
