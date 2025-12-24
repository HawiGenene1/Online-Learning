import { RiSearchLine} from "@remixicon/react";

export default function SearchInput() {
    return (
    <div className="bg-white border border-gray-300 rounded-fulw-xs sm:w-96 shadow-util focus-within:border-lime-600 focus-within:ring-1 focus-whithin:ring-lime-600 transition-all p-0.5 flex">
        <input type="text" 
        placeholder="Search for anything" 
        className="flex-1 outline-none text-sm px-4 py-2 "
         />
        <button className="bg-lime-500 w-16 h-auto rounded-full flex items-center- justify-center hover:bg-lime-600 transitio-colors focusing:bg-lime-600">
            <RiSearchLine />
        </button>
    </div>
    );
}  