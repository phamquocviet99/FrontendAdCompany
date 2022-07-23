import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Style/Service.css";
import BoxService1 from "../components/BoxService1/BoxService1";
import BoxService2 from "../components/BoxService2/BoxService2";
import OnTop from "../components/BacktoTop/OnTop";

function Service() {
  useEffect(() => {
    document.title = "DỊCH VỤ";
  }, []);
  const listService = [
    {
      id: "1",
      name: "thiết kế cảnh quan",
      image1:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Ftkcanhquan-1.jpg?alt=media&token=1b2ebc38-3691-491f-98d6-4bc27e42ac42",
      image2:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Ftkcanhquan-2.jpg?alt=media&token=5eeedb29-0af0-4821-ac66-06179a7584dc",
      summary:
        "L.A.D với phướng châm: - Tư vấn chi tiết - Chi phí hợp lý - Dự toán chặt chẽ - Thiết kế thiết thực",
      link: "/du-an",
    },
    {
      id: "2",
      name: "thiết kế kiến trúc - nội thất",
      image1:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Ftknoithat-1.png?alt=media&token=716eb00d-9759-4244-8562-d593442ed0c3",
      image2:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Ftknoithat-2.jpg?alt=media&token=6f5b68e5-dbf8-4a82-8dba-2b74b44b9427",
      summary:
        "L.A.D với phương châm: - Tư vấn chi tiết - Chi phí hợp lý - Dự toán chặt chẽ - Thiết kế thiết thực",
      link: "/du-an",
    },
    {
      id: "3",
      name: "thi công cảnh quan",
      image1:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Ftccanhquan-1.jpg?alt=media&token=1d3b2535-aba1-4299-a69f-4f6e423c6216",
      image2:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Ftccanhquan-2.jpg?alt=media&token=9eb01e08-2dfe-4e36-b544-30da7cbc84f5",
      summary:
        "Với đội ngũ Kỹ sư cảnh quan có chuyên môn sâu rộng, dày kinh nghiệm, đam mê nghề nghiệp, L.A.D luôn đem lại cho khách hàng những sản phẩm hoàn thiện đảm bảo về tiến độ, kỹ thuật thi công cũng như chất lượng công trình phù hợp với ngân sách. Nguồn cung ứng cây xanh, vật liệu cảnh quan phong phú, chất lượng, sẵn sàng đáp ứng cho các dự án.",
      link: "/du-an",
    },
    {
      id: "4",
      name: "cung cấp cây xanh công trình",
      image1:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fcayxanhcongtrinh-2.jpg?alt=media&token=e44c55b8-f374-4c9e-bfbc-40c5e5d80b68",
      image2:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fcayxanhct-1.jpg?alt=media&token=f8cfab85-bd06-476e-85c5-9116e63f9715",
      summary:
        "Với hơn 35 đối tác nhà vườn và đội ngũ Kỹ sư Cảnh quan nhiều kinh nghiệm, L.A.D sẽ là đơn vị Cung cấp cây xanh công trình uy tín với chất lượng tốt nhất, giá thành hợp lý nhất. ",
      link: "/san-pham",
    },
    {
      id: "5",
      name: "chăm sóc - bảo dưỡng cảnh quan",
      image1:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fcscanhquan-1.jpg?alt=media&token=85c19fdf-d7b3-47da-a0f7-5f3e5f8f719a",
      image2:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fcscanhquan-2.jpg?alt=media&token=e7a7487f-3efb-4cc4-a8c7-8f4f6e557c14",
      summary:
        "Để duy trì vẻ đẹp của khu vườn hay mảng xanh mà bạn đã tốn nhiều chi phí để xây dựng thì việc chăm sóc và bảo dưỡng cũng là một vấn đề rất quan trọng cần được quan tâm. Hãy liên hệ L.A.D đề được tư vấn cách thức chăm sóc cũng như những bệnh thường gặp của cây xanh... Hoặc nếu bạn quá bận rộn, không có thời gian chăm sóc cho mảng xanh của mình, đừng lo lắng, hãy để L.A.D  giúp bạn làm điều đó.",
      link: "/san-pham",
    },
    {
      id: "6",
      name: "cung cấp và cho thuê cây nội thất",
      image1:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fcaynoithat-1.jpg?alt=media&token=6dccd9a5-1004-489a-8ccc-949c7d263ca4",
      image2:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fcaynoithat-2.png?alt=media&token=6df7914c-90d9-4f77-8e45-128215232e09",
      summary:
        "Khởi nguồn từ nhu cầu làm đẹp không gian sống cũng như nơi làm việc, vui chơi giải trí, L.A.D cung cấp các loại cây cảnh nội thất đẹp phù hợp vơí mọi nhu cầu. Đến với chúng tôi, bạn sẽ có cơ hội sáng tạo nên một môi trường sống cũng như làm việc, vui chơi, giải trí tươi mới, tràn đầy sức sống để mọi người đều cảm nhận được không gian thiên nhiên thoải mái và tận hưởng những phút giây hòa mình cùng những giá trị thực của cuộc sống.",
      link: "/san-pham",
    },
    {
      id: "7",
      name: "cung cấp vật tư cảnh quan",
      image1:
      "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fvtcanhquana.jpg?alt=media&token=f3e1ed1a-4b1b-4fad-83d4-cb28c2cad1b4",
      image2:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fvtcanhquan.jpg?alt=media&token=078a45e3-303a-46c5-8bf4-d23546c151ee",
      summary:
        "L.A.D chuyên cung cấp đầy đủ vật tư canh quan, phục vụ công tác duy trì chăm sóc bảo dưỡng cây xanh cảnh quan trong thành phố và các khu vực lân cận.",
      link: "/san-pham",
    },
    {
      id: "8",
      name: "cung cấp cá koi",
      image1:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fkoi1.jpg?alt=media&token=6f8f36e3-ad78-4148-9548-720af32d182a",
      image2:
        "https://firebasestorage.googleapis.com/v0/b/ad-company-345502.appspot.com/o/images%2Fservice%2Fkoi2.jpeg?alt=media&token=93f99325-a75d-4abf-a6cb-4b31a86ceba8",
      summary:
        "L.A.D chuyên cung cấp trọn gói các dịch vụ liên quan đến thiết kế, thi công hồ Cá Koi Nhật Bản Chuyên Nghiệp, đồng thời cung cấp cá Koi cho hồ của bạn.",
      link: "/san-pham",
    },
  ];
  return (
    <div>
      <div className="banner-service-page">
        {" "}
        <div className="container">
          <div className="title-about">
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              dịch vụ
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="service-page-1">
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">Dịch vụ của chúng tôi</p>
          </div>
          {listService?.map((s, index) =>
            s.id % 2 === 0 ? (
              <BoxService2 service={s} />
            ) : (
              <BoxService1 service={s} />
            )
          )}
        </div>
      </div>
      <OnTop/>
    </div>
  );
}

export default Service;
