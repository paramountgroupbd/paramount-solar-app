import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import NationalFootprint from "@/app/components/NationalFootprint";

export const metadata: Metadata = {
    title: "National Asset Footprint",
    description: "See Paramount Solar's strategic solar power plant locations across Bangladesh, including operational and pipeline projects in Lalmonirhat, Pabna, Moulvibazar and Habiganj.",
    openGraph: {
        title: "National Asset Footprint | Paramount Solar Ltd",
        description: "Strategic solar power plant locations across Bangladesh.",
    },
};

export default function NationalFootprintPage() {
    return (
        <>
        <Header/>
        <div className="p-2 sm:p-4 mx-auto sm:m-4">
            <NationalFootprint/>
        </div>
        <Footer/>
        </>
    )
}
