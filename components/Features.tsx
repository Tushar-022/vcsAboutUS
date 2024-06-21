import Image from "next/image";
import React from "react";
import FasterQueryResolution from "../public/assets/FasterQueryResolution.png";
import EnhancedCustomerSatisfaction from "../public/assets/EnhancedCustomerSatisfaction.png";
import EmotionTracking from "../public/assets/EmotionTracking.png";
import MultilingualSupport from "../public/assets/Multilingual.png";
// import SafeRoute from "../public/assets/safe-route-portrait.png";
// import SakhaChatbot from "../public/assets/sakha-chatbot-portrait.png";
// import Sos from "../public/assets/sos-portrait.png";
// import FakeCaller from "../public/assets/fake-caller-portrait.png";

type Props = {};

// const Features = (props: Props) => {
//   return (
//     <div className="w-full overflow-x-auto">
//       <section className="mx-auto max-w-5xl space-y-20 px-4 py-20">
//         <h2 className="text-4xl font-bold tracking-tight md:mx-auto md:max-w-3xl md:text-center md:text-5xl">
//           Main Features
//         </h2>
//         <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
//           <Image
//             width={1000}
//             height={100}
//             src={FasterQueryResolution.src}
//             alt="Faster query"
//             className="h-120 w-full bg-slate-50 object-cover"
//           />
//           <div>
//             <h3 className="mb-2 text-xl font-semibold">
//               Faster Query Resolution 
//             </h3>
//             <p className="text-slate-700">
//               Our System Provides rapid query resolution through voice recognition,eliminating the need for customers
//               to type their questions
//             </p>
//             <ul className="my-6 space-y-3 text-slate-700">
//               <li>
//                 <svg
//                   width="24"
//                   height="24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2 inline-block size-4 text-emerald-500"
//                 >
//                   <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//                 </svg>
//                 <span>Utilizes Google Maps API for accurate navigation.</span>
//               </li>
//               <li>
//                 <svg
//                   width="24"
//                   height="24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2 inline-block size-4 text-emerald-500"
//                 >
//                   <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//                 </svg>
//                 <span>Incorporates Machine Learning algorithm to identify the safest routes.</span>
//               </li>
//               <li>
//                 <svg
//                   width="24"
//                   height="24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="mr-2 inline-block size-4 text-emerald-500"
//                 >
//                   <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//                 </svg>
//                 <span>Enhances navigation security for peace of mind during travel.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
//   <Image
//     width={1000}
//     height={1000}
//     src={EnhancedCustomerSatisfaction.src}
//     alt="Customers"
//     className="h-120 w-full bg-slate-50 object-cover md:order-last"
//   />
//   <div>
//     <h3 className="mb-2 text-xl font-semibold">Enhanced Customer Satifaction</h3>
//     <p className="text-slate-700">
//       Faster,more accurate responses and personalized interactions contribute to higher 
//       satisfaction and loyalty.
//     </p>
//     <ul className="my-6 space-y-3 text-slate-700">
//       <li>
//         <svg
//           width="24"
//           height="24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           xmlns="http://www.w3.org/2000/svg"
//           className="mr-2 inline-block size-4 text-emerald-500"
//         >
//           <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//         </svg>
//         <span>Utilizes Gemini AI for intelligent interactions.</span>
//       </li>
//       <li>
//         <svg
//           width="24"
//           height="24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           xmlns="http://www.w3.org/2000/svg"
//           className="mr-2 inline-block size-4 text-emerald-500"
//         >
//           <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//         </svg>
//         <span>Provides personalized safety tips and support during emergencies.</span>
//       </li>
//       <li>
//         <svg
//           width="24"
//           height="24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           xmlns="http://www.w3.org/2000/svg"
//           className="mr-2 inline-block size-4 text-emerald-500"
//         >
//           <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//         </svg>
//         <span>Enhances user confidence and empowerment through real-time assistance.</span>
//       </li>
//     </ul>
//   </div>
//       </div>
//       <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
//   <Image
//     width={1000}
//     height={1000}
//     src={EmotionTracking.src}
//     alt="SOS Emergency"
//     className="h-120 w-full bg-slate-50 object-cover"
//   />
//   <div>
//     <h3 className="mb-2 text-xl font-semibold">Emotion Tracking and Feedback</h3>
//     <p className="text-slate-700">
//       Stress and frustation are significantly reduced by
//       tailoring responses according to customer sentiment
//       and providing efficient support.
//     </p>
//     <ul className="my-6 space-y-3 text-slate-700">
//       <li>
//         <svg
//           width="24"
//           height="24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           xmlns="http://www.w3.org/2000/svg"
//           className="mr-2 inline-block size-4 text-emerald-500"
//         >
//           <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//         </svg>
//         <span>Enables quick transmission of location to trusted contacts in emergencies.</span>
//       </li>
//       <li>
//         <svg
//           width="24"
//           height="24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           xmlns="http://www.w3.org/2000/svg"
//           className="mr-2 inline-block size-4 text-emerald-500"
//         >
//           <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//         </svg>
//         <span>Prioritizes user safety by facilitating immediate assistance.</span>
//       </li>
//       <li>
//         <svg
//           width="24"
//           height="24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           xmlns="http://www.w3.org/2000/svg"
//           className="mr-2 inline-block size-4 text-emerald-500"
//         >
//           <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
//         </svg>
//         <span>Offers peace of mind and security for women navigating various situations.</span>
//       </li>
//     </ul>
//   </div>
// </div>



//       </section>
//     </div>
//   );
// };

// export default Features;


// import Image from 'next/image';
// import FasterQueryResolution from 'path/to/FasterQueryResolutionImage';
// import EnhancedCustomerSatisfaction from 'path/to/EnhancedCustomerSatisfactionImage';
// import EmotionTracking from 'path/to/EmotionTrackingImage';
// import PrivacyCompliance from 'path/to/PrivacyComplianceImage';
// import ModellImage from 'path/to/modell.jpg';

const Features = (props: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      <section className="mx-auto max-w-5xl space-y-20 px-4 py-20">
        <h2 className="text-4xl font-bold tracking-tight md:mx-auto md:max-w-3xl md:text-center md:text-5xl">
          Main Features
        </h2>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
          <Image
            width={1000}
            height={1000}
            src={FasterQueryResolution.src}
            alt="Faster query"
            className="h-120 w-full bg-slate-50 object-cover"
          />
          <div>
            <h3 className="mb-2 text-xl font-semibold">
              Faster Query Resolution 
            </h3>
            <p className="text-slate-700">
              Our System Provides rapid query resolution through voice recognition, eliminating the need for customers to type their questions
            </p>
            <ul className="my-6 space-y-3 text-slate-700">
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Extracts audio from calls for analysis and response.</span>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Utilizes speech-to-text model for accurate transcription.</span>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Provides fast and efficient query handling through semantic search.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
          <Image
            width={1000}
            height={1000}
            src={EnhancedCustomerSatisfaction.src}
            alt="Customers"
            className="h-120 w-full bg-slate-50 object-cover md:order-last"
          />
          <div>
            <h3 className="mb-2 text-xl font-semibold">Enhanced Customer Satisfaction</h3>
            <p className="text-slate-700">
              Faster, more accurate responses and personalized interactions contribute to higher satisfaction and loyalty.
            </p>
            <ul className="my-6 space-y-3 text-slate-700">
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Uses sentiment analysis for tailored responses.</span>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Integrates LLM model for enhanced interaction quality.</span>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Improves customer engagement and retention through personalized experiences.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
          <Image
            width={1000}
            height={1000}
            src={EmotionTracking.src}
            alt="SOS Emergency"
            className="h-120 w-full bg-slate-50 object-cover"
          />
          <div>
            <h3 className="mb-2 text-xl font-semibold">Emotion Tracking and Feedback</h3>
            <p className="text-slate-700">
              Stress and frustration are significantly reduced by tailoring responses according to customer sentiment and providing efficient support.
            </p>
            <ul className="my-6 space-y-3 text-slate-700">
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Monitors and responds to emotional cues in customer interactions.</span>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Uses sentiment analysis to improve response accuracy and empathy.</span>
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline-block size-4 text-emerald-500"
                >
                  <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
                </svg>
                <span>Improves overall customer experience and support quality.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
  <Image
    width={1000}
    height={1000}
    src={MultilingualSupport.src}
    alt="Fake Caller"
    className="h-120 w-full bg-slate-50 object-cover md:order-last"
  />
  <div>
    <h3 className="mb-2 text-xl font-semibold">Multilingual Support </h3>
    < p className="text-slate-700">
    Users can receive assistance in their native language simply by changing the language preference, making the service accessible to a global audience.
    
    </p>
    <ul className="my-6 space-y-3 text-slate-700">
      <li>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 inline-block size-4 text-emerald-500"
        >
          <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
        </svg>
        <span>Supports multiple languages for global accessibility.</span>
      </li>
      <li>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 inline-block size-4 text-emerald-500"
        >
          <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
        </svg>
        <span>Ensures users can interact in their preferred language</span>
      </li>
      <li>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 inline-block size-4 text-emerald-500"
        >
          <path d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"></path>
        </svg>
        <span>Provides personalized support in multiple languages.</span>
      </li>
    </ul>
  </div>
</div>
      </section>
    </div>
  );
};

export default Features;
