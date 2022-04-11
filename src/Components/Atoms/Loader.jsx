import { StyledLoaderContainer } from '../Styles/Loader.styled';
import { useRef } from 'react';
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

    circles.forEach(dot => {
        jump(dot.current, delay);
        delay += 0.2;
    });

    return (
        <StyledLoaderContainer>
            <div ref={circle1}></div>
            <div ref={circle2}></div>
            <div ref={circle3}></div>
        </StyledLoaderContainer>

    )
}

export default Loader;