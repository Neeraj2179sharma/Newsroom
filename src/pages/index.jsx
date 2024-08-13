import Image from 'next/image';
import Slider from 'react-slick';
import GirlSquad from '../Images/GirlSquad.png'
import DeskImage from "../Images/desk.png";
import SquadImage from "../Images/multimen.jpg";
import EnterImage from "../Images/entertain.png";
import SportImage from "../Images/sport.png";
import FeatOne from "../Images/featone.png";
import FeatTwo from "../Images/feattwo.png";
import FeatThree from "../Images/featthree.png";
import FeatFour from "../Images/featfour.png";
import CatImage from "../Images/cat.png";
import ChildImage from "../Images/child.png";
import MobileImage from "../Images/mobile.png";
import RunImage from "../Images/rungirl.png";
import LapiiImage from "../Images/lapii.png";
import TeamImage from "../Images/team.png";
import CodeImage from "../Images/codex.png";
import GunImage from "../Images/gun.png";
import MobImage from "../Images/mobgirl.png";
import ExerImage from "../Images/exercise.png";
export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var featslide = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  var entertain = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#f2f2f2] home_sec">
      <div className="max-w-screen-xl mx-auto ">
        <div className="py-10 flex banner_slide">
          <div className="w-[65%] mr-[30px] ">
            <Slider {...settings}>
              <div className="relative ">
                <Image className="w-full " src={GirlSquad} alt="" />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white ">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr
                    sea sed
                  </h2>
                </div>
              </div>
              <div className="relative">
                <Image className="w-full" src={GirlSquad} alt="" />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr
                    sea sed
                  </h2>
                </div>
              </div>
              <div className="relative">
                <Image className="w-full" src={GirlSquad} alt="" />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr
                    sea sed
                  </h2>
                </div>
              </div>
              <div className="relative">
                <Image className="w-full" src={GirlSquad} alt="" />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr
                    sea sed
                  </h2>
                </div>
              </div>
              <div className="relative">
                <Image className="w-full" src={GirlSquad} alt="" />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr
                    sea sed
                  </h2>
                </div>
              </div>
              <div className="relative">
                <Image className="w-full" src={GirlSquad} alt="" />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed amet ipsum lorem. Dolores et erat et elitr
                    sea sed
                  </h2>
                </div>
              </div>
            </Slider>
          </div>
          <div className="w-[35%]">
            <div className="bg-white flex justify-between items-center px-4 py-2 mb-4">
              <h2 className="text-[#343a40] text-[28px] font-bold">
                Categories
              </h2>
              <a href="#">View All</a>
            </div>
            <a
              href="#"
              className="relative h-[99px] flex items-center justify-center mb-4"
            >
              <Image
                src={SquadImage}
                className="h-[99px] w-full object-cover"
                alt=""
              />
              <h1 className="text-white text-[24px] font-medium absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0 flex justify-center items-center">
                Business
              </h1>
            </a>
            <a
              href="#"
              className="relative h-[99px] flex items-center justify-center mb-4"
            >
              <Image src={DeskImage} className="h-[99px] object-cover" alt="" />
              <h1 className="text-white text-[24px] font-medium absolute  bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0 flex justify-center items-center">
                Technology
              </h1>
            </a>
            <a
              href="#"
              className="relative h-[99px] flex items-center justify-center mb-4"
            >
              <Image src={EnterImage} className="h-[99px] object-cover" alt="" />
              <h1 className="text-white text-[24px] font-medium absolute  bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0 flex justify-center items-center">
                Entertainment
              </h1>
            </a>
            <a
              href="#"
              className="relative h-[99px] flex items-center justify-center mb-4"
            >
              <Image src={SportImage} className="h-[99px] object-cover" alt="" />
              <h1 className="text-white text-[24px] font-medium absolute  bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0 flex justify-center items-center">
                Sports
              </h1>
            </a>
          </div>
        </div>
        <div className="pb-10 banner_slide feat_slide">
          <div className="bg-white flex justify-between items-center px-4 py-2 mb-4">
            <h2 className="text-[#343a40] text-[28px] font-bold">Featured</h2>
            <a href="#">View All</a>
          </div>
          <Slider {...featslide}>
            <div>
              <div className="mr-[30px]  relative">
                <Image
                  className="w-full h-[300px] object-cover"
                  src={FeatOne}
                  alt=""
                />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white ">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed ipsum lorem
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="mr-[30px]  relative">
                <Image
                  className="w-full h-[300px] object-cover"
                  src={FeatTwo}
                  alt=""
                />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed ipsum lorem
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="mr-[30px]  relative">
                <Image
                  className="w-full h-[300px] object-cover"
                  src={FeatThree}
                  alt=""
                />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed ipsum lorem
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="mr-[30px]  relative">
                <Image
                  className="w-full h-[300px] object-cover"
                  src={FeatFour}
                  alt=""
                />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed ipsum lorem
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="mr-[30px]  relative">
                <Image
                  className="w-full h-[300px] object-cover"
                  src={FeatOne}
                  alt=""
                />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed ipsum lorem
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="mr-[30px]  relative">
                <Image
                  className="w-full h-[300px] object-cover"
                  src={FeatTwo}
                  alt=""
                />
                <div className="absolute bg-[rgba(0,0,0,0.5)] h-full w-full top-0 left-0"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h4 className="text-base">Technology / January 01, 2045</h4>
                  <h2 className="font-bold text-[32px]">
                    Sanctus amet sed ipsum lorem
                  </h2>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex banner_slide entertain_slide pb-10">
          <div className="w-[50%] mr-[30px]">
            <div className="bg-white flex justify-between items-center px-4 py-2 mb-4">
              <h2 className="text-[#343a40] text-[28px] font-bold">
                Entertainment
              </h2>
            </div>
            <Slider {...entertain}>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={ChildImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={MobileImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={CatImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={ChildImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={MobileImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={CatImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="w-[50%]">
            <div className="bg-white flex justify-between items-center px-4 py-2 mb-4">
              <h2 className="text-[#343a40] text-[28px] font-bold">Sports</h2>
            </div>
            <Slider {...entertain}>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={RunImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={LapiiImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={TeamImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={RunImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={LapiiImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-[30px] bg-white">
                  <Image
                    className="w-full h-[150px] object-cover"
                    src={TeamImage}
                    alt=""
                  />
                  <div className="p-[30px]">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-[24px] text-[#343a40]">
                      Sanctus amet sed ipsum lorem
                    </h2>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="flex pb-10">
          <div className="w-[65%] mr-[30px]">
            <Image className="w-full mb-8" src={CodeImage} alt="" />
            <div className="bg-white flex justify-between items-center px-4 py-2 mb-4">
              <h2 className="text-[#343a40] text-[28px] font-bold">Latest</h2>
              <a href="#">View All</a>
            </div>
            <div className="flex mb-4">
              <div className="mr-[30px] bg-white">
                <Image
                  className="w-full h-[200px] object-cover"
                  src={TeamImage}
                  alt=""
                />
                <div className="p-[30px]">
                  <h4 className="text-base">
                    <span className="text-[#ed1c24]">Technology</span> / January
                    01, 2045
                  </h4>
                  <h2 className="font-medium text-[24px] text-[#343a40]">
                    Est stet amet ipsum stet clita rebum duo
                  </h2>
                  <p className="text-[#6d757d] text-base font-normal">
                    Rebum dolore duo et vero ipsum clita, est ea sed duo diam
                    ipsum, clita at justo, lorem amet vero eos sed sit...
                  </p>
                </div>
              </div>
              <div className=" bg-white">
                <Image
                  className="w-full h-[200px] object-cover"
                  src={RunImage}
                  alt=""
                />
                <div className="p-[30px]">
                  <h4 className="text-base">
                    <span className="text-[#ed1c24]">Technology</span> / January
                    01, 2045
                  </h4>
                  <h2 className="font-medium text-[24px] text-[#343a40]">
                    Est stet amet ipsum stet clita rebum duo
                  </h2>
                  <p className="text-[#6d757d] text-base font-normal">
                    Rebum dolore duo et vero ipsum clita, est ea sed duo diam
                    ipsum, clita at justo, lorem amet vero eos sed sit...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-[30px]">
                <div className="flex items-center bg-white mb-4">
                  <Image
                    className="h-[100px] w-[100px] object-cover"
                    src={GunImage}
                    alt=""
                  />
                  <div className="px-4">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-base text-[#343a40]">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </h2>
                  </div>
                </div>
                <div className="flex items-center bg-white ">
                  <Image
                    className="h-[100px] w-[100px] object-cover"
                    src={MobImage}
                    alt=""
                  />
                  <div className="px-4">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-base text-[#343a40]">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </h2>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center bg-white mb-4">
                  <Image
                    className="h-[100px] w-[100px] object-cover"
                    src={MobImage}
                    alt=""
                  />
                  <div className="px-4">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-base text-[#343a40]">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </h2>
                  </div>
                </div>
                <div className="flex items-center bg-white ">
                  <Image
                    className="h-[100px] w-[100px] object-cover"
                    src={GunImage}
                    alt=""
                  />
                  <div className="px-4">
                    <h4 className="text-base">
                      <span className="text-[#ed1c24]">Technology</span> /
                      January 01, 2045
                    </h4>
                    <h2 className="font-medium text-base text-[#343a40]">
                      Lorem ipsum dolor sit amet consec adipis elit
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%]">
            <div className="bg-white flex justify-between items-center px-4 py-2 mb-4">
              <h2 className="text-[#343a40] text-[28px] font-bold">Tranding</h2>
            </div>
            <div className="flex items-center bg-white mb-4">
              <Image
                className="h-[100px] w-[100px] object-cover"
                src={GunImage}
                alt=""
              />
              <div className="px-4">
                <h4 className="text-base">
                  <span className="text-[#ed1c24]">Technology</span> / January
                  01, 2045
                </h4>
                <h2 className="font-medium text-base text-[#343a40]">
                  Lorem ipsum dolor sit amet consec adipis elit
                </h2>
              </div>
            </div>
            <div className="flex items-center bg-white mb-4">
              <Image
                className="h-[100px] w-[100px] object-cover"
                src={MobImage}
                alt=""
              />
              <div className="px-4">
                <h4 className="text-base">
                  <span className="text-[#ed1c24]">Technology</span> / January
                  01, 2045
                </h4>
                <h2 className="font-medium text-base text-[#343a40]">
                  Lorem ipsum dolor sit amet consec adipis elit
                </h2>
              </div>
            </div>
            <div className="flex items-center bg-white mb-4">
              <Image
                className="h-[100px] w-[100px] object-cover"
                src={ExerImage}
                alt=""
              />
              <div className="px-4">
                <h4 className="text-base">
                  <span className="text-[#ed1c24]">Technology</span> / January
                  01, 2045
                </h4>
                <h2 className="font-medium text-base text-[#343a40]">
                  Lorem ipsum dolor sit amet consec adipis elit
                </h2>
              </div>
            </div>
            <div className="flex items-center bg-white mb-4">
              <Image
                className="h-[100px] w-[100px] object-cover"
                src={MobImage}
                alt=""
              />
              <div className="px-4">
                <h4 className="text-base">
                  <span className="text-[#ed1c24]">Technology</span> / January
                  01, 2045
                </h4>
                <h2 className="font-medium text-base text-[#343a40]">
                  Lorem ipsum dolor sit amet consec adipis elit
                </h2>
              </div>
            </div>
            <div className="flex items-center bg-white mb-8">
              <Image
                className="h-[100px] w-[100px] object-cover"
                src={GunImage}
                alt=""
              />
              <div className="px-4">
                <h4 className="text-base">
                  <span className="text-[#ed1c24]">Technology</span> / January
                  01, 2045
                </h4>
                <h2 className="font-medium text-base text-[#343a40]">
                  Lorem ipsum dolor sit amet consec adipis elit
                </h2>
              </div>
            </div>
            <div className="bg-white flex justify-between items-center px-4 py-2 mb-4">
              <h2 className="text-[#343a40] text-[28px] font-bold">Tags</h2>
            </div>
            <ul className="flex flex-wrap">
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Politics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Corporate
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Sports
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Health
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Science
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Foods
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Entertainment
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  Travel
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#6c757d] border border-[#6c757d] text-sm font-normal px-3 py-2 hover:bg-[#6c757d] hover:text-white mr-3 mb-3"
                >
                  lifestyle
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
