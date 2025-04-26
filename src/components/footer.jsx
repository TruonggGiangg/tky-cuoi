import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled } from '@ant-design/icons';
import logo from '../assets/logo.png';
const { Title, Text } = Typography;

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '40px 20px 10px' }}>
      <Row gutter={[20, 20]}>
        {/* LIÊN HỆ */}
        <Col xs={24} md={6}>
          <Title level={5} style={{ color: '#c20000' }}>LIÊN HỆ</Title>
          <Text>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</Text><br />
          <Text>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP. Hồ Chí Minh</Text><br />
          <Text>Điện thoại: 028 39840930 - 100</Text><br />
          <Text>Tuyển sinh: 028 39851932 - 028 39855858</Text><br />
          <Text>Email: dhcn@iuh.edu.vn</Text>
        </Col>

        {/* HOẠT ĐỘNG KHÁC */}
        <Col xs={24} md={6}>
          <Title level={5} style={{ color: '#c20000' }}>HOẠT ĐỘNG KHÁC</Title>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Hoạt động phục vụ cộng đồng</li>
            <li>Sinh viên tình nguyện</li>
            <li>CLB/Đội/Nhóm sinh viên</li>
            <li>Kết nối doanh nghiệp</li>
          </ul>
        </Col>

        {/* THÔNG TIN MỞ RỘNG */}
        <Col xs={24} md={6}>
          <Title level={5} style={{ color: '#c20000' }}>THÔNG TIN MỞ RỘNG</Title>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Báo chí viết về IUH</li>
            <li>Khám phá IUH</li>
            <li>Kỹ năng mềm</li>
            <li>Bộ sưu tập</li>
            <li>Dịch vụ sinh viên</li>
          </ul>
        </Col>

        {/* VĂN BẢN TIỆN ÍCH */}
        <Col xs={24} md={6}>
          <Title level={5} style={{ color: '#c20000' }}>VĂN BẢN TIỆN ÍCH</Title>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Quy chế - Quy định - Quy trình</li>
            <li>Ba công khai</li>
            <li>Biểu mẫu đào tạo</li>
            <li>Quản lý khoa học</li>
            <li>Phản hồi</li>
          </ul>
        </Col>
      </Row>

      <Divider />

      {/* Copyright + Mạng xã hội */}
      <Row justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <img src={logo} alt="IUH Logo" style={{ height: 50 }} />
          <Text style={{ display: 'block', marginTop: 10 }}>
            © Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh
          </Text>
          <Text style={{ fontSize: 12 }}>
            Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của IUH.
          </Text>
        </Col>

        <Col xs={24} md={12} style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 14, marginBottom: 10 }}>
            Số lượt truy cập: <b>288,835,951</b> <br />
            Hôm nay: <b>22,300</b> • Đang xem: <b>61</b>
          </div>
          <div>
            <FacebookFilled style={{ fontSize: 32, color: '#1877f2', marginRight: 10 }} />
            <TwitterSquareFilled style={{ fontSize: 32, color: '#1da1f2', marginRight: 10 }} />
            <LinkedinFilled style={{ fontSize: 32, color: '#0a66c2' }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
