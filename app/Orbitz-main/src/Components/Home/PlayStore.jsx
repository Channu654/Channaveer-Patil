import React from 'react';
import {  R7div, R7inner1, R7inner2 } from './Home.styled'
import "./Home.css";

const PlayStore = () => {
  return (
    <div>
        <R7div>
             <R7inner1 >
                 <img width="360px" height="340px" src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg" alt="" />
             </R7inner1>
             <R7inner2>
                 <h2>Rewards are waiting for you in the Orbitz app</h2>
                 <ul type="square">
                     <li>Earn 4% back when you book your hotel in app, vs. 3% on site</li>
                     <li>Get flight status and gate number notifications</li>
                     <li>Have questions about your stay? Message your hotel right in the app</li>
                 </ul>

                 <h3>Text yourself a download link</h3>

            {/* <form action="" onSubmit="https://play.google.com/store/apps/details?id=com.orbitz"> */}
                 <select name="" id="" required>
                     <option value="Turkey">Turkey +90</option>
                     <option value="Sweden">Sweden +46</option>
                     <option value="Nepal">Nepal +997</option>
                     <option value="India">India +91</option>
                     <option value="Peru">Peru +51</option>
                     <option value="thailand">thailand +66</option>
                     <option value="Poland">Poland +41</option>
                     <option value="Yemen">Yemen +967</option>
                     <option value="Iran">Iran +98</option>
                     <option value="Iraq">Iraq +97</option>
                 </select>

                 <input type="number" required placeholder='Phone number' />

                 <a style={{backgroundColor: "#c83259"}} href="https://play.google.com/store/apps/details?id=com.orbitz">Get the app</a>
                 {/* </form> */}

                 <p style={{color: "gray", fontSize: "14px", paddingTop: "22px"}}>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</p>
             </R7inner2>
         </R7div>
    </div>
  )
}

export default PlayStore