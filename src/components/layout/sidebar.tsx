import { useEffect, useState } from "react";
import { Badge, Card, Divider, Typography } from "antd";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import { FaRegTrashAlt } from "react-icons/fa";
import { CHANGED } from "../../../redux/constants";

const { Sider } = Layout;
const Sidebar: React.FC = (...props) => {
  const [basket, setBasket] = useState([]);
  const {  Text } = Typography;

  const dispatch = useDispatch();
  const globalState: any = useSelector((state) => state);


  const removeBasket = (index:number) => {
    const tempArr:any = [...basket];
    tempArr.splice(index,1)
    dispatch({
      type: CHANGED,
      state: { basket: tempArr },
    });
    setBasket(tempArr);
  };

  useEffect(() => {
    if (globalState.codexist) {
      setBasket(globalState.codexist.state.basket);
    }
  }, [globalState]);

  const BasketItem = () => {
    return basket?.map((obj: any, index: number) => (
      <Card
        key={index}
        extra={<FaRegTrashAlt onClick={()=>removeBasket(index)} style={{ cursor: "pointer" }} color="red" />}
        title={<Text type="secondary">{obj.name}</Text>}
        style={{ padding: 10 }}
      >
        {obj.author}
      </Card>
    ));
  };

  return (
    <Sider
      theme={"light"}
      trigger={null}
      collapsible
      collapsed={basket.length === 0}
      width={300}
      collapsedWidth={0}
      style={{ paddingTop: 10 }}
    >
      <Badge showZero count={basket.length}>
        <CiShoppingCart size={25} />
      </Badge>
      <Divider />

      {BasketItem()}
    </Sider>
  );
};

export default Sidebar;
