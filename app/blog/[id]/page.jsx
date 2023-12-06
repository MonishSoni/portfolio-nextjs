"use client"
import {
    Images
} from "../../../public/images/index"
import Image from "next/image"
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import { FacebookIcon, LinkedinIcon, RedditIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";


export default function SingleBlog() {
    return (
        <div className="flex flex-col items-center px-[2%] md:px-[8%] lg:px-[20%] py-8">
            <div className="w-full">


                <div className=" w-fit  px-2 py-1.5 md:px-3 mb-3 bg-blue font-bold rounded-md justify-center items-center gap-1 inline-flex">
                    <div className="text-white text-xs md:text-sm font-medium leading-tight">Technology</div>
                </div>
                <div className="w-[100%] text-white text-xl md:text-2xl lg:text-4xl font-semibold  leading-6">The Impact of Technology on the Workplace: How Technology is Changing</div>
                <div className='flex justify-between items-center mt-5'>
                    <div className='flex justify-between items-center gap-2'>
                        <Image src={Images.profile} width={36} height={36} alt='profile' />
                        <p className='text-xs text-white md:text-sm font-medium'>Monish Soni</p>
                    </div>
                    <p className='text-xs md:text-sm text-white'>10 August 2023</p>
                </div>
                <Image src={Images.postimg} width={850} height={500} alt='Post Img' className="mt-3 mb-5 rounded w-[100%]" />

                <h2 className="w-full mb-1 md:mb-1 text-white text-lg md:text-xl font-semibold  leading-7">Research Your Destination</h2>

                <div className="w-full text-gray-400 text-sm md:text-lg  font-normal  leading-5 md:leading-6 mb-5">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.<br /><br />One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</div>
                <h2 className="w-full mb-1 md:mb-1 text-white text-lg md:text-xl font-semibold  leading-7">Research Your Destination</h2>

                <div className="w-full text-gray-400 text-sm md:text-lg  font-normal  leading-5 md:leading-6 mb-5">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.<br /><br />One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</div>

                <Image src={Images.postimg} width={850} height={500} alt='Post Img' className="mt-3 mb-5 rounded w-[100%]" />

                <h2 className="w-full mb-1 md:mb-1 text-white text-lg md:text-xl font-semibold  leading-7">Research Your Destination</h2>

                <div className="w-full text-gray-400 text-sm md:text-lg  font-normal  leading-5 md:leading-6 mb-5">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.<br /><br />One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</div>
                <h2 className="w-full mb-1 md:mb-1 text-white text-lg md:text-xl font-semibold  leading-7">Research Your Destination</h2>

                <div className="w-full text-gray-400 text-sm md:text-lg  font-normal  leading-5 md:leading-6 mb-5">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.<br /><br />One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</div>

                <div className="flex flex-col items-center gap-3">
                    <p className="text-xl font-semibold text-white">Share</p>
                    <div className="flex justify-center items-center gap-5">


                        <FacebookShareButton url={window.location.href}>
                            <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>

                        <LinkedinShareButton url={window.location.href}>
                            <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton>

                        <RedditShareButton url={window.location.href}>
                            <RedditIcon size={32} round={true} />
                        </RedditShareButton>

                        <TelegramShareButton url={window.location.href}>
                            <TelegramIcon size={32} round={true} />
                        </TelegramShareButton>

                        <TwitterShareButton url={window.location.href}>
                            <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>

                        <WhatsappShareButton url={window.location.href}>
                            <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                    </div>
                </div>


            </div>
        </div>
    )
}