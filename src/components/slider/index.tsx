import { ReactNode } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



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
  const {sliderList, className, sliderParameters } = props;


  const {breakPoints} = sliderParameters;

  return (
    <Swiper
      navigation={sliderParameters.navigation} modules={[Navigation]} className={className}
      {...sliderParameters.default}
      breakpoints={
        breakPoints
      }
    >
      {sliderList.map((slider,index)=> <SwiperSlide key={index}>{slider}</SwiperSlide>)}
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
