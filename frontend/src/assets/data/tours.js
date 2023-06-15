import tourCM from "../images/Tours/tour_camau_img.jpg";
import tourCT from "../images/Tours/tour_cantho_img.jpg";
import tourHCM from "../images/Tours/tour_hochiminh_img.jpg";
import tourHN from "../images/Tours/tour_hanoi_img.jpg";
import tourKH from "../images/Tours/tour_khanhhoa_img.jpg";
import tourDN from "../images/Tours/tour_danang_img.jpg";
import tourSP from "../images/Tours/tour_sapa_img.jpg";
import tourBT from "../images/Tours/tour_hochiminh_img.avif";
const tours = [
  {
    id: "01",
    title: "Toàn thành phố Hồ Chí Minh",
    city: " TP. Hồ Chí Minh",
    address: "Việt Nam",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "Tham quan toàn thành phố Hồ Chí Minh",
    reviews: [
      {
        name: "Will",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourHCM,
    featured: true,
  },
  {
    id: "02",
    title: "Mũi Cà Mau",
    city: "Cà Mau",
    address: "Việt Nam",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Tham quan và trải nghiệm ở mũi Cà Mau",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.0,
      },
    ],
    avgRating: 4.5,
    photo: tourCM,
    featured: true,
  },
  {
    id: "03",
    title: "Bến Ninh Kiều Cần Thơ",
    city: "TP. Cần Thơ",
    address: "Việt Nam",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Tham quan và trải nghiệm ở Cần Thơ",
    reviews: [],
    avgRating: 4.5,
    photo: tourCT,
    featured: true,
  },
  {
    id: "04",
    title: "Lăng chủ tịch Hồ Chí Minh",
    city: "Hà Nội",
    address: "Việt Nam",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourHN,
    featured: true,
  },
  {
    id: "05",
    title: "Biển Nha Trang",
    city: "Khánh Hòa",
    address: "Việt Nam",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Du lịch và lữ hành thành phố biển Nha Trang- Khánh Hòa - Việt Nam ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourKH,
    featured: false,
  },
  {
    id: "06",
    title: "Cầu Tay Vàng",
    city: "Đà Nẵng",
    address: "Việt Nam",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Tham quan và dữ lành cầu tay vàng Đà Nẵng",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourDN,
    featured: false,
  },
  {
    id: "07",
    title: "Thành phố sương mù Sapa",
    city: "Lào Cai",
    address: "Việt Nam",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Trải nghiệm và dư lịch Sapa",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "will",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourSP,
    featured: false,
  },
  {
    id: "08",
    title: "Chợ Biến Thành  - Dinh Độc Lập",
    city: "TP. Hồ Chí Minh",
    address: "Việt Nam",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Tham quan 3 địa danh của Thành phố Hồ Chí Minh",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourBT,
    featured: false,
  },
  {
    id: "09",
    title: "Chợ Biến Thành  - Dinh Độc Lập",
    city: "TP. Hồ Chí Minh",
    address: "Việt Nam",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Tham quan 3 địa danh của Thành phố Hồ Chí Minh",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourBT,
    featured: false,
  },
];

export default tours;
