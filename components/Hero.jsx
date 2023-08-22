import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero(){
    return (
      <div className="min-h-screen relative">
        <div className="absolute top-0 left-0">
          <Image
            src={"/Ornament 69.svg"}
            width={490}
            height={428}
            loading="eager"
            className="object-contain"
            alt="background-check-pattern"
          />     
        </div>
        <div className="absolute top-[30%] left-[5%]">
        <Image
            src={"/Star 1.svg"}
            width={54}
            height={54}
            loading="eager"
            className="object-contain"
            alt="star"
          />     
        </div>
        <div className="absolute top-[15%] left-[70%]">
        <Image
            src={"/Star 3.svg"}
            width={54}
            height={54}
            loading="eager"
            className="object-contain"
            alt="star"
          />     
        </div>
          <div className="w-[242px] h-[242px] left-[14px] top-[1050px] absolute bg-teal-500 rounded-full blur-[500px]" />
          <div className="w-[341px] h-[341px] left-0 top-[341px] absolute bg-violet-600 rounded-full blur-[500px]" />
          <div className="w-[300px] h-[300px] left-[1140px] top-[300px] absolute bg-fuchsia-700 rounded-full blur-[500px]" />
          <div className="w-[225px] h-[225px] left-[1215px] top-[1042px] absolute bg-amber-300 rounded-full blur-[500px]" />
        <Navbar />

        <div className="relative max-w-7xl h-[80vh] flex flex-col lg:flex-row mx-auto">
          <div className="absolute right-0">
            <img
              src="/hero_vector.svg"
              alt="hero-vector"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-2/12 text-white flex items-end justify-start lg:justify-center order-3 lg:order-1">
            <div className="relative">
              <img
                src="https://via.placeholder.com/241x307"
                alt="placeholder-image"
                className="rounded-[30px] object-cover"
              />
              <div className="absolute right-[-35%] bottom-[-20%]">
                 <img src="hero_image_elipse.svg" alt="elipse vector" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 text-white flex flex-col items-center order-1 lg:order-2 xl:mt-4">
            <div className="relative">
              <div className="text-white">
                <h1 className="text-7xl lg:text-[100px] xl:text-[150px] font-bold text-center">
                  <span className="text-sm font-semibold leading-9 relative origin-top-left rotate-[-25.16deg] inline-block py-1 px-2 border-2 border-white rounded-lg">
                    World Class 
                  </span>
                       {' '}   Digital
                </h1>
              </div>
              <div className="text-white">
                <h1 className="text-7xl lg:text-[100px] xl:text-[150px] font-bold text-left">
                  Agency
                </h1>
              </div>
            </div>
            <div className="mt-4 px-4">
              <div className="text-white w-full lg:w-2/3 mx-auto">
                <p>
                  Full support for world's leading DTC and B2B brands for creating
                  exceptional custom solutions.
                </p>
                <button className="px-6 py-4 bg-amber-300 text-slate-900 rounded-[30px] mt-4 font-semibold">
                  Our Services{" "}
                  <span className="inline-block text-center align-middle">
                    <img
                      src="/btn-up-arrow.svg"
                      alt="button-arrow-up"
                      className="w-5 h-5"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 text-white flex items-center justify-center order-2 lg:order-3 my-10 lg:my-0">
            <div className="relative">
              <img
                src="https://via.placeholder.com/466x475"
                alt="hero-image"
                className="rounded-[30px]"
              />
              <div className="w-[150px] h-[150px] right-2 top-3/4 absolute bg-white bg-opacity-50 rounded-full backdrop-blur-[50px]">
                <div class="w-[121.97px] h-[118.24px] left-[14.17px] top-[15.83px] absolute">
                  <div class="w-2.5 h-[18.33px] left-[39.64px] top-[118.23px] absolute origin-top-left rotate-[-154.91deg] text-black text-lg font-normal">
                    d
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[24.03px] top-[109.62px] absolute origin-top-left rotate-[-138.52deg] text-black text-lg font-normal">
                    a
                  </div>
                  <div class="w-[4.17px] h-[18.33px] left-[12.63px] top-[98.11px] absolute origin-top-left rotate-[-125.62deg] text-black text-lg font-normal">
                    l
                  </div>
                  <div class="w-[4.17px] h-[18.33px] left-[6.95px] top-[89.22px] absolute origin-top-left rotate-[-115.69deg] text-black text-lg font-normal">
                    i
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[2.55px] top-[78.88px] absolute origin-top-left rotate-[-102.78deg] text-black text-lg font-normal">
                    o
                  </div>
                  <div class="w-[5px] h-[18.33px] left-[-0px] top-[62.77px] absolute origin-top-left rotate-[-89.37deg] text-black text-lg font-normal">
                    {" "}
                  </div>
                  <div class="w-[7.50px] h-[18.33px] left-[0.75px] top-[50.85px] absolute origin-top-left rotate-[-76.96deg] text-amber-300 text-lg font-normal">
                    *
                  </div>
                  <div class="w-[5px] h-[18.33px] left-[4.86px] top-[37.01px] absolute origin-top-left rotate-[-64.55deg] text-black text-lg font-normal">
                    {" "}
                  </div>
                  <div class="w-[10.83px] h-[18.33px] left-[10.70px] top-[26.06px] absolute origin-top-left rotate-[-50.15deg] text-black text-lg font-normal">
                    D
                  </div>
                  <div class="w-[4.17px] h-[18.33px] left-[23.24px] top-[13.04px] absolute origin-top-left rotate-[-36.24deg] text-black text-lg font-normal">
                    i
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[32.60px] top-[6.82px] absolute origin-top-left rotate-[-23.34deg] text-black text-lg font-normal">
                    g
                  </div>
                  <div class="w-[4.17px] h-[18.33px] left-[47.87px] top-[1.41px] absolute origin-top-left rotate-[-10.43deg] text-black text-lg font-normal">
                    i
                  </div>
                  <div class="w-[5.83px] h-[18.33px] left-[58.55px] top-0 absolute text-black text-lg font-normal">
                    t
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[71.65px] top-[0.80px] absolute origin-top-left rotate-[14.40deg] text-black text-lg font-normal">
                    a
                  </div>
                  <div class="w-[4.17px] h-[18.33px] left-[87.04px] top-[5.86px] absolute origin-top-left rotate-[27.31deg] text-black text-lg font-normal">
                    l
                  </div>
                  <div class="w-[5px] h-[18.33px] left-[96.24px] top-[11.23px] absolute origin-top-left rotate-[37.73deg] text-black text-lg font-normal">
                    {" "}
                  </div>
                  <div class="w-[7.50px] h-[18.33px] left-[105.30px] top-[19.02px] absolute origin-top-left rotate-[50.15deg] text-amber-300 text-lg font-normal">
                    *
                  </div>
                  <div class="w-[5px] h-[18.33px] left-[113.85px] top-[30.65px] absolute origin-top-left rotate-[62.56deg] text-black text-lg font-normal">
                    {" "}
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[118.93px] top-[41.72px] absolute origin-top-left rotate-[75.96deg] text-black text-lg font-normal">
                    a
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[121.97px] top-[58.33px] absolute origin-top-left rotate-[91.85deg] text-black text-lg font-normal">
                    g
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[120.36px] top-[75.14px] absolute origin-top-left rotate-[107.74deg] text-black text-lg font-normal">
                    e
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[114.20px] top-[90.86px] absolute origin-top-left rotate-[123.63deg] text-black text-lg font-normal">
                    n
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[103.97px] top-[104.30px] absolute origin-top-left rotate-[139.52deg] text-black text-lg font-normal">
                    c
                  </div>
                  <div class="w-[9.17px] h-[18.33px] left-[90.46px] top-[114.42px] absolute origin-top-left rotate-[155.41deg] text-black text-lg font-normal">
                    y
                  </div>
                </div>
                <div class="w-[26.67px] h-[26.67px] left-[61.67px] top-[61.67px] absolute">
                    <img src="/play_button.svg" alt="play button" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}