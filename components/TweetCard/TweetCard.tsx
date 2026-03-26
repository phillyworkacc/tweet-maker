'use client'
import "./TweetCard.css"
import { useEffect, useRef, useState } from "react";
import { CustomIcon } from "../Icons/Icon";
import { formatMilliseconds } from "@/utils/date";
import { useModal } from "../Modal/ModalContext";
import UserDefaultImage from "@/public/pfp.jpg"
import TweetCardLogo from "@/public/logo.png"


export default function TweetCard () {
	const [name, setName] = useState("name");
	const [username, setUsername] = useState("username");
   const [text, setText] = useState("Click here to type");
   const tweetBody = useRef<HTMLDivElement | null>(null);
   const { showModal, close } = useModal();

   const openNameSettingsModal = () => {
      const changeNameSettingsBtn = () => {
         const nameInputBox = document.querySelector<HTMLInputElement>("input#tm-edit-name");
         const usernameInputBox = document.querySelector<HTMLInputElement>("input#tm-edit-username");
         setName(nameInputBox?.value!);
         setUsername(usernameInputBox?.value!);
         close();
      }

      showModal({
         content: <div className="box full h-fit pd-2 pdx-2" style={{userSelect:"none"}}>
               <div className="text-l bold-700 text-center full">Edit Name Settings</div>
               <div className="box full pd-1">
                  <div className="text-xs full mb-05 grey-5">Name</div>
                  <input 
                     type="text" className="xxs full pd-15 pdx-2"
                     id="tm-edit-name"
                     placeholder="Name"
                     autoComplete="off" defaultValue={name}
                  />
               </div>
               <div className="box full pd-1">
                  <div className="text-xs full mb-05 grey-5">Username</div>
                  <input 
                     type="text" className="xxs full pd-15 pdx-2"
                     id="tm-edit-username"
                     placeholder="Username"
                     autoComplete="off" defaultValue={username}
                  />
               </div>
               <div className="htv gap-10 mt-1">
                  <button className="xxs full outline-black tiny-shadow pd-13" onClick={()=>close()}>Cancel</button>
                  <button className="xxs full tiny-shadow pd-13" onClick={changeNameSettingsBtn}>
                     Change
                  </button>
               </div>
            </div>
      })
   }


   const updateTweetBody = () => {
      if (tweetBody.current) {
         tweetBody.current.innerText = text;
      }
   }

   useEffect(() => {
      updateTweetBody();
      return;
   }, [])

   useEffect(() => {
      updateTweetBody();
      return;
   }, [text])
   
   return (
      <div className="tweet-card">
         <div className="icon-trademark">
            <CustomIcon url={TweetCardLogo.src} size={30} />
         </div>
         <div className="box full dfb align-center gap-10 mb-2 cursor-pointer" onClick={openNameSettingsModal}>
            <div className="box fit">
               <CustomIcon url={UserDefaultImage.src} size={45} round />
            </div>
            <div className="box full dfb column">
               <div className="text-sm bold-600 fit">{name}</div>
               <div className="text-xxs grey-5 full">@{username}</div>
            </div>
         </div>
         <div className="box full h-fit mb-05">
            <div 
               ref={tweetBody} 
               className="tweet-text-editor" 
               contentEditable 
               onChange={e => setText(e.target.innerText)}
            />
         </div>
         <div className="text-t grey-4 full h-fit pd-05">Posted on {formatMilliseconds(Date.now(), false, false)}</div>
      </div>
   )
}
