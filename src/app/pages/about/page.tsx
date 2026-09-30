import type { Metadata } from "next";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
    title: "About Us",
    description: "Paramount Solar Ltd is the renewable-energy arm of Paramount Group, developing, owning and operating utility-scale, grid-tied solar power plants across Bangladesh.",
    openGraph: {
        title: "About Paramount Solar Ltd",
        description: "The renewable-energy arm of Paramount Group, developing utility-scale grid-tied solar power plants across Bangladesh.",
    },
};

export default function AboutPage() {
    return (
        <>
        <Header/>
        <div className="p-2 sm:p-4 mx-auto sm:m-4">
            <About/>
        </div>
        <Footer/>
        </>
    )
}
