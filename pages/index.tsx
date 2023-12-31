import type {NextPage} from "next";
import Head from 'next/head'
import About from "../components/About";
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Temiloluwa's Portfolio</title>
      </Head>
    <Header />
    <section id='hero' className='snap-start'>
      <Hero />
    </section>
    {/* About */}
    <section id="about" className="snap-center">
      <About />
    </section>

    {/* Experience */}

    {/* Skills */}

    {/* Projects */}

    {/* Contact Me */}

    </div>
  )
}

export default Home;