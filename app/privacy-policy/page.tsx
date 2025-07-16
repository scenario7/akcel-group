import React from "react";
import NavBar from "@/components/navbar";
import HeroTemplate from "@/components/herotemplate";
import CustomFooter from "@/components/customfooter";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HeroTemplate
        image="https://images.unsplash.com/photo-1581092334652-e1f9d4c16111?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
        title="Privacy Policy"
        subtitle=""
      />

      <section className="flex flex-col items-center bg-white py-16 px-10 text-black">
        <div className="bg-gradient-to-b from-transparent to-[#da291c] w-[2px] h-20 mb-5" />

        <article className={`${openSans.className} space-y-8 w-full `}>
          <p className="text-sm text-gray-600">
            <strong>Effective Date:</strong> 15 July 2025 <br />
            <strong>Last Updated:</strong> 15 July 2025
          </p>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            1. Introduction
          </h2>
          <p>
            AKCEL Group (“we”, “us”, “our”) respects your privacy and is committed
            to protecting your personal data. This Privacy Policy outlines how we
            collect, use, store, and protect your personal data when you use our
            website and services.
          </p>
          <p>
            We comply with the applicable data protection regulations, including
            the UK General Data Protection Regulation (UK GDPR), the UAE Federal
            Decree-Law No. 45 of 2021 on the Protection of Personal Data, and other
            relevant legislation.
          </p>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            2. Information We Collect
          </h2>
          <p>We may collect and process the following categories of personal data:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Identity Data: name, company, job title</li>
            <li>Contact Data: email address, phone number</li>
            <li>Technical Data: IP address, browser type, time zone setting, location, operating system</li>
            <li>Usage Data: how you use our website, interaction history</li>
            <li>Marketing Preferences: your communication preferences</li>
          </ul>
          <p className="mt-2">
            We collect this information when:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>You fill out a contact or subscription form</li>
            <li>You browse our website</li>
            <li>You communicate with us via email or phone</li>
          </ul>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            3. Legal Basis for Processing
          </h2>
          <p>We process your personal data under the following legal bases:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Consent: when you subscribe to marketing communications</li>
            <li>Contract: when processing is necessary for fulfilling agreements</li>
            <li>Legal obligation: where required by applicable law</li>
            <li>Legitimate interest: for improving our services and ensuring security</li>
          </ul>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            4. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Respond to your enquiries</li>
            <li>Provide our services</li>
            <li>Improve website performance</li>
            <li>Send relevant updates and marketing (where consent is provided)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            5. Data Sharing and International Transfers
          </h2>
          <p>
            We do not sell your personal data. We may share it with:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Our internal departments</li>
            <li>Trusted third-party service providers (e.g., web analytics, hosting)</li>
            <li>Legal authorities where required</li>
          </ul>
          <p>
            Where data is transferred outside the UK or UAE, we ensure adequate safeguards
            such as Standard Contractual Clauses or data processing agreements are in place.
          </p>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            6. Data Retention
          </h2>
          <p>
            We retain your data only as long as necessary:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>For the purposes it was collected</li>
            <li>To comply with legal obligations</li>
            <li>To resolve disputes and enforce agreements</li>
          </ul>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            7. Your Rights
          </h2>
          <p>Depending on your jurisdiction (UK or UAE), you have the right to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Access your data</li>
            <li>Rectify inaccurate data</li>
            <li>Erase your data</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the relevant supervisory authority</li>
          </ul>
          <p className="mt-2">
            To exercise your rights, please contact us at:{" "}
            <span className="font-medium text-[#da291c]">privacy@akcelgroup.com</span>
          </p>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            8. Data Security
          </h2>
          <p>
            We use appropriate technical and organizational measures to protect your personal data
            from unauthorized access, alteration, disclosure, or loss.
          </p>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            9. Children’s Privacy
          </h2>
          <p>
            Our services are not intended for children under the age of 13. We do not knowingly
            collect personal data from children.
          </p>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            10. Changes to This Policy
          </h2>
          <p>
            We may update this policy occasionally. Any changes will be posted on this page with
            a revised “Last Updated” date.
          </p>

          <h2 className={`${montserrat.className} text-xl font-semibold`}>
            11. Contact Us
          </h2>
          <p>
            If you have any questions or concerns regarding this policy or how we handle your
            personal data, contact us at:
          </p>
          <p className="font-medium text-[#da291c]">📧 privacy@akcelgroup.com</p>
        </article>
      </section>

      <CustomFooter />
    </div>
  );
};

export default PrivacyPolicy;
