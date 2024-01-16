import {
  Card,
  Col,
  Row,
  Typography,
  Image,
  Button,
  Space,
  Divider,
  Input,
} from "antd";
import { useEffect, useState } from "react";
import { LuFileSearch } from "react-icons/lu";
import { getBooks } from "../../../service"

const { Paragraph, Text } = Typography;

const Home = (props: any) => {
  const [books, setBooks] = useState([1, 2, 3, 4]);


  const handleBooks=async()=>{
    const response =await getBooks()
    setBooks(response)

  }


  useEffect(()=>{
    handleBooks()
  },[])




  const BookCard = () => {
    return books.map((obj: any,index:number) => (
      <Col key={index} sm={12} md={8} lg={6} xxl={4}>
        <Card
          hoverable
          title={obj.name}
          cover={
            <Image
              width={"60%"}
              style={{ margin: 50 }}
              preview={false}
              src={obj.image}
            />
          }
        >
          <Paragraph>
            {obj.shortDescription}
          </Paragraph>

          <div style={{ textAlign: "right" }}>
            <Text strong>{obj.author}</Text>
          </div>
          <Divider />
          <Space size={"large"} direction="horizontal">
            <Button block> Add Shopping </Button>
            <Button block> Detail </Button>
          </Space>
        </Card>
      </Col>
    ));
  };

  return (
    <Card>

      <Input size="large" prefix={<LuFileSearch size={20}/>} />
      <Divider/>
      <Row gutter={[12, 36]}>{BookCard()}</Row>
    </Card>
  );
};

export default Home;
