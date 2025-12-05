

export function InputBox({label , placeholder, onChange}) {
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="w-full border border-gray-300 rounded-md cursor-pointer px-2 py-1"/>
    </div>
}