import CreatorsCard from "../../components/brand-components/CreatorsCard";

import { Row, Col, Layout } from "antd";
const { Content } = Layout;

function CreatorSearch() {
  const big_styles = {
    backgroundColor: "lightgray",
    alignSelf: "center",
    height: "76vh",
    padding: "4vh",
    margin: "2vh",
  };
  const styles = {
    backgroundColor: "lightgrey",
    height: "37vh",
    padding: "4vh",
    margin: "2vh",
  };

  return (
    <>
      <Row justify="center" align="top" style={{ alignItems: "center" }}>
        <Col span={24}>
          <Content title="Content title" style={big_styles}>
            <CreatorsCard />
          </Content>
        </Col>
      </Row>
    </>
  );
}

export default CreatorSearch;
