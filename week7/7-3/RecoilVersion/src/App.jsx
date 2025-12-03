// import React from "react"
// import { RecoilRoot , selector, useRecoilState, useRecoilValue } from "recoil"
// import { jobsAtom, networkAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from "./atoms"

// function App() {
//   return ( 
//   <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
//   )
// }

// function MainApp() {
//   const networkNotificationCount = useRecoilValue(networkAtom)
//   const jobsAtomCount = useRecoilValue(jobsAtom) 
//   const notificationsAtomCount = useRecoilValue(notificationsAtom)
//   const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom)

//   const totalNotificationSelectorCount = useRecoilValue(totalNotificationSelector)
//   return (
//     <div>
//     <button>Home</button>

//     <button> My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
//     <button>Jobs {jobsAtomCount}</button>
//     <button>Messaging ({messagingAtomCount})</button>
//     <button>Notification ({notificationsAtomCount})</button>

//     <button onClick={()=>{
//       setMessagingAtomCount(messagingAtomCount+1);
//     }}>Me ({totalNotificationSelectorCount})</button>
//   </div> 
//   ) 
// }
// export default App












import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
