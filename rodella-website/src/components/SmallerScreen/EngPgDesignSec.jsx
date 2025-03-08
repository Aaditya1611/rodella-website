import Navbar from "../../components/Navbar";
import DesignImg1 from "./../../assets/images/services.jpg";
import DesignImg2 from "./../../assets/images/fixed-wing1.png";

const EngPageDesignSection = () => {

    return (
        <div className="bg-black pt-2">
            <Navbar />
         <section className="lg:pt-30 py-10">
                            <h1 className="text-3xl text-center text-white underline lg:text-5xl">Design</h1>
                            <p className="mt-3 px-2 text-center text-lg text-neutral-400 lg:text-xl">Write to us so that we can provide the custom design as per your requirements.</p>
        
                            <div className="mt-10 px-3 lg:px-30">
                                <h2 className="my-3 lg:text-3xl text-xl text-neutral-200">3D Modeling</h2>
                                <div className="flex flex-col lg:flex-row">
                                    <p className="mr-0 text-lg text-neutral-400 lg:mr-5 lg:text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat esse pariatur porro,
                                        quidem necessitatibus veniam at aspernatur!
                                        Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                                        Asperiores ut eius soluta.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <img src={DesignImg1} className="mt-4 lg:mt-0 lg:h-100 lg:max-w-1/2 rounded-lg" alt="Design Image 1" />
                                </div>
                            </div>
        
                            <div className="mt-10 px-3 lg:px-30">
                                <h2 className="lg:text-3xl text-xl text-neutral-200 my-5">Aerodynamic Analysis</h2>
                                <div className="flex lg:flex-row flex-col">
                                    <img src={DesignImg2} className="lg:h-100 lg:max-w-1/2 mb-4 rounded-lg" alt="Design Image 2"></img>
                                    <p className="lg:text-xl text-neutral-400 lg:ml-5 mr-0 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                                        Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                                        Asperiores ut eius soluta.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
        
                            <div className="mt-10 px-3 lg:px-30">
                                <h2 className="lg:text-3xl text-xl text-neutral-200 my-3">Material Selection</h2>
                                <div className="flex flex-col lg:flex-row">
                                    <p className="lg:text-xl text-neutral-400 lg:mr-5 text-lg mr-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Id placeat esse pariatur porro, quidem necessitatibus veniam at aspernatur!
                                        Eaque rem non iusto et id! Facere molestiae laudantium dolorum.
                                        Asperiores ut eius soluta.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <img src={DesignImg1} className="lg:h-100 mt-4 lg:mt-0 lg:max-w-1/2 rounded-lg" alt="Design Image 3"></img>
                                </div>
                            </div>
                        </section>
                        </div>
    )
}

export default EngPageDesignSection;