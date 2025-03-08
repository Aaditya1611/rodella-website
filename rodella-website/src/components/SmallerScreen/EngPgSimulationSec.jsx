import HorizontalScrollCarousel from "../HorizontalScrollCarousel";
import Navbar from "../../components/Navbar";

const EngPageSimulationSection = () => {

    return (
        <div className="bg-black pt-2">
            <Navbar />
            <section className="lg:pt-30 py-10 ">
                    <h1 className="text-3xl text-center text-white underline lg:text-5xl">Simulation</h1>
                    <p className="mt-3 px-2 text-center text-lg text-neutral-400 lg:text-xl">From static testing to CFD, to model analysis, we do it for ourselves, We will do it for you</p>
                    <div className="mt-10">
                        <HorizontalScrollCarousel />
                    </div>
                </section>
        </div>
    )
}

export default EngPageSimulationSection;