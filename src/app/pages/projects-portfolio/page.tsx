import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProjectsPortfolio from "@/app/components/ProjectsPortfolio";

export const metadata: Metadata = {
    title: "Projects Portfolio",
    description: "Browse Paramount Solar's full portfolio of solar power projects, including operational capacity and projects under development across Bangladesh.",
    openGraph: {
        title: "Projects Portfolio | Paramount Solar Ltd",
        description: "Paramount Solar's full portfolio of operational and pipeline solar power projects.",
    },
};

export default function ProjectsPortfolioPage() {
    return (
        <>
        <Header/>
        <div className="p-2 sm:p-4 mx-auto sm:m-4">
            <ProjectsPortfolio/>
        </div>
        <Footer/>
        </>
    )
}
