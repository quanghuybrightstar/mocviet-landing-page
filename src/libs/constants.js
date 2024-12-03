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
  PROJECTS: {
    name: "Công trình",
    path: "/projects",
  },
  SERVICES: {
    name: "Dịch vụ",
    path: "/services",
  },
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
      "Khám phá Mộc Việt : Đơn vị tư vấn nội thất và kiến trúc hàng đầu Việt Nam với giải pháp nội thất tinh tế",
    desc: "<strong>Mộc Việt</strong>  là đơn vị tư vấn, thiết kế và thi công đồ gỗ nội thất với nhiều năm kinh nghiệm. Chúng tôi chuyên thiết kế và thi công nhà phố, biệt thự, căn hộ cao cấp và nhà máy công xưởng. Với sự tín nhiệm từ khách hàng, chúng tôi luôn mang đến sự hài lòng qua từng công trình, kết hợp độc đáo giữa mỹ thuật cao và công năng sử dụng hoàn hảo. Chúng tôi cam kết mang đến thành công cho công trình của bạn.<br/> <br/> Chúng tôi sở hữu xưởng sản xuất quy mô lớn và văn phòng giao dịch sang trọng, cung cấp nhiều sản phẩm mẫu để tham khảo. Đội ngũ nhân lực của <strong>Mộc Việt</strong>  bao gồm các kiến trúc sư và kỹ sư giàu kinh nghiệm, tốt nghiệp từ các trường đại học danh tiếng tại Hà Nội, đảm bảo đáp ứng mọi yêu cầu của khách hàng trong lĩnh vực thiết kế và thi công nội thất.",
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
    core_values: [
      {
        id: 1,
        title: "Uy tín",
        desc: "Uy tín là nền tảng để Mộc Việt xây dựng niềm tin từ khách hàng",
        image: "/images/cores/reputation.svg",
      },
      {
        id: 2,
        title: "Tiến Độ",
        desc: "Đảm bảo tiến độ là cam kết không thể thiếu trong từng dự án",
        image: "/images/cores/progress.webp",
      },
      {
        id: 3,
        title: "Chất Lượng",
        desc: "Chất lượng vượt trội là mục tiêu hàng đầu trong mỗi sản phẩm",
        image: "/images/cores/quality.svg",
      },
      {
        id: 4,
        title: "Sáng Tạo",
        desc: "Sáng tạo là chìa khóa để chúng tôi tạo nên không gian độc đáo",
        image: "/images/cores/creative.svg",
      },
      {
        id: 5,
        title: "Chuyên Nghiệp",
        desc: "Tác phong chuyên nghiệp là cách Mộc Việt khẳng định giá trị của mình",
        image: "/images/cores/professional.webp",
      },
      {
        id: 6,
        title: "Nỗ Lực",
        desc: "Nỗ lực không ngừng giúp chúng tôi mang đến sự hài lòng tối đa",
        image: "/images/cores/effort.svg",
      },
    ],
  },
  services: {
    title: `Dịch vụ của chúng tôi`,
    desc: `Tại <strong>Mộc Việt</strong>, chúng tôi mang đến giải pháp thiết kế và thi công nội thất toàn diện, bao gồm tư vấn thiết kế kiến trúc sáng tạo, thi công chất lượng cao và cung cấp nội thất, phụ kiện bếp hiện đại. 
      Mỗi dịch vụ đều được thực hiện với sự tỉ mỉ, chuyên nghiệp và tận tâm, cam kết mang đến không gian sống đẳng cấp, tiện nghi, và hài hòa với phong cách của bạn.`,
    thumbnail: "/images/services/thumbnail.webp",
    list_services: [
      {
        id: 1,
        name: "Tư vấn thiết kế kiến trúc nội & ngoại thất",
        desc: `Tại <strong>Mộc Việt</strong>, chúng tôi tự hào mang đến dịch vụ tư vấn thiết kế kiến trúc nội và ngoại thất chuyên nghiệp, giúp bạn biến ngôi nhà mơ ước thành hiện thực. Với đội ngũ kiến trúc sư giàu kinh nghiệm và sáng tạo, chúng tôi cam kết mang đến những giải pháp thiết kế độc đáo, tối ưu hóa không gian sống và làm việc của bạn. 
          Từ việc lựa chọn phong cách, màu sắc, vật liệu đến việc bố trí nội thất và cảnh quan, chúng tôi luôn lắng nghe và đáp ứng mọi nhu cầu của khách hàng. Hãy để <strong>Mộc Việt</strong> đồng hành cùng bạn trong hành trình tạo dựng không gian sống hoàn hảo!`,
        image: "services/service-1.webp",
      },
      {
        id: 2,
        name: "Thi công hạng mục xây dựng, sản xuất nội thất",
        desc: `Mang tầm nhìn từ bản vẽ thiết kế vào thực tế, <strong>Mộc Việt</strong> chuyên nhận thi công các hạng mục xây dựng và sản xuất nội thất trọn gói. Đội ngũ thợ lành nghề cùng quy trình kiểm soát chất lượng nghiêm ngặt cam kết tạo ra không gian sống và làm việc hoàn hảo, chuẩn mực từng chi tiết. 
          Chúng tôi đảm bảo tiến độ, chất lượng vượt mong đợi, đồng thời tối ưu hóa chi phí cho khách hàng.`,
        image: "services/service-2.webp",
      },
      {
        id: 3,
        name: "Cung cấp thiết bị, phụ kiện bếp",
        desc: `Không gian bếp của bạn sẽ được nâng tầm với các thiết bị và phụ kiện bếp hiện đại từ <strong>Mộc Việt</strong>. Chúng tôi cung cấp giải pháp toàn diện, từ những thiết bị công nghệ cao như bếp từ, lò nướng, máy rửa bát đến các phụ kiện thông minh giúp tối ưu hóa từng góc nhỏ trong căn bếp. 
          Mỗi sản phẩm đều được chọn lọc kỹ lưỡng từ những thương hiệu uy tín, đảm bảo sự kết hợp hài hòa giữa tính năng, thẩm mỹ và độ bền. Với <strong>Mộc Việt</strong>, căn bếp không chỉ là nơi nấu nướng mà còn là trung tâm của sự sáng tạo và tiện nghi.`,
        image: "services/service-3.webp",
      },
      {
        id: 4,
        name: "Cung cấp nội thất đồ rời, sofa, đồ Décor…",
        desc: `<strong>Mộc Việt</strong> tự hào mang đến những sản phẩm nội thất đồ rời, sofa, và đồ décor tinh tế, giúp bạn tạo nên không gian sống đầy cảm hứng. Chúng tôi cung cấp từ những bộ sofa sang trọng, bàn ghế đa dạng kiểu dáng đến các món đồ trang trí độc đáo, tất cả đều được thiết kế để phù hợp với mọi phong cách từ hiện đại đến cổ điển. 
          Mỗi sản phẩm không chỉ là một món đồ nội thất mà còn là một điểm nhấn góp phần thể hiện cá tính và gu thẩm mỹ của bạn. Cùng <strong>Mộc Việt</strong> hoàn thiện tổ ấm của bạn với sự khác biệt và đẳng cấp.`,
        image: "services/service-4.webp",
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
    seo_desc_detail:
      "Hãy cùng Mộc Việt khám phá những thiết kế hoàn mỹ và độc đáo của công trình ",
    list_home: [
      {
        id: 1,
        src: "/images/projects/project_1.webp",
        title: "Nội thất indochine",
        code: "chi-hoa-r4a",
      },
      {
        id: 2,
        src: "/images/projects/project_2.webp",
        title: "Công trình công cộng",
        code: "cafe-meo",
      },
      {
        id: 3,
        src: "/images/projects/project_3.webp",
        title: "Decor cafe",
        code: "cafe-160-lo-duc",
      },
      {
        id: 4,
        src: "/images/projects/project_4.webp",
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
          "/images/projects/cafe-meo/1.jpg",
          "/images/projects/cafe-meo/2.jpg",
          "/images/projects/cafe-meo/3.jpg",
          "/images/projects/cafe-meo/4.jpg",
          "/images/projects/cafe-meo/5.jpg",
          "/images/projects/cafe-meo/6.jpg",
          "/images/projects/cafe-meo/7.jpg",
          "/images/projects/cafe-meo/8.jpg",
          "/images/projects/cafe-meo/9.jpg",
          "/images/projects/cafe-meo/10.jpg",
          "/images/projects/cafe-meo/11.jpg",
          "/images/projects/cafe-meo/12.jpg",
          "/images/projects/cafe-meo/13.jpg",
          "/images/projects/cafe-meo/14.jpg",
          "/images/projects/cafe-meo/15.jpg",
          "/images/projects/cafe-meo/16.jpg",
          "/images/projects/cafe-meo/17.jpg",
          "/images/projects/cafe-meo/18.jpg",
          "/images/projects/cafe-meo/19.jpg",
          "/images/projects/cafe-meo/20.jpg",
          "/images/projects/cafe-meo/21.jpg",
          "/images/projects/cafe-meo/22.jpg",
          "/images/projects/cafe-meo/23.jpg",
          "/images/projects/cafe-meo/24.jpg",
          "/images/projects/cafe-meo/25.jpg",
          "/images/projects/cafe-meo/26.jpg",
          "/images/projects/cafe-meo/27.jpg",
          "/images/projects/cafe-meo/28.jpg",
          "/images/projects/cafe-meo/29.jpg",
          "/images/projects/cafe-meo/30.jpg",
          "/images/projects/cafe-meo/31.jpg",
          "/images/projects/cafe-meo/32.jpg",
          "/images/projects/cafe-meo/33.jpg",
          "/images/projects/cafe-meo/34.jpg",
          "/images/projects/cafe-meo/35.jpg",
          "/images/projects/cafe-meo/36.jpg",
          "/images/projects/cafe-meo/37.jpg",
          "/images/projects/cafe-meo/38.jpg",
          "/images/projects/cafe-meo/39.jpg",
          "/images/projects/cafe-meo/40.jpg",
          "/images/projects/cafe-meo/41.jpg",
          "/images/projects/cafe-meo/42.jpg",
          "/images/projects/cafe-meo/43.jpg",
          "/images/projects/cafe-meo/44.jpg",
          "/images/projects/cafe-meo/45.jpg",
          "/images/projects/cafe-meo/46.jpg",
          "/images/projects/cafe-meo/47.jpg",
          "/images/projects/cafe-meo/48.jpg",
          "/images/projects/cafe-meo/49.jpg",
        ],
      },
      "cafe-160-lo-duc": {
        id: 2,
        title: "Cafe 160 Lò Đúc",
        code: "cafe-160-lo-duc",
        images: [
          "/images/projects/cafe-160-lo-duc/1.jpg",
          "/images/projects/cafe-160-lo-duc/2.jpg",
          "/images/projects/cafe-160-lo-duc/3.jpg",
          "/images/projects/cafe-160-lo-duc/4.jpg",
          "/images/projects/cafe-160-lo-duc/5.jpg",
          "/images/projects/cafe-160-lo-duc/6.jpg",
          "/images/projects/cafe-160-lo-duc/7.jpg",
          "/images/projects/cafe-160-lo-duc/8.jpg",
          "/images/projects/cafe-160-lo-duc/9.jpg",
          "/images/projects/cafe-160-lo-duc/10.jpg",
          "/images/projects/cafe-160-lo-duc/11.jpg",
          "/images/projects/cafe-160-lo-duc/12.jpg",
          "/images/projects/cafe-160-lo-duc/13.jpg",
          "/images/projects/cafe-160-lo-duc/14.jpg",
          "/images/projects/cafe-160-lo-duc/15.jpg",
          "/images/projects/cafe-160-lo-duc/16.jpg",
          "/images/projects/cafe-160-lo-duc/17.jpg",
          "/images/projects/cafe-160-lo-duc/18.jpg",
          "/images/projects/cafe-160-lo-duc/19.jpg",
          "/images/projects/cafe-160-lo-duc/20.jpg",
          "/images/projects/cafe-160-lo-duc/21.jpg",
          "/images/projects/cafe-160-lo-duc/22.jpg",
          "/images/projects/cafe-160-lo-duc/23.jpg",
          "/images/projects/cafe-160-lo-duc/24.jpg",
          "/images/projects/cafe-160-lo-duc/25.jpg",
          "/images/projects/cafe-160-lo-duc/26.jpg",
          "/images/projects/cafe-160-lo-duc/27.jpg",
          "/images/projects/cafe-160-lo-duc/28.jpg",
          "/images/projects/cafe-160-lo-duc/29.jpg",
          "/images/projects/cafe-160-lo-duc/30.jpg",
          "/images/projects/cafe-160-lo-duc/31.jpg",
          "/images/projects/cafe-160-lo-duc/32.jpg",
          "/images/projects/cafe-160-lo-duc/33.jpg",
          "/images/projects/cafe-160-lo-duc/34.jpg",
          "/images/projects/cafe-160-lo-duc/35.jpg",
          "/images/projects/cafe-160-lo-duc/36.jpg",
          "/images/projects/cafe-160-lo-duc/37.jpg",
          "/images/projects/cafe-160-lo-duc/38.jpg",
          "/images/projects/cafe-160-lo-duc/39.jpg",
          "/images/projects/cafe-160-lo-duc/40.jpg",
          "/images/projects/cafe-160-lo-duc/41.jpg",
          "/images/projects/cafe-160-lo-duc/42.jpg",
          "/images/projects/cafe-160-lo-duc/43.jpg",
        ],
      },
      "chi-hoa-r4a": {
        id: 3,
        title: "Chung cư R4A - Chị Hoa",
        code: "chi-hoa-r4a",
        images: [
          "/images/projects/chi-hoa-r4a/1.jpg",
          "/images/projects/chi-hoa-r4a/2.jpg",
          "/images/projects/chi-hoa-r4a/3.jpg",
          "/images/projects/chi-hoa-r4a/4.jpg",
          "/images/projects/chi-hoa-r4a/5.jpg",
          "/images/projects/chi-hoa-r4a/6.jpg",
          "/images/projects/chi-hoa-r4a/7.jpg",
          "/images/projects/chi-hoa-r4a/8.jpg",
          "/images/projects/chi-hoa-r4a/9.jpg",
          "/images/projects/chi-hoa-r4a/10.jpg",
          "/images/projects/chi-hoa-r4a/11.jpg",
          "/images/projects/chi-hoa-r4a/12.jpg",
          "/images/projects/chi-hoa-r4a/13.jpg",
          "/images/projects/chi-hoa-r4a/14.jpg",
          "/images/projects/chi-hoa-r4a/15.jpg",
          "/images/projects/chi-hoa-r4a/16.jpg",
          "/images/projects/chi-hoa-r4a/17.jpg",
          "/images/projects/chi-hoa-r4a/18.jpg",
          "/images/projects/chi-hoa-r4a/19.jpg",
          "/images/projects/chi-hoa-r4a/20.jpg",
          "/images/projects/chi-hoa-r4a/21.jpg",
          "/images/projects/chi-hoa-r4a/22.jpg",
          "/images/projects/chi-hoa-r4a/23.jpg",
          "/images/projects/chi-hoa-r4a/24.jpg",
          "/images/projects/chi-hoa-r4a/25.jpg",
        ],
      },
      "chi-thao-sa3": {
        id: 4,
        title: "Chung cư SA3 - Chị Thảo",
        code: "chi-thao-sa3",
        images: [
          "/images/projects/chi-thao-sa3/1.jpg",
          "/images/projects/chi-thao-sa3/2.jpg",
          "/images/projects/chi-thao-sa3/3.jpg",
          "/images/projects/chi-thao-sa3/4.jpg",
          "/images/projects/chi-thao-sa3/5.jpg",
          "/images/projects/chi-thao-sa3/6.jpg",
          "/images/projects/chi-thao-sa3/7.jpg",
          "/images/projects/chi-thao-sa3/8.jpg",
          "/images/projects/chi-thao-sa3/9.jpg",
          "/images/projects/chi-thao-sa3/10.jpg",
          "/images/projects/chi-thao-sa3/11.jpg",
          "/images/projects/chi-thao-sa3/12.jpg",
          "/images/projects/chi-thao-sa3/13.jpg",
          "/images/projects/chi-thao-sa3/14.jpg",
          "/images/projects/chi-thao-sa3/15.jpg",
          "/images/projects/chi-thao-sa3/16.jpg",
          "/images/projects/chi-thao-sa3/17.jpg",
          "/images/projects/chi-thao-sa3/18.jpg",
          "/images/projects/chi-thao-sa3/19.jpg",
          "/images/projects/chi-thao-sa3/20.jpg",
          "/images/projects/chi-thao-sa3/21.jpg",
          "/images/projects/chi-thao-sa3/22.jpg",
          "/images/projects/chi-thao-sa3/23.jpg",
          "/images/projects/chi-thao-sa3/24.jpg",
          "/images/projects/chi-thao-sa3/25.jpg",
          "/images/projects/chi-thao-sa3/26.jpg",
          "/images/projects/chi-thao-sa3/27.jpg",
          "/images/projects/chi-thao-sa3/28.jpg",
          "/images/projects/chi-thao-sa3/29.jpg",
          "/images/projects/chi-thao-sa3/30.jpg",
          "/images/projects/chi-thao-sa3/31.jpg",
          "/images/projects/chi-thao-sa3/32.jpg",
          "/images/projects/chi-thao-sa3/33.jpg",
          "/images/projects/chi-thao-sa3/34.jpg",
          "/images/projects/chi-thao-sa3/35.jpg",
        ],
      },
      "aeon-mall-hai-phong": {
        id: 5,
        title: "Aeon Mall Hải Phòng",
        code: "aeon-mall-hai-phong",
        images: [
          "/images/projects/aeon-mall-hai-phong/1.jpg",
          "/images/projects/aeon-mall-hai-phong/2.jpg",
          "/images/projects/aeon-mall-hai-phong/3.jpg",
          "/images/projects/aeon-mall-hai-phong/4.jpg",
          "/images/projects/aeon-mall-hai-phong/5.jpg",
          "/images/projects/aeon-mall-hai-phong/6.jpg",
          "/images/projects/aeon-mall-hai-phong/7.jpg",
          "/images/projects/aeon-mall-hai-phong/8.jpg",
          "/images/projects/aeon-mall-hai-phong/9.jpg",
          "/images/projects/aeon-mall-hai-phong/10.jpg",
          "/images/projects/aeon-mall-hai-phong/11.jpg",
          "/images/projects/aeon-mall-hai-phong/12.jpg",
          "/images/projects/aeon-mall-hai-phong/13.jpg",
          "/images/projects/aeon-mall-hai-phong/14.jpg",
          "/images/projects/aeon-mall-hai-phong/15.jpg",
          "/images/projects/aeon-mall-hai-phong/16.jpg",
          "/images/projects/aeon-mall-hai-phong/17.jpg",
          "/images/projects/aeon-mall-hai-phong/18.jpg",
          "/images/projects/aeon-mall-hai-phong/19.jpg",
          "/images/projects/aeon-mall-hai-phong/20.jpg",
          "/images/projects/aeon-mall-hai-phong/21.jpg",
          "/images/projects/aeon-mall-hai-phong/22.jpg",
          "/images/projects/aeon-mall-hai-phong/23.jpg",
          "/images/projects/aeon-mall-hai-phong/24.jpg",
          "/images/projects/aeon-mall-hai-phong/25.jpg",
          "/images/projects/aeon-mall-hai-phong/26.jpg",
          "/images/projects/aeon-mall-hai-phong/27.jpg",
          "/images/projects/aeon-mall-hai-phong/28.jpg",
          "/images/projects/aeon-mall-hai-phong/29.jpg",
          "/images/projects/aeon-mall-hai-phong/30.jpg",
          "/images/projects/aeon-mall-hai-phong/31.jpg",
          "/images/projects/aeon-mall-hai-phong/32.jpg",
          "/images/projects/aeon-mall-hai-phong/33.jpg",
          "/images/projects/aeon-mall-hai-phong/34.jpg",
          "/images/projects/aeon-mall-hai-phong/35.jpg",
          "/images/projects/aeon-mall-hai-phong/36.jpg",
          "/images/projects/aeon-mall-hai-phong/37.jpg",
          "/images/projects/aeon-mall-hai-phong/38.jpg",
          "/images/projects/aeon-mall-hai-phong/39.jpg",
          "/images/projects/aeon-mall-hai-phong/40.jpg",
          "/images/projects/aeon-mall-hai-phong/41.jpg",
          "/images/projects/aeon-mall-hai-phong/42.jpg",
          "/images/projects/aeon-mall-hai-phong/43.jpg",
          "/images/projects/aeon-mall-hai-phong/44.jpg",
          "/images/projects/aeon-mall-hai-phong/45.jpg",
          "/images/projects/aeon-mall-hai-phong/46.jpg",
          "/images/projects/aeon-mall-hai-phong/47.jpg",
          "/images/projects/aeon-mall-hai-phong/48.jpg",
          "/images/projects/aeon-mall-hai-phong/49.jpg",
          "/images/projects/aeon-mall-hai-phong/50.jpg",
          "/images/projects/aeon-mall-hai-phong/51.jpg",
          "/images/projects/aeon-mall-hai-phong/52.jpg",
          "/images/projects/aeon-mall-hai-phong/53.jpg",
          "/images/projects/aeon-mall-hai-phong/54.jpg",
          "/images/projects/aeon-mall-hai-phong/55.jpg",
        ],
      },
      "vp-viettin-group": {
        id: 6,
        title: "Văn Phòng Việt Tín Group",
        code: "vp-viettin-group",
        images: [
          "/images/projects/vp-viettin-group/1.jpg",
          "/images/projects/vp-viettin-group/2.jpg",
          "/images/projects/vp-viettin-group/3.jpg",
          "/images/projects/vp-viettin-group/4.jpg",
          "/images/projects/vp-viettin-group/5.jpg",
          "/images/projects/vp-viettin-group/6.jpg",
          "/images/projects/vp-viettin-group/7.jpg",
          "/images/projects/vp-viettin-group/8.jpg",
          "/images/projects/vp-viettin-group/9.jpg",
          "/images/projects/vp-viettin-group/10.jpg",
          "/images/projects/vp-viettin-group/11.jpg",
          "/images/projects/vp-viettin-group/12.jpg",
        ],
      },
      "nha-a-sy-bim-son": {
        id: 7,
        title: "Nhà Anh Sỹ - Bỉm Sơn",
        code: "nha-a-sy-bim-son",
        images: [
          "/images/projects/nha-a-sy-bim-son/1.jpg",
          "/images/projects/nha-a-sy-bim-son/2.jpg",
          "/images/projects/nha-a-sy-bim-son/3.jpg",
          "/images/projects/nha-a-sy-bim-son/4.jpg",
          "/images/projects/nha-a-sy-bim-son/5.jpg",
          "/images/projects/nha-a-sy-bim-son/6.jpg",
          "/images/projects/nha-a-sy-bim-son/7.jpg",
          "/images/projects/nha-a-sy-bim-son/8.jpg",
          "/images/projects/nha-a-sy-bim-son/9.jpg",
          "/images/projects/nha-a-sy-bim-son/10.jpg",
          "/images/projects/nha-a-sy-bim-son/11.jpg",
          "/images/projects/nha-a-sy-bim-son/12.jpg",
          "/images/projects/nha-a-sy-bim-son/13.jpg",
          "/images/projects/nha-a-sy-bim-son/14.jpg",
          "/images/projects/nha-a-sy-bim-son/15.jpg",
          "/images/projects/nha-a-sy-bim-son/16.jpg",
          "/images/projects/nha-a-sy-bim-son/17.jpg",
          "/images/projects/nha-a-sy-bim-son/18.jpg",
          "/images/projects/nha-a-sy-bim-son/19.jpg",
          "/images/projects/nha-a-sy-bim-son/20.jpg",
          "/images/projects/nha-a-sy-bim-son/21.jpg",
          "/images/projects/nha-a-sy-bim-son/22.jpg",
          "/images/projects/nha-a-sy-bim-son/23.jpg",
          "/images/projects/nha-a-sy-bim-son/24.jpg",
          "/images/projects/nha-a-sy-bim-son/25.jpg",
          "/images/projects/nha-a-sy-bim-son/26.jpg",
          "/images/projects/nha-a-sy-bim-son/27.jpg",
          "/images/projects/nha-a-sy-bim-son/28.jpg",
          "/images/projects/nha-a-sy-bim-son/29.jpg",
          "/images/projects/nha-a-sy-bim-son/30.jpg",
          "/images/projects/nha-a-sy-bim-son/31.jpg",
          "/images/projects/nha-a-sy-bim-son/32.jpg",
          "/images/projects/nha-a-sy-bim-son/33.jpg",
          "/images/projects/nha-a-sy-bim-son/34.jpg",
          "/images/projects/nha-a-sy-bim-son/35.jpg",
          "/images/projects/nha-a-sy-bim-son/36.jpg",
          "/images/projects/nha-a-sy-bim-son/37.jpg",
          "/images/projects/nha-a-sy-bim-son/38.jpg",
          "/images/projects/nha-a-sy-bim-son/39.jpg",
          "/images/projects/nha-a-sy-bim-son/40.jpg",
        ],
      },
      "lau-uy-beo": {
        id: 8,
        title: "Nhà Hàng Lẩu Úy Béo",
        code: "lau-uy-beo",
        images: [
          "/images/projects/lau-uy-beo/1.jpg",
          "/images/projects/lau-uy-beo/2.jpg",
          "/images/projects/lau-uy-beo/3.jpg",
          "/images/projects/lau-uy-beo/4.jpg",
          "/images/projects/lau-uy-beo/5.jpg",
          "/images/projects/lau-uy-beo/6.jpg",
          "/images/projects/lau-uy-beo/7.jpg",
          "/images/projects/lau-uy-beo/8.jpg",
          "/images/projects/lau-uy-beo/9.jpg",
          "/images/projects/lau-uy-beo/10.jpg",
          "/images/projects/lau-uy-beo/11.jpg",
          "/images/projects/lau-uy-beo/12.jpg",
          "/images/projects/lau-uy-beo/13.jpg",
          "/images/projects/lau-uy-beo/14.jpg",
          "/images/projects/lau-uy-beo/15.jpg",
          "/images/projects/lau-uy-beo/16.jpg",
          "/images/projects/lau-uy-beo/17.jpg",
          "/images/projects/lau-uy-beo/18.jpg",
          "/images/projects/lau-uy-beo/19.jpg",
          "/images/projects/lau-uy-beo/20.jpg",
          "/images/projects/lau-uy-beo/21.jpg",
          "/images/projects/lau-uy-beo/22.jpg",
          "/images/projects/lau-uy-beo/23.jpg",
          "/images/projects/lau-uy-beo/24.jpg",
          "/images/projects/lau-uy-beo/25.jpg",
          "/images/projects/lau-uy-beo/26.jpg",
          "/images/projects/lau-uy-beo/27.jpg",
          "/images/projects/lau-uy-beo/28.jpg",
          "/images/projects/lau-uy-beo/29.jpg",
          "/images/projects/lau-uy-beo/30.jpg",
          "/images/projects/lau-uy-beo/31.jpg",
          "/images/projects/lau-uy-beo/32.jpg",
        ],
      },
      "spa-101-nguyen-hoang": {
        id: 8,
        title: "Spa - 101 Nguyễn Hoàng",
        code: "spa-101-nguyen-hoang",
        images: [
          "/images/projects/spa-101-nguyen-hoang/1.jpg",
          "/images/projects/spa-101-nguyen-hoang/2.jpg",
          "/images/projects/spa-101-nguyen-hoang/3.jpg",
          "/images/projects/spa-101-nguyen-hoang/4.jpg",
          "/images/projects/spa-101-nguyen-hoang/5.jpg",
          "/images/projects/spa-101-nguyen-hoang/6.jpg",
          "/images/projects/spa-101-nguyen-hoang/7.jpg",
          "/images/projects/spa-101-nguyen-hoang/8.jpg",
          "/images/projects/spa-101-nguyen-hoang/9.jpg",
          "/images/projects/spa-101-nguyen-hoang/10.jpg",
          "/images/projects/spa-101-nguyen-hoang/11.jpg",
          "/images/projects/spa-101-nguyen-hoang/12.jpg",
          "/images/projects/spa-101-nguyen-hoang/13.jpg",
          "/images/projects/spa-101-nguyen-hoang/14.jpg",
          "/images/projects/spa-101-nguyen-hoang/15.jpg",
        ],
      },
      "spa-chi-canh": {
        id: 8,
        title: "Spa Chị Cảnh",
        code: "spa-chi-canh",
        images: [
          "/images/projects/spa-chi-canh/1.jpg",
          "/images/projects/spa-chi-canh/2.jpg",
          "/images/projects/spa-chi-canh/3.jpg",
          "/images/projects/spa-chi-canh/4.jpg",
          "/images/projects/spa-chi-canh/5.jpg",
          "/images/projects/spa-chi-canh/6.jpg",
          "/images/projects/spa-chi-canh/7.jpg",
          "/images/projects/spa-chi-canh/8.jpg",
          "/images/projects/spa-chi-canh/9.jpg",
          "/images/projects/spa-chi-canh/10.jpg",
          "/images/projects/spa-chi-canh/11.jpg",
          "/images/projects/spa-chi-canh/12.jpg",
          "/images/projects/spa-chi-canh/13.jpg",
          "/images/projects/spa-chi-canh/14.jpg",
          "/images/projects/spa-chi-canh/15.jpg",
          "/images/projects/spa-chi-canh/16.jpg",
          "/images/projects/spa-chi-canh/17.jpg",
          "/images/projects/spa-chi-canh/18.jpg",
          "/images/projects/spa-chi-canh/19.jpg",
          "/images/projects/spa-chi-canh/20.jpg",
          "/images/projects/spa-chi-canh/21.jpg",
          "/images/projects/spa-chi-canh/22.jpg",
          "/images/projects/spa-chi-canh/23.jpg",
          "/images/projects/spa-chi-canh/24.jpg",
          "/images/projects/spa-chi-canh/25.jpg",
          "/images/projects/spa-chi-canh/26.jpg",
          "/images/projects/spa-chi-canh/27.jpg",
        ],
      },
    },
  },
  home: {
    experienceYears: 8,
    projects: 500,
    customers: 321,
    advantages: [
      {
        id: 1,
        title:
          "Thiết kế & thi công đa dạng các công trình (Xây dựng, nội thất)",
        icon: "flaticon-idea",
        list_details: [
          {
            id: 1,
            content: "Biệt thư, nhà dân, chung cư…",
          },
          {
            id: 2,
            content:
              "Công trình công cộng : Trung tâm thương mại, Trường học, thư viện…",
          },
          {
            id: 3,
            content:
              "Công trình dịch vụ : Quán caffee, Nhà hàng, Game, Chuỗi spa làm đẹp, hiệu thuốc…",
          },
          {
            id: 4,
            content: "Văn phòng làm việc…",
          },
        ],
      },
      {
        id: 2,
        title: "Luôn lấy tiêu chuẩn 4Đ làm kim chỉ nam",
        icon: "flaticon-compass-symbol",
        list_details: [
          {
            id: 1,
            content: "Đúng số lượng",
          },
          {
            id: 2,
            content: "Đúng thời gian",
          },
          {
            id: 3,
            content: "Đúng chất lượng",
          },
          {
            id: 4,
            content: "Đúng giá thành",
          },
        ],
      },
      {
        id: 3,
        title: "Đội ngũ nhân sự luôn sẵn hàng phụ vụ",
        icon: "flaticon-layers",
        list_details: [
          {
            id: 1,
            content:
              "Bảo hành có mặt trong vòng 48h : Kể từ khi nhận được yêu của KH",
          },
          {
            id: 2,
            content: "Tư vấn khách hàng, đối tác 24/24",
          },
        ],
      },
    ],
  },
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
};

export const DataSeo = {
  seoTitle: "CÔNG TY TNHH KIẾN TRÚC & NỘI THẤT MỘC VIỆT",
  seoDescription:
    "Mộc Việt là đơn vị tư vấn, thiết kế và thi công đồ gỗ nội thất với nhiều năm kinh nghiệm. Chúng tôi chuyên thiết kế và thi công nhà phố, biệt thự, căn hộ cao cấp và nhà máy công xưởng.",
  seoImage: "https://mocviet.netlify.app/images/slide/slide_2.webp",
};
