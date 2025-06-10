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

// components/CatergorySection.jsx

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

    // Set initial states
    gsap.set(title, {
      y: 50,
      opacity: 0,
    });

    gsap.set(cards, {
      y: 80,
      opacity: 0,
      scale: 0.9,
    });

    // Create timeline for section animations with overlay effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom", // Start when section enters viewport
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
        cards,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5"
      );

    // Add hover animations for cards
    cards.forEach((card) => {
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

  const categories = [
    {
      id: 1,
      title: "Traditional Kurtis",
      description: "Elegant designs with traditional patterns and embroidery",
      image: "/categories/traditional-kurtis.jpg",
      color: "#FF6B6B",
    },
    {
      id: 2,
      title: "Modern Salwars",
      description: "Contemporary cuts with comfort and style",
      image: "/categories/modern-salwars.jpg",
      color: "#4ECDC4",
    },
    {
      id: 3,
      title: "Festive Collection",
      description: "Special occasion wear with luxurious fabrics",
      image: "/categories/festive-collection.jpg",
      color: "#45B7D1",
    },
    {
      id: 4,
      title: "Casual Wear",
      description: "Comfortable everyday outfits for modern women",
      image: "/categories/casual-wear.jpg",
      color: "#96CEB4",
    },
    {
      id: 5,
      title: "Designer Pieces",
      description: "Exclusive designer collections for the fashion-forward",
      image: "/categories/designer-pieces.jpg",
      color: "#FFEAA7",
    },
    {
      id: 6,
      title: "Seasonal Trends",
      description: "Latest seasonal collections and trending styles",
      image: "/categories/seasonal-trends.jpg",
      color: "#DDA0DD",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "100px 40px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        position: "relative",
        borderRadius: "40px 40px 0 0", // Rounded top corners for overlay effect
        boxShadow: "0 -20px 40px rgba(0, 0, 0, 0.1)", // Shadow to separate from hero
        zIndex: 10, // Ensure it overlays the hero
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
            fontSize: "48px",
            fontWeight: "bold",
            color: "#2c2c2c",
            margin: "0 0 20px 0",
            letterSpacing: "2px",
          }}
        >
          OUR COLLECTIONS
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Discover our carefully curated collections that blend traditional
          craftsmanship with contemporary fashion sensibilities
        </p>
      </div>

      {/* Category Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={category.id}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              border: "1px solid #f0f0f0",
            }}
          >
            {/* Card Image */}
            <div
              style={{
                height: "250px",
                background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
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
                  backgroundColor: category.color,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                {category.title.charAt(0)}
              </div>

              {/* Decorative pattern overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at 70% 30%, ${category.color}15 0%, transparent 50%)`,
                }}
              />
            </div>

            {/* Card Content */}
            <div
              style={{
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#2c2c2c",
                  margin: "0 0 15px 0",
                }}
              >
                {category.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: "1.5",
                  margin: "0 0 20px 0",
                }}
              >
                {category.description}
              </p>

              {/* CTA Button */}
              <button
                style={{
                  backgroundColor: category.color,
                  color: "#ffffff",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = `0 8px 20px ${category.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Explore Collection
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FF6B6B20, #4ECDC420)",
          filter: "blur(80px)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #45B7D120, #96CEB420)",
          filter: "blur(60px)",
          zIndex: -1,
        }}
      />
    </section>
  );
}
