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
        </div>
    );
}