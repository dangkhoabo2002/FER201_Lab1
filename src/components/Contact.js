// import React from "react";
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// export default function Details() {
//   const { theme, toggle, dark } = useContext(ThemeContext);

//   return (
//     <div>
//       <div
//         className="container-detail"
//         style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
//       >
//         <div className="card-container">
//           <div
//             className="card-contact"
//             style={{ backgroundColor: "rgba(250, 0, 213, 0.2)" }}
//           >
//             <div className="information">
//               <h2 className="contact-title">Get in touch</h2>
//               <div className="label">
//                 <input placeholder="Name" />
//                 <input placeholder="Email" />
//                 <input placeholder="Message" />
//                 <button style={{ color: theme.color }}>Submit</button>
//               </div>
//             </div>
//             <div
//               className="contact-us"
//               style={{ backgroundColor: "rgba(250, 0, 213, 0.2)" }}
//             >
//               <h3>
//                 Address: <br></br>198 West 21th Street, Suite 721 New York NY
//                 10016
//               </h3>
//               <h3>
//                 Phone:
//                 <br></br>+ 1235 2355 98
//               </h3>
//               <h3>
//                 Email: <br></br>info@yoursite.com
//               </h3>
//               <h3>
//                 Website: <br></br> yoursite.com
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* =========================================================== */}
//       <div
//         className="container-detail-mobile"
//         style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
//       >
//         <div className="card-container-mobile">
//           <div
//             className="card-contact-mobile"
//             style={{ backgroundColor: "rgba(250, 0, 213, 0.2)" }}
//           >
//             <div className="information-mobile">
//               <h2 className="contact-title">Get in touch</h2>
//               <div className="label">
//                 <input placeholder="Name" />
//                 <input placeholder="Email" />
//                 <input placeholder="Message" />
//                 <button style={{ color: theme.color }}>Submit</button>
//               </div>
//             </div>
//             <div
//               className="contact-us-mobile"
//               style={{ backgroundColor: "rgba(250, 0, 213, 0.2)" }}
//             >
//               <h3>
//                 Address: <br></br>198 West 21th Street, Suite 721 New York NY
//                 10016
//               </h3>
//               <h3>
//                 Phone:
//                 <br></br>+ 1235 2355 98
//               </h3>
//               <h3>
//                 Email: <br></br>info@yoursite.com
//               </h3>
//               <h3>
//                 Website: <br></br> yoursite.com
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'
import { Button, Container, Icon, Select, Textarea, TextInput } from 'react-materialize'

export default function Contact() {
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <Container className='ctu'>
      <h3 style={{color: "white"}}>Contact us</h3>
      <form onSubmit={handleSubmit} style={{color: "white"}} >
        <TextInput id='TextInput-38' label="Your Name" style={{color: "white"}}/>
        <TextInput id='TextInput-39' label="Your Phone" style={{color: "white"}}/>
        <TextInput email id='TextInput-41' label="Email" validate style={{color: "white"}}/>
        <Select  style={{color: "white"}} id='Select-46' multiple={false} onChange={function noRefCheck(){}} value>
          <option disabled value="" >
            Choose your favorite nation
          </option>
          <option value="1">
            England
          </option>
          <option value="2">
            France
          </option>
          <option value="3">
            Spain
          </option>
        </Select>
        <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label='Your content' style={{color: "white"}}/>
        <Button className='ct-button'>Submit</Button>
      </form>
    </Container>
  )
}
