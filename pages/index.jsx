import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel'
import Heading from '../components/Heading'
import ProductItem from '../components/ProductItem'
import UndertakeItem from '../components/UndertakeItem'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import AccessItem from '../components/AccessItem'
import CounterItem from '../components/CounterItem'
import {
  FaCarAlt, FaCommentDollar, FaPhoneSquareAlt, FaFacebookSquare, FaMoneyCheckAlt, FaCalendarCheck, FaHandshake,
  FaChartLine, FaCar, FaUserCheck, FaUsers
} from 'react-icons/fa'
import { homeAPI } from "../config"

// export async function getServerSideProps(context) {
//   // Lấy dữ liệu của sản phẩm từ API hoặc từ một nguồn dữ liệu khác
//   const res = await fetch(homeAPI + '/admin');
//   const products = await res.json();

//   // Trả về dữ liệu của sản phẩm dưới dạng props cho trang
//   return {
//     props: {
//       products: products,
//     },
//   }
// }

export default function Home(products) {
  const [cars, setCars] = useState([])
  useEffect(() => {
    fetch(homeAPI + '/admin')
      .then((res) => res.json())
      .then((cars) => {
        setCars(cars)
      })
  }, [])
  const listAccess = [
    {
      icon: <FaCarAlt />,
      content: 'Tất cả xe',
      href: '/san-pham'
    },
    {
      icon: <FaCommentDollar />,
      content: 'Nhận báo giá',
      href: '/nhan-bao-gia'
    },
    {
      icon: <FaPhoneSquareAlt />,
      content: 'Tư vấn trực tiếp 0918.941.966',
      href: 'tel:0918941966'
    },
    {
      icon: <FaFacebookSquare />,
      content: 'Tư vấn qua facebook',
      href: 'https://www.facebook.com/profile.php?id=100047842143889'
    },
  ]
  const countList = [
    {
      icon: <FaChartLine />,
      value: '17+',
      text: 'Năm hoạt động'
    },
    {
      icon: <FaUserCheck />,
      value: '150+',
      text: 'Nhân viên'
    },
    {
      icon: <FaCar />,
      value: '2500+',
      text: 'Xe đã bán'
    },
    {
      icon: <FaUsers />,
      value: '98%',
      text: 'KH hài lòng'
    },
  ]

  return (
    <div className={styles.main}>
      <Head>
        <title>Đại lý ủy quyền chính thức của Ford tại Cần Thơ</title>
        <meta property="og:image" content="https://www.ford.com.vn/content/ford/vn/vi_vn/site-wide-content/billboard-carousels/explorer-overview-carousel/jcr:content/par/billboard_1441502915/imageComponent/image.imgs.full.high.jpg" />
        <meta name="title" content="Ford Cần Thơ - Đại lý ủy quyền chính thức của Ford tại Việt Nam" />
        <meta name='revisit-after' content='1 days' />
        <meta name='city' content='Cần Thơ' />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="content-language" content="vi" />
        <meta name='keywords' content='ford ranger xls, Sản phẩm nổi bật của ford, ford territory, ô tô ford, cam kết khi mua xe tại ford - cần thơ, xe chính hãng, ford cần thơ' />
        <meta name="description" content="Trang chủ - Website trưng bày, tham khảo, chi tiết thông số cũng như giá bán các dòng xe Ford chính hãng. Tư vấn tận tình, giá cả hợp lý, đáng tin cậy, tự hào được nhiều khách hàng tin tưởng lựa chọn." />
      </Head>
      <div className={styles.container}>
        <Carousel />
        <div className="access-group d-flex flex-row flex-wrap align-items-center justify-content-around">
          {
            listAccess.map((item, index) => {
              return (
                <AccessItem href={item.href} key={index} icon={item.icon} content={item.content} />
              )
            })
          }
        </div>
        <div className="counter-box">
          <Heading title="Vì sao khách hàng luôn tin tưởng và lựa chọn Ford Cần Thơ?" />
          <div className="couter-row d-flex justify-content-around">
            {
              countList.map((item, i) => {
                return (
                  <CounterItem key={i} value={item.value} icon={item.icon} text={item.text} />
                )
              })
            }
          </div>
        </div>
        <div className="introduce-box">
          <Heading title='Giới thiệu' />
          <div>
            <p className="">"Cần Thơ Ford - Đại lý ủy quyền chính thức của Ford Việt Nam - Là Đại lý lớn nhất, uy tín nhất tại đồng bằng sông Cửu Long, vận hành theo tiêu chuẩn QualityCare, Showroom theo tiêu chuẩn Brand@Retail mới nhất của Ford toàn cầu, có tổng diện tích xây dựng lên đến 5000m2, với hơn 150 nhân viên được đào tạo bài bản, chuyên nghiệp."</p>
          </div>
        </div>
        <div className="outstanding">
          <Heading title="Sản phẩm nổi bật" />
          <div className="product-container d-flex flex-row flex-wrap justify-content-start">
            {
              cars.map((item, index) => {
                if (index < 4) {
                  return (
                    <ProductItem className="" key={index} name={item.name} src={item.src} href={item.id} price={item.price} />
                  )
                }
              })
            }

          </div>
        </div>

        <div className="undertake-wrapper position-relative">
          <Heading title="Cam kết khi mua xe tại Ford - Cần Thơ" />
          <div className="undertake-box d-flex flex-wrap justify-content-around">
            <UndertakeItem icon={<FaMoneyCheckAlt className="icon-item-undertake" />} title="Thanh toán và nhận xe nhanh chóng" des="Ford Cần Thơ luôn cam kết mang lại mức giá ưu đãi nhất cho quý khách với thời gian giao xe nhanh nhất" />
            <UndertakeItem icon={<FaCalendarCheck className="icon-item-undertake" />} title="Cung cấp các dòng xe chính hãng" des="Ford Cần Thơ luôn cung cấp các dòng xe chính hãng được sản xuất tại Việt Nam và nhập khẩu với các tiêu chuẩn toàn cầu" />
            <UndertakeItem icon={<FaHandshake className="icon-item-undertake" />} title="Dịch vụ bảo hành, bảo dưỡng hàng đầu" des="Ford Cần Thơ luôn cam kết chăm sóc kỹ lưỡng và chế độ hậu mãi tốt nhất cho Quý Khách khi mua xe ô tô tại đây" />
          </div>
        </div>
      </div>
    </div>
  )
}