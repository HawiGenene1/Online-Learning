import { RiSearchLine} from "@remixicon/react";

export default function SearchInput() {
    return (
    <div>
        <input type="text" placeholder="Search for anything" />
        <button className="">
            <RiSearchLine />
        </button>
    </div>
    );
} 