import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ZionAi | Empowering Engagement with AI for Seamless Customer Connections",
  description: "This is About Page for ZionAi, ZionAi, powered by Zion Reborn Limited, is committed to transforming how businesses interact with their customers. By leveraging cutting-edge AI technology, we empower businesses to create engaging, personalized experiences that drive customer satisfaction and sales. Our platform integrates seamlessly with popular social media channels like WhatsApp, ensuring you can reach your audience wherever they are. Imagine having an intelligent assistant that never sleeps, always ready to respond to customer inquiries, provide recommendations, and handle routine tasks. This is what ZionAi offers with its AI-powered customer engagement tools. These tools not only enhance efficiency but also free up your team to focus on more complex and strategic activities. Furthermore, ZionAi’s solutions are highly customizable, allowing you to tailor every aspect to align perfectly with your business goals and branding. Whether you're a small business looking to scale or a large enterprise aiming to optimize customer interactions, ZionAi provides the flexibility and functionality you need. With ZionAi, you can ensure that every customer interaction is meaningful and effective, fostering stronger connections and driving higher conversions.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="ZionAi, powered by Zion Reborn Limited, is committed to transforming how businesses interact with their customers. By leveraging cutting-edge AI technology, we empower businesses to create engaging, personalized experiences that drive customer satisfaction and sales. Our platform integrates seamlessly with popular social media channels like WhatsApp, ensuring you can reach your audience wherever they are.

        Imagine having an intelligent assistant that never sleeps, always ready to respond to customer inquiries, provide recommendations, and handle routine tasks. This is what ZionAi offers with its AI-powered customer engagement tools. These tools not only enhance efficiency but also free up your team to focus on more complex and strategic activities.
        
        Furthermore, ZionAi&lsquo;s solutions are highly customizable, allowing you to tailor every aspect to align perfectly with your business goals and branding. Whether you're a small business looking to scale or a large enterprise aiming to optimize customer interactions, ZionAi provides the flexibility and functionality you need.
        
        With ZionAi, you can ensure that every customer interaction is meaningful and effective, fostering stronger connections and driving higher conversions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
