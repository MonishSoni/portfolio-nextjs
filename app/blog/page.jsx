import Blogcard from "@/components/Blogcard"
import {
    Images
} from "../../public/images/index"
import Image from "next/image"

export default function Blog() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="mb-5 mt-3" >Blog</h1>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 lg:gap-x-6 xl:gap-x-10">
                <Blogcard image={Images.thumb} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />
                <Blogcard image={Images.thumb1} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />
                <Blogcard image={Images.thumb2} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />
                <Blogcard image={Images.thumb3} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />
                <Blogcard image={Images.thumb} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />
                <Blogcard image={Images.thumb1} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />
                <Blogcard image={Images.thumb2} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />
                <Blogcard image={Images.thumb3} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />
                <Blogcard image={Images.thumb2} title="The Impact of Technology on the Workplace: How Technology is Changing" date="August 20, 2023" tag="Technology" />

            </div>

        </div>
    )
}