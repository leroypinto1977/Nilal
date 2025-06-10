// // components/HeroSection.jsx

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroSection() {
//   const rectangleRef = useRef(null);
//   const titleWrapperRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const image1Ref = useRef(null);
//   const image2Ref = useRef(null);
//   const letterRefs = useRef([]);
//   const lineRefs = useRef([]);
//   const navbarRef = useRef(null);
//   const glowRingsRef = useRef(null);

//   useEffect(() => {
//     const rectangle = rectangleRef.current;
//     const titleWrapper = titleWrapperRef.current;
//     const description = descriptionRef.current;
//     const image1 = image1Ref.current;
//     const image2 = image2Ref.current;
//     const letters = letterRefs.current;
//     const lines = lineRefs.current;
//     const navbar = navbarRef.current;
//     const navLinks = navbar.querySelectorAll("a");

//     // Lock scroll during animation
//     const lockScroll = () => {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//     };

//     // Unlock scroll after animation
//     const unlockScroll = () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };

//     // Lock scroll immediately
//     lockScroll();

//     // Initial state
//     gsap.set(rectangle, {
//       width: "50vw",
//       height: "20vh",
//       borderRadius: "180px",
//       backgroundColor: "#21121F",
//       position: "fixed",
//       top: "50%",
//       left: "50%",
//       xPercent: -50,
//       yPercent: -50,
//       scale: 0,
//       transformOrigin: "bottom right",
//       opacity: 1,
//     });

//     gsap.set(titleWrapper, {
//       position: "absolute",
//       top: "auto",
//       left: "40px",
//       xPercent: 0,
//       yPercent: 0,
//       opacity: 1,
//     });

//     gsap.set(letters, {
//       y: 50,
//       opacity: 0,
//     });

//     gsap.set(lines, {
//       y: 30,
//       opacity: 0,
//     });

//     gsap.set([image1, image2], {
//       x: 100,
//       opacity: 0,
//     });

//     gsap.set(navbar, {
//       y: -100,
//       opacity: 0,
//     });

//     gsap.set(navLinks, {
//       y: 20,
//       opacity: 0,
//     });

//     const tl = gsap.timeline({
//       onComplete: () => {
//         // Unlock scroll when animation timeline is complete
//         unlockScroll();
//       },
//     });

//     tl.to(rectangle, {
//       scale: 1,
//       duration: 2,
//       ease: "expo.out",
//     })
//       .to(
//         letters,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power3.out",
//         },
//         "-=1.0"
//       )
//       .to(
//         titleWrapper,
//         {
//           top: "auto",
//           left: "40px",
//           xPercent: 0,
//           yPercent: 0,
//           duration: 1.5,
//           ease: "power3.out",
//         },
//         ">0.2"
//       )
//       .to(
//         lines,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         "-=1.0"
//       )
//       .to(
//         [image1, image2],
//         {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         "-=0.5"
//       )
//       .to(
//         glowRingsRef.current,
//         {
//           opacity: 1,
//           duration: 1.5,
//           ease: "power2.out",
//         },
//         "-=0.6"
//       )
//       .to(
//         navbar,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.5"
//       )
//       .to(
//         navLinks,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.15,
//           ease: "power3.out",
//         },
//         "-=0.8"
//       );

//     gsap.to(rectangle, {
//       width: "100vw",
//       height: "100vh",
//       borderRadius: "0px",
//       position: "fixed",
//       top: "50%",
//       left: "50%",
//       xPercent: -50,
//       yPercent: -50,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: rectangle,
//         start: "top 100%",
//         end: "top 0%",
//         scrub: true,
//       },
//     });

//     // Parallax effect on floating cards with individual speed
//     gsap.utils.toArray(".floating-card").forEach((card, i) => {
//       const parallaxOffset = [100, 60, 80][i];
//       const baseStart = 60;

//       gsap.fromTo(
//         card,
//         {
//           opacity: 0,
//           y: parallaxOffset,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: rectangle,
//             start: `top ${baseStart - i * 10}%`,
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });

//     ScrollTrigger.create({
//       trigger: rectangle,
//       start: "bottom top", // when the bottom of hero hits top of viewport
//       onEnter: () => {
//         navbar.classList.add("sticky-navbar");
//       },
//       onLeaveBack: () => {
//         navbar.classList.remove("sticky-navbar");
//       },
//     });

//     return () => {
//       // Cleanup: unlock scroll and kill animations
//       unlockScroll();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       tl.kill();
//       navbar.classList.remove("sticky-navbar");
//     };
//   }, []);

//   const descriptionLines = [
//     "DISCOVER THE PERFECT BLEND",
//     "OF TRADITION AND TREND WITH",
//     "OUR EXQUISITE COLLECTION OF",
//     "KURTIS AND SALWARS.",
//   ];

//   const testimonialCards = [
//     {
//       name: "Davis Korsgaard",
//       comment: "Player wellness expert and Coach of the Year.",
//       top: "25%",
//       left: "20%",
//     },
//     {
//       name: "Sophie Kim",
//       comment: "Happy customer — loved the quality & fabric.",
//       top: "40%",
//       left: "87%",
//     },
//     {
//       name: "Rajat Sinha",
//       comment: "Great fits and vibrant colors. My go-to store.",
//       top: "80%",
//       left: "32%",
//     },
//   ];

//   return (
//     <div
//       ref={rectangleRef}
//       style={{
//         margin: 0,
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         overflow: "hidden",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       {/* Navbar */}
//       <div
//         ref={navbarRef}
//         className="hero-navbar"
//         style={{
//           width: "60vw",
//           backgroundColor: "#1A0D1A",
//           borderRadius: "10px",
//           padding: "20px 30px",
//           display: "flex",
//           justifyContent: "space-around",
//           alignItems: "center",
//           margin: "0px auto",
//           zIndex: 3,
//           position: "absolute",
//           top: "0%",
//         }}
//       >
//         <a href="#home" style={navStyle}>
//           Home
//         </a>
//         <a href="#collection" style={navStyle}>
//           Collection
//         </a>
//         <a href="#testimonials" style={navStyle}>
//           Testimonials
//         </a>
//         <a href="#contact" style={navStyle}>
//           Contact Us
//         </a>
//       </div>

//       {/* Main Content */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//           flex: 1,
//         }}
//       >
//         {/* Text Section */}
//         <div
//           style={{
//             flex: "1",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             color: "#ffffff",
//             paddingLeft: "40px",
//             position: "relative",
//           }}
//         >
//           {/* Wrapper for title + description */}
//           <div
//             ref={titleWrapperRef}
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: "48px",
//                 fontWeight: "bold",
//                 margin: 0,
//                 lineHeight: "1.2",
//               }}
//             >
//               {"NILAL".split("").map((letter, index) => (
//                 <span
//                   key={index}
//                   ref={(el) => (letterRefs.current[index] = el)}
//                   style={{ display: "inline-block" }}
//                 >
//                   {letter}
//                 </span>
//               ))}
//             </h1>
//             <p
//               ref={descriptionRef}
//               style={{
//                 fontSize: "16px",
//                 marginTop: "10px",
//                 maxWidth: "300px",
//                 lineHeight: "1.5",
//               }}
//             >
//               {descriptionLines.map((line, index) => (
//                 <span
//                   key={index}
//                   ref={(el) => (lineRefs.current[index] = el)}
//                   style={{ display: "block" }}
//                 >
//                   {line}
//                 </span>
//               ))}
//             </p>
//           </div>
//         </div>

//         {/* Images Section */}
//         <div
//           style={{
//             flex: "1",
//             position: "relative",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100%",
//           }}
//         >
//           <img
//             ref={image1Ref}
//             src="/home/image2.png"
//             alt="Background Image"
//             style={{
//               position: "absolute",
//               width: "95%",
//               height: "90%",
//               objectFit: "cover",
//               zIndex: 1,
//               left: "-35%",
//               bottom: "-2%",
//             }}
//           />
//           <img
//             ref={image2Ref}
//             src="/home/image1.png"
//             alt="Foreground Image"
//             style={{
//               position: "absolute",
//               maxWidth: "120%",
//               maxHeight: "120%",
//               objectFit: "cover",
//               zIndex: 2,
//               left: "-18%",
//               bottom: "-2%",
//             }}
//           />
//         </div>
//       </div>

//       {/* Floating testimonial cards */}
//       {testimonialCards.map((card, index) => (
//         <div
//           key={index}
//           className="floating-card"
//           style={{
//             position: "absolute",
//             top: card.top,
//             left: card.left,
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.15)",
//             backdropFilter: "blur(10px)",
//             WebkitBackdropFilter: "blur(10px)",
//             borderRadius: "16px",
//             boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
//             padding: "16px 20px",
//             display: "flex",
//             alignItems: "center",
//             minWidth: "260px",
//             maxWidth: "300px",
//             opacity: 0,
//             transformOrigin: "center",
//             zIndex: 4,
//             border: "1px solid rgba(255,255,255,0.2)",
//           }}
//         >
//           <img
//             src="/home/testimonial-avatar.png"
//             alt={card.name}
//             style={{
//               width: "48px",
//               height: "48px",
//               borderRadius: "50%",
//               marginRight: "16px",
//               objectFit: "cover",
//             }}
//           />
//           <div>
//             <strong
//               style={{
//                 display: "block",
//                 fontSize: "14px",
//                 marginBottom: "4px",
//               }}
//             >
//               {card.name}
//             </strong>
//             <p style={{ fontSize: "12px", margin: 0, color: "#333" }}>
//               {card.comment}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* Glowing concentric circles */}
//       <div
//         ref={glowRingsRef}
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 0,
//           opacity: 0,
//         }}
//       >
//         {[1000, 1500].map((size, index) => (
//           <div
//             key={index}
//             className={`glow-ring ring-${index}`}
//             style={{
//               width: size,
//               height: size,
//               borderRadius: "50%",
//               border: "2px solid rgba(255, 255, 255, 0.1)",
//               boxShadow: `0 0 30px rgba(148, 0, 211, 0.4)`,
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               animation: `glowPulse ${2 + index}s ease-in-out infinite`,
//               pointerEvents: "none",
//             }}
//           />
//         ))}
//       </div>

//       {/* Add the CSS animation for glow rings */}
//       <style jsx>{`
//         @keyframes glowPulse {
//           0%,
//           100% {
//             opacity: 0.3;
//             transform: translate(-50%, -50%) scale(1);
//           }
//           50% {
//             opacity: 0.8;
//             transform: translate(-50%, -50%) scale(1.05);
//           }
//         }
//       `}</style>

//       {/* CSS animation for the sticky navbar */}
//       <style jsx global>{`
//         .hero-navbar.sticky-navbar {
//           position: fixed !important;
//           top: 0 !important;
//           left: 50% !important;
//           transform: translateX(-50%) !important;
//           z-index: 9999 !important; /* <<<< SUPER HIGH */
//           width: 100vw !important;
//           border-radius: 0 0 16px 16px;
//           box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
//           animation: stickyFadeIn 0.4s both;
//         }
//         @keyframes stickyFadeIn {
//           from {
//             opacity: 0;
//             transform: translateX(-50%) translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(-50%) translateY(0);
//           }
//         }
//       `}</style>
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

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroSection() {
//   const rectangleRef = useRef(null);
//   const titleWrapperRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const image1Ref = useRef(null);
//   const image2Ref = useRef(null);
//   const letterRefs = useRef([]);
//   const lineRefs = useRef([]);
//   const glowRingsRef = useRef(null);

//   useEffect(() => {
//     const rectangle = rectangleRef.current;
//     const titleWrapper = titleWrapperRef.current;
//     const description = descriptionRef.current;
//     const image1 = image1Ref.current;
//     const image2 = image2Ref.current;
//     const letters = letterRefs.current;
//     const lines = lineRefs.current;

//     // Lock scroll during animation
//     const lockScroll = () => {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//     };

//     // Unlock scroll after animation
//     const unlockScroll = () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };

//     // Lock scroll immediately
//     lockScroll();

//     // Initial state
//     gsap.set(rectangle, {
//       width: "50vw",
//       height: "20vh",
//       borderRadius: "180px",
//       backgroundColor: "#21121F",
//       position: "fixed",
//       top: "50%",
//       left: "50%",
//       xPercent: -50,
//       yPercent: -50,
//       scale: 0,
//       transformOrigin: "bottom right",
//       opacity: 1,
//     });

//     gsap.set(titleWrapper, {
//       position: "absolute",
//       top: "auto",
//       left: "40px",
//       xPercent: 0,
//       yPercent: 0,
//       opacity: 1,
//     });

//     gsap.set(letters, {
//       y: 50,
//       opacity: 0,
//     });

//     gsap.set(lines, {
//       y: 30,
//       opacity: 0,
//     });

//     gsap.set([image1, image2], {
//       x: 100,
//       opacity: 0,
//     });

//     const tl = gsap.timeline({
//       onComplete: () => {
//         // Unlock scroll when animation timeline is complete
//         unlockScroll();
//       },
//     });

//     tl.to(rectangle, {
//       scale: 1,
//       duration: 2,
//       ease: "expo.out",
//     })
//       .to(
//         letters,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power3.out",
//         },
//         "-=1.0"
//       )
//       .to(
//         titleWrapper,
//         {
//           top: "auto",
//           left: "40px",
//           xPercent: 0,
//           yPercent: 0,
//           duration: 1.5,
//           ease: "power3.out",
//         },
//         ">0.2"
//       )
//       .to(
//         lines,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         "-=1.0"
//       )
//       .to(
//         [image1, image2],
//         {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         "-=0.5"
//       )
//       .to(
//         glowRingsRef.current,
//         {
//           opacity: 1,
//           duration: 1.5,
//           ease: "power2.out",
//         },
//         "-=0.6"
//       );

//     gsap.to(rectangle, {
//       width: "100vw",
//       height: "100vh",
//       borderRadius: "0px",
//       position: "fixed",
//       top: "50%",
//       left: "50%",
//       xPercent: -50,
//       yPercent: -50,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: rectangle,
//         start: "top 100%",
//         end: "top 0%",
//         scrub: true,
//       },
//     });

//     // Parallax effect on floating cards with individual speed
//     gsap.utils.toArray(".floating-card").forEach((card, i) => {
//       const parallaxOffset = [100, 60, 80][i];
//       const baseStart = 60;

//       gsap.fromTo(
//         card,
//         {
//           opacity: 0,
//           y: parallaxOffset,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: rectangle,
//             start: `top ${baseStart - i * 10}%`,
//             end: "bottom top",
//             scrub: true,
//           },
//         }
//       );
//     });

//     return () => {
//       // Cleanup: unlock scroll and kill animations
//       unlockScroll();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       tl.kill();
//     };
//   }, []);

//   const descriptionLines = [
//     "DISCOVER THE PERFECT BLEND",
//     "OF TRADITION AND TREND WITH",
//     "OUR EXQUISITE COLLECTION OF",
//     "KURTIS AND SALWARS.",
//   ];

//   const testimonialCards = [
//     {
//       name: "Davis Korsgaard",
//       comment: "Player wellness expert and Coach of the Year.",
//       top: "25%",
//       left: "20%",
//     },
//     {
//       name: "Sophie Kim",
//       comment: "Happy customer — loved the quality & fabric.",
//       top: "40%",
//       left: "87%",
//     },
//     {
//       name: "Rajat Sinha",
//       comment: "Great fits and vibrant colors. My go-to store.",
//       top: "80%",
//       left: "32%",
//     },
//   ];

//   return (
//     <div
//       ref={rectangleRef}
//       style={{
//         margin: 0,
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         overflow: "hidden",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       {/* Main Content */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//           flex: 1,
//         }}
//       >
//         {/* Text Section */}
//         <div
//           style={{
//             flex: "1",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             color: "#ffffff",
//             paddingLeft: "40px",
//             position: "relative",
//           }}
//         >
//           {/* Wrapper for title + description */}
//           <div
//             ref={titleWrapperRef}
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: "48px",
//                 fontWeight: "bold",
//                 margin: 0,
//                 lineHeight: "1.2",
//               }}
//             >
//               {"NILAL".split("").map((letter, index) => (
//                 <span
//                   key={index}
//                   ref={(el) => (letterRefs.current[index] = el)}
//                   style={{ display: "inline-block" }}
//                 >
//                   {letter}
//                 </span>
//               ))}
//             </h1>
//             <p
//               ref={descriptionRef}
//               style={{
//                 fontSize: "16px",
//                 marginTop: "10px",
//                 maxWidth: "300px",
//                 lineHeight: "1.5",
//               }}
//             >
//               {descriptionLines.map((line, index) => (
//                 <span
//                   key={index}
//                   ref={(el) => (lineRefs.current[index] = el)}
//                   style={{ display: "block" }}
//                 >
//                   {line}
//                 </span>
//               ))}
//             </p>
//           </div>
//         </div>

//         {/* Images Section */}
//         <div
//           style={{
//             flex: "1",
//             position: "relative",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100%",
//           }}
//         >
//           <img
//             ref={image1Ref}
//             src="/home/image2.png"
//             alt="Background Image"
//             style={{
//               position: "absolute",
//               width: "95%",
//               height: "90%",
//               objectFit: "cover",
//               zIndex: 1,
//               left: "-35%",
//               bottom: "-2%",
//             }}
//           />
//           <img
//             ref={image2Ref}
//             src="/home/image1.png"
//             alt="Foreground Image"
//             style={{
//               position: "absolute",
//               maxWidth: "120%",
//               maxHeight: "120%",
//               objectFit: "cover",
//               zIndex: 2,
//               left: "-18%",
//               bottom: "-2%",
//             }}
//           />
//         </div>
//       </div>

//       {/* Floating testimonial cards */}
//       {testimonialCards.map((card, index) => (
//         <div
//           key={index}
//           className="floating-card"
//           style={{
//             position: "absolute",
//             top: card.top,
//             left: card.left,
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.15)",
//             backdropFilter: "blur(10px)",
//             WebkitBackdropFilter: "blur(10px)",
//             borderRadius: "16px",
//             boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
//             padding: "16px 20px",
//             display: "flex",
//             alignItems: "center",
//             minWidth: "260px",
//             maxWidth: "300px",
//             opacity: 0,
//             transformOrigin: "center",
//             zIndex: 4,
//             border: "1px solid rgba(255,255,255,0.2)",
//           }}
//         >
//           <img
//             src="/home/testimonial-avatar.png"
//             alt={card.name}
//             style={{
//               width: "48px",
//               height: "48px",
//               borderRadius: "50%",
//               marginRight: "16px",
//               objectFit: "cover",
//             }}
//           />
//           <div>
//             <strong
//               style={{
//                 display: "block",
//                 fontSize: "14px",
//                 marginBottom: "4px",
//               }}
//             >
//               {card.name}
//             </strong>
//             <p style={{ fontSize: "12px", margin: 0, color: "#333" }}>
//               {card.comment}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* Glowing concentric circles */}
//       <div
//         ref={glowRingsRef}
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 0,
//           opacity: 0,
//         }}
//       >
//         {[1000, 1500].map((size, index) => (
//           <div
//             key={index}
//             className={`glow-ring ring-${index}`}
//             style={{
//               width: size,
//               height: size,
//               borderRadius: "50%",
//               border: "2px solid rgba(255, 255, 255, 0.1)",
//               boxShadow: `0 0 30px rgba(148, 0, 211, 0.4)`,
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               animation: `glowPulse ${2 + index}s ease-in-out infinite`,
//               pointerEvents: "none",
//             }}
//           />
//         ))}
//       </div>

//       {/* Add the CSS animation for glow rings */}
//       <style jsx>{`
//         @keyframes glowPulse {
//           0%,
//           100% {
//             opacity: 0.3;
//             transform: translate(-50%, -50%) scale(1);
//           }
//           50% {
//             opacity: 0.8;
//             transform: translate(-50%, -50%) scale(1.05);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const rectangleRef = useRef(null);
  const titleWrapperRef = useRef(null);
  const descriptionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const letterRefs = useRef([]);
  const lineRefs = useRef([]);
  const glowRingsRef = useRef(null);

  useEffect(() => {
    const rectangle = rectangleRef.current;
    const titleWrapper = titleWrapperRef.current;
    const description = descriptionRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const letters = letterRefs.current;
    const lines = lineRefs.current;

    // Lock scroll during animation
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };

    // Unlock scroll after animation
    const unlockScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };

    // Lock scroll immediately
    lockScroll();

    // Initial state
    gsap.set(rectangle, {
      width: "50vw",
      height: "20vh",
      borderRadius: "180px",
      backgroundColor: "#21121F",
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      transformOrigin: "bottom right",
      opacity: 1,
    });

    gsap.set(titleWrapper, {
      position: "absolute",
      top: "auto",
      left: "40px",
      xPercent: 0,
      yPercent: 0,
      opacity: 1,
    });

    gsap.set(letters, {
      y: 50,
      opacity: 0,
    });

    gsap.set(lines, {
      y: 30,
      opacity: 0,
    });

    gsap.set([image1, image2], {
      x: 100,
      opacity: 0,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scroll when animation timeline is complete
        unlockScroll();
      },
    });

    tl.to(rectangle, {
      scale: 1,
      duration: 2,
      ease: "expo.out",
    })
      .to(
        letters,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=1.0"
      )
      .to(
        titleWrapper,
        {
          top: "auto",
          left: "40px",
          xPercent: 0,
          yPercent: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        ">0.2"
      )
      .to(
        lines,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=1.0"
      )
      .to(
        [image1, image2],
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        glowRingsRef.current,
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.6"
      );

    gsap.to(rectangle, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      position: "fixed",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rectangle,
        start: "top 100%",
        end: "top 0%",
        scrub: true,
      },
    });

    // Parallax effect on floating cards with individual speed
    gsap.utils.toArray(".floating-card").forEach((card, i) => {
      const parallaxOffset = [100, 60, 80][i];
      const baseStart = 60;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: parallaxOffset,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rectangle,
            start: `top ${baseStart - i * 10}%`,
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => {
      // Cleanup: unlock scroll and kill animations
      unlockScroll();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  const descriptionLines = [
    "DISCOVER THE PERFECT BLEND",
    "OF TRADITION AND TREND WITH",
    "OUR EXQUISITE COLLECTION OF",
    "KURTIS AND SALWARS.",
  ];

  const testimonialCards = [
    {
      name: "Davis Korsgaard",
      comment: "Player wellness expert and Coach of the Year.",
      top: "25%",
      left: "20%",
    },
    {
      name: "Sophie Kim",
      comment: "Happy customer — loved the quality & fabric.",
      top: "40%",
      left: "87%",
    },
    {
      name: "Rajat Sinha",
      comment: "Great fits and vibrant colors. My go-to store.",
      top: "80%",
      left: "32%",
    },
  ];

  return (
    <div
      ref={rectangleRef}
      style={{
        margin: 0,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flex: 1,
        }}
      >
        {/* Text Section */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#ffffff",
            paddingLeft: "40px",
            position: "relative",
          }}
        >
          {/* Wrapper for title + description */}
          <div
            ref={titleWrapperRef}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                margin: 0,
                lineHeight: "1.2",
              }}
            >
              {"NILAL".split("").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => (letterRefs.current[index] = el)}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p
              ref={descriptionRef}
              style={{
                fontSize: "16px",
                marginTop: "10px",
                maxWidth: "300px",
                lineHeight: "1.5",
              }}
            >
              {descriptionLines.map((line, index) => (
                <span
                  key={index}
                  ref={(el) => (lineRefs.current[index] = el)}
                  style={{ display: "block" }}
                >
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div
          style={{
            flex: "1",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            ref={image1Ref}
            src="/home/image2.png"
            alt="Background Image"
            style={{
              position: "absolute",
              width: "95%",
              height: "90%",
              objectFit: "cover",
              zIndex: 1,
              left: "-35%",
              bottom: "-2%",
            }}
          />
          <img
            ref={image2Ref}
            src="/home/image1.png"
            alt="Foreground Image"
            style={{
              position: "absolute",
              maxWidth: "120%",
              maxHeight: "120%",
              objectFit: "cover",
              zIndex: 2,
              left: "-18%",
              bottom: "-2%",
            }}
          />
        </div>
      </div>

      {/* Floating testimonial cards */}
      {testimonialCards.map((card, index) => (
        <div
          key={index}
          className="floating-card"
          style={{
            position: "absolute",
            top: card.top,
            left: card.left,
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "16px",
            boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            minWidth: "260px",
            maxWidth: "300px",
            opacity: 0,
            transformOrigin: "center",
            zIndex: 4,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <img
            src="/home/testimonial-avatar.png"
            alt={card.name}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              marginRight: "16px",
              objectFit: "cover",
            }}
          />
          <div>
            <strong
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "4px",
              }}
            >
              {card.name}
            </strong>
            <p style={{ fontSize: "12px", margin: 0, color: "#333" }}>
              {card.comment}
            </p>
          </div>
        </div>
      ))}

      {/* Glowing concentric circles */}
      <div
        ref={glowRingsRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          opacity: 0,
        }}
      >
        {[1000, 1500].map((size, index) => (
          <div
            key={index}
            className={`glow-ring ring-${index}`}
            style={{
              width: size,
              height: size,
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              boxShadow: `0 0 30px rgba(148, 0, 211, 0.4)`,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: `glowPulse ${2 + index}s ease-in-out infinite`,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      {/* Add the CSS animation for glow rings */}
      <style jsx>{`
        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
