
import React, { useState, useMemo, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { PROJECTS_DATA } from '../constants';
import type { AppContextType, Project } from '../types';

const ProjectModal = ({ project, onClose, language }: { project: Project; onClose: () => void; language: 'ar' | 'en' }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white dark:bg-secondary rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative">
                <img src={project.image} alt={project.title[language]} className="w-full h-80 object-cover"/>
                <button onClick={onClose} className="absolute top-4 ltr:right-4 rtl:left-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 transition-colors">&times;</button>
            </div>
            <div className="p-8">
                <h2 className="text-3xl font-bold mb-2 text-primary dark:text-primary-dark">{project.title[language]}</h2>
                <span className="text-sm font-semibold bg-primary/20 text-primary px-3 py-1 rounded-full">{project.category}</span>
                <p className="text-gray-600 dark:text-gray-300 mt-4 mb-6">{project.description[language]}</p>
                <div className="border-t pt-4">
                    <h4 className="font-bold mb-2">{language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}:</h4>
                    <ul className="list-disc ltr:list-inside rtl:list-outside rtl:mr-5 space-y-1 text-gray-700 dark:text-gray-400">
                       {project.details[language].map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const context = useContext(AppContext);
    const [filter, setFilter] = useState<'All' | 'Commercial' | 'Residential' | 'Hospitals'>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return PROJECTS_DATA;
        return PROJECTS_DATA.filter(p => p.category === filter);
    }, [filter]);

    if (!context) return null;
    const { language } = context as AppContextType;

    const textData = {
        title: { ar: "مشاريعنا المميزة", en: "Our Featured Projects" },
        subtitle: { ar: "نفخر بعرض مجموعة من مشاريعنا التي تعكس التزامنا بالجودة والابتكار في مختلف القطاعات.", en: "We are proud to showcase a collection of our projects that reflect our commitment to quality and innovation across various sectors." },
        filters: {
            All: { ar: "الكل", en: "All" },
            Commercial: { ar: "تجاري", en: "Commercial" },
            Residential: { ar: "سكني", en: "Residential" },
            Hospitals: { ar: "مستشفيات", en: "Hospitals" },
        }
    };
    
    const FilterButton = ({ label, currentFilter, setFilter }: { label: 'All' | 'Commercial' | 'Residential' | 'Hospitals', currentFilter: string, setFilter: (f: 'All' | 'Commercial' | 'Residential' | 'Hospitals') => void }) => (
        <button onClick={() => setFilter(label)} className={`px-5 py-2 rounded-full font-semibold transition-colors ${currentFilter === label ? 'bg-primary dark:bg-primary-dark text-white' : 'bg-gray-200 dark:bg-secondary-light text-secondary dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-secondary'}`}>
            {textData.filters[label][language]}
        </button>
    );

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-secondary dark:text-white mb-4">{textData.title[language]}</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">{textData.subtitle[language]}</p>
                </div>
                
                <div className="flex justify-center space-x-2 rtl:space-x-reverse mb-10">
                    <FilterButton label="All" currentFilter={filter} setFilter={setFilter} />
                    <FilterButton label="Commercial" currentFilter={filter} setFilter={setFilter} />
                    <FilterButton label="Residential" currentFilter={filter} setFilter={setFilter} />
                    <FilterButton label="Hospitals" currentFilter={filter} setFilter={setFilter} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="group rounded-lg overflow-hidden shadow-lg relative cursor-pointer" onClick={() => setSelectedProject(project)}>
                            <img src={project.image} alt={project.title[language]} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <span className="text-sm bg-primary/80 px-2 py-1 rounded">{textData.filters[project.category][language]}</span>
                                <h3 className="text-2xl font-bold mt-2">{project.title[language]}</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{project.description[language]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} language={language} />}
        </div>
    );
};

export default Projects;
