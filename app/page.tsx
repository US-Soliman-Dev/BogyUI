"use client"
import "@/styles/home.css";
import { SvgWavy4 } from "@/components/svg/shapes";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import How from "@/components/How";
import InfiniteScroll from "@/components/InfiniteScroll";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";

export default function Home() {

  // useEffect(() => {

  //   const el = (el: string | any) => document.querySelector(el);
  //   const positionEl = el('.bx-article').offsetTop + window.innerHeight - 400;

  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY >= positionEl) {
  //       el('.bx-article').classList.add('move')
  //     } else {
  //       el('.bx-article').classList.remove('move')
  //     }
  //   })

  // }, [])


  return (
    <>
      <div className="out-layer container">
        <div className="wavey">
          <SvgWavy4 color="var(--secondary)" />
        </div>

        <Hero />
        <Intro />



        <Features />
        <How />
        <InfiniteScroll />
        <Pricing />

        <Testimonials />


        {/* <div className="wavey">
        <SvgWavy1 />
        </div> */}





        {/* 
          <div className="bx-article ">
            <article>
              <div className="fade-in bx bx-design">
                <h2>
                  Design
                  <div className="wave">
                    <p className="line">aaaaaaaaaa</p>
                  </div>
                </h2>
                <p>
                  I offer professional high-converting custom website design and
                  development for businesses, organizations, and agencies.
                </p>
                <a href="#">
                  <span className="icon-plus"></span>
                </a>
              </div>

              <div className="fade-in bx bx-Development">
                <h2>
                  Development
                  <div className="wave">
                    <p className="line">aaaaaaaaaaaaaaaaaaa</p>
                  </div>
                </h2>
                <p>
                  I usually use WordPress CMS to develop the client site but
                  sometime I also do full hand coded website.
                </p>
                <a href="#">
                  <span className="icon-plus"></span>
                </a>
              </div>
              <div className="fade-in bx bx-Maintenance">
                <h2>
                  Maintenance
                  <div className="wave">
                    <p className="line">aaaaaaaaaaaaaaaaaaa</p>
                  </div>
                </h2>
                <p>
                  For businesses today, website maintenance a top priority. I also
                  offer website maintenance service to help my client website’s
                  bugs, security, and more.
                </p>
                <a href="#">
                  <span className="icon-plus"></span>
                </a>
              </div> *
            </article>
          </div> 
          
          */}


      </div>

    </>
  );
}
