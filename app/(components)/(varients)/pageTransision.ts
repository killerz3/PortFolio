import { Target, Variant } from "framer-motion";


export const pageTransision:any = {
    initial: {
       x:"100vw"
    },
    animate: {
        x:0
    }, 
    exit: {
        x: "100vw",
        opacity: 0,
        transition: {
            duration:5
        }
    }
}