/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import useInView from "./useInView";
import { motion } from "framer-motion";

function AnimationReveal({ disabled, children }) {
    if (disabled) {
        return <>{children}</>;
    }

    if (!Array.isArray(children)) children = [children];

    const directions = ["up", "down"];
    const childrenWithAnimation = children.map((child, i) => {
        return (
            <AnimatedSlideInComponent
                key={i}
                direction={directions[i % directions.length]}
            >
                {child}
            </AnimatedSlideInComponent>
        );
    });
    return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({
    direction = "up",
    offset = 10,
    children,
}) {
    const [ref, inView] = useInView({ margin: `-${offset}px 0px 0px 0px` });

    const y = { target: "0%" };

    if (direction === "up") y.initial = "150%";
    else y.initial = "hidden";

    return (
        <div ref={ref}>
            <motion.section
                initial={{ y: y.initial }}
                animate={{
                    y: inView && y.target,
                    transitionEnd: {
                        y: inView && 10,
                    },
                }}
                transition={{ duration: 3 }}
            >
                {children}
            </motion.section>
        </div>
    );
}

export default function AnimationRevealPage(props) {
    return (
        <div className="font-display overflow-hidden">
            <AnimationReveal {...props} />
        </div>
    );
}
