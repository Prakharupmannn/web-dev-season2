// import Image from "next/image";
// import { VideoCard} from "@/components'/VideoCard"
// export default function Home() {
//   return (
//     <div>
//       <VideoCard
//       title={"How to learn coding in 30days | 30 day plan | code with me"}
//       image={"cube.png"}
//       thumbimage={"thumb.png"}
//       author={"Prakhar Upman"}
//       views={"44M"}
//       timestamp={"2 day ago"}
//       ></VideoCard>
//     </div>
//   );
// }












import Image from "next/image";
import { VideoCard} from "@/components'/VideoCard"
import { VideoGrid } from "@/components'/VideoGrid";
import { AppBar } from "@/components'/AppBar";
import { LeftBar } from "@/components'/LeftBar";
export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="flex">
      <LeftBar />
      <VideoGrid />
      </div>
      
    </div>
  );
}
