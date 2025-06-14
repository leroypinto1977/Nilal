// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function DisplaySection() {
//   const sectionRef = useRef(null);
//   const textRef = useRef(null);
//   const cardsContainerRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const textContent = textRef.current;
//     const cardsContainer = cardsContainerRef.current;
//     const cards = cardRefs.current;

//     // Initial state setup
//     gsap.set(textContent, { opacity: 0, y: 50 });
//     gsap.set(cards, { opacity: 0, x: 100 });

//     // Create a timeline for the section entry animations
//     const entryTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top 60%",
//         end: "top 30%",
//         toggleActions: "play none none none",
//       },
//     });

//     entryTl
//       .to(textContent, {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         delay: 1,
//         ease: "power3.out",
//       })
//       .to(
//         cards,
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1.5,
//           stagger: 0.5,
//           ease: "power3.out",
//         },
//         "-=0.6"
//       );

//     // Create a pin-based horizontal scroll for the cards container
//     ScrollTrigger.create({
//       trigger: section,
//       pin: true,
//       start: "top top",
//       end: "+=2000", // Adjust this value based on how long you want the horizontal scroll to last
//       pinSpacing: true,
//     });

//     // Create the horizontal scroll effect
//     gsap.to(cardsContainer, {
//       x: () =>
//         -(
//           cardsContainer.scrollWidth -
//           window.innerWidth +
//           window.innerWidth / 2
//         ),
//       ease: "none",
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=2000", // Match with the pin end
//         scrub: 1,
//         invalidateOnRefresh: true,
//       },
//     });

//     // Clean up
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       entryTl.kill();
//     };
//   }, []);

//   const products = [
//     {
//       id: 1,
//       title: "Stylish Pink Salwar",
//       price: "Rs. 1500",
//       image: "/home/categories/nilal1.png", // Update with correct path
//     },
//     {
//       id: 2,
//       title: "Elegant Blue Kurti",
//       price: "Rs. 1200",
//       image: "/home/categories/nilal1.png", // Update with correct path
//     },
//     {
//       id: 3,
//       title: "Chic Green Kurti",
//       price: "Rs. 1100",
//       image: "/home/categories/nilal1.png", // Update with correct path
//     },
//     {
//       id: 4,
//       title: "Designer Floral Set",
//       price: "Rs. 1800",
//       image: "/home/categories/nilal1.png", // Update with correct path
//     },
//     {
//       id: 5,
//       title: "Designer Floral Set",
//       price: "Rs. 1800",
//       image: "/home/categories/nilal1.png", // Update with correct path
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="display-section"
//       style={{
//         height: "100vh",
//         width: "100vw",
//         backgroundColor: "#21121F", // Dark purple background from the image
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         {/* Text content (left side) - with blur effect */}
//         <div
//           ref={textRef}
//           style={{
//             width: "30%",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",

//             alignItems: "flex-start",
//             padding: "0 40px 0 80px",
//             position: "absolute",
//             backgroundColor: "rgba(33, 18, 31, 0.5)", // Slightly transparent background
//             backdropFilter: "blur(12px)", // Add blur effect
//             WebkitBackdropFilter: "blur(8px)", // For Safari support
//             left: 0,
//             top: 0,
//             color: "#ffffff",
//             zIndex: 10,
//             boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "72px",
//               fontWeight: "300",
//               lineHeight: "1",
//               marginBottom: "20px",
//               fontFamily: "serif",
//             }}
//           >
//             Best Seller
//             <br />
//             Products
//           </h2>
//           <p
//             style={{
//               fontSize: "18px",
//               lineHeight: "1.6",
//               maxWidth: "400px",
//               marginBottom: "40px",
//               color: "#e0e0e0",
//             }}
//           >
//             Hand-embroidered in luxuriously breathable fabric, this bestseller
//             merges heritage artistry with a modern, figure-flattering cut.
//           </p>
//           <button
//             style={{
//               backgroundColor: "#6E2A6E", // Purple button
//               color: "white",
//               border: "none",
//               padding: "12px 30px",
//               borderRadius: "30px",
//               fontSize: "16px",
//               cursor: "pointer",
//               fontWeight: "500",
//             }}
//           >
//             See More
//           </button>
//         </div>

//         {/* Product cards container (right side) - this will scroll horizontally */}
//         <div
//           ref={cardsContainerRef}
//           style={{
//             position: "absolute",
//             right: 0,
//             top: 0,
//             height: "100%",
//             width: "65%", // Width of cards area
//             display: "flex",
//             gap: "50px", // Space between cards
//             padding: "0 10px 0 0", // Padding on right side
//             alignItems: "center", // Center vertically
//             willChange: "transform", // Optimization for animations
//           }}
//         >
//           {/* Product Cards */}
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               ref={(el) => (cardRefs.current[index] = el)}
//               style={{
//                 flex: "0 0 auto",
//                 width: "350px", // Fixed card width
//                 height: "550px", // Fixed card height
//                 borderRadius: "15px",
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 backgroundColor: "#29152A", // Slightly lighter than background
//                 boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
//                 marginLeft: index === 0 ? "50%" : "0", // First card starts at middle
//               }}
//             >
//               <div
//                 style={{
//                   height: "85%",
//                   width: "100%",
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     display: "block",
//                   }}
//                 />
//               </div>
//               <div
//                 style={{
//                   padding: "15px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <h3
//                   style={{
//                     fontSize: "16px",
//                     margin: "0 0 5px 0",
//                     color: "#ffffff",
//                     fontWeight: "500",
//                   }}
//                 >
//                   {product.title}
//                 </h3>
//                 <p
//                   style={{
//                     fontSize: "14px",
//                     color: "#cccccc",
//                     margin: 0,
//                   }}
//                 >
//                   {product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Add a subtle gradient overlay on the left to help text stand out */}
//       <div
//         style={{
//           position: "absolute",
//           left: 0,
//           top: 0,
//           width: "50%",
//           height: "100%",
//           background:
//             "linear-gradient(to right, #21121F 10%, rgba(33, 18, 31, 0) 100%)",
//           pointerEvents: "none", // Makes it non-interactive
//           zIndex: 5,
//         }}
//       />
//     </section>
//   );
// }

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DisplaySection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const textContent = textRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardRefs.current;

    // Initial state setup
    gsap.set(textContent, { opacity: 0, y: 50 });
    gsap.set(cards, { opacity: 0, x: 100 });

    // Create a timeline for the section entry animations
    const entryTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "top 30%",
        toggleActions: "play none none none",
      },
    });

    entryTl
      .to(textContent, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
      })
      .to(
        cards,
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          stagger: 0.5,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // Wait for the next frame to ensure all DOM elements are properly sized
    requestAnimationFrame(() => {
      // Get actual container and card widths after rendering
      const containerWidth = cardsContainer.offsetWidth;
      const actualCardWidths = Array.from(cards).map(
        (card) => card.offsetWidth
      );
      const actualGapWidth = 50; // Gap between cards

      // Calculate total content width including all cards and gaps
      let totalContentWidth = 0;
      actualCardWidths.forEach((width) => {
        totalContentWidth += width + actualGapWidth;
      });
      totalContentWidth -= actualGapWidth; // Remove last gap

      // Account for the first card starting at 50% offset
      const firstCardOffset = cards[0].offsetLeft;

      // Calculate the visible width (container's width)
      const visibleWidth = containerWidth;

      // Calculate how far we need to scroll to see the last card
      // We need to scroll enough so the last card is fully visible at the right edge
      const scrollDistance =
        totalContentWidth - visibleWidth + firstCardOffset + 50; // Add padding

      // Set a higher pin duration for smoother scrolling
      const pinDuration = Math.max(1200, scrollDistance * 2);

      // Create a pin-based horizontal scroll for the cards container
      ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: "top top",
        end: `+=${pinDuration}`,
        pinSpacing: true,
      });

      // Create the horizontal scroll effect with precise end position
      gsap.to(cardsContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${pinDuration}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      entryTl.kill();
    };
  }, []);

  const products = [
    {
      id: 1,
      title: "Stylish Pink Salwar",
      price: "Rs. 1500",
      image: "/home/categories/nilal1.png", // Update with correct path
    },
    {
      id: 2,
      title: "Elegant Blue Kurti",
      price: "Rs. 1200",
      image: "/home/categories/nilal1.png", // Update with correct path
    },
    {
      id: 3,
      title: "Chic Green Kurti",
      price: "Rs. 1100",
      image: "/home/categories/nilal1.png", // Update with correct path
    },
    {
      id: 4,
      title: "Designer Floral Set",
      price: "Rs. 1800",
      image: "/home/categories/nilal1.png", // Update with correct path
    },
    {
      id: 5,
      title: "Designer Floral Set",
      price: "Rs. 1800",
      image: "/home/categories/nilal1.png", // Update with correct path
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="display-section"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#21121F", // Dark purple background from the image
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Text content (left side) - with blur effect */}
        <div
          ref={textRef}
          style={{
            width: "30%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 40px 0 80px",
            position: "absolute",
            backgroundColor: "rgba(33, 18, 31, 0.5)", // Slightly transparent background
            backdropFilter: "blur(12px)", // Add blur effect
            WebkitBackdropFilter: "blur(8px)", // For Safari support
            left: 0,
            top: 0,
            color: "#ffffff",
            zIndex: 10,
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            style={{
              fontSize: "72px",
              fontWeight: "300",
              lineHeight: "1",
              marginBottom: "20px",
              fontFamily: "serif",
            }}
          >
            Best Seller
            <br />
            Products
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "400px",
              marginBottom: "40px",
              color: "#e0e0e0",
            }}
          >
            Hand-embroidered in luxuriously breathable fabric, this bestseller
            merges heritage artistry with a modern, figure-flattering cut.
          </p>
          <button
            style={{
              backgroundColor: "#6E2A6E", // Purple button
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "30px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            See More
          </button>
        </div>

        {/* Product cards container (right side) - this will scroll horizontally */}
        <div
          ref={cardsContainerRef}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "70%", // Increased width of cards area for more visibility
            display: "flex",
            gap: "50px", // Space between cards
            padding: "0 80px 0 0", // Increased right padding to ensure last card is visible
            alignItems: "center", // Center vertically
            willChange: "transform", // Optimization for animations
          }}
        >
          {/* Product Cards */}
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                flex: "0 0 auto",
                width: "350px", // Fixed card width
                height: "550px", // Fixed card height
                borderRadius: "15px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#29152A", // Slightly lighter than background
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                marginLeft: index === 0 ? "50%" : "0", // First card starts at middle
              }}
            >
              <div
                style={{
                  height: "85%",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    margin: "0 0 5px 0",
                    color: "#ffffff",
                    fontWeight: "500",
                  }}
                >
                  {product.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#cccccc",
                    margin: 0,
                  }}
                >
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add a subtle gradient overlay on the left to help text stand out */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(to right, #21121F 10%, rgba(33, 18, 31, 0) 100%)",
          pointerEvents: "none", // Makes it non-interactive
          zIndex: 5,
        }}
      />
    </section>
  );
}
