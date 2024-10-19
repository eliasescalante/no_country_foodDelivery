import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";




import SliderOne from "../../components/sliders/sliderOne";

import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import './home.css'
import Image1 from '../../assets/primerPlato.jpg'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'
import Image4 from '../../assets/Image4.png'
import Image5 from '../../assets/Image5.png'



import CardPromocional from "../../components/cardPromocional/cardPromocional";


import jsonData from '../../services/prueba.json'
import Ubicacion from '../../components/ubicacion.jsx'

const home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(jsonData.restaurants);
  }, []);


  //console.log(data)



  /************ End ubnicacion ********** */





  return (
    <div className="w-full  px-10 flex flex-col gap-20 pb-20">
      <div className="flex h-dvh  aling-center">

        <div className="w-2/4 h-full flex flex-col justify-center gap-8">
          
          
          <div className="flex flex-wrap h-48 flex-col justify-center w-full content-center">
            <div className="w-2/3 flex flex-col gap-4">
              <div>
                <div className="flex items-center">
                  <div className="flex text-textTerceary text-4xl justify-items-start -ml-2">
                    <IoLocationSharp />
                  </div>
                  <div className="text-xl font-boldLigth h-full items-center flex">
                      <Ubicacion />
                  </div>
                </div>
                <div className="font-bold">
                  <div className="text-3xl">Find restaurants in my area</div>
                </div>
              </div>

              <div className="">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <kbd className="kbd kbd-sm">⌘</kbd>
                  <kbd className="kbd kbd-sm">K</kbd>
                </label>
              </div>
            </div>
          </div>

          <div>
            <SliderOne />
          </div>


        </div>



        <div className="w-2/4 h-full pt-10">
          <div className="parent w-full h-full ">
          <ParallaxProvider>
              
              <div className="div4 rounded-full">
              <Parallax speed={-10}>
                <img className="rounded-full" src={Image3}/>
              </Parallax>
              </div>
              
              <div className="div5">
              <Parallax translateY={[-80, 50]} speed={-20}>
                <img className="rounded-full" src={Image4}/>
              </Parallax>
              </div>
              <div className="div6">
                <Parallax translateY={[-20, 1]} speed={-20}>
                 <img className="rounded-full" src={Image5}/>
                 </Parallax>
              </div>
          
          </ParallaxProvider>

          </div>
        </div>


      </div>


      <div className="flex w-full">
          <div className="w-1/2 flex justify-center"> <CardPromocional/> </div>
          <div className="w-1/2"><SliderOne /></div>
      </div>


      <div className="flex w-full">
          <div className="flex flex-col gap-10 ">
            <div className="text-2xl font-bold">Restaurantes Populares ⭐⭐⭐</div>
            <div className="flex gap-10">
                {data?.map((x)=>(
                  <div key={x.id} className="w-20 h-20">
                    <div className="flex flex-col  items-center gap-1">
                      <div className="w-20 h-20 rounded-full"> <img src={x.logo} className="w-full h-full rounded-full" /> </div>
                      <div className="w-full flex justify-center whitespace-nowrap text-ellipsis"> {x.name} </div>
                    </div>
                    
                  </div>
                ))}
            </div>
          </div>
      </div>

      
    </div>
  );
};

export default home;

/*
<div class="bg-cover bg-center w-80 h-80 rounded-full" 
            style={{ backgroundImage: `url('${Image2}')` }}>
          </div>
          <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-start-2 row-span-2"
             style={{ backgroundImage: `url('${Image2}')` }}
            >

            </div>
             <div class="row-end-3 row-span-2 ..."
             style={{ backgroundImage: `url('${Image2}')` }}
             >02</div>
            <div class="row-start-1 row-end-4 ..."
              style={{ backgroundImage: `url('${Image2}')` }}
            >

            </div>
          </div>
          </div>
          */