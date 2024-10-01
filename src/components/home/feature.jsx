// src/views/AppFeature.jsx
import React, { useEffect } from "react";
import { Row, Col, Card, Spin, Alert, notification } from "antd";
import { useCollection } from "../../hooks/useCollection";
import CustomButton from "../Button/index"; // Import the CustomButton

const { Meta } = Card;

function AppFeature() {
  const { data, isLoading, isError, error } = useCollection();

  useEffect(() => {
    if (data) {
      notification.success({
        message: "Data Fetched Successfully",
        placement: "topRight",
      });
    }

    if (isError) {
      notification.error({
        message: "Error Fetching Data",
        description: error.message,
        placement: "topRight",
      });
    }
  }, [data, isError, error]);

  if (isLoading) {
    return <Spin tip="Loading..." />;
  }

  const collectionData = Array.isArray(data?.data) ? data.data : [];
  console.log("this is data", collectionData);

  const truncateDescription = description => {
    if (!description) return "";
    const words = description.split(" ");
    return words.length > 20
      ? words.slice(0, 10).join(" ") + "..."
      : description;
  };

  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
        </div>
        <Row gutter={[16, 16]}>
          {collectionData.map(item => (
            <Col
              key={item._id}
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
            >
              <Card
                hoverable
                cover={<img alt={item.type} src={item.image} />}
                style={{ maxHeight: "30rem" }}
              >
                <Meta
                  title={item.name}
                  description={truncateDescription(item.description)}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    margin: "1rem",
                  }}
                >
                  <CustomButton
                    danger
                    type="primary"
                    text={`Buy at : ${item.buyPrice}`}
                  />
                  <CustomButton
                    type="primary"
                    text={`Rent at : ${item.rentPrice}/day`}
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
