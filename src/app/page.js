'use client'

import styles from "./page.module.css";

import Header from "./components/header/header"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"


export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Hero id="hero" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer></Footer>
    </main>
  );
}
