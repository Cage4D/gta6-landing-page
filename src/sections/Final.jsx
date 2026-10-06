import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Final() {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    gsap.set(".final-content", { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        start: "top top",
        end: "90% top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".final-content", { opacity: 1, duration: 1, ease: "power1.inOut" });

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
  }, []);

  return (
    <section className="final">
      <div className="final-content size-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output3.mp4"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}