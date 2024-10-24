import { ReactNode } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//  import "swiper/swiper.min.css";
// import "swiper/scss";
// import "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';



interface Props {
	sliderList:ReactNode[],
  className?: string,
  sliderParameters: {
    navigation: boolean,
		default: {
			spaceBetween: number,
			slidesPerView: number
		},
		breakPoints?: {
			768: {
			spaceBetween: number,
			slidesPerView: number,
			}
		}

  },
}

function Slider ({...props}: Props) {
  // const {sliderList, className, sliderParameters = {
  //   navigation: true,
	// 	default: {
	// 		spaceBetween: 10,
	// 		slidesPerView: 6
	// 	},
  // }} = props;
  const {sliderList, className, sliderParameters } = props;


  const {breakPoints} = sliderParameters;

  return (
    <Swiper
      navigation={sliderParameters.navigation} modules={[Navigation]} className={className}
      {...sliderParameters.default}
      // spaceBetween={sliderParameters.default.spaceBetween}
      // slidesPerView={sliderParameters.default.slidesPerView}
      breakpoints={
        breakPoints
      }
      // breakpoints={{
        // 768: {
        //   slidesPerView: 6,
        //   spaceBetween: 20,
        // },
        // 1024: {
        //   slidesPerView: 6,
        //   spaceBetween: 10,
        // },
      // }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {sliderList.map((slider,index)=> <SwiperSlide key={index}>{slider}</SwiperSlide>)}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;


// import { ReactNode } from "react";

// interface Props {
// 	label?: ReactNode,
// 	children?: ReactNode,
// 	classInput?: string,
// 	value?:string;
// }

// function Field({ label, children, classInput, value }: Props) {
//   const classInputHasValue = value && "has-value";
 
//   return (
//     <div className={`field ${classInputHasValue}`}>
// 		{label &&<label className={'field__label'}>{label}</label>}
// 		<div className={`field__input ${classInput}`}>{children}</div>
//     </div>
//   );
// }

// export default Field;
