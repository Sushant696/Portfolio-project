import {
  StyledCard,
  StyledHr,
  InterestContainer,
  InterestGrid,
} from "./styling";
export default function Interest() {
  const interestArr = [
    {
      title: `Web Development`,
      description: `I have been involved in web development 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium similique itaque natus quam quisquam veritatis nostrum, minus in incidunt maiores`,
    },
    {
      title: `Technology`,
      description: `I have been involved in web development 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium similique itaque natus quam quisquam veritatis nostrum, minus in incidunt maiores`,
    },
    {
      title: `Operating System`,
      description: `I have been involved in web development 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium similique itaque natus quam quisquam veritatis nostrum, minus in incidunt maiores`,
    },
    {
      title: `Embedded Systems`,
      description: `I have been involved in web development 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium similique itaque natus quam quisquam veritatis nostrum, minus in incidunt maiores.,
      `,
    },
  ];
  return (
    <>
      <InterestContainer id="interest" >
        <h1 className="text-4xl text-[#fff] font-bold mb-4">Areas of my interest</h1>
        <InterestGrid>
          {interestArr.map((curr, index) => (
            <StyledCard key={index}>
              <h1 className="text-[25px] font-medium mb-2">{curr.title}</h1>
              <StyledHr  className="mb-4"/>
              <p className="text-[20px]">{curr.description}</p>
            </StyledCard>
          ))}
        </InterestGrid>
      </InterestContainer>
    </>
  );
}