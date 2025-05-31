import { Link } from "react-router-dom";
import type { iAlbum } from "./interface";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";


export default function AlbumCell(p: iAlbum) {
    return (
        <tr className="bg-white">
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td className="p-4" >

                <div className="w-max">
                    <Link to={'/user/' + p.userId} className="flex items-center gap-2">
                        <img className="size-7.5"
                            src={`https://ui-avatars.com/api/?name=${p.name.replace(" ", "+")}&background=random&rounded=true`}
                            alt={p.name} srcSet="" />
                        <div className="text-blue-400 max-lg:w-min" >{p.name}</div>
                    </Link>
                </div>

            </td>
            <td className="p-4 ">
                <Link to={'/albums/' + p.id}  >
                    <Button
                        variant="outlined"
                        type="default"
                        icon={<EyeOutlined />}
                    >
                        Show
                    </Button>
                </Link>
            </td>
        </tr>
    )
}