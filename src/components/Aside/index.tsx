import Image from "next/image";
import logo from './logoHeader.png'


export default function Aside () {

    return (
        <aside className="rounded-lg bg-aside-background py-10 px-4 max-sm:hidden">
            <Image className="m-h-full w-maxx" src={logo}  alt=""/>
        </aside>
    )

}