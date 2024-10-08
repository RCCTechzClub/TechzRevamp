"use client";
import ProjectItem from '@/components/ProjectItems';
import SkillComponent from '@/components/SkillComponent';
import React from 'react';
import { useState } from 'react';
import rctech from '@/app/assest/rcctech.png';
import mongodb from '@/app/assest/skills/mongodb.png';
import postman from '@/app/assest/skills/postman.png';
import react from '@/app/assest/skills/react.png';
import figma from '@/app/assest/skills/figma.png';
import tailwind from '@/app/assest/skills/tailwind.png';
import java from '@/app/assest/skills/java.png';
import github from '@/app/assest/skills/github.png';
import cpp from '@/app/assest/skills/cpp.png';
import js from '@/app/assest/skills/javascript.png';
import vercel from '@/app/assest/skills/vercel.jpg';
import express from '@/app/assest/skills/express.png';
import node from '@/app/assest/skills/node-js.png';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from 'next-themes';



const projects = [
    {
        "id": 1,
        "name": "Movie-Success-Predictor Desktop App",
        "team": ["Rounak Hazra", "Abesh Biswas", "Mayukh Bhowmick"],
        "description": "A Desktop Application that predicts Upcoming Hollywood Movies to be hit, average, flop by analyzing performance of actors and directors based on their past movies.",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 2,
        "name": "Expense-Tracker",
        "team": ["Mayukh Bhowmick"],
        "description": "React-Expense-Tracker that can Add new Expense, Delete an Expense, Update an existing Expense: Date/Item name/Price.",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 3,
        "name": "Regalia 2022 Website",
        "team": ["Soham Saha Roy"],
        "description": "A website for Regalia which is the cultural fest of our College.",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 4,
        "name": "Icecream-Store",
        "team": ["Rounak Hazra"],
        "description": "An Icecream-store full stack website for owner-customer interactions.",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 5,
        "name": "roBot",
        "team": ["Soham Banerjee", "Sourya Sekhar", "Soham Sarkar"],
        "description": "A discord Bot for RCCTechz Discord Server.",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 6,
        "name": "Inventory-Item-Management",
        "team": ["Mayukh Bhowmick"],
        "description": "This website allows users to add, delete, edit items in the inventory; Filter and sort existing items; View items in list or gallery form.",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 7,
        "name": "W-ambulance",
        "team": ["Aritra Belel"],
        "description": "As in emergency it's quite hard to search for an ambulance, hospital in Google or download new health-related apps from PlayStore/Appstore. Almost everyone has a WhatsApp account, so we built a WhatsApp Bot to arrange Ambulances quickly.",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 8,
        "name": "Graphical Password Authentication System",
        "team": ["Nirnaya Betal", "Priti Sen", "Soham Saha Roy"],
        "description": "A Graphical Password Authentication system that uses combinations of graphical images instead of regular passwords. Graphical passwords offer better security as they prevent common social engineering attacks.",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 9,
        "name": "FoodieApp",
        "team": ["Nishant Thakur", "Suryasnata Saha"],
        "description": "N/A",
        "githubRepo": "/",
        "image": ""
    },
    {
        "id": 10,
        "name": "Typing Practice Website",
        "team": ["Mayukh Bhowmick"],
        "description": "A website for improving your typing speed.",
        "githubRepo": "/",
        "image": ""
    }
];

const skills = [
    {
        "id": 1,
        "name": "MongoDB",
        "image": mongodb
    },
    {
        "id": 2,
        "name": "Postman",
        "image": postman
    },
    {
        "id": 3,
        "name": "React",
        "image": react
    },
    {
        "id": 4,
        "name": "Figma",
        "image": figma
    },
    {
        "id": 5,
        "name": "Tailwind CSS",
        "image": tailwind
    },
    {
        "id": 6,
        "name": "Java",
        "image": java
    },
    {
        "id": 7,
        "name": "GitHub",
        "image": github
    },
    {
        "id": 8,
        "name": "C++",
        "image": cpp
    },
    {
        "id": 9,
        "name": "JavaScript",
        "image": js
    },
    {
        "id": 10,
        "name": "Vercel",
        "image": vercel
    },
    {
        "id": 11,
        "name": "Express",
        "image": express
    },
    {
        "id": 12,
        "name": "Node.js",
        "image": node
    }
];
function Page() {
    const [showAll, setShowAll] = useState<boolean>(false);
    const { theme, setTheme } = useTheme(); 

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const isDarkMode = theme === 'dark';

    return (
        <div
        className={`${
          isDarkMode
            ? 'bg-[#121828] text-gray-100' 
            : 'bg-gradient-to-r from-blue-500  via-blue-600 to-blue-500 text-gray-900' 
        } min-h-screen border-4 border-red-500`}
      >
            <Navbar />
            <div className='content w-full md:px-0 px-20 py-20'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-6xl text-center my-10'>Skills</h2>
                    <div className='w-full h-auto grid grid-cols-2 sm:grid-cols-4 gap-16 mb-10'>
                        {skills.map((skill) => (
                            <SkillComponent key={skill.id} data={skill} />
                        ))}
                    </div>
                    <h2 className='text-6xl text-center my-20'>Projects</h2>
                    <div className='flex flex-col space-y-12'>
                        {
                            projects.slice(0, showAll ? projects.length : 3).map((project) => (
                                <ProjectItem key={project.id} data={project} image={rctech} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;