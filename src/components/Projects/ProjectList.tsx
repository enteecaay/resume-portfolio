'use client';
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { IMAGES } from '../../app/img';

const projects = [
    {
        title: "Koi Care System At Home Web Page",
        description: "A modern, responsive website built with Create React App and using React Bootstrap for styling. ASP.NET Core is used for the backend, and SQL Server for the database.",
        imageUrl: IMAGES.project1,
        technologies: ["ReactJS", "Bootstrap", "ASP.NET Core", "SQL Server"]
    },
    {
        title: "Claim Requests Management System",
        description: "A web for business can manage claim requests from staffs. Built with TypeScript, Node.js, and MongoDB.",
        imageUrl: IMAGES.project2,
        technologies: ["TypeScript", "Node.js", "MongoDB"]
    },
];

const ProjectsContainer: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSwipe = (direction: 'left' | 'right') => {
        if (isAnimating) return;

        setIsAnimating(true);

        // Calculate next index
        const newIndex = direction === 'left'
            ? (currentIndex + 1) % projects.length  // Next project
            : (currentIndex - 1 + projects.length) % projects.length;  // Previous project

        // Important: Using setTimeout to allow animation to complete
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsAnimating(false);
        }, 300); // Match this with animation duration in ProjectCard
    };

    return (
        <div className="w-full relative overflow-hidden">
            <ProjectCard
                {...projects[currentIndex]}
                index={currentIndex}
                total={projects.length}
                onSwipe={handleSwipe}
            />
        </div>
    );
};

export default ProjectsContainer;