
import { useEffect, useRef, useState } from "react";

function Reveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const hiddenTransform = {
        up: "translateY(35px)",
        down: "translateY(-35px)",
        left: "translateX(-35px)",
        right: "translateX(35px)",
    };

    return (
        <div
            ref={elementRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                    ? "translate3d(0, 0, 0)"
                    : hiddenTransform[direction],
                transition: `opacity 650ms ease ${delay}ms, transform 650ms ease ${delay}ms`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}

export default Reveal;
