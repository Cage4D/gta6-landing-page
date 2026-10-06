import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./sections/Hero"
import NavBar from "./sections/NavBar"
import FirstVideo from "./sections/FirstVideo"
import Jason from "./sections/Jason"
import SecondVideo from "./sections/SecondVideo"
import Lucia from "./sections/Lucia"
import PostCard from "./sections/PostCard"
import Final from "./sections/Final"
gsap.registerPlugin(ScrollTrigger)

export default function App() {
    return (
        <main>
            <NavBar/>
            <Hero/>
            <FirstVideo/>
            <Jason/>
            <SecondVideo/>
            <Lucia/>
            <PostCard/>
            <Final/>
        </main>
    )
}