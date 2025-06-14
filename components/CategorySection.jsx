// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CategorySection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const topCardRef = useRef(null);
//   const bottomCardsRef = useRef([]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const title = titleRef.current;
//     const topCard = topCardRef.current;
//     const bottomCards = bottomCardsRef.current;

//     // Set initial states
//     gsap.set(title, { y: 50, opacity: 0 });
//     gsap.set(topCard, { y: 80, opacity: 0, scale: 0.9 });
//     gsap.set(bottomCards, { y: 80, opacity: 0, scale: 0.9 });

//     // Create timeline for section animations with overlay effect
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top bottom",
//         end: "top center",
//         toggleActions: "play none none none",
//       },
//     });

//     // Add slide-up animation for the entire section
//     gsap.set(section, { y: 100, opacity: 0 });

//     tl.to(section, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
//       .to(title, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
//       .to(
//         topCard,
//         { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
//         "-=0.5"
//       )
//       .to(
//         bottomCards,
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         "-=0.3"
//       );

//     // Add hover animations for cards
//     const allCards = [topCard, ...bottomCards];
//     allCards.forEach((card) => {
//       if (card) {
//         card.addEventListener("mouseenter", () => {
//           gsap.to(card, {
//             scale: 1.05,
//             y: -10,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//         });

//         card.addEventListener("mouseleave", () => {
//           gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === section) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//     };
//   }, []);

//   const categories = {
//     coordSets: {
//       id: 1,
//       title: "Co-ord Sets",
//       description: "Perfectly matched sets for effortless style",
//       image: "/categories/coord-sets.jpg",
//       color: "#D4A574",
//     },
//     kurtis: {
//       id: 2,
//       title: "Kurtis",
//       description: "Traditional and contemporary kurta designs",
//       image: "/categories/kurtis.jpg",
//       color: "#E8C547",
//     },
//     salwars: {
//       id: 3,
//       title: "Salwars",
//       description: "Elegant salwar suits for every occasion",
//       image: "/categories/salwars.jpg",
//       color: "#B8860B",
//     },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="category-section"
//       style={{
//         padding: "80px 40px 100px",
//         backgroundColor: "#f8f9fa",
//         minHeight: "100vh",
//         position: "relative",
//         borderRadius: "40px 40px 0 0",
//         boxShadow: "0 -20px 40px rgba(0, 0, 0, 0.1)",
//         zIndex: 2,
//       }}
//     >
//       {/* Section Title */}
//       <div
//         ref={titleRef}
//         style={{
//           textAlign: "center",
//           marginBottom: "60px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "48px",
//             fontWeight: "600",
//             color: "#2c2c2c",
//             margin: "0 0 20px 0",
//             letterSpacing: "1px",
//             fontFamily: "serif",
//           }}
//         >
//           Shop by Category
//         </h2>
//       </div>

//       {/* Categories Layout Container */}
//       <div
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "40px",
//         }}
//       >
//         {/* Top Card - Co-ord Sets */}
//         <div
//           ref={topCardRef}
//           style={{
//             width: "360px",
//             height: "450px",
//             backgroundColor: "#ffffff",
//             borderRadius: "25px",
//             overflow: "hidden",
//             boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
//             cursor: "pointer",
//             position: "relative",
//             border: "1px solid #f0f0f0",
//           }}
//         >
//           <div
//             style={{
//               height: "320px",
//               background: `linear-gradient(135deg, ${categories.coordSets.color}20, ${categories.coordSets.color}50)`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               position: "relative",
//             }}
//           >
//             <div
//               style={{
//                 width: "120px",
//                 height: "120px",
//                 backgroundColor: categories.coordSets.color,
//                 borderRadius: "50%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "48px",
//                 color: "#ffffff",
//                 fontWeight: "bold",
//               }}
//             >
//               {categories.coordSets.title.charAt(0)}
//             </div>
//           </div>

//           <div
//             style={{
//               padding: "20px",
//               textAlign: "center",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "22px",
//                 fontWeight: "500",
//                 color: "#2c2c2c",
//                 margin: "0 0 12px 0",
//               }}
//             >
//               {categories.coordSets.title}
//             </h3>
//             <p
//               style={{
//                 fontSize: "14px",
//                 color: "#666",
//                 lineHeight: "1.4",
//                 margin: "0",
//               }}
//             >
//               {categories.coordSets.description}
//             </p>
//           </div>
//         </div>

//         {/* Bottom Row - Kurtis and Salwars */}
//         <div
//           style={{
//             display: "flex",
//             gap: "30px",
//             justifyContent: "center",
//             marginTop: "40px",
//           }}
//         >
//           {/* Kurtis Card */}
//           <div
//             ref={(el) => (bottomCardsRef.current[0] = el)}
//             style={{
//               width: "280px",
//               height: "350px",
//               backgroundColor: "#ffffff",
//               borderRadius: "20px",
//               overflow: "hidden",
//               boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
//               cursor: "pointer",
//               position: "relative",
//               border: "1px solid #f0f0f0",
//             }}
//           >
//             <div
//               style={{
//                 height: "250px",
//                 background: `linear-gradient(135deg, ${categories.kurtis.color}20, ${categories.kurtis.color}40)`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//               }}
//             >
//               <div
//                 style={{
//                   width: "80px",
//                   height: "80px",
//                   backgroundColor: categories.kurtis.color,
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "36px",
//                   color: "#ffffff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {categories.kurtis.title.charAt(0)}
//               </div>
//             </div>

//             <div
//               style={{
//                 padding: "20px",
//                 textAlign: "center",
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "500",
//                   color: "#2c2c2c",
//                   margin: "0 0 8px 0",
//                 }}
//               >
//                 {categories.kurtis.title}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "13px",
//                   color: "#666",
//                   lineHeight: "1.4",
//                   margin: "0",
//                 }}
//               >
//                 {categories.kurtis.description}
//               </p>
//             </div>
//           </div>

//           {/* Salwars Card */}
//           <div
//             ref={(el) => (bottomCardsRef.current[1] = el)}
//             style={{
//               width: "280px",
//               height: "350px",
//               backgroundColor: "#ffffff",
//               borderRadius: "20px",
//               overflow: "hidden",
//               boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
//               cursor: "pointer",
//               position: "relative",
//               border: "1px solid #f0f0f0",
//             }}
//           >
//             <div
//               style={{
//                 height: "250px",
//                 background: `linear-gradient(135deg, ${categories.salwars.color}20, ${categories.salwars.color}40)`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//               }}
//             >
//               <div
//                 style={{
//                   width: "80px",
//                   height: "80px",
//                   backgroundColor: categories.salwars.color,
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "36px",
//                   color: "#ffffff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {categories.salwars.title.charAt(0)}
//               </div>
//             </div>

//             <div
//               style={{
//                 padding: "20px",
//                 textAlign: "center",
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: "500",
//                   color: "#2c2c2c",
//                   margin: "0 0 8px 0",
//                 }}
//               >
//                 {categories.salwars.title}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "13px",
//                   color: "#666",
//                   lineHeight: "1.4",
//                   margin: "0",
//                 }}
//               >
//                 {categories.salwars.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CategorySection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const topCardRef = useRef(null);
//   const bottomCardsRef = useRef([]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const title = titleRef.current;
//     const topCard = topCardRef.current;
//     const bottomCards = bottomCardsRef.current;

//     gsap.set(title, { y: 50, opacity: 0 });
//     gsap.set(topCard, { y: 80, opacity: 0, scale: 0.9 });
//     gsap.set(bottomCards, { y: 80, opacity: 0, scale: 0.9 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top bottom",
//         end: "top center",
//         toggleActions: "play none none none",
//       },
//     });

//     gsap.set(section, { y: 100, opacity: 0 });

//     tl.to(section, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
//       .to(title, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
//       .to(
//         topCard,
//         { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
//         "-=0.5"
//       )
//       .to(
//         bottomCards,
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         "-=0.3"
//       );

//     const allCards = [topCard, ...bottomCards];
//     allCards.forEach((card) => {
//       if (card) {
//         card.addEventListener("mouseenter", () => {
//           gsap.to(card, {
//             scale: 1.05,
//             y: -10,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//         });

//         card.addEventListener("mouseleave", () => {
//           gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === section) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//     };
//   }, []);

//   const categories = {
//     coordSets: {
//       id: 1,
//       title: "Co-ord Sets",
//       description: "Perfectly matched sets for effortless style",
//       image: "/categories/coord-sets.jpg",
//       color: "#D4A574",
//     },
//     kurtis: {
//       id: 2,
//       title: "Kurtis",
//       description: "Traditional and contemporary kurta designs",
//       image: "/categories/kurtis.jpg",
//       color: "#E8C547",
//     },
//     salwars: {
//       id: 3,
//       title: "Salwars",
//       description: "Elegant salwar suits for every occasion",
//       image: "/categories/salwars.jpg",
//       color: "#B8860B",
//     },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="category-section"
//       style={{
//         padding: "80px 40px 100px",
//         backgroundColor: "#f8f9fa",
//         minHeight: "100vh",
//         position: "relative",
//         borderRadius: "40px 40px 0 0",
//         boxShadow: "0 -20px 40px rgba(0, 0, 0, 0.1)",
//         zIndex: 2,
//       }}
//     >
//       <div
//         ref={titleRef}
//         style={{
//           textAlign: "center",
//           marginBottom: "60px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "48px",
//             fontWeight: "600",
//             color: "#2c2c2c",
//             margin: "0 0 20px 0",
//             letterSpacing: "1px",
//             fontFamily: "serif",
//           }}
//         >
//           Shop by Category
//         </h2>
//       </div>

//       <div
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "30px",
//         }}
//       >
//         {[categories.coordSets, categories.kurtis, categories.salwars].map(
//           (category, index) => (
//             <div
//               key={category.id}
//               ref={(el) =>
//                 index === 0
//                   ? (topCardRef.current = el)
//                   : (bottomCardsRef.current[index - 1] = el)
//               }
//               style={{
//                 width: "320px",
//                 height: "450px",
//                 backgroundColor: "#f3f3f3",
//                 borderRadius: "24px",
//                 boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
//                 overflow: "hidden",
//                 position: "relative",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   margin: "15px",
//                   borderRadius: "16px",
//                   overflow: "hidden",
//                   position: "relative",
//                 }}
//               >
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     display: "block",
//                     borderRadius: "inherit",
//                   }}
//                 />

//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "20px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     padding: "10px 20px",
//                     borderRadius: "20px",
//                     backdropFilter: "blur(10px)",
//                     backgroundColor: "rgba(255, 255, 255, 0.2)",
//                     color: "#fff",
//                     fontWeight: "600",
//                     fontSize: "16px",
//                     border: "1px solid rgba(255, 255, 255, 0.3)",
//                     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                     textAlign: "center",
//                   }}
//                 >
//                   {category.title}
//                 </div>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CategorySection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const topCardRef = useRef(null);
//   const bottomCardsRef = useRef([]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const title = titleRef.current;
//     const topCard = topCardRef.current;
//     const bottomCards = bottomCardsRef.current;

//     // Set initial states
//     gsap.set(title, { y: 50, opacity: 0 });
//     gsap.set(topCard, { y: 80, opacity: 0, scale: 0.9 });
//     gsap.set(bottomCards, { y: 80, opacity: 0, scale: 0.9 });

//     // Create timeline for section animations
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top bottom",
//         end: "top center",
//         toggleActions: "play none none none",
//       },
//     });

//     gsap.set(section, { y: 100, opacity: 0 });

//     tl.to(section, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
//       .to(title, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
//       .to(
//         topCard,
//         { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
//         "-=0.5"
//       )
//       .to(
//         bottomCards,
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         "-=0.3"
//       );

//     // Hover animations with smoother transition
//     const allCards = [topCard, ...bottomCards];
//     allCards.forEach((card) => {
//       if (card) {
//         card.addEventListener("mouseenter", () => {
//           gsap.to(card, {
//             scale: 1.05,
//             y: -8,
//             duration: 0.1,
//             ease: "expo.out",
//             overwrite: true,
//           });
//         });

//         card.addEventListener("mouseleave", () => {
//           gsap.to(card, {
//             scale: 1,
//             y: 0,
//             duration: 0.1,
//             ease: "expo.out",
//             overwrite: true,
//           });
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.trigger === section) {
//           trigger.kill();
//         }
//       });
//       tl.kill();
//     };
//   }, []);

//   const categories = {
//     coordSets: {
//       id: 1,
//       title: "Co-ord Sets",
//       description: "Perfectly matched sets for effortless style",
//       image: "home/categories/nilal3.png",
//       // color: "#D4A574",
//       color: "#797979",
//       borderRadius: "40px",
//     },
//     kurtis: {
//       id: 2,
//       title: "Kurtis",
//       description: "Traditional and contemporary kurta designs",
//       image: "home/categories/nilal2.png",
//       color: "#797979",
//       borderRadius: "40px",
//     },
//     salwars: {
//       id: 3,
//       title: "Salwars",
//       description: "Elegant salwar suits for every occasion",
//       image: "home/categories/nilal4.png",
//       // color: "#B8860B",
//       color: "#797979",
//       borderRadius: "40px",
//     },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="category-section"
//       style={{
//         height: "100vh",
//         padding: "40px",
//         backgroundColor: "#faf1fc",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         // borderRadius: "0 0 0 0",
//         boxShadow: "0 -20px 40px rgba(0, 0, 0, 0.1)",
//         zIndex: 2,
//       }}
//     >
//       {/* Section Title */}
//       {/* <div
//         ref={titleRef}
//         style={{
//           textAlign: "center",
//           marginBottom: "40px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "48px",
//             fontWeight: "600",
//             color: "#2c2c2c",
//             margin: 0,
//             letterSpacing: "1px",
//             fontFamily: "serif",
//           }}
//         >
//           Shop by Category
//         </h2>
//       </div> */}

//       <div
//         ref={titleRef}
//         style={{
//           textAlign: "center",
//           marginBottom: "10px", // Reduced from 40px to move it upward
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "48px",
//             fontWeight: "600",
//             color: "#2c2c2c",
//             margin: 0,
//             letterSpacing: "1px",
//             fontFamily: "serif",
//           }}
//         >
//           Shop by Category
//         </h2>
//       </div>

//       {/* Cards Row */}
//       <div
//         style={{
//           display: "flex",
//           gap: "80px",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//         }}
//       >
//         {[categories.coordSets, categories.kurtis, categories.salwars].map(
//           (category, index) => (
//             <div
//               key={category.id}
//               ref={(el) =>
//                 index === 0
//                   ? (topCardRef.current = el)
//                   : (bottomCardsRef.current[index - 1] = el)
//               }
//               style={{
//                 width: "320px",
//                 height: "450px",
//                 backgroundColor: category.color,
//                 // borderRadius: "25px",
//                 borderRadius: category.borderRadius,
//                 overflow: "hidden",
//                 boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
//                 cursor: "pointer",
//                 position: "relative",
//                 border: "1px solid #f0f0f0",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transformOrigin: "center center",
//                 willChange: "transform",
//                 transition: "transform 0.3s ease-in-out",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   // margin: "15px",
//                   padding: "15px",
//                   borderRadius: "25px",
//                   // borderRadius: category.borderRadius
//                   overflow: "hidden",
//                   position: "relative",
//                 }}
//               >
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: "inherit",
//                     display: "block",
//                   }}
//                 />
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "20px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     padding: "5px 20px",
//                     borderRadius: "5px",
//                     // border
//                     backdropFilter: "blur(10px)",
//                     backgroundColor: "rgba(255, 255, 255, 0.6)",
//                     color: "#000000",
//                     fontWeight: "400",
//                     fontSize: "16px",
//                     // border: "1px solid rgba(255, 255, 255, 0.3)",
//                     // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                     textAlign: "center",
//                   }}
//                 >
//                   {category.title}
//                 </div>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// }

// components/CategorySection.jsx

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CategorySection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    // Set initial states - cards start invisible and below
    gsap.set(title, { y: 30, opacity: 0 });
    gsap.set(cards, { y: 60, opacity: 0 });

    // Create timeline for section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Animate title first, then cards with stagger
    tl.to(title, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5,
    }).to(
      cards,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.6"
    );

    // Updated hover animations - more subtle
    cards.forEach((card) => {
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -5,
            duration: 0.05,
            ease: "power2.out",
            overwrite: true,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.05,
            ease: "power2.out",
            overwrite: true,
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
      tl.kill();
    };
  }, []);

  const categories = {
    coordSets: {
      id: 1,
      title: "Co-ord Sets",
      description: "Perfectly matched sets for effortless style",
      image: "home/categories/nilal3.png",
      color: "#797979",
      borderRadius: "40px",
    },
    kurtis: {
      id: 2,
      title: "Kurtis",
      description: "Traditional and contemporary kurta designs",
      image: "home/categories/nilal2.png",
      color: "#797979",
      borderRadius: "40px",
    },
    salwars: {
      id: 3,
      title: "Salwars",
      description: "Elegant salwar suits for every occasion",
      image: "home/categories/nilal4.png",
      color: "#797979",
      borderRadius: "40px",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="category-section"
      style={{
        height: "100vh",
        padding: "40px",
        backgroundColor: "#faf1fc",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 -20px 40px rgba(0, 0, 0, 0.1)",
        zIndex: 2,
      }}
    >
      {/* Section Title - moved up more */}
      <div
        ref={titleRef}
        style={{
          textAlign: "center",
          marginBottom: "60px", // Increased to move cards down and title up
          marginTop: "-40px", // Added negative margin to move title up
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "600",
            color: "#2c2c2c",
            margin: 0,
            letterSpacing: "1px",
            fontFamily: "serif",
          }}
        >
          Categories
        </h2>
      </div>

      {/* Cards Row */}
      <div
        style={{
          display: "flex",
          gap: "160px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {[categories.coordSets, categories.kurtis, categories.salwars].map(
          (category, index) => (
            <div
              key={category.id}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                width: "320px",
                height: "450px",
                backgroundColor: category.color,
                borderRadius: category.borderRadius,
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                position: "relative",
                border: "1px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transformOrigin: "center center",
                willChange: "transform",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "15px",
                  borderRadius: "25px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "5px 20px",
                    borderRadius: "5px",
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    color: "#000000",
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  {category.title}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
