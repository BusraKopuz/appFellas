import Navbar from "@/components/Navbar";
import { getSession} from "next-auth/react";
import Flight from "./Flight";



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

export default function Home() {
 
  return (
    <>
        <Navbar/>
        <Flight/>
    </>
  );
}
