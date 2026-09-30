import type { Metadata } from "next";
import BusinessVerticals from "@/app/components/BusinessVerticals";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProjectsPortfolio from "@/app/components/ProjectsPortfolio";

export const metadata: Metadata = {
    title: "Business Verticals",
    description: "Explore Paramount Solar's solar IPP development, EPC services, rooftop solar solutions and portfolio of operational and pipeline solar power projects across Bangladesh.",
    openGraph: {
        title: "Business Verticals | Paramount Solar Ltd",
        description: "Solar IPP development, EPC services and rooftop solar solutions from Paramount Solar Ltd.",
    },
};

export default function BusinessPage() {
    return (
        <>
        <Header/>
        <div className="p-2 sm:p-4 mx-auto sm:m-4">
            <BusinessVerticals/>
            <ProjectsPortfolio/>
        </div>
        <Footer/>
        </>
    )
}
