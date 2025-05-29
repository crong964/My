import { useState } from "react";
import type { iPhoto } from "./interface";
import { Image } from 'antd';

export default function Photos(p: { ls: iPhoto[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 text-sm mt-4">
            <Image.PreviewGroup>
                {p.ls.map((v) => {
                    return (
                        <div
                            className="col-span-1 self-center relative box-content">
                            <Image src={v.thumbnailUrl} alt={v.title} srcSet="" />
                        </div>
                    )
                })}
            </Image.PreviewGroup>

        </div>
    )
}