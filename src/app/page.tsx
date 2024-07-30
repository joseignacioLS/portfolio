import { Header } from "@/components/Header/Header";
import styles from "./page.module.scss";
import Showcase from "@/components/Showcase/Showcase";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <Footer />
    </>
  );
}
