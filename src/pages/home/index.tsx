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
import { showNotification } from "../../components/general/notification";

const { Paragraph, Text } = Typography;

const Home = (props: any) => {
  const [books, setBooks] = useState([]);






  const handleBooks=async()=>{
    const response =await getBooks()
    setBooks(response)
  }


  useEffect(()=>{
    handleBooks()
  },[])




  const BookCard = () => {
    return books?.map((obj: any,index:number) => (
      <Col key={index} sm={12} md={8} lg={6} xxl={4}>
        <Card
        onMouseEnter={()=>showNotification("info",obj.name,obj.description,null)}
          hoverable
          title={<Text ellipsis>{obj.name}</Text> }
          cover={
            <Image
              width={"50%"}
              style={{ marginLeft: 70,marginRight: 70 }}
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
      <Row align={"top"} gutter={[24, 36]}>{BookCard()}</Row>
    </Card>
  );
};

export default Home;
