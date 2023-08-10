import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero(){
    return(
        <div className="min-h-screen relative">
            <div className="absolute top-0 left-0">
                <Image src={'/Ornament 69.svg'}
                        width={490}
                        height={428}
                        loading="eager"
                        className="object-contain"
                        alt="background-check-pattern"
                />
            <div className="w-[242px] h-[242px] left-[14px] top-[1050px] absolute bg-teal-500 rounded-full blur-[500px]" />
            <div className="w-[341px] h-[341px] left-0 top-[341px] absolute bg-violet-600 rounded-full blur-[500px]" />
            <div className="w-[300px] h-[300px] left-[1140px] top-[300px] absolute bg-fuchsia-700 rounded-full blur-[500px]" />
            <div className="w-[225px] h-[225px] left-[1215px] top-[1042px] absolute bg-amber-300 rounded-full blur-[500px]" />
            </div>
            <Navbar />

            <div className="relative max-w-7xl h-[80vh] flex mx-auto">
                <div className="w-full lg:w-2/12 text-white flex items-end justify-center order-3 lg:order-1">
                    <div className="relative">
                        <img src="https://via.placeholder.com/241x307" alt="placeholder-image" className="rounded-[30px]" />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 text-white flex flex-col items-center justify-center order-1 lg:order-2">
                    <div className="relative">
                        <div className="text-white">
                            <h1 className="text-7xl font-bold text-center"><span className="text-sm font-semibold leading-9">World Class</span> Digital</h1>
                        </div>
                        <div className="text-white">
                            <h1 className="text-7xl font-bold text-left">Agency</h1>
                        </div>
                    </div>
                    <div className="mt-4 px-4">
                        <div className="text-white w-2/3 mx-auto">
                            <p>Full support for world's leading B2B brands for creating exceptional layout</p>
                            <button className="px-6 py-4 bg-amber-300 text-slate-900 rounded-[30px] mt-4">Our Services</button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-4/12 text-white flex items-center justify-center order-2 lg:order-3">
                    <div className="relative">
                        <img src="https://via.placeholder.com/466x475" alt="hero-image" className="rounded-[30px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}