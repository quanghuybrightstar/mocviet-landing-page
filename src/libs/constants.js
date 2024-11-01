import { IconGroup } from "@public/assets/icons";

export const TypeHeader = {
  HOME: {
    name: "Trang chủ",
    path: "/",
  },
  ABOUT: {
    name: "Về chúng tôi",
    path: "/about",
  },
  PROJECT: {
    name: "Công trình",
    path: "/project",
  },
  SERVICE: {
    name: "Dịch vụ",
    path: "/service",
  },
  BLOG: {
    name: "Blog",
    path: "/blog",
  },
};

export const menuHeader = Object.entries(TypeHeader).map(([key, value]) => ({
  id: key,
  ...value,
}));

export const INFO = {
  about: {
    title:
      "Khám phá Mộc Việt: Đơn vị tư vấn nội thất và kiến trúc hàng đầu Việt Nam với giải pháp nội thất tinh tế",
    desc: "Mộc Việt là đơn vị tư vấn, thiết kế và thi công đồ gỗ nội thất với nhiều năm kinh nghiệm. Chúng tôi chuyên thiết kế và thi công nhà phố, biệt thự, căn hộ cao cấp và nhà máy công xưởng. Với sự tín nhiệm từ khách hàng, chúng tôi luôn mang đến sự hài lòng qua từng công trình, kết hợp độc đáo giữa mỹ thuật cao và công năng sử dụng hoàn hảo. Chúng tôi cam kết mang đến thành công cho công trình của bạn.<br/> <br/> Chúng tôi sở hữu xưởng sản xuất quy mô lớn và văn phòng giao dịch sang trọng, cung cấp nhiều sản phẩm mẫu để tham khảo. Đội ngũ nhân lực của Mộc Việt bao gồm các kiến trúc sư và kỹ sư giàu kinh nghiệm, tốt nghiệp từ các trường đại học danh tiếng tại Hà Nội, đảm bảo đáp ứng mọi yêu cầu của khách hàng trong lĩnh vực thiết kế và thi công nội thất.",
    introduction: [
      {
        id: 1,
        icon: "https://img.icons8.com/arcade/128/interior.png",
        content: `<strong class="!font-bold">Mộc Việt</strong> được thành lập vào năm <strong class="!font-bold">2016</strong> với sứ mệnh tư vấn, thiết kế, và thi công nội thất gỗ chất lượng cao cho mọi loại hình công trình. Từ nhà phố, biệt thự, căn hộ cao cấp đến các nhà máy, xưởng sản xuất, chúng tôi luôn cam kết mang đến giải pháp tối ưu và hoàn thiện.`,
      },
      {
        id: 2,
        icon: "https://img.icons8.com/arcade/500/medal.png",
        content: `Với kinh nghiệm thực tế hơn <strong>8 năm</strong> trong sản xuất và thi công nội thất gỗ tự nhiên và công nghiệp, <strong>Mộc Việt</strong> tự hào đáp ứng mọi yêu cầu từ khâu thiết kế đến hoàn thiện. Đội ngũ kiến trúc sư, kỹ sư tận tâm, không ngừng sáng tạo, đã cùng chúng tôi hoàn thành nhiều dự án lớn, đồng hành với các đối tác uy tín trên thị trường.`,
      },
      {
        id: 3,
        icon: IconGroup,
        content: `Sở hữu xưởng sản xuất quy mô lớn và văn phòng giao dịch tiện nghi, <strong>Mộc Việt</strong> đáp ứng linh hoạt mọi yêu cầu của khách hàng. Đội ngũ nhân sự lành nghề, được đào tạo từ các trường đại học uy tín, luôn yêu nghề và sẵn sàng tạo nên những sản phẩm nội thất bền đẹp, tinh tế, đáp ứng chuẩn mực thẩm mỹ cao trong thiết kế và thi công.`,
      },
    ],
  },
  services: [
    {
      id: 1,
      name: "Tư vấn thiết kế kiến trúc nội & ngoại thất",
      desc: "Tại Mộc Việt, chúng tôi tự hào mang đến dịch vụ tư vấn thiết kế kiến trúc nội và ngoại thất chuyên nghiệp, giúp bạn biến ngôi nhà mơ ước thành hiện thực. Với đội ngũ kiến trúc sư giàu kinh nghiệm và sáng tạo, chúng tôi cam kết mang đến những giải pháp thiết kế độc đáo, tối ưu hóa không gian sống và làm việc của bạn. Từ việc lựa chọn phong cách, màu sắc, vật liệu đến việc bố trí nội thất và cảnh quan, chúng tôi luôn lắng nghe và đáp ứng mọi nhu cầu của khách hàng. Hãy để Mộc Việt đồng hành cùng bạn trong hành trình tạo dựng không gian sống hoàn hảo!",
    },
    {
      id: 2,
      name: "Thi công hạng mục xây dựng, sản xuất nội thất",
    },
    {
      id: 3,
      name: "Cung cấp thiết bị, phụ kiện bếp",
    },
    {
      id: 4,
      name: "Cung cấp nội thất đồ rời, sofa, đồ Décor…",
    },
  ],
  contact: {
    address:
      "Tầng 6, tòa nhà Hải Âu, Khu đô thị mới Cầu Bươu, Thanh trì, Hà nội ( Mặt sau tòa A-NC2)",
    phoneNumber: "0989.681.161",
    email: "manhdd.mocviet@gmail.com",
    socials: [
      {
        id: 1,
        name: "Facebook",
      },
    ],
  },
  projects: [
    {
      id: 1,
      src: "/images/project/project_1.webp",
      title: "Nội thất indochine",
    },
    {
      id: 2,
      src: "/images/project/project_2.webp",
      title: "Công trình công cộng",
    },
    {
      id: 3,
      src: "/images/project/project_3.webp",
      title: "Decor cafe",
    },
    {
      id: 4,
      src: "/images/project/project_4.webp",
      title: "Đồ rời",
    },
  ],
  home: {
    experienceYears: 8,
    projects: 500,
    customers: 321,
  },
};

export const DataSeo = {
  seoTitle: "CÔNG TY TNHH KIẾN TRÚC & NỘI THẤT MỘC VIỆT",
  seoDescription:
    "Mộc Việt là đơn vị tư vấn, thiết kế và thi công đồ gỗ nội thất với nhiều năm kinh nghiệm. Chúng tôi chuyên thiết kế và thi công nhà phố, biệt thự, căn hộ cao cấp và nhà máy công xưởng.",
  seoImage: "https://mocviet.netlify.app/images/slide/slide_2.webp",
};
