// import { useState } from "react";
// import {
//   StyledTextArea,
// } from "../footerLinks/styling";
// import Logo from "../../../assets/icons/Logo";
// // import { Alert } from "antd";

// export const FooterForm = () => {
//   const [name, setName] = useState<string>("");
//   const [messsage, setMessage] = useState<string>("");

//   const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); //preventing form from submitting and reloading the page

//     // object to store user's  name as (key) and message as value
//     const data = {
//       [name]: messsage,
//     };

//     //  convert object to json and store
//     localStorage.setItem("userData", JSON.stringify(data));

//     // clear the input field
//     setName("");
//     setMessage("");
//     <h1>{prompt("Your message has been delivered successfully")}</h1>;
//   };

//   // retriving the data stored
//   // const storedData : string | null = localStorage.getItem('userData');
//   // const parsedData: { [key: string]: string } | null = storedData ? JSON.parse(storedData) : null;

//   return (
//     <>
//       <div className=" my-[3rem]">
//       <div className="mb-[1rem]">
//         <a href="#">
//         <Logo/>
//         </a>
//       </div>
//         <form
//           onSubmit={(event) => {
//             handleSumbit(event);
//           }}
//         >
//           <label htmlFor="name">Enter your name</label>
//           <StyledInput
//             type="text"
//             id="name"
//             value={name}
//             onChange={(event) => {
//               setName(event.target.value);
//             }}
//           />
//           <label htmlFor="message" className="leading-[3rem]">
//             A Message For me
//           </label>
//           <div className="flex">
//             <StyledTextArea
//               id="message"
//               value={messsage}
//               onChange={(event) => {
//                 setMessage(event.target.value);
//               }}
//             />
//           </div>
//           <StyledButton type="submit">Submit</StyledButton>
//         </form>
//       </div>
//     </>
//   );
// };

// // use controlled component and use it effectively and make it work with fully understading the concepts that are used within
// // this is controlled components so any changes to the form element are hendled by updating the state . All the changes and actions in the form are handled by updating state and everything is undercontroll of the state so this form handling method is called contolled method because everything is under control of state..
