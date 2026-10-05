import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FirstVideo() {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200% top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" });
    tl.to(".first-vd-wrapper", { opacity: 1, duration: 2, ease: "power1.inOut" });

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
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        />
      </div>
    </section>
  );
}