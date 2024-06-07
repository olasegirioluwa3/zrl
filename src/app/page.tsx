import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | ZionAi, From Hello to Sales, Empowering Engagement with AI.",
  description: "This is Home Page for ZionAi, ZionAi empowers businesses to create seamless customer connections from the first hello to closing a sale. By leveraging advanced AI technology, we enhance engagement, streamline communication, and drive conversions. Our solutions integrate effortlessly with platforms like WhatsApp, ensuring you can connect with your audience effectively and efficiently. ZionAi is powered by Zion Reborn Limited an independent Ai, robotics and education company"
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
  