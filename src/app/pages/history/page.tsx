import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import History from "@/app/components/History";

export const metadata: Metadata = {
    title: "Our Journey",
    description: "Discover Paramount Solar's journey from its first 30MW solar plant in 2022 to a growing portfolio of operational and pipeline solar power projects across Bangladesh.",
    openGraph: {
        title: "Paramount Solar Journey",
        description: "From a 30MW solar plant in 2022 to a growing renewable energy portfolio across Bangladesh.",
    },
};

export default function HistoryPage() {
    return (
        <>
        <Header/>
        <div className="p-2 sm:p-4 mx-auto sm:m-4">
        <History/>
        </div>
        <Footer/>
        </>
    )
}
