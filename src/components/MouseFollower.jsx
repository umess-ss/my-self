import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseFollower = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // More responsive spring animation - reduced lag
    const springConfig = { damping: 20, stiffness: 600, mass: 0.3 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main cursor glow effects */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: '-50%',
                    y: '-50%',
                }}
            >
                <motion.div
                    className="relative"
                    animate={{
                        scale: isHovering ? 1.3 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Outer glow - purple */}
                    <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/60 to-purple-600/60 blur-xl"></div>
                    </div>

                    {/* Middle glow - pink with pulse */}
                    <div className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500/70 to-pink-600/70 blur-lg animate-pulse"></div>
                    </div>

                    {/* Inner glow - brighter center */}
                    <div className="absolute inset-0 w-4 h-4 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/80 to-pink-500/80 blur-md"></div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Trailing blur effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-40 mix-blend-screen"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: '-50%',
                    y: '-50%',
                }}
            >
                <motion.div
                    className="relative w-32 h-32"
                    animate={{
                        scale: isHovering ? 1.2 : 1,
                        opacity: isHovering ? 0.5 : 0.25,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-3xl"></div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default MouseFollower;
