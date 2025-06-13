// // components/Navbar.jsx

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Navbar() {
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     const navbar = navbarRef.current;
//     const navLinks = navbar.querySelectorAll("a");

//     // Initial setup - hidden and moved up
//     gsap.set(navbar, {
//       y: -100,
//       opacity: 0,
//       position: "absolute",
//       top: "0%",
//       left: "50%",
//       xPercent: -50,
//     });

//     gsap.set(navLinks, {
//       y: 20,
//       opacity: 0,
//     });

//     // Initial animation - fade in navbar from the top
//     const tl = gsap.timeline({ delay: 1.5 }); // Delay to match with hero animations

//     tl.to(navbar, {
//       y: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power3.out",
//     }).to(
//       navLinks,
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.6,
//         stagger: 0.15,
//         ease: "power3.out",
//       },
//       "-=0.8"
//     );

//     // Create ScrollTrigger for navbar sticky effect
//     ScrollTrigger.create({
//       trigger: document.body,
//       start: "195vh top", // Just before CategorySection starts
//       end: "205vh top", // Just after to make transition smoother
//       onEnter: () => {
//         // When entering category section, make navbar fixed with styles
//         gsap.to(navbar, {
//           position: "fixed",
//           top: "10px",
//           width: "60vw",
//           borderRadius: "16px",
//           zIndex: 9999, // Very high z-index to stay on top
//           backgroundColor: "rgba(26, 13, 26, 0.95)",
//           backdropFilter: "blur(10px)",
//           boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
//           duration: 0.4,
//           ease: "power2.out",
//           onComplete: () => {
//             // Ensure it stays on top with inline style
//             navbar.style.zIndex = "9999";
//           },
//         });
//       },
//       onLeaveBack: () => {
//         // When going back to hero section, return to original style
//         gsap.to(navbar, {
//           position: "absolute",
//           top: "0%",
//           width: "60vw",
//           borderRadius: "10px",
//           zIndex: 3,
//           backgroundColor: "#1A0D1A",
//           boxShadow: "none",
//           backdropFilter: "none",
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       },
//     });

//     return () => {
//       // Clean up animations
//       tl.kill();
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.vars.onEnter || trigger.vars.onLeaveBack) {
//           trigger.kill(true);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div
//       ref={navbarRef}
//       id="main-navbar"
//       style={{
//         width: "60vw",
//         backgroundColor: "#1A0D1A",
//         borderRadius: "10px",
//         padding: "20px 30px",
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         margin: "0px auto",
//         zIndex: 3,
//         position: "absolute", // Initially absolute, will change with scroll
//         top: "0%",
//         left: "50%",
//         transform: "translateX(-50%)",
//         // transition:
//         //   "box-shadow 0.4s ease, border-radius 0.4s ease, background-color 0.4s ease",
//       }}
//     >
//       <a href="#home" style={navStyle}>
//         Home
//       </a>
//       <a href="#collection" style={navStyle}>
//         Collection
//       </a>
//       <a href="#testimonials" style={navStyle}>
//         Testimonials
//       </a>
//       <a href="#contact" style={navStyle}>
//         Contact Us
//       </a>
//     </div>
//   );
// }

// // Navbar link style
// const navStyle = {
//   color: "#ffffff",
//   textDecoration: "none",
//   fontSize: "18px",
//   fontWeight: "500",
// };

// components/Navbar.jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const navLinks = navbar.querySelectorAll("a");

    // Initial setup - hidden and moved up
    gsap.set(navbar, {
      y: -100,
      opacity: 0,
      position: "fixed",
      top: "5vh", // Start at 50px from the top
      left: "50%",
      xPercent: -50,
    });

    gsap.set(navLinks, {
      y: 20,
      opacity: 0,
    });

    // Initial animation - fade in navbar from the top
    const tl = gsap.timeline({ delay: 2 });

    tl.to(navbar, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }).to(
      navLinks,
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      },
      "-=0.2"
    );

    // ScrollTrigger for smooth top position animation (scrubbed)
    gsap.to(navbar, {
      top: "5px", // Animate to 5px as you scroll down
      ease: "none", // Linear easing for smooth scrubbing
      scrollTrigger: {
        trigger: ".category-section",
        start: "top 210%", // Start when CategorySection just enters viewport
        end: "top 50%", // End when CategorySection is halfway up viewport
        scrub: true, // Tie animation to scroll position
        toggleActions: "play reverse play reverse", // Ensure it reverses on scroll up
      },
    });

    // Separate ScrollTrigger for styling changes (excluding top)
    gsap.to(navbar, {
      width: "60vw",
      borderRadius: "16px",
      backgroundColor: "rgba(26, 13, 26, 0.95)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".category-section",
        start: "top 100%",
        end: "top 50%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      id="main-navbar"
      className="navbar"
      style={{
        width: "60vw",
        backgroundColor: "#1A0D1A",
        borderRadius: "10px",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0px auto",
        zIndex: 9999,
        position: "fixed",
        top: "50px", // Initial top position
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <a href="#home" style={navStyle}>
        Home
      </a>
      <a href="#collection" style={navStyle}>
        Collection
      </a>
      <a href="#testimonials" style={navStyle}>
        Testimonials
      </a>
      <a href="#contact" style={navStyle}>
        Contact Us
      </a>
    </div>
  );
}

const navStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
};
