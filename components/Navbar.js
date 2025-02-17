import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/login'); 
    };
    return (
        <div className="container mx-auto px-0">
            <div className="flex items-center justify-between p-2">

                <div>
                <img src="/images/logo.png" width="160" height="40" alt="" />
                </div>

                <div className="flex items-center space-x-4">
                <button className="flex items-center text-[rgb(68,8,145)] hover:text-purple-800">
                    <i className="fas fa-bullhorn"></i>
                    <span className="ml-1">Deals</span>
                </button>

                <button className="flex items-center text-[rgb(68,8,145)] hover:text-purple-800">
                    <i className="fa-solid fa-earth-americas"></i>
                    <span className="ml-1">Discover</span>
                </button>

                <button
                    onClick={handleLoginClick} 
                    className=" font-bold text-[rgb(68,8,145)] hover:text-purple-800">
                    <i className="far fa-user"></i>
                    <span className="ml-1">Member Login</span>
                </button>

                </div>
            </div>
        </div>
    )
}

export default Navbar;