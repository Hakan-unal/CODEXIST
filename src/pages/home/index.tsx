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
import { useState } from "react";
import test from "../../assets/react.svg";
import { LuFileSearch } from "react-icons/lu";

const { Paragraph, Text } = Typography;

const Home = (props: any) => {
  const [books, setBooks] = useState([1, 2, 3, 4]);

  const BookCard = () => {
    return books.map((obj: any) => (
      <Col sm={12} md={8} lg={6} xxl={4}>
        <Card
          hoverable
          title="name"
          cover={
            <Image
              width={"60%"}
              style={{ margin: 50 }}
              preview={false}
              src={test}
            ></Image>
          }
        >
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            placeat quasi ab. Maiores saepe mollitia fuga ipsum molestiae
            pariatur, totam nam velit corporis, distinctio accusantium ex
            explicabo voluptatibus harum perspiciatis.
          </Paragraph>

          <div style={{ textAlign: "right" }}>
            <Text strong>author</Text>
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
