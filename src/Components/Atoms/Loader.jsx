import { StyledLoaderContainer } from '../Styles/Loader.styled';
import { useRef, useEffect } from 'react';
import gsap, { Linear } from 'gsap';
function Loader() {

    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);
    gsap.registerPlugin();

    let circles = [
        circle1,
        circle2,
        circle3
    ]

    let delay = 0.2;

    const jump = (el, delay) => {
        gsap.to(el, {
            ease: Linear.ease,
            translateY: -15,
            yoyo: true,
            repeat: -1,
            duration: 0.5,
            delay: delay

        })
    }

    useEffect(() => {
        circles.forEach(dot => {
            debugger
            jump(dot.current, delay);
            delay += 0.2;
        });
    }, [])



    return (
        <StyledLoaderContainer>
            <div ref={circle1}></div>
            <div ref={circle2}></div>
            <div ref={circle3}></div>
        </StyledLoaderContainer>
    )
}

export default Loader;