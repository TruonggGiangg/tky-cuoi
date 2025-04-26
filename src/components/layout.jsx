import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu, Input, Button } from 'antd';
import { HomeOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
import Footer from './footer';
import Container from './container';

const { Header, Content } = Layout;

const LayoutMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh', background: '#f2f2f2' }}>
      {/* Top bar */}
      <div style={{ background: '#2f2f7f', color: '#fff', padding: '4px 20px', fontSize: '12px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px' }}>
        <span>E-OFFICE</span>
        <span>EMAIL</span>
        <span>THƯ VIỆN - THÔNG TIN</span>
        <span>🇻🇳 🇬🇧</span>
      </div>

      {/* Logo */}
      <div style={{ background: '#d9e6f2', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-evenly' }}>
          <img src={logo} alt="Logo" style={{ height: 60 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center', width: "100%" }}>
          <h1 style={{ margin: 0, color: '#003366' }}>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h1>
          <p style={{ margin: 0, color: '#e60000' }}>Đổi mới tư duy, làm giàu thêm tri thức - đời sống</p>
        </div>
      </div>

      {/* Menu + Search */}
      <div style={{ background: '#c9ccd1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
  {/* Menu Toggle for Mobile */}
  <Button
    style={{
      display: window.innerWidth <= 768 ? 'block' : 'none',
      marginRight: '10px',
      background: '#fff',
      border: '1px solid #e5e7eb',
      color: '#1e40af',
    }}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <MenuOutlined />
  </Button>

  {/* Menu */}
  <Menu
    mode={window.innerWidth <= 768 && isMenuOpen ? 'vertical' : 'horizontal'}
    theme="light"
    style={{
      flex: 1,
      background: 'transparent',
      fontWeight: 'bold',
      fontSize: '14px',
      border: 'none',
      display: window.innerWidth <= 768 && !isMenuOpen ? 'none' : 'flex',
      color: '#1e40af',
    }}
    defaultSelectedKeys={['home']}
  >
    <Menu.Item key="home" icon={<HomeOutlined />} style={{ color: '#1e40af' }}>
      <Link to="/" style={{ color: '#1e40af' }}>Trang chủ</Link>
    </Menu.Item>
    <Menu.SubMenu key="gioi-thieu" title="Giới thiệu" style={{ fontWeight: 'bold', color: '#1e40af' }}>
      <Menu.Item key="ve-truong">
        <Link to="/gioi-thieu/ve-truong" style={{ color: '#4b5563' }}>Về trường</Link>
      </Menu.Item>
      <Menu.Item key="tam-nhin">
        <Link to="/gioi-thieu/tam-nhin" style={{ color: '#4b5563' }}>Tầm nhìn - Sứ mệnh</Link>
      </Menu.Item>
      <Menu.Item key="co-cau">
        <Link to="/gioi-thieu/co-cau" style={{ color: '#4b5563' }}>Cơ cấu tổ chức</Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="academics" title="Học tập" style={{ fontWeight: 'bold', color: '#1e40af' }}>
      <Menu.Item key="dao-tao">
        <Link to="/dao-tao" style={{ color: '#4b5563' }}>Đào tạo</Link>
      </Menu.Item>
      <Menu.Item key="tuyen-sinh">
        <Link to="/tuyen-sinh" style={{ color: '#4b5563' }}>Tuyển sinh</Link>
      </Menu.Item>
      <Menu.Item key="chuong-trinh">
        <Link to="/hoc-tap/chuong-trinh" style={{ color: '#4b5563' }}>Chương trình đào tạo</Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="research" title="Nghiên cứu" style={{ fontWeight: 'bold', color: '#1e40af' }}>
      <Menu.Item key="nghien-cuu">
        <Link to="/nghien-cuu" style={{ color: '#4b5563' }}>Nghiên cứu khoa học</Link>
      </Menu.Item>
      <Menu.Item key="du-an">
        <Link to="/nghien-cuu/du-an" style={{ color: '#4b5563' }}>Dự án nghiên cứu</Link>
      </Menu.Item>
      <Menu.Item key="hop-tac">
        <Link to="/nghien-cuu/hop-tac" style={{ color: '#4b5563' }}>Hợp tác quốc tế</Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="community" title="Cộng đồng" style={{ fontWeight: 'bold', color: '#1e40af' }}>
      <Menu.Item key="sinh-vien">
        <Link to="/sinh-vien" style={{ color: '#4b5563' }}>Sinh viên</Link>
      </Menu.Item>
      <Menu.Item key="giang-vien">
        <Link to="/giang-vien" style={{ color: '#4b5563' }}>Giảng viên</Link>
      </Menu.Item>
      <Menu.Item key="cuu-sinh-vien">
        <Link to="/cong-dong/cuu-sinh-vien" style={{ color: '#4b5563' }}>Cựu sinh viên</Link>
      </Menu.Item>
    </Menu.SubMenu>
    <Menu.Item key="van-bang" style={{ color: '#1e40af' }}>
      <Link to="/van-bang" style={{ color: '#1e40af' }}>Văn bằng</Link>
    </Menu.Item>
  </Menu>
</div>

        {/* Search box */}
        <div style={{ padding: '10px', flexShrink: 0 }}>
          <Input
            placeholder="Tìm kiếm."
            prefix={<SearchOutlined />}
            style={{ width: '180px', borderRadius: '4px' }}
          />
        </div>
      </div>

      {/* Nội dung */}
      <Container>
        <Content style={{ padding: '20px' }}>
          <Outlet />
        </Content>
      </Container>
      <Footer />
    </Layout>
  );
};

export default LayoutMain;