import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title : "How to learn coding in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"
},{
   title : "How to learn playing in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"  
},{
     title : "How to learn jumping in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"
},{  title : "How to learn coding in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"
},{
   title : "How to learn playing in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"  
},{
     title : "How to learn jumping in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"
},{
      title : "How to learn coding in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"
},{
   title : "How to learn playing in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"  
},{
     title : "How to learn jumping in 30days | 30 day plan | code with me",
    image : "cube.png",
    thumbimage : "thumb.png",
    author : "Prakhar Upman",
    views : "44M",
    timestamp : "2 day ago"
}]
export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {VIDEOS.map(video => <div>
            <VideoCard
            title={video.title}
            image={video.image}
            thumbimage={video.thumbimage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
            ></VideoCard>
        </div>)

        }
    </div>
}