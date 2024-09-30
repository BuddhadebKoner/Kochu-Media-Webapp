import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutation"
import { useUserContext } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";

const Topbar = () => {
   const navigate = useNavigate();
   const { mutate: signOut, isSuccess } = useSignOutAccount();
   const { user } = useUserContext();

   useEffect(() => {
      if (isSuccess) {
         navigate('/sign-in');
         toast({title: 'Logged out successfully'});
      }
   }, [isSuccess, navigate]);

   return (
      <section className="topbar">
         <div className="flex-between py-4 px-5">
            <Link to="/" className="flex gap-3 items-center">
               <img
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={130}
                  height={325}
               />
            </Link>
            <div className="flex gap-4">
               <Button
                  variant={"ghost"}
                  className="shad-button_ghost"
                  onClick={() => signOut()}
               >
                  <img
                     src="/assets/icons/logout.svg"
                     alt=""
                     width={30}
                     height={30}
                  />
               </Button>
               <Link to={`/profile/${user.id}`} className="flex-center gap-3">
                  <img
                     src={user.imageUrl || '/assets/iamges/profile-placeholder.jpg'}
                     alt="profile"
                     className="h-8 w-8"
                  />
               </Link>
            </div>
         </div>
      </section>
   )
}

export default Topbar