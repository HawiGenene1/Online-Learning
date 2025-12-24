import { RiStarFill } from "@remixicon/react"
import Button from "./Button"

export default function Hero(){
    return(
        <section>
          <div className="container">
            {/* Content */}
            <div className=""></div>
            {/* image */}
            <div className="">
                {/* badge */}
                <div className="">
                  {/*stars*/}
                    <div>
                        {[1,2,3,4,5].map(i=>(
                            <RiStarFill key={i} size={12} />
                        ))}
                    </div>
                    <p className="">" A JOY TO USE"</p>
                </div>
               <h1 className="">professional and Lifelong learning comes here</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam eius quos ipsam dignissimos fuga sapiente, aspernatur ullam libero neque repellendus, explicabo animi magnam iste, sit quibusdam quam hic ex?
               </p>

               {/* Btns */}
               <div className="">
                  <Button label={"Get started"} primary/>
                   <Button label={"Explore Courses"}/>
               </div>
            </div>
            {/* Image */}
            <div>
              <div className="">
                <img 
                src="/images/hero-img.png" 
                alt="hero image" 
                width={440}
                height={592} />
                 </div>  
            </div>
            </div>  
        </section>
    )
}