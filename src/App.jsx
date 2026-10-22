import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useRef } from "react"


const App = () => {

  useGSAP(() => {

    gsap.to(".nav-logo", {
      opacity: 1,
      delay: 0.1,
      duration: 2.5,
      ease: "Expo.easeInOut",
    })

    gsap.to(".nav-menu", {
      opacity: 1,
      delay: 0.1,
      duration: 2.5,
      ease: "Expo.easeInOut",
    })

    gsap.to(".b-1", {
      top: 140,
      delay: 0.1,
      duration: 2,
      ease: "Expo.easeInOut",
    })

    gsap.to(".b-2", {
      top: 65,
      duration: 2,
      delay: 0.1,
      ease: "Expo.easeInOut",
    })

    gsap.to(".b-3", {
      top: 120,
      duration: 2,
      delay: 0.1,
      ease: "Expo.easeInOut",
    })

    gsap.to(".b-4", {
      bottom: 10,
      duration: 1.8,
      ease: "Expo.easeInOut",
    })

    gsap.to(".b-5", {
      bottom: 15,
      duration: 1.8,
      ease: "Expo.easeInOut",
    })

    gsap.to(".b-6", {
      bottom: 30,
      duration: 1.8,
      ease: "Expo.easeInOut",
    })

    gsap.to(".b-7", {
      top: -120,
      duration: 1.8,
      ease: "Expo.easeInOut",
    })

    gsap.to(".character", {
      top: -120,
      delay: 0.8,
      duration: 1.4,
      ease: "Expo.easeInOut",
      // ease: "power2.out"
    })

    gsap.to(".spider-text", {
      delay: 0.2,
      top: -16,
      duration: 1.4,
      ease: "Expo.easeInOut",
    })
    gsap.to(".man-text", {
      delay: 0.2,
      top: -22,
      duration: 1.4,
      ease: "Expo.easeInOut",
    })

  })

  const main = useRef(null)

  useGSAP(() => {

    // let previousSide = null;

    gsap.set(".b-1 img, .b-2 img, .b-3 img, .b-6 img, .b-7 img,.character img", {
      filter: "brightness(1)",
    });

    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5)
      const yMove = (e.clientY / window.innerWidth - 0.5)

      const isRight = e.clientX > window.innerWidth / 2;
  
      gsap.to(
          ".b-2 img,.b-7 img",
          {
            filter: `brightness(${isRight ? 0.65 : 1})`,
            duration: 0.8,
            ease: "power1.out",
            overwrite: "auto",
          }
        );

        gsap.to(
          ".b-3 img,.b-6 img",
          {
            filter: `brightness(${isRight ? 0.75 : 1})`,
            duration: 0.8,
            ease: "power1.out",
            overwrite: "auto",
          }
        );

        gsap.to(
          ".b-1 img,.character img",
          {
            filter: `brightness(${isRight ? 0.85 : 1})`,
            duration: 0.8,
            ease: "power1.out",
            overwrite: "auto",
          }
        )

      gsap.to(".sky", {
        x: xMove * 110,
        y: yMove * 110,
        ease: "power3.out"
      })

      gsap.to(".b-1", {
        x: -(xMove * 50),
        y: -(yMove * 65),
        ease: "power3.out",
      })
      gsap.to(".b-2", {
        x: -(xMove * 55),
        y: -(yMove * 65),
        ease: "power3.out",
      })
      gsap.to(".b-3", {
        x: -(xMove * 55),
        y: -(yMove * 65),
        ease: "power3.out",
      })
      gsap.to(".b-7", {
        x: -(xMove * 60),
        y: -(yMove * 90),
        ease: "power3.out",
      })
      gsap.to(".b-4", {
        x: -(xMove * 90),
        y: -(yMove * 90),
        ease: "power3.out",
      })
      gsap.to(".b-5", {
        x: -(xMove * 90),
        y: -(yMove * 90),
        ease: "power3.out",
      })
      gsap.to(".b-6", {
        x: -(xMove * 90),
        y: -(yMove * 90),
        ease: "power3.out",
      })
      gsap.to(".character", {
        x: -(xMove * 72),
        y: -(yMove * 78),
        ease: "power3.out",
      })
      gsap.to(".spider-text", {
        x: -(xMove * 45),
        y: -(yMove * 45),
        ease: "power3.out",
      })
      gsap.to(".man-text", {
        x: -(xMove * 45),
        y: -(yMove * 45),
        ease: "power3.out",
      })


    };

    const element = main.current

    element?.addEventListener("mousemove", handleMouseMove)

    return () => {
      element?.removeEventListener("mousemove", handleMouseMove)
    };
  }, { scope: main });





  return (

    <div className="main w-full h-screen staturation-10" ref={main}>
      <div className="relative w-full h-full overflow-hidden">

        <div className="sky scale-107">
          <img
            className="absolute inset-0 w-full h-screen object-cover "
            src="./main-bg.png"
            alt=""
          />
        </div>

        <div className="nav-bar absolute z-[100] w-full h-[9%] flex justify-between px-6 py-5">

          <img className="nav-logo h-[24px] right-0 mb-[px] opacity-0 cursor-pointer" src="./Marvel-Studios.png" alt="" />
          <img className="nav-menu h-[22px] opacity-0 cursor-pointer" src="nav-menu.png" alt="" />

        </div>

        <div className="b-1 absolute inset-0 z-[10] w-full h-full top-140 -left-6 ">
          <img className="w-full object-cover" src="./b-1.png" alt="" />
        </div>

        <div className="character absolute inset-0 z-[9] w-full h-full top-120 left-6 flex items-center justify-center">
          <img className="w-[305px] h-[195px]  object-cover" src="./main-big-n.png" alt="" />
        </div>

        <div className="spider-text absolute inset-0 z-[8] w-full h-full -top-70 right-3">
          <img className="w-full h-screen object-cover" src="./spider-text.png" alt="" />
        </div>

        <div className="man-text absolute inset-0 z-[8] w-full h-full top-140 right-3">
          <img className="w-full h-screen object-cover" src="./man-text-n.png" alt="" />
        </div>

        <div className="b-2 absolute left-34 top-140 z-[8] w-full h-full">
          <img className="w-full h-screen object-cover" src="./b-2.png" alt="" />
        </div>

        <div className="b-3 absolute right-70 top-160 z-[7] w-full h-full">
          <img className="w-full h-screen object-cover" src="./b-3.png" alt="" />
        </div>

        <div className="b-4 absolute z-[6] w-full h-full right-1.5 -bottom-160">
          <img className="w-full object-cover" src="./b-4.png" alt="" />
        </div>

        <div className="b-5 absolute right-38 -bottom-175 z-[5] w-full h-full">
          <img className="w-full object-cover" src="./b-5.png" alt="" />
        </div>

        <div className="b-6 absolute z-[3] w-full h-full -left-8 -bottom-120">
          <img className="w-full  object-cover" src="./b-6.png" alt="" />
        </div>
        <div className="b-7 absolute z-[4] w-full h-full -left-6 top-60">
          <img className="w-full  object-cover" src="./b-7.png" alt="" />
        </div>


      </div>

      {/* <div className="bg-red-400 w-full h-full"></div> */}
    </div>


  )
}

export default App
