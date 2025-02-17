import useCurrentUser from "@/hooks/useCurrentUser";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { IoPersonCircleOutline } from "react-icons/io5";

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const {data: user} = useCurrentUser();
    return(
        <div className="flex items-center h-screen justify-center">
            <div className="flex flex-col">
                <div onClick={() => router.push('/')}>
                    <div className="group flex-row w-44 mx-auto">
                        <div 
                        className="
                        flex
                        items-center
                        justify-center
                        "
                        >
                            <IoPersonCircleOutline className="group-hover:text-gray-800 transition-transform duration-300 transform group-hover:scale-110" size={80} />
                        </div>

                        <div 
                        className="
                        text-black-400
                        text-2xl
                        text-center
                        group-hover:text-gray-700
                        "
                        >
                            {user?.name} 
                        </div>
                    </div>              
                </div>
            </div>
        </div>
    )
}

export default Profiles;