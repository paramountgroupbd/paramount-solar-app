import type { Metadata } from "next";
import CompanyBoard from "@/app/components/CompanyBoard";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
    title: "Our Team",
    description: "Meet the leadership and management team behind Paramount Solar Ltd, driving Bangladesh's transition to clean, reliable and decarbonised energy.",
    openGraph: {
        title: "Our Team | Paramount Solar Ltd",
        description: "The leadership and management team behind Paramount Solar Ltd.",
    },
};

export default function TeamsPage() {
    return (
        <>
        <Header/>
        <div className="p-2 sm:p-4 mx-auto sm:m-4">
        <CompanyBoard/>
        </div>
        <Footer/>
        </>
    )
}
