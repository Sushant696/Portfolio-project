import styled from "styled-components";


const Icon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    fill: #000; /* Default fill color */
    transition: fill 0.3s ease; /* Add a smooth transition */
  }

  &:hover svg {
    fill: #41b0bf; /* New fill color on hover */
  }
`;


export default function SendIcon() {
  return (
    <Icon>
      <svg
        fill="#41b0bF"
        strokeWidth="0"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        height="5em"
        width="5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
        <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
      </svg>
    </Icon>
  );
}
