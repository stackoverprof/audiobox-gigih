import React from 'react';
import { FaPlay } from 'react-icons/fa';

interface Props {
	data: any;
}

// [TODO] : fallback for image, ad actually all data

const TrackCardDisplay = ({ data }: Props) => {
	return (
		<div className="h-full flex-sc col backdrop-blur-sm pt-4 w-full bg-white bg-opacity-10 rounded-lg">
			<div className="relative overflow-hidden mb-4 w-40 h-40 bg-white bg-opacity-10 rounded-lg group">
				<img src={data.album.images[0]?.url || ''} alt="" />
				<button className="absolute flex-cc top-0 left-0 bg-black bg-opacity-60 opacity-0 transition hover:bg-opacity-75 group-hover:opacity-100 full">
					<div className="flex-cc w-20 h-20 rounded-full border-2">
						<FaPlay size={36} className="ml-1" />
					</div>
				</button>
			</div>
			<div className="flex-ss col w-40">
				<h3 className="overflow-hidden mb-3 w-full font-semibold text-left line-clamp-1">
					<span className="text-theme-pink">#{0 + 1}</span>&ensp;{data.name}
				</h3>
				<p className="mb-1 w-full text-sm line-clamp-1">
					{data.artists.map((artist, i, arr) => (
						<span key={i}>
							{artist.name}
							{i + 1 < arr.length && ', '}
						</span>
					))}
				</p>
				<p className="w-full text-xs opacity-40 line-clamp-1 -sm:y-32">{data.album.name}</p>
			</div>
		</div>
	);
};

export default TrackCardDisplay;
