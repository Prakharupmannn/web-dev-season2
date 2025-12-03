import { RevenueCard, RevenueCard1, RevenueCard2 } from "./components/RevenueCard"


function App() {

  return (
    <div className='grid grid-cols-4 p-10'>
    <RevenueCard title={"Next Payout"} amount={"2,312.23"} orderCount={23}/>
    <RevenueCard1 title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/>
    <RevenueCard2 title={"Amount Processed"} amount={"23,92,312.19"}/>
    </div>
  )
}

export default App
