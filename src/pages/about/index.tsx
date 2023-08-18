import {
  HomePageWrapper,
  StyledImg,
  StyledContent,
  SushantImg,
  HomeWrapper,
} from "./styling";

export default function About() {
  return (
    <>
      <HomePageWrapper className="m-[2rem] p-[1rem]" id="about">
        <HomeWrapper className="flex  max-w-screen-2xl">
          <StyledContent>
            <div className="flex flex-col gap-[32px]">
              <h1 className="text-[56px]  font-bold">I am Sushant Babu Prasai</h1>
              <h3 className="text-[#333] leading-8 text-[24px] font-medium tracking-wide">
               An 18-year-old web developer and dedicated tech enthusiast hailing from the picturesque town of Birtamode, Nepal. As a passionate computer science student, I am currently engrossed in crafting and refining my personal projects that showcase my prowess in the digital realm.
                My journey has been one of self-discovery and relentless learning, as I thrive on exploring the cutting-edge landscape of new technologies. It was this insatiable curiosity that led me to delve into the realm of React, resulting in the creation of this remarkable project .
                <br />
                <br />
                I hold a strong conviction in the power of collaborative efforts. I look forward to the possibility of connecting and exploring synergies that could lead to mutually beneficial partnerships. Feel free to explore my YouTube channel, assess my skill set, or connect with me on LinkedIn - the beginning of a productive and inspiring journey could be just a click away. 
              </h3>
            </div>
          </StyledContent>
          <SushantImg  className="" >
            <StyledImg src="/src/assets/Images/sushant.jpg" alt="myimg" />
          </SushantImg>
        </HomeWrapper>
      </HomePageWrapper>
    </>
  );
}
