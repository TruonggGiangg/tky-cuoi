import React from 'react';
import { Row, Col, Card, Typography, List, Divider, Carousel, Collapse, Button } from 'antd';
import Container from './container';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const HomePage = () => {
  const notifications = [
    { title: 'Thông báo nghỉ hè đối với sinh viên năm 2025', date: '24-04-2025' },
    { title: 'Thông báo tuyển sinh tốt nghiệp đại học', date: '21-04-2025' },
  ];

  const admissions = [
    { title: 'Tuyển sinh liên thông từ cao đẳng lên đại học', date: '28-03-2025' },
    { title: 'Tuyển sinh văn bằng hai đợt 1 năm 2025', date: '20-03-2025' },
  ];

  const events = [
    { title: 'AVEVA tài trợ phần mềm trị giá 180.000 đô Mỹ', date: '25-04-2025' },
    { title: 'Hội nghị khoa học BAIC 2025 lần 2 tại IUH', date: '22-04-2025' },
  ];

  const international = [
    { title: 'Tuần lễ giao lưu văn hóa, khoa học', date: '24-03-2025' },
    { title: 'Tham gia Erasmus Green Edu Seeds', date: '19-03-2025' },
  ];

  const renderList = (data) => (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text type="danger">● {item.title}</Text>
          <Text type="secondary" style={{ fontSize: 12 }}>{item.date}</Text>
        </List.Item>
      )}
    />
  );

  return (
 
<div>
      {/* Banner */}
      <Carousel arrows autoplay autoplaySpeed={3000} effect="fade">
        {[1, 2, 3].map((index) => (
          <div key={index}>
            <img
              src="https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/AVEVA-BANER.JPG"
              alt={`Banner ${index}`}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>

      {/* Main Content */}
      <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
        <Col xs={24} md={6}>
          {/* Sidebar */}
          <Card style={{ background: '#d7dfe2', border: 'none', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
  <Title level={4} style={{ color: '#1e40af', marginBottom: '16px', fontWeight: 'bold' }}>
    CƠ CẤU TỔ CHỨC
  </Title>
  <Collapse
    ghost
    accordion
    expandIconPosition="right"
    style={{ background: 'transparent', background: '#d7dfe2'}}
  >
    {[
      { header: 'Lãnh đạo', content: 'Thông tin lãnh đạo' },
      { header: 'Các phòng ban', content: 'Phòng đào tạo, phòng CTSV...' },
      { header: 'Các khoa', content: 'Khoa CNTT, Khoa Điện, Khoa Hóa học...' },
      { header: 'Các viện', content: 'Viện nghiên cứu công nghệ' },
      { header: 'Các trung tâm', content: 'Trung tâm tin học, Trung tâm ngoại ngữ...' },
      { header: 'Các phân hiệu', content: 'Phân hiệu Thanh Hóa, Quảng Ngãi...' },
      { header: 'Đoàn thể', content: 'Đoàn thanh niên, Công đoàn...' },
    ].map((item, idx) => (
      <Panel
        header={item.header}
        key={idx}
        style={{
        background: '#d7dfe2',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '8px',
          color: '#4b5563',
          fontWeight: '500',
        }}
     
      >
        <Text style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5' }}>
          {item.content}
        </Text>
      </Panel>
    ))}
  </Collapse>
</Card>
        </Col>

        <Col xs={24} md={18}>
          <Row gutter={[20, 20]}>
            {/* THÔNG BÁO */}
            <Col xs={24} md={12}>
              <Card title="THÔNG BÁO" extra={<Button type="link">Xem tất cả</Button>}>
                {renderList(notifications)}
              </Card>
            </Col>

            {/* TUYỂN SINH */}
            <Col xs={24} md={12}>
              <Card title="TUYỂN SINH" extra={<Button type="link">Xem tất cả</Button>}>
                {renderList(admissions)}
              </Card>
            </Col>

            {/* TIN TỨC - SỰ KIỆN */}
            <Col xs={24} md={12}>
              <Card title="TIN TỨC - SỰ KIỆN" extra={<Button type="link">Xem tất cả</Button>}>
                {renderList(events)}
              </Card>
            </Col>

            {/* HỢP TÁC QUỐC TẾ */}
            <Col xs={24} md={12}>
              <Card title="HỢP TÁC QUỐC TẾ" extra={<Button type="link">Xem tất cả</Button>}>
                {renderList(international)}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Bottom Section */}
      <Divider />

      <Row gutter={[20, 20]} style={{ marginBottom: 20 }}>
        {[
          { title: 'PHÂN HIỆU QUẢNG NGÃI', img: 'https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/AVEVA-BANER.JPG' },
          { title: 'CƠ SỞ THANH HÓA', img: 'https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/AVEVA-BANER.JPG' },
          { title: 'VIDEO VÀ HÌNH ẢNH', img: 'https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/AVEVA-BANER.JPG' },
        ].map((item, idx) => (
          <Col xs={24} md={8} key={idx}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.img} />}
            >
              <Card.Meta title={item.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>

    
  );
};

export default HomePage;
