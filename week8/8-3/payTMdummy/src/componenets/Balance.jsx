

export const Balance = ({value}) => {
    return <div className="flex px-4 sm:px-1 my-8">
        <div className="font-bold text-lg">
            Your Balance
        </div>
        <div className="text-lg font-semibold ml-4">
            Rs {value}
        </div>
    </div>
}