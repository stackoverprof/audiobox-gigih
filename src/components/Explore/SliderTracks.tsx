import React from 'react';
import TrackCardDisplay from './TrackCardDisplay';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
	data: any[];
	ordered: boolean;
	highlighted?: boolean;
}

const SliderTracks = ({ data, ordered, highlighted }: Props) => {
	return (
		<div>
			<Swiper
				slidesPerView="auto"
				spaceBetween={32}
				grabCursor
				freeMode
				modules={[FreeMode]}
				className="absolute right-0 w-full h-full"
			>
				<SwiperSlide style={{ width: highlighted ? 480 : 540, transition: 'all 0.2s' }} />
				{data
					.filter((x) => x)
					.map((item, i) => (
						<SwiperSlide style={{ width: 192 }} key={i}>
							<TrackCardDisplay data={item} index={i} ordered={ordered} />
						</SwiperSlide>
					))}
				<SwiperSlide style={{ width: 230 }} />
			</Swiper>
		</div>
	);
};

export default SliderTracks;
