import { Row, Col } from "antd";
import ItemContainer from "./ItemContainer";
import { useMediaQuery } from "react-responsive";

function chunkArray(arr: Array<any>, size: number) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function ColumnComponent({ item }: { item: any }) {
  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
      <div className="bg-blue-500 h-72 w-full">
        <ItemContainer />
      </div>
    </Col>
  );
}

export default function ItemsGrid({ data }: { data: Array<any> }) {
  let spanValue = 4;
  const dataByRow = chunkArray(data, spanValue);
  const isXs = useMediaQuery({ maxWidth: 575 });
  const isSm = useMediaQuery({ minWidth: 575, maxWidth: 800 });
  const isMd = useMediaQuery({ minWidth: 800, maxWidth: 1100 });

  if (isXs) {
    spanValue = 24;
  } else if (isSm) {
    spanValue = 12
  } else if (isMd) {
    spanValue = 8;
  } else {
    spanValue = 6;
  }

  return (
    <div className="m-8">
      <Row gutter={[16, 24]}>
        {data.map((item, index) => {
          return (
            <Col span={spanValue} key={index}>
              <div className="h-96 w-60">
                <ItemContainer />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
