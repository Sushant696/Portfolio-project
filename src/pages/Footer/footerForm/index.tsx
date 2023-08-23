// import { useState } from "react";
import {
  StyledLogo,
  StyledButton,
  StyledTextArea,
  StyledInput,
} from "../footerLinks/styling";

export const FooterForm = () => {

//   const [name, setName] = useState<string>("");
//   const [messsage, setMessage] = useState<string>("");
  
  const handleSumbit = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault;
  };

  return (
    <div className=" my-[3rem]">
      <div>
        <StyledLogo src="/src/assets/Images/mylogo1.png" alt="mylogo" />
      </div>
      <h1>Enter your name</h1>
      <StyledInput />
      <h1 className="leading-[3rem]">A messsage for me </h1>
      <div className="flex">
        <StyledTextArea />
      </div>
      <StyledButton
        onSubmit={() => {
          handleSumbit;
        }}
      >
        Submit
      </StyledButton>
    </div>
  );
};

// use controlled component and use it effectively and make it work with fully understading the concepts that are used within