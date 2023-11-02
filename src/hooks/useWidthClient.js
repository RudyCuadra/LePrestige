/*Custom Hook que determina si la pantalla mide menos de 550px*/
import { useEffect, useState } from "react";

export default function useWidthClient (){
	const [windowSize, setWindowSize] = useState(getWindowSize());
	const [isMobile, setMobile]=useState(false)
	const [isIpad, setIsIpad]=useState(false)

	const minMobileWidth = 550;
	const IPAD_WIDTH = 820;
	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		if(windowSize <= IPAD_WIDTH){
			setIsIpad(true)
		}else{
			setIsIpad(false)
		}

		if(windowSize<=minMobileWidth){
			setMobile(true)
		}else{
			setMobile(false)
		}
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [windowSize]);

	function getWindowSize() {
		const {innerWidth } = window;
		return innerWidth;
	}

	return [isMobile, isIpad ]

	/*
		const [isMobile, setMobile]=useState(false)

	const mobileWith = window.innerWidth;
	const minMobileWidth = 550;

	useEffect(()=>{
		if(mobileWith<=minMobileWidth) setMobile(true)
	},[mobileWith])

	return [isMobile]
		*/
}
