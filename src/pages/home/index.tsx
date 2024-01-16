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
import { getBooks } from "../../../service";
import { showNotification } from "../../components/general/notification";
import { CHANGED } from "../../../redux/constants";
import { useDispatch, useSelector } from "react-redux";

const { Paragraph, Text } = Typography;

const Home = (props: any) => {
  const [books, setBooks] = useState([]);
  const [basket, setBasket] = useState([]);
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  const handleBooks = async () => {
    const response = await getBooks();
    setBooks(response);
  };

  const addBasket = (obj: any) => {
    const tempArr:any = [...basket];
    tempArr.push(obj)
    dispatch({
      type: CHANGED,
      state: { basket: tempArr },
    });
    setBasket(tempArr);
  };

  useEffect(() => {
    handleBooks();
  }, []);

  const BookCard = () => {
    return books?.map((obj: any, index: number) => (
      <Col key={index}  md={12} lg={8} xxl={6}>
        <Card
          hoverable
          title={<Text ellipsis>{obj.name}</Text>}
          cover={
            <Image
              width={"50%"}
              style={{ marginLeft: 70, marginRight: 70 }}
              preview={false}
              src={obj.image}
            />
          }
        >
          <Paragraph>{obj.shortDescription}</Paragraph>

          <div style={{ textAlign: "right" }}>
            <Text strong>{obj.author}</Text>
          </div>
          <Divider />
          <Space size={"large"} direction="horizontal">
            <Button onClick={() => addBasket(obj)} block>
              {" "}
              Add Shopping{" "}
            </Button>
            <Button
              block
              onClick={() =>
                showNotification("info", obj.name, obj.description, null)
              }
            >
              Detail
            </Button>
          </Space>
        </Card>
      </Col>
    ));
  };

  return (
    <Card>
      <Input size="large" prefix={<LuFileSearch size={20} />} />
      <Divider />
      <Row align={"top"} gutter={[24, 36]}>
        {BookCard()}
      </Row>
    </Card>
  );
};

export default Home;
