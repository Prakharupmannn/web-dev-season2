
export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
   
    return <div className="bg-blue-700 rounded text-white p-4 hover:bg-blue-900">
        <div className="flex ">
            <div>
               {title} 
            </div>
            <div className="flex justify-center flex-col ml-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 16 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="font-bold text-xl">
                ₹ {amount}
            </div>
            
                {orderCount ? <div className="flex ">
                    <div className="underline">{orderCount} Orders</div> 
                       
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

            </div> : null}
        </div>
        <div className="flex justify-between bg-blue-900  ">
        <div>
            {"Next Payment Date:"}
        </div>
        <div>
            {" Today, 4:00PM"}
        </div>
        </div>
    </div>
}




export const RevenueCard1 = ({
    title,
    orderCount,
    amount
}) => {
   
    return <div className="bg-white rounded shadow-md p-4">
        <div className="flex text-gray-700">
            <div>
               {title} 
            </div>
            <div className="flex justify-center flex-col ml-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 16 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="font-bold text-xl">
                ₹ {amount}
            </div>
            
                {orderCount ? <div className="flex text-blue-800 ">
                    <div className="underline">{orderCount} Orders</div> 
                       
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

            </div> : null}
        </div>
    </div>
}


export const RevenueCard2 = ({
    title,
    amount
}) => {
   
    return <div className="bg-white rounded shadow-md p-4">
        <div className="flex text-gray-700">
            <div>
               {title} 
            </div>
            <div className="flex justify-center flex-col ml-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 16 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="font-bold text-xl">
                ₹ {amount}
            </div>
        </div>
    </div>
}