import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function App() {
  const [target, setTarget] = useState(0);
  const random = gsap.utils.random(-360,360,100)

  var tl = gsap.timeline();
  var tl2 = gsap.timeline()

  useGSAP(() => {
    tl.from("nav , nav div h2, nav button", {
      y: -50,
      duration: 1,
      opacity:0,
      delay: 1,
      ease: "none",
      stagger: 0.2,
    });
    
    tl.from(".hero1 h1, .hero1 p, .hero1 button",{
      x:-300,
      duration:1,
      opacity:0,
      rotate:"-40deg",
      delay:0.2,
      ease: "none",
      stagger:0.3
    })

    tl.from(".hero2 img",{
      x:300,
      duration:1,
      rotate:"40deg",
      opacity:0,
      delay:0.2,
      ease: "none"
    })

    gsap.to(".hero2 img", {
      y:-400, 
        scrollTrigger: {
          trigger: ".hero3",
          scroller: "body",
          markers: true,
          start: "top 0%",  
          end: "top -100%",
          scrub: 2,         
          pin:true
        }
      });

      tl2.from(".hero3 .img1",{
        x:-300,
         rotate:"360deg",
          duration:1,
          delay:0.5,
          opacity:0,
      })
      tl2.to(".hero3 .img2",{
        x:900,
          duration:1,
          delay:0.5,
          opacity:0,
          ease:"none",
      })

      tl2.from(".hero3 .img3",{
          opacity:0,
      })

      gsap.from(".hero3 .img2",{
        x:10,
          duration:1,
          delay:1,
          opacity:0
      })
      
  });

  useGSAP(()=>{
    gsap.to(".hero2 img",{
      rotate:target,
      duration:1,
    })
  },[target])

  return (
    <main className="overflow-hidden">
     <div className="text-white bg-yellow-500">
          <nav className="flex justify-between items-center px-10 py-2">
            <h1 className="text-2xl font-bold font-serif">Deadpool</h1>
            <div className="flex gap-6 font-serif cursor-pointer">
              <h2>Work</h2>
              <h2>About Us</h2>
              <h2>Use Cases</h2>
              <h2>Pricing</h2>
              <h2>Blog</h2>
            </div>
            <button className="py-1 px-4 font-serif rounded-xl bg-gradient-to-tl from-orange-500 to-orange-700 hover:bg-gradient-to-tl hover:from-orange-700 hover:to-orange-500">
              Know More
            </button>
          </nav>
        </div>

      <section className="h-[92vh] w-full px-20 py-10 bg-white flex justify-evenly">
       <div className="hero1 w-1/2 p-8 flex flex-col text-center border-y border-yellow-500">
       <h1 className="text-4xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
       <p className="py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, tenetur saepe debitis vel suscipit rerum aperiam cumque eius. Magnam optio totam laudantium alias eaque tempora, corporis laborum non esse, rerum delectus veritatis! Earum totam aspernatur facere accusantium perferendis nam hic cumque ducimus deleniti sequi, quis atque aliquid quod doloribus autem doloremque. Corporis fuga et cumque earum, excepturi voluptatum, aspernatur labore vel iure impedit dignissimos doloremque, sit laboriosam nihil sunt.</p>

       <button onClick={()=>{setTarget(random)}} className="w-full py-2 bg-gradient-to-tl from-orange-500 to-orange-700 text-white font-bold rounded-3xl hover:bg-gradient-to-tl hover:from-orange-700 hover:to-orange-500">See the Magic happen</button>
       </div>

       <div className="hero2 w-1/2 flex justify-center items-center border-y border-yellow-500">
       <img className="object-cover h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9IMgEpnUoRwg8XvbhFdWq1wpsZGiG7Ymew&s" alt="" />
       </div>
      </section>

      <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_At7Hl4LWuUnkNQnlgyCC3ck2hZyjLSEci_q_3768KT2VogQH5wtfuu2W5sxTopporQ&usqp=CAU" alt="" />

      <section className="h-[100vh] bg-white px-20 py-10 flex justify-evenly ">
      <div className="hero3 w-1/2 p-8 flex flex-col text-center">

      <img className="img1 absolute h-40 top-[1050px] z-10" src="https://png.pngtree.com/png-clipart/20240316/original/pngtree-pistolet-gun-png-png-image_14598921.png" alt="" />
      <img className="img2 absolute h-8 top-[1077px] z-0" src="https://pngimg.com/d/bullets_PNG35516.png" alt="" />

      <img className="img3 rotate-90 absolute h-24 top-[1050px] right-[17%] z-10" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlM19waG90b19vZl9jcmFja2VkX2dsYXNzX2lzb2xhdGVkX29uX3doaXRlX2JhY2tncl84YzI0N2MxYi00OTUzLTRiN2UtYTQzZi1lNmFhMWQyMGI0YTZfMS5wbmc.png" alt="" />
      
       </div>
       <div className="hero4 w-1/2 flex justify-center items-center">
      <img className="h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9aM8QhGggNzdpdIrD78Perg-1ley0gpjx5-wKQke791O1Q-H-T5awWlWMs_QawvpXfo&usqp=CAU" alt="" />
       </div>
      </section>
    </main>
  );
}

export default App;
