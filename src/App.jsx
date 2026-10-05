import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export default function App() {
    return (
        <main>
            <div>
                <h1 className="text-3xl">
                    Welcome to the world of GTA and GSAP
                </h1>
            </div>
        </main>
    )
}