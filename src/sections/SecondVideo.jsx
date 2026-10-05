import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SecondVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    gsap.set(".lucia", { marginTop: "-60vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(".lucia", { opacity: 1, duration: 1, ease: "power1.inOut" });

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
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd"
          style={{ objectPosition: "15% 0%" }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;