import SwiperRecommend from '@/components/SwiperRecommend';
import BannerRecommend from '@/components/BannerRecommend';

function Recommend() {
  return (
    <>
      <div className="flex-col items-center bg-white py-[40px]">
        <h2 className="text-center text-[28px] font-[700] mb-[38px] text-[#1E1E1E]">
          추천 콘텐츠
        </h2>
        <div>
          <SwiperRecommend />
        </div>
      </div>
      <div className="flex justify-center bg-white cursor-pointer">
        <BannerRecommend />
      </div>
    </>
  );
}

export default Recommend;
