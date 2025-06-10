// "use client";
// import { useEffect } from "react";
// import HeroSection from "@/components/HeroSection";
// import CategorySection from "@/components/CategorySection";

// export default function Home() {
//   useEffect(() => {
//     // Reset scroll position on page load
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         backgroundColor: "#ffffff",
//         margin: 0,
//         padding: 0,
//         boxSizing: "border-box",
//         height: "300vh", // Total height to accommodate hero animations + categories
//       }}
//     >
//       {/* Hero Section - Fixed Background */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           zIndex: 1, // Lower z-index so categories can overlay
//         }}
//       >
//         <HeroSection />
//       </div>

//       {/* Spacer for hero animations */}
//       <div
//         style={{
//           height: "200vh", // Give hero section space for its animations
//           position: "relative",
//         }}
//       />

//       {/* Categories Section - Overlays hero */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10, // Higher z-index to overlay hero
//           backgroundColor: "#f8f9fa", // Ensure it has background
//         }}
//       >
//         <CategorySection />

//         {/* Add your other page sections here */}
//         {/* <TestimonialsSection /> */}
//         {/* <ContactSection /> */}
//       </div>
//     </div>
//   );
// }

// app/main.jsx

// "use client";
// import { useEffect } from "react";
// import HeroSection from "@/components/HeroSection";
// import CategorySection from "@/components/CategorySection";

// export default function Home() {
//   useEffect(() => {
//     // Force scroll to top on page load/refresh
//     const resetScroll = () => {
//       window.scrollTo(0, 0);
//       document.documentElement.scrollTop = 0;
//       document.body.scrollTop = 0;
//     };

//     // Reset immediately
//     resetScroll();

//     // Also reset after a short delay to ensure it works across all browsers
//     const timeoutId = setTimeout(resetScroll, 50);

//     // Additional safety reset
//     const handleBeforeUnload = () => {
//       window.scrollTo(0, 0);
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       clearTimeout(timeoutId);
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         backgroundColor: "#ffffff",
//         margin: 0,
//         padding: 0,
//         boxSizing: "border-box",
//         height: "300vh", // Total height to accommodate hero animations + categories
//       }}
//     >
//       {/* Hero Section - Fixed Background */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           zIndex: 1, // Lower z-index so categories can overlay
//         }}
//       >
//         <HeroSection />
//       </div>

//       {/* Spacer for hero animations */}
//       <div
//         style={{
//           height: "200vh", // Give hero section space for its animations
//           position: "relative",
//         }}
//       />

//       {/* Categories Section - Overlays hero */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10, // Higher z-index to overlay hero
//           backgroundColor: "#f8f9fa", // Ensure it has background
//         }}
//       >
//         <CategorySection />

//         {/* Add your other page sections here */}
//         {/* <TestimonialsSection /> */}
//         {/* <ContactSection /> */}
//       </div>
//     </div>
//   );
// }

// app/page.jsx

// "use client";
// import { useEffect } from "react";
// import HeroSection from "@/components/HeroSection";
// import CategorySection from "@/components/CategorySection";
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   useEffect(() => {
//     // Force scroll to top on page load/refresh
//     const resetScroll = () => {
//       window.scrollTo(0, 0);
//       document.documentElement.scrollTop = 0;
//       document.body.scrollTop = 0;
//     };

//     // Reset immediately
//     resetScroll();

//     // Also reset after a short delay to ensure it works across all browsers
//     const timeoutId = setTimeout(resetScroll, 50);

//     // Additional safety reset
//     const handleBeforeUnload = () => {
//       window.scrollTo(0, 0);
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       clearTimeout(timeoutId);
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         backgroundColor: "#ffffff",
//         margin: 0,
//         padding: 0,
//         boxSizing: "border-box",
//         height: "300vh", // Total height to accommodate hero animations + categories
//       }}
//     >
//       {/* Standalone Navbar - Always on top */}
//       <Navbar />

//       {/* Hero Section - Fixed Background */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           zIndex: 1, // Lower z-index so categories can overlay
//         }}
//       >
//         <HeroSection />
//       </div>

//       {/* Spacer for hero animations */}
//       <div
//         style={{
//           height: "200vh", // Give hero section space for its animations
//           position: "relative",
//         }}
//       />

//       {/* Categories Section - Overlays hero */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 10, // Higher z-index to overlay hero
//           backgroundColor: "#f8f9fa", // Ensure it has background
//         }}
//       >
//         <CategorySection />

//         {/* Add your other page sections here */}
//         {/* <TestimonialsSection /> */}
//         {/* <ContactSection /> */}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Navbar from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on page load/refresh
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Reset immediately
    resetScroll();

    // Also reset after a short delay to ensure it works across all browsers
    const timeoutId = setTimeout(resetScroll, 50);

    // Additional safety reset
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#ffffff",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        height: "300vh", // Total height to accommodate hero animations + categories
      }}
    >
      {/* Navbar Component - Positioned and styled by its own logic */}
      <Navbar />

      {/* Hero Section - Fixed Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1, // Lower z-index so categories can overlay
        }}
      >
        <HeroSection />
      </div>

      {/* Spacer for hero animations */}
      <div
        style={{
          height: "200vh", // Give hero section space for its animations
          position: "relative",
        }}
      />

      {/* Categories Section - Overlays hero */}
      <div
        style={{
          position: "relative",
          zIndex: 10, // Higher z-index to overlay hero
          backgroundColor: "#f8f9fa", // Ensure it has background
        }}
      >
        <CategorySection />

        {/* Add your other page sections here */}
        {/* <TestimonialsSection /> */}
        {/* <ContactSection /> */}
      </div>
    </div>
  );
}
