import type { Metadata } from "next";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Paramount Solar Ltd for solar project inquiries, partnerships and support. Call +880 1799 989544 or email info@paramountsolar.net.",
    openGraph: {
        title: "Contact Paramount Solar Ltd",
        description: "Reach Paramount Solar Ltd for solar project inquiries, partnerships and support.",
    },
};

export default function ContactPage() {
    return (
        <>
        <Header/>
        <div className="p-2 sm:p-4 mx-auto sm:m-4">
        <Contact/>
        </div>
        <Footer/>
        </>
    )
}
