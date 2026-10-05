import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./sections/Hero"
import NavBar from "./sections/NavBar"
gsap.registerPlugin(ScrollTrigger)

export default function App() {
    return (
        <main>
            <NavBar/>
            <Hero/>
        </main>
    )
}