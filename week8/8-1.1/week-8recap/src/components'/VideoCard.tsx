
export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer">
        <img className="rounded-xl" src={props.image} alt="" />
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-1 ">
                <img className="rounded-full w-15 h-15" src={props.thumbimage} alt="" />
            </div>
            <div className="col-span-11 pl-1">
                <div>
                {props.title} 
                </div> 
                <div className="col-span-11 text-gray-400 text-base">
                {props.author}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                {props.views} | {props.timestamp}
                </div>
            </div>            
        </div>
    </div>
}
