import {toast} from "react-toastify";
import Toast from "../components/Toast/Toast";
import React from "react";

export const ShowToast = (type, msg) => {
   switch (type) {
	  case 'notification':
		 toast.success(<Toast content={msg}/>, {
			position: toast.POSITION.TOP_CENTER,
			theme: "light",
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			hideProgressBar: true,
			icon: "",
			closeButton: false,
		 })
		 break;
	  default:
		 return false
   }
}
