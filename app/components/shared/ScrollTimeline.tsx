// app/components/shared/ScrollTimeline.tsx

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { cn } from "~/lib/utils";
import { useIsMobile } from "~/hooks/useIsMobile";

export interface TimelineItem {
  id: string | number;
  year?: string;
  title: string;
  subtitle?: string;
  description?: string;
  [key: string]: any;
}

export interface ScrollTimelineProps<T extends TimelineItem> {
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
  title?: string;
  subtitle?: string;
  cardAlignment?: "alternating" | "left" | "right";
  parallaxIntensity?: number;
  showProgressLine?: boolean;
  className?: string;
  sceneHeightVh?: number;
  cardWidth?: number;
  progressColors?: {
    from: string;
    via: string;
    to: string;
  };
}

export function ScrollTimeline<T extends TimelineItem>({
  items,
  renderCard,
  title = "Timeline",
  subtitle = "Scroll to explore",
  cardAlignment = "alternating",
  parallaxIntensity = 0.15,
  showProgressLine = true,
  className = "",
  sceneHeightVh = 200,
  cardWidth = 380,
  progressColors = {
    from: "#302b63",
    via: "#00bf8f",
    to: "#1cd8d2",
  },
}: ScrollTimelineProps<T>) {
  const sceneRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile("(max-width: 1023px)");
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * items.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < items.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, items.length, activeIndex]);

  const getCardSide = (index: number): "left" | "right" => {
    if (cardAlignment === "left") return "left";
    if (cardAlignment === "right") return "right";
    return index % 2 === 0 ? "left" : "right";
  };

  // Mobile layout
  if (isMobile) {
    return (
      <section
        id="scroll-timeline"
        ref={sceneRef}
        className={cn("relative bg-black text-white py-16 px-4", className)}
        style={{ minHeight: "100vh" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3">{title}</h2>
            <p className="text-lg text-gray-400">{subtitle}</p>
          </div>
          <div className="relative">
            {showProgressLine && (
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-white/20" />
            )}
            <div className="space-y-10">
              {items.map((item, idx) => (
                <MobileTimelineItem
                  key={item.id}
                  item={item}
                  index={idx}
                  totalItems={items.length}
                  scrollYProgress={scrollYProgress}
                  activeIndex={activeIndex}
                  progressColors={progressColors}
                  renderCard={renderCard}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout
  return (
    <section
      id="scroll-timeline"
      ref={sceneRef}
      className={cn("relative bg-black text-white overflow-hidden", className)}
      style={{ height: `${sceneHeightVh}vh`, minHeight: "100vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="text-center py-8 md:py-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">{title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 pb-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2" />

          {showProgressLine && (
            <>
              <motion.div
                className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2"
                style={{
                  height: progressHeight,
                  background: `linear-gradient(to bottom, ${progressColors.from}, ${progressColors.via}, ${progressColors.to})`,
                  boxShadow: `0 0 15px ${progressColors.via}80, 0 0 25px ${progressColors.to}4d`,
                }}
              />
              <motion.div
                className="absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ top: progressHeight }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${progressColors.to}cc 0%, ${progressColors.via}80 40%, transparent 70%)`,
                    boxShadow: `0 0 20px 6px ${progressColors.to}99, 0 0 30px 10px ${progressColors.via}66, 0 0 45px 15px ${progressColors.from}33`,
                  }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </>
          )}

          <div className="relative">
            {items.map((item, index) => (
              <DesktopTimelineItem
                key={item.id}
                item={item}
                index={index}
                totalItems={items.length}
                scrollYProgress={scrollYProgress}
                smoothProgress={smoothProgress}
                side={getCardSide(index)}
                cardWidth={cardWidth}
                parallaxIntensity={parallaxIntensity}
                progressColors={progressColors}
                renderCard={renderCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== Mobile Item Component ====================
interface MobileTimelineItemProps<T extends TimelineItem> {
  item: T;
  index: number;
  totalItems: number;
  scrollYProgress: MotionValue<number>;
  activeIndex: number;
  progressColors: { from: string; via: string; to: string };
  renderCard: (item: T, index: number) => React.ReactNode;
}

function MobileTimelineItem<T extends TimelineItem>({
  item,
  index,
  totalItems,
  scrollYProgress,
  activeIndex,
  progressColors,
  renderCard,
}: MobileTimelineItemProps<T>) {
  const itemProgress = useTransform(
    scrollYProgress,
    [index / totalItems, (index + 1) / totalItems],
    [0, 1]
  );
  const opacity = useTransform(itemProgress, [0, 0.3, 1], [0, 1, 1]);
  const x = useTransform(itemProgress, [0, 0.5, 1], [-30, 0, 0]);

  return (
    <motion.div className="relative pl-14" style={{ opacity, x }}>
      <motion.div
        className="absolute left-[18px] top-6 w-4 h-4 rounded-full border-2 bg-black"
        style={{
          borderColor: index <= activeIndex ? progressColors.to : "#6b7280",
          boxShadow:
            index <= activeIndex ? `0 0 12px ${progressColors.to}` : "none",
        }}
      />
      {renderCard(item, index)}
    </motion.div>
  );
}

// ==================== Desktop Item Component ====================
interface DesktopTimelineItemProps<T extends TimelineItem> {
  item: T;
  index: number;
  totalItems: number;
  scrollYProgress: MotionValue<number>;
  smoothProgress: MotionValue<number>;
  side: "left" | "right";
  cardWidth: number;
  parallaxIntensity: number;
  progressColors: { from: string; via: string; to: string };
  renderCard: (item: T, index: number) => React.ReactNode;
}

function DesktopTimelineItem<T extends TimelineItem>({
  item,
  index,
  totalItems,
  scrollYProgress,
  smoothProgress,
  side,
  cardWidth,
  parallaxIntensity,
  progressColors,
  renderCard,
}: DesktopTimelineItemProps<T>) {
  const isLeft = side === "left";

  const itemProgress = useTransform(
    scrollYProgress,
    [index / totalItems, (index + 1) / totalItems],
    [0, 1]
  );

  const cardOpacity = useTransform(itemProgress, [0, 0.2, 1], [0, 1, 1]);
  const cardX = useTransform(
    itemProgress,
    [0, 0.4, 1],
    [0, isLeft ? -60 : 60, isLeft ? -20 : 20]
  );

  const dotBorderColor = useTransform(
    itemProgress,
    [0, 0.1],
    ["#6b7280", progressColors.to]
  );
  const dotGlow = useTransform(
    itemProgress,
    [0, 0.2, 1],
    [
      "0 0 0px transparent",
      `0 0 8px ${progressColors.to}`,
      `0 0 16px ${progressColors.to}`,
    ]
  );

  // Dot fill background (gradient when fully passed)
  const dotBackground = useTransform(itemProgress, (v) =>
    v >= 0.9
      ? `linear-gradient(135deg, ${progressColors.via}, ${progressColors.to})`
      : "transparent"
  );

  const yOffset = useTransform(
    smoothProgress,
    [0, 1],
    [parallaxIntensity * 100, -parallaxIntensity * 100]
  );

  const containerClasses = cn(
    "relative flex items-center mb-24",
    isLeft ? "justify-start" : "justify-end"
  );

  return (
    <div className={containerClasses}>
      {/* Dot on center line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div
          className="w-5 h-5 rounded-full border-2 bg-black"
          style={{
            borderColor: dotBorderColor,
            background: dotBackground,
            boxShadow: dotGlow,
          }}
        />
      </div>

      {/* Card wrapper */}
      <motion.div
        className={cn(
          "relative z-20",
          isLeft ? "mr-[calc(50%+32px)]" : "ml-[calc(50%+32px)]"
        )}
        style={{
          width: `${cardWidth}px`,
          maxWidth: "90%",
          opacity: cardOpacity,
          x: cardX,
          y: yOffset,
        }}
      >
        {renderCard(item, index)}
      </motion.div>
    </div>
  );
}