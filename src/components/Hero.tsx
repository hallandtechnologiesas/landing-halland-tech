import {
  domAnimation,
  LazyMotion,
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { PointerEvent } from "react";

const pointerSpring = {
  damping: 24,
  mass: 0.45,
  stiffness: 180,
} as const;

const lineSpring = {
  damping: 22,
  stiffness: 280,
  type: "spring",
} as const;

const firstLineVariants = {
  hover: {
    x: -5,
    transition: lineSpring,
  },
  rest: {
    x: 0,
    transition: lineSpring,
  },
} as const;

const secondLineVariants = {
  hover: {
    x: 9,
    transition: lineSpring,
  },
  rest: {
    x: 0,
    transition: lineSpring,
  },
} as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const targetRotate = useMotionValue(0);
  const x = useSpring(targetX, pointerSpring);
  const y = useSpring(targetY, pointerSpring);
  const rotate = useSpring(targetRotate, pointerSpring);

  function resetPointerMotion(): void {
    targetX.set(0);
    targetY.set(0);
    targetRotate.set(0);
  }

  function handlePointerMove(event: PointerEvent<HTMLElement>): void {
    if (shouldReduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontalProgress = (event.clientX - bounds.left) / bounds.width - 0.5;
    const verticalProgress = (event.clientY - bounds.top) / bounds.height - 0.5;

    targetX.set(horizontalProgress * 7);
    targetY.set(verticalProgress * 5);
    targetRotate.set(horizontalProgress * 0.18);
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.main
        className="flex items-start overflow-clip pt-[clamp(9rem,19.5vh,12.5rem)] pb-[clamp(4rem,6vw,6rem)] max-[700px]:pt-[clamp(7rem,22vh,10rem)] max-[700px]:pb-20"
        initial="rest"
        animate="rest"
        whileHover={shouldReduceMotion ? "rest" : "hover"}
        onPointerLeave={resetPointerMotion}
        onPointerMove={handlePointerMove}
      >
        <m.div
          className="w-full max-w-[42rem] origin-[35%_50%]"
          style={{ rotate, x, y }}
        >
          <h1 className="m-0 max-w-[10ch] text-[clamp(4.25rem,6.9vw,6.75rem)] leading-[0.9] font-[620] tracking-[-0.07em] max-[700px]:text-[clamp(3.75rem,18vw,5.5rem)] max-[700px]:leading-[0.94] max-[430px]:tracking-[-0.06em]">
            <span className="block w-max max-w-full will-change-transform motion-safe:animate-hero-first">
              <m.span className="block" variants={firstLineVariants}>
                Software,
              </m.span>
            </span>
            <span className="relative block w-max max-w-full will-change-transform motion-safe:animate-hero-second">
              <m.span className="relative block" variants={secondLineVariants}>
                made useful.
                <span
                  className="absolute right-[0.08em] bottom-[-0.12em] h-[clamp(0.22rem,0.35vw,0.34rem)] w-[1.42em] origin-left bg-accent will-change-transform motion-safe:animate-hero-rule"
                  aria-hidden="true"
                />
              </m.span>
            </span>
          </h1>
          <p className="mt-9 mb-0 max-w-[46rem] text-[clamp(1rem,1.35vw,1.25rem)] leading-[1.55] max-[700px]:mt-7 max-[700px]:max-w-[26rem] max-[700px]:text-[1.03rem]">
            Native iOS apps, web products, and technical help from Arendal, Norway.
          </p>
        </m.div>
      </m.main>
    </LazyMotion>
  );
}
