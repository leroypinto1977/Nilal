// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CategorySection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const title = titleRef.current;
//     const cards = cardsRef.current;

//     // Set initial states
//     gsap.set(title, {
//       y: 50,
//       opacity: 0,
//     });

//     gsap.set(cards, {
//       y: 80,
//       opacity: 0,
//       scale: 0.9,
//     });

//     // Create timeline for section animations
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top 80%",
//         end: "top 20%",
//         toggleActions: "play none none none",
//       },
//     });

//     // Animate title first, then cards
//     tl.to(title, {
//       y: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power3.out",
//     }).to(
//       cards,
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power3.out",
//       },
//       "-=0.5"
//     );

//     // Add hover animations for cards
//     cards.forEach((card) => {
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
//           gsap.to(card, {
//             scale: 1,
//             y: 0,
//             duration: 0.3,
//             ease: "power2.out",
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

//   const categories = [
//     {
//       id: 1,
//       title: "Traditional Kurtis",
//       description: "Elegant designs with traditional patterns and embroidery",
//       image: "/categories/traditional-kurtis.jpg",
//       color: "#FF6B6B",
//     },
//     {
//       id: 2,
//       title: "Modern Salwars",
//       description: "Contemporary cuts with comfort and style",
//       image: "/categories/modern-salwars.jpg",
//       color: "#4ECDC4",
//     },
//     {
//       id: 3,
//       title: "Festive Collection",
//       description: "Special occasion wear with luxurious fabrics",
//       image: "/categories/festive-collection.jpg",
//       color: "#45B7D1",
//     },
//     {
//       id: 4,
//       title: "Casual Wear",
//       description: "Comfortable everyday outfits for modern women",
//       image: "/categories/casual-wear.jpg",
//       color: "#96CEB4",
//     },
//     {
//       id: 5,
//       title: "Designer Pieces",
//       description: "Exclusive designer collections for the fashion-forward",
//       image: "/categories/designer-pieces.jpg",
//       color: "#FFEAA7",
//     },
//     {
//       id: 6,
//       title: "Seasonal Trends",
//       description: "Latest seasonal collections and trending styles",
//       image: "/categories/seasonal-trends.jpg",
//       color: "#DDA0DD",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         padding: "100px 40px",
//         backgroundColor: "#f8f9fa",
//         minHeight: "100vh",
//         position: "relative",
//         zIndex: 1,
//         marginTop: 0, // Remove any top margin that might interfere
//       }}
//     >
//       {/* Section Title */}
//       <div
//         ref={titleRef}
//         style={{
//           textAlign: "center",
//           marginBottom: "80px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "48px",
//             fontWeight: "bold",
//             color: "#2c2c2c",
//             margin: "0 0 20px 0",
//             letterSpacing: "2px",
//           }}
//         >
//           OUR COLLECTIONS
//         </h2>
//         <p
//           style={{
//             fontSize: "18px",
//             color: "#666",
//             maxWidth: "600px",
//             margin: "0 auto",
//             lineHeight: "1.6",
//           }}
//         >
//           Discover our carefully curated collections that blend traditional
//           craftsmanship with contemporary fashion sensibilities
//         </p>
//       </div>

//       {/* Category Cards Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//           gap: "30px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {categories.map((category, index) => (
//           <div
//             key={category.id}
//             ref={(el) => (cardsRef.current[index] = el)}
//             style={{
//               backgroundColor: "#ffffff",
//               borderRadius: "20px",
//               overflow: "hidden",
//               boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               border: "1px solid #f0f0f0",
//             }}
//           >
//             {/* Card Image */}
//             <div
//               style={{
//                 height: "250px",
//                 background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Placeholder for actual image */}
//               <div
//                 style={{
//                   width: "80px",
//                   height: "80px",
//                   backgroundColor: category.color,
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "32px",
//                   color: "#ffffff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {category.title.charAt(0)}
//               </div>

//               {/* Decorative pattern overlay */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: `radial-gradient(circle at 70% 30%, ${category.color}15 0%, transparent 50%)`,
//                 }}
//               />
//             </div>

//             {/* Card Content */}
//             <div
//               style={{
//                 padding: "30px",
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   color: "#2c2c2c",
//                   margin: "0 0 15px 0",
//                 }}
//               >
//                 {category.title}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "#666",
//                   lineHeight: "1.5",
//                   margin: "0 0 20px 0",
//                 }}
//               >
//                 {category.description}
//               </p>

//               {/* CTA Button */}
//               <button
//                 style={{
//                   backgroundColor: category.color,
//                   color: "#ffffff",
//                   border: "none",
//                   padding: "12px 24px",
//                   borderRadius: "25px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                   textTransform: "uppercase",
//                   letterSpacing: "1px",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "translateY(-2px)";
//                   e.target.style.boxShadow = `0 8px 20px ${category.color}40`;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   e.target.style.boxShadow = "none";
//                 }}
//               >
//                 Explore Collection
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Background decorative elements */}
//       <div
//         style={{
//           position: "absolute",
//           top: "10%",
//           right: "5%",
//           width: "200px",
//           height: "200px",
//           borderRadius: "50%",
//           background: "linear-gradient(135deg, #FF6B6B20, #4ECDC420)",
//           filter: "blur(80px)",
//           zIndex: -1,
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20%",
//           left: "10%",
//           width: "150px",
//           height: "150px",
//           borderRadius: "50%",
//           background: "linear-gradient(135deg, #45B7D120, #96CEB420)",
//           filter: "blur(60px)",
//           zIndex: -1,
//         }}
//       />
//     </section>
//   );
// }

// // components/CatergorySection.jsx

// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CategorySection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const title = titleRef.current;
//     const cards = cardsRef.current;

//     // Set initial states
//     gsap.set(title, {
//       y: 50,
//       opacity: 0,
//     });

//     gsap.set(cards, {
//       y: 80,
//       opacity: 0,
//       scale: 0.9,
//     });

//     // Create timeline for section animations with overlay effect
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top bottom", // Start when section enters viewport
//         end: "top center",
//         toggleActions: "play none none none",
//       },
//     });

//     // Add slide-up animation for the entire section
//     gsap.set(section, {
//       y: 100,
//       opacity: 0,
//     });

//     // Animate the section sliding up over the hero
//     tl.to(section, {
//       y: 0,
//       opacity: 1,
//       duration: 1.2,
//       ease: "power3.out",
//     })
//       .to(
//         title,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.8"
//       )
//       .to(
//         cards,
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//         },
//         "-=0.5"
//       );

//     // Add hover animations for cards
//     cards.forEach((card) => {
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
//           gsap.to(card, {
//             scale: 1,
//             y: 0,
//             duration: 0.3,
//             ease: "power2.out",
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

//   const categories = [
//     {
//       id: 1,
//       title: "Traditional Kurtis",
//       description: "Elegant designs with traditional patterns and embroidery",
//       image: "/categories/traditional-kurtis.jpg",
//       color: "#FF6B6B",
//     },
//     {
//       id: 2,
//       title: "Modern Salwars",
//       description: "Contemporary cuts with comfort and style",
//       image: "/categories/modern-salwars.jpg",
//       color: "#4ECDC4",
//     },
//     {
//       id: 3,
//       title: "Festive Collection",
//       description: "Special occasion wear with luxurious fabrics",
//       image: "/categories/festive-collection.jpg",
//       color: "#45B7D1",
//     },
//     {
//       id: 4,
//       title: "Casual Wear",
//       description: "Comfortable everyday outfits for modern women",
//       image: "/categories/casual-wear.jpg",
//       color: "#96CEB4",
//     },
//     {
//       id: 5,
//       title: "Designer Pieces",
//       description: "Exclusive designer collections for the fashion-forward",
//       image: "/categories/designer-pieces.jpg",
//       color: "#FFEAA7",
//     },
//     {
//       id: 6,
//       title: "Seasonal Trends",
//       description: "Latest seasonal collections and trending styles",
//       image: "/categories/seasonal-trends.jpg",
//       color: "#DDA0DD",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         padding: "100px 40px",
//         backgroundColor: "#f8f9fa",
//         minHeight: "100vh",
//         position: "relative",
//         borderRadius: "40px 40px 0 0", // Rounded top corners for overlay effect
//         boxShadow: "0 -20px 40px rgba(0, 0, 0, 0.1)", // Shadow to separate from hero
//         zIndex: 10, // Ensure it overlays the hero
//       }}
//     >
//       {/* Section Title */}
//       <div
//         ref={titleRef}
//         style={{
//           textAlign: "center",
//           marginBottom: "80px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "48px",
//             fontWeight: "bold",
//             color: "#2c2c2c",
//             margin: "0 0 20px 0",
//             letterSpacing: "2px",
//           }}
//         >
//           OUR COLLECTIONS
//         </h2>
//         <p
//           style={{
//             fontSize: "18px",
//             color: "#666",
//             maxWidth: "600px",
//             margin: "0 auto",
//             lineHeight: "1.6",
//           }}
//         >
//           Discover our carefully curated collections that blend traditional
//           craftsmanship with contemporary fashion sensibilities
//         </p>
//       </div>

//       {/* Category Cards Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//           gap: "30px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {categories.map((category, index) => (
//           <div
//             key={category.id}
//             ref={(el) => (cardsRef.current[index] = el)}
//             style={{
//               backgroundColor: "#ffffff",
//               borderRadius: "20px",
//               overflow: "hidden",
//               boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               border: "1px solid #f0f0f0",
//             }}
//           >
//             {/* Card Image */}
//             <div
//               style={{
//                 height: "250px",
//                 background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Placeholder for actual image */}
//               <div
//                 style={{
//                   width: "80px",
//                   height: "80px",
//                   backgroundColor: category.color,
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "32px",
//                   color: "#ffffff",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {category.title.charAt(0)}
//               </div>

//               {/* Decorative pattern overlay */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: `radial-gradient(circle at 70% 30%, ${category.color}15 0%, transparent 50%)`,
//                 }}
//               />
//             </div>

//             {/* Card Content */}
//             <div
//               style={{
//                 padding: "30px",
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   color: "#2c2c2c",
//                   margin: "0 0 15px 0",
//                 }}
//               >
//                 {category.title}
//               </h3>
//               <p
//                 style={{
//                   fontSize: "16px",
//                   color: "#666",
//                   lineHeight: "1.5",
//                   margin: "0 0 20px 0",
//                 }}
//               >
//                 {category.description}
//               </p>

//               {/* CTA Button */}
//               <button
//                 style={{
//                   backgroundColor: category.color,
//                   color: "#ffffff",
//                   border: "none",
//                   padding: "12px 24px",
//                   borderRadius: "25px",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                   textTransform: "uppercase",
//                   letterSpacing: "1px",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "translateY(-2px)";
//                   e.target.style.boxShadow = `0 8px 20px ${category.color}40`;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   e.target.style.boxShadow = "none";
//                 }}
//               >
//                 Explore Collection
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Background decorative elements */}
//       <div
//         style={{
//           position: "absolute",
//           top: "10%",
//           right: "5%",
//           width: "200px",
//           height: "200px",
//           borderRadius: "50%",
//           background: "linear-gradient(135deg, #FF6B6B20, #4ECDC420)",
//           filter: "blur(80px)",
//           zIndex: -1,
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20%",
//           left: "10%",
//           width: "150px",
//           height: "150px",
//           borderRadius: "50%",
//           background: "linear-gradient(135deg, #45B7D120, #96CEB420)",
//           filter: "blur(60px)",
//           zIndex: -1,
//         }}
//       />
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
  const topCardRef = useRef(null);
  const bottomCardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const topCard = topCardRef.current;
    const bottomCards = bottomCardsRef.current;

    // Set initial states
    gsap.set(title, {
      y: 50,
      opacity: 0,
    });

    gsap.set(topCard, {
      y: 80,
      opacity: 0,
      scale: 0.9,
    });

    gsap.set(bottomCards, {
      y: 80,
      opacity: 0,
      scale: 0.9,
    });

    // Create timeline for section animations with overlay effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none none",
      },
    });

    // Add slide-up animation for the entire section
    gsap.set(section, {
      y: 100,
      opacity: 0,
    });

    // Animate the section sliding up over the hero
    tl.to(section, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(
        title,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        topCard,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        bottomCards,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.3"
      );

    // Add hover animations for cards
    const allCards = [topCard, ...bottomCards];
    allCards.forEach((card) => {
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
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
      image: "/categories/coord-sets.jpg",
      color: "#D4A574",
    },
    kurtis: {
      id: 2,
      title: "Kurtis",
      description: "Traditional and contemporary kurta designs",
      image: "/categories/kurtis.jpg",
      color: "#E8C547",
    },
    salwars: {
      id: 3,
      title: "Salwars",
      description: "Elegant salwar suits for every occasion",
      image: "/categories/salwars.jpg",
      color: "#B8860B",
    },
  };

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "100px 40px 120px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        position: "relative",
        borderRadius: "40px 40px 0 0",
        boxShadow: "0 -20px 40px rgba(0, 0, 0, 0.1)",
        // zIndex: 10,
        zIndex: 2,
      }}
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "400",
            color: "#2c2c2c",
            margin: "0 0 20px 0",
            letterSpacing: "1px",
            fontFamily: "serif",
          }}
        >
          Shop by Category
        </h2>
      </div>

      {/* Categories Layout Container */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* Top Card - Co-ord Sets */}
        <div
          ref={topCardRef}
          style={{
            width: "320px",
            height: "400px",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            position: "relative",
            border: "1px solid #f0f0f0",
          }}
        >
          {/* Card Image */}
          <div
            style={{
              height: "300px",
              background: `linear-gradient(135deg, ${categories.coordSets.color}20, ${categories.coordSets.color}40)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Placeholder for actual image */}
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: categories.coordSets.color,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              {categories.coordSets.title.charAt(0)}
            </div>

            {/* Decorative pattern overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 70% 30%, ${categories.coordSets.color}15 0%, transparent 50%)`,
              }}
            />
          </div>

          {/* Card Content */}
          <div
            style={{
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#2c2c2c",
                margin: "0 0 8px 0",
              }}
            >
              {categories.coordSets.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.4",
                margin: "0",
              }}
            >
              {categories.coordSets.description}
            </p>
          </div>
        </div>

        {/* Bottom Row - Kurtis and Salwars */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {/* Kurtis Card */}
          <div
            ref={(el) => (bottomCardsRef.current[0] = el)}
            style={{
              width: "280px",
              height: "350px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              position: "relative",
              border: "1px solid #f0f0f0",
            }}
          >
            {/* Card Image */}
            <div
              style={{
                height: "250px",
                background: `linear-gradient(135deg, ${categories.kurtis.color}20, ${categories.kurtis.color}40)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Placeholder for actual image */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: categories.kurtis.color,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                {categories.kurtis.title.charAt(0)}
              </div>

              {/* Decorative pattern overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at 70% 30%, ${categories.kurtis.color}15 0%, transparent 50%)`,
                }}
              />
            </div>

            {/* Card Content */}
            <div
              style={{
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#2c2c2c",
                  margin: "0 0 8px 0",
                }}
              >
                {categories.kurtis.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: "1.4",
                  margin: "0",
                }}
              >
                {categories.kurtis.description}
              </p>
            </div>
          </div>

          {/* Salwars Card */}
          <div
            ref={(el) => (bottomCardsRef.current[1] = el)}
            style={{
              width: "280px",
              height: "350px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              position: "relative",
              border: "1px solid #f0f0f0",
            }}
          >
            {/* Card Image */}
            <div
              style={{
                height: "250px",
                background: `linear-gradient(135deg, ${categories.salwars.color}20, ${categories.salwars.color}40)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Placeholder for actual image */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: categories.salwars.color,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                {categories.salwars.title.charAt(0)}
              </div>

              {/* Decorative pattern overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at 70% 30%, ${categories.salwars.color}15 0%, transparent 50%)`,
                }}
              />
            </div>

            {/* Card Content */}
            <div
              style={{
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#2c2c2c",
                  margin: "0 0 8px 0",
                }}
              >
                {categories.salwars.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: "1.4",
                  margin: "0",
                }}
              >
                {categories.salwars.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #D4A57420, #E8C54720)",
          filter: "blur(60px)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "15%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #B8860B20, #D4A57420)",
          filter: "blur(50px)",
          zIndex: -1,
        }}
      />
    </section>
  );
}
