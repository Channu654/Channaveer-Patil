import React from 'react'
import { R1Div, R7div, R7inner1, R7inner2, MainDiv, R6div, R1inner, R2div, R2inner1, R2inner2, R2inner3, R2inner4, H3, P, R3div, R3inner1, R3inner2, H3tag, H3Tag, Ptag, R4div, R4inner1, R5div, R5inner1, R5inner2 } from './Home.styled'
import "./Home.css"
import PlayStore from './PlayStore'
// import Footer from './Footer'

const Home = () => {
  return (
      <>
               <div>
                    <img src=""  alt="" />
                    </div>
      <MainDiv>
              
    
              <R1Div>

              <R1inner>
              <div>
                  <img style={{paddingTop: "20px"}} height="100px"  src="data:image/png;base64,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" alt="" />
                  </div>

                  <div style={{width: "200px"}}>
                  <h3>TRAVEL AS YOU ARE</h3>
                  <p style={{color: "gray"}}>Find LGBTQ-welcoming hotels using our new search filter.</p>
                  </div>
              </R1inner>

              <R1inner>
                  <div>
                  {/* <img style={{paddingTop: "20px", paddingLeft: "20px"}} height="70px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEUAgAD///8AfQAAdgDo8OhWm1YAegAwizBhoGEAfABmq2bb7du707sAdwD3/PcyjjLv9+/p9em92b3D3cOOvo5Uo1Th8OEUiBRcp1xWoFZurm7B18Gpzql/uH9kpWSFs4VHlEfS59IpjikAhwCJvIkTghNno2dyr3ITiBPL48tAmUCaw5qtza3U5NSlzKVGmUY+mj6YHHx6AAAES0lEQVR4nO3dbVOyQBiG4QVyay1eMtM0eSrTLHvz//+6x6aClRtYNHbrZq7zYwKzx4BowrDC63ritwdgPQj5ByH/IOQfhPyDkH8Q8g9C/kHIPwj5ByH/IOQfhPyDkH82hdHF8DKOj+uL48vhRWRxFPaEo5WQ0m+SlGI1sjYOW8IoDZRongpSW/vRkvB0LPfwfSTHp3aGYkf4JPw9gWK7xpOVsVgR3h0A3BL9OxuDsSFMHg8BbonjxMJobAj7+5xj9FTfwmgsCJ+CA4FCBBbeihaEa/0Y9ZWpnaXX7Q+nfeEo1A47P77q13cV+9pBHbb/yd++8Dn/JFSTJp9xp5OcKJ9bH0/7wvfssGt84shPTf576+NpX7jMdkjjk38yztZZtj6e1oXn+TE6bbzSND9Oz9seUOvC0/w99dJ4pZf8vdv6qaZ9YfY2lGeNVzrLhH7r378h3DsIS4PwJ0G4dxCWBuFPgnDvui8ciUx43Xila/ffS5PXWTr9d6LX+/pf6Oaktl42Vv+2fkmt2/ynjF79kjdf49td7N80nb1W/K9WJowu+kspldq9uhAcfb7aM1yMEDmxeU1Xkr3PQRwFu39XSsplv/QKT4nwbS7Lfg7MhIf9GNpOfiYseVHJ+ayB8G4uywl/X7h9Wc7vTMI0qAJwEG4XCBa1wmgSVqzJRShEOImqhdF7zTUxLkIh36MqYTSpu+jHRijkpEqY1l7V5CMUMi0XDuov2zISCjkoE0bj+qFzEvrzqEQ4NFx55yQUckiFkWnjrIRCRET4Zrp5gpcwfCPC2DRwXkJ/UxSeG3c7L6EIzgvCF+MdPsyE2XWhb2FqvH+CmVClBeHGOG5mwuymh2/hvXHjzITiviA0b5ybUBSE5lsJuQklhCQInQShFoQ0CJ0EoRaENAidBKEWhDQInQShFoQ0CJ0EoRaENAidBKEWhDQInQShFoQ0CJ0EoRaENAidBKEWhDQInQShFoQ0CJ0EoRaENAidBKEWhDQInQShFoQ0CJ0EoRaENAidBKEWhDQInQShFoQ0CJ0EoRaENAidBKEWhDQInQShFoQ0CJ0EoRaENAidBKEWhDQInQShFoQ0CJ0EoRaENAidBKEWhDTuQvPGuQmLzxHu/rOgu/c8701BuOr8M9lnnX+u/qhzcyOMCkJv3rH5LeZeUfhsOkx5CeUzESbd2ociIUJv0am5gvL55XJhYtg4K+FjUiL0ZtXz5n3ESRi+eGVCb9qZedemXrkwWtd9seEjVDvTA+pCL4lriGyEKt6ZVXZH6CXr6gOVizBc18xhuW3Ffh7StCAqCr3BuGI3shDK8aAIIkIvGvphGeLvC/1QDOmcx1S4Nc42SqridMqZkLziMJUJyStSbWYN53T+KBksLtfxsd7yS/hw/Js9fAmXO3+N15eLwR7zcncrCPkHIf8g5B+E/IOQfxDyD0L+Qcg/CPkHIf8g5B+E/IOQf90X/gf8o5Ns2XdRiQAAAABJRU5ErkJggg==" alt="" /> */}
                  <img style={{paddingTop: "20px"}} height="100px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArcjUx6fC5yKGYXZNIpqxU1zQUrK1f-rTcA&usqp=CAU" alt="" />
                  </div>

                  <div style={{width: "200px"}}>
                  <h3>BOOK MORE, GET MORE</h3>
                  <p style={{color: "gray"}}>Good things come to those who go.</p>
                  </div>
              </R1inner>

              <R1inner>
                  <div>
                  <img style={{paddingTop: "20px"}} height="100px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Bpv4F-kFRIU_QqTcXJY_zwRDXOGcog3rdg&usqp=CAU" alt="" />
                  </div>

                  <div style={{width: "200px"}}>
                  <h3>GET INSIDER PRICES</h3>
                  <p style={{color: "gray"}}>Become a member and get access to instant savings of 10% or more on select hotels.</p>
                  </div>
             </R1inner>
          </R1Div>

          {/* ********************************************* */}
              {/* <div style={{marginTop: "12px"}}> */}
                 <h2 style={{textAlign: "left", marginBottom: "0px"}}>Featured offers</h2>
              {/* </div> */}
          <R2div>

              <R2inner1>
                  <H3 >Last Minute Deals</H3>
                  <P>Getaway Today</P>
              </R2inner1>
                
              <R2inner2>
                  <H3 >All-inclusive resorts</H3>
                  <P>Enjoy sun and fun</P>
              </R2inner2>
                  
              <R2inner3>
                  <H3 >Insider Prices</H3>
                  <P>Members get rewarded</P>
              </R2inner3>

              <R2inner4>
                  <H3 >Jet and reset</H3>
                  <P>Fly somewhere beachy and warm</P>
              </R2inner4>
          </R2div>
{/* ********************************************************* */}
           <R3div>
               <R3inner1>
                  <H3tag >Explore local getaways</H3tag>
                  <Ptag>Get out and explore, and stay close to home with a road trip.</Ptag>
               </R3inner1>
               <R3inner2></R3inner2>
           </R3div>

{/* ********************************************************* */}
           <h2 style={{textAlign: "left", marginBottom: "0px"}}>Here to help keep you on the move</h2>
           <R4div>
               <R4inner1 >
                   <h3 >Change or cancel a trip</h3>
                   <p style={{position: "relative", bottom: "8px", fontSize: "14px", color: "grey"}}>Make updates to your itinerary or cancel a booking</p>
               </R4inner1>
               <R4inner1>
               <h3 >Use a credit or coupon</h3>
                   <p style={{position: "relative", bottom: "8px", fontSize: "14px", color: "grey"}}>Apply a coupon code or credit to a new trip</p>
               </R4inner1>
               <R4inner1>
               <h3 >Track your refund</h3>
                   <p style={{position: "relative", bottom: "8px", fontSize: "14px", color: "grey"}}>Check the status of a refund currently in progress</p>
               </R4inner1>
           </R4div>

{/* ********************************************************* */}

               <h2 style={{textAlign: "left", marginBottom: "0px"}}>Traveling tips</h2>
           <R5div>
               <R5inner1>     
                  <H3tag >National Parks</H3tag>
                  <Ptag>There's plenty to keep you busy.</Ptag>
               </R5inner1>
               <R5inner2>
                  <H3tag >The perfect road trip</H3tag>
                  <Ptag>Find an adventure for every season.</Ptag>
               </R5inner2>
           </R5div>
{/* ********************************************************* */}

           <R6div>
               <img width="100%" height="100px" src="https://tpc.googlesyndication.com/simgad/10056509806482740393?" alt="" />
           </R6div>

{/* ********************************************************* */}

        <PlayStore />
{/* **************************FOOTER******************************* */}
        {/* <Footer /> */}
      </MainDiv> 
      </>
    
  )
}

export default Home


