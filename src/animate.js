
export const pageAnimate ={
    hidden: {
        opacity:0,
        y:300,
    },
    show:{
        opacity:1,
        y:0,
        transition:{duration:0.25, when:"beforeChildren",staggerChildren:0.25},
        
    },
    exit:{
        opacity:0,
        y:300,
        transition:{duration:0.5},
    },
};

export const aboutContent = {
    hidden: {
        y:300,
    },
    show: {
        y:0,
        transition: {duration:1},
    },
};

export const fade = {
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1,
        transition:{duration:0.75, ease:"easeOut"},
    }
};

export const imgAnimate ={
    hidden:{
        opacity:0,
        scale:1.5,
    },
    show:{
        opacity:1,
        scale:1,
        transition:{duration:0.75, ease:"easeOut"},
    }
};

export const lineAnimate ={
    hidden:{
        width:"0%",
    },
    show:{
        width:"100%",
        transition: {duration:1},
    }
}

export const frameAnimate ={
    hidden:{
        x:"-130%",
        skew:"45deg",
    },
    show:{
        x:"100%",
        skew:"0deg",
        transition:{duration:1, ease:"easeOut"},
    }
}






