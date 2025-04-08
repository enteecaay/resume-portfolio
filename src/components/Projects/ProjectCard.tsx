'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, PanInfo, useAnimation } from 'framer-motion';
import ProjectDetailModal from './ProjectDetailModal';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    technologies?: string[];
    index: number;
    total: number;
    onSwipe?: (direction: 'left' | 'right') => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    technologies = [],
    index,
    total,
    onSwipe
}) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [showDetails, setShowDetails] = React.useState(false);

    // Remove the useState and use the props directly
    // This ensures we always use the current prop values
    const project = {
        title,
        description,
        imageUrl,
        technologies
    };

    // Reset animation when index changes
    useEffect(() => {
        controls.set({ x: 0, opacity: 1 });
    }, [index, controls]);

    // Handle drag end event to detect swipe direction
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50; // Minimum distance to trigger swipe
        if (info.offset.x > swipeThreshold) {
            // Swipe right - show previous card
            controls.start({
                x: '100%',
                opacity: 0,
                transition: { duration: 0.3 }
            }).then(() => {
                if (onSwipe) onSwipe('right');
            });
        } else if (info.offset.x < -swipeThreshold) {
            // Swipe left - show next card
            controls.start({
                x: '-100%',
                opacity: 0,
                transition: { duration: 0.3 }
            }).then(() => {
                if (onSwipe) onSwipe('left');
            });
        } else {
            // Return to center if swipe wasn't far enough
            controls.start({ x: 0, opacity: 1 });
        }
    };

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleCloseModal = () => {
        setShowDetails(false);
    };

    return (
        <>
            <div
                ref={cardRef}
                className="flex flex-col justify-center rounded-2xl overflow-hidden w-full mx-auto shadow-lg relative"
                style={{ zIndex: total - index }}
            >
                <motion.div
                    className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 transition-all"
                    animate={controls}
                    initial={{ x: 0, opacity: 1 }}
                    key={index}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "pointer" }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                >
                    {/* Image with overlay - onClick opens modal */}
                    <div
                        className="relative hover:shadow-2xl shadow-white hover:cursor-pointer"
                        onClick={handleShowDetails}
                    >
                        <div className="relative md:h-64 h-full w-full">
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-cover"
                                priority
                                unselectable='on'
                                draggable="false"
                            />
                            {/* Black overlay with 20% opacity */}
                            <div className="absolute inset-0 bg-black bg-opacity-20 -z-10" />
                        </div>

                        <div className="p-8">
                            <h3 className="text-3xl font-bold mb-4 dark:text-white hover:underline">{title}</h3>
                            {technologies.length > 0 && (
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Visual indicator for swipe */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-gray-400 opacity-50"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-400 opacity-50"></span>
                    </div>
                </div>
            </div>

            {/* Project Detail Modal */}
            {showDetails && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 text-white"
                    onClick={handleCloseModal} // Add click handler to the overlay
                >
                    {/* Stop propagation to prevent closing when clicking inside the modal */}
                    <div onClick={(e) => e.stopPropagation()}>
                        <ProjectDetailModal
                            isOpen={showDetails}
                            onClose={handleCloseModal}
                            project={project}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;