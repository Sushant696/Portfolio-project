import { Col, Row } from "antd";
import { StyledCard, StyledHr } from "./styling";
export default function Interest() {
  const interestArr = [
    {
      title: `Web Development`,
      description: `I have been involved in web development 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium similique itaque natus quam quisquam veritatis nostrum, minus in incidunt maiores, inventore deleniti sit perferendis excepturi soluta provident error recusandae`,
    },
    {
      title: `Technology`,
      description: `I have been involved in web development 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium similique itaque natus quam quisquam veritatis nostrum, minus in incidunt maiores, inventore deleniti sit perferendis excepturi soluta provident error recusandae`,
    },
    {
      title: `Operating System`,
      description: `I have been involved in web development 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium similique itaque natus quam quisquam veritatis nostrum, minus in incidunt maiores, inventore deleniti sit perferendis excepturi soluta provident error recusandae`,
    },
    {
      title: `Embedded Systems`,
      description: `I have been involved in web development 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium similique itaque natus quam quisquam veritatis nostrum, minus in incidunt maiores, inventore deleniti sit perferendis excepturi soluta provident error recusandae.,
      `,
    },
  ];
  return (
    <>
      <div className="text-center my-[5rem]">
        <h1 className="text-4xl font-bold mb-[5rem]">Areas of my interest</h1>
        <Row gutter={[80, 80]} justify="center"  >
          {interestArr.map((curr, index) => (
            <Col span={9} key={index}>
              <StyledCard className=" p-[1.5rem] ">
                <h1 className="text-[32px] text-left font-medium mb-4">{curr.title}</h1>
                <StyledHr />
                <p className="text-[#333] text-left text-[26px]">{curr.description}</p>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
