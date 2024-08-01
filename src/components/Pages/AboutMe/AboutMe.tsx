import styles from "./AboutMe.module.scss";
const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <img className={styles.portrait} src="/me.png" />
      <p>¡Encantado de verte por aquí!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est
        inventore qui tempora dolores! Doloribus, modi dolorum, voluptas
        cupiditate harum neque dignissimos incidunt, atque ipsa rem porro odio.
        Voluptatibus, quisquam!
      </p>
    </section>
  );
};

export default AboutMe;
