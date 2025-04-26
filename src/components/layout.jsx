import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu, Input } from 'antd';
import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
import Footer from './footer';
import Container from './container';

const { Header, Content } = Layout;

const LayoutMain = () => {
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
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center', width: "100%"}}>
            <h1 style={{ margin: 0, color: '#003366' }}>ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h1>
            <p style={{ margin: 0, color: '#e60000' }}>Đổi mới tư duy, làm giàu thêm tri thức - đời sống</p>
          </div>
      </div>

      {/* Menu + Search */}
      <div style={{ background: '#c9ccd1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '20px' }}>
        <Menu
          mode="horizontal"
          theme="light"
          style={{ flex: 1, background: 'transparent', fontWeight: 'bold', fontSize: '14px' }}
          defaultSelectedKeys={['home']}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="gioi-thieu">
            <Link to="/gioi-thieu">Giới thiệu</Link>
          </Menu.Item>
          <Menu.Item key="dao-tao">
            <Link to="/dao-tao">Đào tạo</Link>
          </Menu.Item>
          <Menu.Item key="tuyen-sinh">
            <Link to="/tuyen-sinh">Tuyển sinh</Link>
          </Menu.Item>
          <Menu.Item key="nghien-cuu">
            <Link to="/nghien-cuu">Nghiên cứu</Link>
          </Menu.Item>
          <Menu.Item key="sinh-vien">
            <Link to="/sinh-vien">Sinh viên</Link>
          </Menu.Item>
          <Menu.Item key="giang-vien">
            <Link to="/giang-vien">Giảng viên</Link>
          </Menu.Item>
          <Menu.Item key="van-bang">
            <Link to="/van-bang">Văn bằng</Link>
          </Menu.Item>
        </Menu>

        {/* Search box */}
        <div style={{ padding: '10px' }}>
          <Input
            placeholder="Tìm kiếm."
            prefix={<SearchOutlined />}
            style={{ width: 180 }}
          />
        </div>
      </div>

      {/* Nội dung */}
      <Container>
      <Content style={{ padding: '20px' }}>
        <Outlet />
      </Content>
      </Container>
        <Footer/>
    </Layout>
 
    
  );
};

export default LayoutMain;
