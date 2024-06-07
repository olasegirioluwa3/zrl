import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | ZionAi, From Hello to Sales, Empowering Engagement with AI.",
  description: "This is Contact Page for ZionAi, If you have any questions or need assistance, please feel free to reach out to us using the form below. Our team will respond promptly to your inquiry.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="If you have any questions or need assistance, please feel free to reach out to us using the form below. Our team will respond promptly to your inquiry."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
