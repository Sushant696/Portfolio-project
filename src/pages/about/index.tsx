import {
  HomePageWrapper,
  StyledImg,
  StyledContent,
  SushantImg,
  StyledHeading,
  HomeWrapper,
  StyledSubHeading
} from "./styling";

export default function About() {
  return (
    <HomePageWrapper className="p-[2rem]" id="about">
      <h1 className="text-center mb-8 font-bold text-[3.5rem]">About Me</h1>
      <div className="flex justify-center">
        <HomeWrapper className=" p-[1rem]">
          <StyledContent className="flex flex-col flex-none gap-[32px]">
            <StyledHeading className="  font-bold">I am Sushant Babu Prasai</StyledHeading>
            <StyledSubHeading className="text-[#333]  leading-8 font-medium  tracking-wide">
              An 18-year-old web developer and dedicated tech enthusiast hailing
              from the picturesque town of Birtamode, Nepal. As a passionate
              computer science student, I am currently engrossed in crafting and
              refining my personal projects. My journey has been one of
              self-discovery and relentless learning, as I thrive on exploring
              the cutting-edge landscape of new technologies. It was this
              insatiable curiosity that led me to delve into the realm of React,
              resulting in the creation of this remarkable project .
              <br />
              <br />I hold a strong conviction in the power of collaborative
              efforts. I look forward to the possibility of connecting and
              exploring synergies that could lead to mutually beneficial
              partnerships. Feel free to explore my upwork Profile, assess my
              skill set, or connect with me on LinkedIn - the beginning of a
              productive and inspiring journey could be just a click away.
            </StyledSubHeading>
          </StyledContent>
          <SushantImg className=" flex shrink">
            <StyledImg src="/src/assets/Images/sushant.jpg"/>
          </SushantImg>
        </HomeWrapper>
      </div>
    </HomePageWrapper>
  );
}
