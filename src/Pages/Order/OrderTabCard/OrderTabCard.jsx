import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const OrderTabCard = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid md:grid-cols-3 gap-4">
              {items.map((item) => (
                <FoodCard key={item.id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </>
  );
};

export default OrderTabCard;
