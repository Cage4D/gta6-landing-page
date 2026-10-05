import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./sections/Hero"
import NavBar from "./sections/NavBar"
import FirstVideo from "./sections/FirstVideo"
import Jason from "./sections/Jason"
import SecondVideo from "./sections/SecondVideo"
gsap.registerPlugin(ScrollTrigger)

export default function App() {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <FirstVideo/>
            <Jason/>
            <SecondVideo/>
        </main>
    )
}