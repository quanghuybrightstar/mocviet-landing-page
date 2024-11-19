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
  // SERVICE: {
  //   name: "Dịch vụ",
  //   path: "/service",
  // },
  // BLOG: {
  //   name: "Blog",
  //   path: "/blog",
  // },
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
  projects: {
    title: "Công trình của chúng tôi",
    desc: `Đây là nơi bạn có thể khám phá những dự án thiết kế nội thất
      tuyệt vời, thể hiện sự sáng tạo và tinh tế trong từng chi tiết.
      Với đội ngũ chuyên gia giàu kinh nghiệm và đam mê, chúng tôi cam
      kết mang đến cho bạn những không gian sống đẳng cấp, tiện nghi
      và ấm cúng. Hãy cùng khám phá những công trình nổi bật của chúng
      tôi và cảm nhận sự khác biệt trong từng không gian.`,
    seo_desc_detail: "Hãy cùng Mộc Việt khám phá những thiết kế hoàn mỹ và độc đáo của công trình ",
    list_home: [
      {
        id: 1,
        src: "/images/project/project_1.webp",
        title: "Nội thất indochine",
        code: "chi-hoa-r4a",
      },
      {
        id: 2,
        src: "/images/project/project_2.webp",
        title: "Công trình công cộng",
        code: "cafe-meo",
      },
      {
        id: 3,
        src: "/images/project/project_3.webp",
        title: "Decor cafe",
        code: "cafe-160-lo-duc",
      },
      {
        id: 4,
        src: "/images/project/project_4.webp",
        title: "Đồ rời",
        code: "chi-thao-sa3",
      },
    ],
    list_detail: {
      "cafe-meo": {
        id: 1,
        title: "Cafe Mèo",
        code: "cafe-meo",
        images: [
          "/images/project/cafe-meo/1.jpg",
          "/images/project/cafe-meo/2.jpg",
          "/images/project/cafe-meo/3.jpg",
          "/images/project/cafe-meo/4.jpg",
          "/images/project/cafe-meo/5.jpg",
          "/images/project/cafe-meo/6.jpg",
          "/images/project/cafe-meo/7.jpg",
          "/images/project/cafe-meo/8.jpg",
          "/images/project/cafe-meo/9.jpg",
          "/images/project/cafe-meo/10.jpg",
          "/images/project/cafe-meo/11.jpg",
          "/images/project/cafe-meo/12.jpg",
          "/images/project/cafe-meo/13.jpg",
          "/images/project/cafe-meo/14.jpg",
          "/images/project/cafe-meo/15.jpg",
          "/images/project/cafe-meo/16.jpg",
          "/images/project/cafe-meo/17.jpg",
          "/images/project/cafe-meo/18.jpg",
          "/images/project/cafe-meo/19.jpg",
          "/images/project/cafe-meo/20.jpg",
          "/images/project/cafe-meo/21.jpg",
          "/images/project/cafe-meo/22.jpg",
          "/images/project/cafe-meo/23.jpg",
          "/images/project/cafe-meo/24.jpg",
          "/images/project/cafe-meo/25.jpg",
          "/images/project/cafe-meo/26.jpg",
          "/images/project/cafe-meo/27.jpg",
          "/images/project/cafe-meo/28.jpg",
          "/images/project/cafe-meo/29.jpg",
          "/images/project/cafe-meo/30.jpg",
          "/images/project/cafe-meo/31.jpg",
          "/images/project/cafe-meo/32.jpg",
          "/images/project/cafe-meo/33.jpg",
          "/images/project/cafe-meo/34.jpg",
          "/images/project/cafe-meo/35.jpg",
          "/images/project/cafe-meo/36.jpg",
          "/images/project/cafe-meo/37.jpg",
          "/images/project/cafe-meo/38.jpg",
          "/images/project/cafe-meo/39.jpg",
          "/images/project/cafe-meo/40.jpg",
          "/images/project/cafe-meo/41.jpg",
          "/images/project/cafe-meo/42.jpg",
          "/images/project/cafe-meo/43.jpg",
          "/images/project/cafe-meo/44.jpg",
          "/images/project/cafe-meo/45.jpg",
          "/images/project/cafe-meo/46.jpg",
          "/images/project/cafe-meo/47.jpg",
          "/images/project/cafe-meo/48.jpg",
          "/images/project/cafe-meo/49.jpg",
        ],
      },
      "cafe-160-lo-duc": {
        id: 2,
        title: "Cafe 160 Lò Đúc",
        code: "cafe-160-lo-duc",
        images: [
          "/images/project/cafe-160-lo-duc/1.jpg",
          "/images/project/cafe-160-lo-duc/2.jpg",
          "/images/project/cafe-160-lo-duc/3.jpg",
          "/images/project/cafe-160-lo-duc/4.jpg",
          "/images/project/cafe-160-lo-duc/5.jpg",
          "/images/project/cafe-160-lo-duc/6.jpg",
          "/images/project/cafe-160-lo-duc/7.jpg",
          "/images/project/cafe-160-lo-duc/8.jpg",
          "/images/project/cafe-160-lo-duc/9.jpg",
          "/images/project/cafe-160-lo-duc/10.jpg",
          "/images/project/cafe-160-lo-duc/11.jpg",
          "/images/project/cafe-160-lo-duc/12.jpg",
          "/images/project/cafe-160-lo-duc/13.jpg",
          "/images/project/cafe-160-lo-duc/14.jpg",
          "/images/project/cafe-160-lo-duc/15.jpg",
          "/images/project/cafe-160-lo-duc/16.jpg",
          "/images/project/cafe-160-lo-duc/17.jpg",
          "/images/project/cafe-160-lo-duc/18.jpg",
          "/images/project/cafe-160-lo-duc/19.jpg",
          "/images/project/cafe-160-lo-duc/20.jpg",
          "/images/project/cafe-160-lo-duc/21.jpg",
          "/images/project/cafe-160-lo-duc/22.jpg",
          "/images/project/cafe-160-lo-duc/23.jpg",
          "/images/project/cafe-160-lo-duc/24.jpg",
          "/images/project/cafe-160-lo-duc/25.jpg",
          "/images/project/cafe-160-lo-duc/26.jpg",
          "/images/project/cafe-160-lo-duc/27.jpg",
          "/images/project/cafe-160-lo-duc/28.jpg",
          "/images/project/cafe-160-lo-duc/29.jpg",
          "/images/project/cafe-160-lo-duc/30.jpg",
          "/images/project/cafe-160-lo-duc/31.jpg",
          "/images/project/cafe-160-lo-duc/32.jpg",
          "/images/project/cafe-160-lo-duc/33.jpg",
          "/images/project/cafe-160-lo-duc/34.jpg",
          "/images/project/cafe-160-lo-duc/35.jpg",
          "/images/project/cafe-160-lo-duc/36.jpg",
          "/images/project/cafe-160-lo-duc/37.jpg",
          "/images/project/cafe-160-lo-duc/38.jpg",
          "/images/project/cafe-160-lo-duc/39.jpg",
          "/images/project/cafe-160-lo-duc/40.jpg",
          "/images/project/cafe-160-lo-duc/41.jpg",
          "/images/project/cafe-160-lo-duc/42.jpg",
          "/images/project/cafe-160-lo-duc/43.jpg",
        ],
      },
      "chi-hoa-r4a": {
        id: 3,
        title: "Chung cư R4A - Chị Hoa",
        code: "chi-hoa-r4a",
        images: [
          "/images/project/chi-hoa-r4a/1.jpg",
          "/images/project/chi-hoa-r4a/2.jpg",
          "/images/project/chi-hoa-r4a/3.jpg",
          "/images/project/chi-hoa-r4a/4.jpg",
          "/images/project/chi-hoa-r4a/5.jpg",
          "/images/project/chi-hoa-r4a/6.jpg",
          "/images/project/chi-hoa-r4a/7.jpg",
          "/images/project/chi-hoa-r4a/8.jpg",
          "/images/project/chi-hoa-r4a/9.jpg",
          "/images/project/chi-hoa-r4a/10.jpg",
          "/images/project/chi-hoa-r4a/11.jpg",
          "/images/project/chi-hoa-r4a/12.jpg",
          "/images/project/chi-hoa-r4a/13.jpg",
          "/images/project/chi-hoa-r4a/14.jpg",
          "/images/project/chi-hoa-r4a/15.jpg",
          "/images/project/chi-hoa-r4a/16.jpg",
          "/images/project/chi-hoa-r4a/17.jpg",
          "/images/project/chi-hoa-r4a/18.jpg",
          "/images/project/chi-hoa-r4a/19.jpg",
          "/images/project/chi-hoa-r4a/20.jpg",
          "/images/project/chi-hoa-r4a/21.jpg",
          "/images/project/chi-hoa-r4a/22.jpg",
          "/images/project/chi-hoa-r4a/23.jpg",
          "/images/project/chi-hoa-r4a/24.jpg",
          "/images/project/chi-hoa-r4a/25.jpg",
        ],
      },
      "chi-thao-sa3": {
        id: 4,
        title: "Chung cư SA3 - Chị Thảo",
        code: "chi-thao-sa3",
        images: [
          "/images/project/chi-thao-sa3/1.jpg",
          "/images/project/chi-thao-sa3/2.jpg",
          "/images/project/chi-thao-sa3/3.jpg",
          "/images/project/chi-thao-sa3/4.jpg",
          "/images/project/chi-thao-sa3/5.jpg",
          "/images/project/chi-thao-sa3/6.jpg",
          "/images/project/chi-thao-sa3/7.jpg",
          "/images/project/chi-thao-sa3/8.jpg",
          "/images/project/chi-thao-sa3/9.jpg",
          "/images/project/chi-thao-sa3/10.jpg",
          "/images/project/chi-thao-sa3/11.jpg",
          "/images/project/chi-thao-sa3/12.jpg",
          "/images/project/chi-thao-sa3/13.jpg",
          "/images/project/chi-thao-sa3/14.jpg",
          "/images/project/chi-thao-sa3/15.jpg",
          "/images/project/chi-thao-sa3/16.jpg",
          "/images/project/chi-thao-sa3/17.jpg",
          "/images/project/chi-thao-sa3/18.jpg",
          "/images/project/chi-thao-sa3/19.jpg",
          "/images/project/chi-thao-sa3/20.jpg",
          "/images/project/chi-thao-sa3/21.jpg",
          "/images/project/chi-thao-sa3/22.jpg",
          "/images/project/chi-thao-sa3/23.jpg",
          "/images/project/chi-thao-sa3/24.jpg",
          "/images/project/chi-thao-sa3/25.jpg",
          "/images/project/chi-thao-sa3/26.jpg",
          "/images/project/chi-thao-sa3/27.jpg",
          "/images/project/chi-thao-sa3/28.jpg",
          "/images/project/chi-thao-sa3/29.jpg",
          "/images/project/chi-thao-sa3/30.jpg",
          "/images/project/chi-thao-sa3/31.jpg",
          "/images/project/chi-thao-sa3/32.jpg",
          "/images/project/chi-thao-sa3/33.jpg",
          "/images/project/chi-thao-sa3/34.jpg",
          "/images/project/chi-thao-sa3/35.jpg",
        ],
      },
    },
  },
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
