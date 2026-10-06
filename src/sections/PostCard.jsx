import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

export default function PostCard() {
    const videoRef = useRef(null);
    useGSAP(() => {
        const video = videoRef.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".post-card",
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        })

        const addVideoTween = () => {
            tl.to(
              video,
              { currentTime: video.duration, duration: 3, ease: "power1.inOut" },
              "<"
            );
            ScrollTrigger.refresh();
        };

        if (video.readyState >= 1) {
          addVideoTween();
        } else {
          video.addEventListener("loadedmetadata", addVideoTween, { once: true });
        }

        return () => video.removeEventListener("loadedmetadata", addVideoTween);
    }, [])
    return (
        <section className="post-card">
            <div className="animated-gradient-bg"></div>
            <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
                <img src="/images/overlay.webp" alt="" />
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  preload="auto"
                  src="/videos/postcard-vd.mp4"
                />
                <button className="group-hover:bg-yellow transition duration-700">
                    Explore Leonida Keys
                </button>
            </div>
        </section>
    )
}