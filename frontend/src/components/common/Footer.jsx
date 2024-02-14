import React from 'react'
import Logo from '../../assets/download.png';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Generater from '../footer/Generater';

const Footer = () => {
    const company = [
        {
            id:1,
            name:"Company",
            links:[
                {
                    title:"About",
                    linkto:'/about',
                },
                {
                    title:"Career",
                    linkto:'/career',
                },
                {
                    title:"Affiliates",
                    linkto:'/affiliates',
                },
            ],
        }
    ];
    const resources = [
        {
            id:1,
            name:"Resources",
            links:[
                {
                    title:"Articles",
                    linkto:'/articles',
                },
                {
                    title:"Blog",
                    linkto:'/blog',
                },
                {
                    title:"Chart Sheet",
                    linkto:'/chart-sheet',
                },
                {
                    title:"Code challenges",
                    linkto:'/code-challenges',
                },
                {
                    title:"Docs",
                    linkto:'/docs',
                },
                {
                    title:"Projects",
                    linkto:'/projects',
                },
                {
                    title:"Videos",
                    linkto:'/videos',
                },
                {
                    title:"Workspaces",
                    linkto:'/workspaces',
                },
            ],
        },
        {
            id:2,
            name:"Support",
            links:[
                {
                    title:"Help Center",
                    linkto:"/help-center"
                }
            ]
        }
    ] ;
    const plan = [
        {
            id:1,
            name:"Plans",
            links:[
                {
                    title:"Paid memberships",
                    linkto:'/paid-memberships',
                },
                {
                    title:"For students",
                    linkto:'/for-students',
                },
                {
                    title:"Business solutions",
                    linkto:'/business-solutions',
                },
            ],
        },
        {
            id:2,
            name:"Community",
            links:[
                {
                    title:"Forums",
                    linkto:'/forums',
                },
                {
                    title:"Chapters",
                    linkto:'/chapters',
                },
                {
                    title:"Events",
                    linkto:'/events',
                },
            ], 
        }
    ] ;
    const subjects = [
        {
            id:1,
            name:"Subjects",
            links:[
                { title: "Al", linkto: "/al" },
                //{ title: "Cloud Computing", linkto: "/cloud-computing" },
                //{ title: "Code Foundations", linkto: "/code-foundations" },
                { title: "Computer Science", link: "/computer-science" },
                { title: "Cybersecurity", linkto: "/cybersecurity" },
                { title: "Data Analytics", linkto: "/data-analytics" },
                { title: "Data Science", linkto: "/data-science" },
                //{ title: "Data Visualization", linkto: "/data-visualization" },
                { title: "Developer Tools", linkto: "/developer-tools" },
                //{ title: "DevOps", linkto: "/devops" },
                //{ title: "Game Development", linkto: "/game-development" },
                { title: "IT", linkto: "/it" },
                { title: "Machine Learning", linkto: "/machine-learning" },
                // { title: "Math", linkto: "/math" },
                // { title: "Mobile Development", linkto: "/mobile-development" },
                ////{ title: "Web Design", linkto: "/web-design" },
                { title: "Web Development", linkto: "/web-development" },
            ]
        },
    ]
    const languages = [
        {
            id:1,
            name:"Languages",
            links:[
                //{ title: "Bash", linkto: "/bash" },
                { title: "C++", linkto: "/c++" },
                { title: "C#", linkto: "/csharp" },
                //{ title: "Go", linkto: "/go" },
                { title: "HTML & CSS", linkto: "/html-css" },
                { title: "Java", linkto: "/java" },
                { title: "JavaScript", linkto: "/javascript" },
                { title: "Kotlin", linkto: "/kotlin" },
                { title: "PHP", linkto: "/php" },
                { title: "Python", linkto: "/python" },
                //{ title: "R", linkto: "/r" },
                { title: "Ruby", linkto: "/ruby" },
                { title: "SQL", linkto: "/sql" },
                //{ title: "Swift", linkto: "/swift" },
            ]
        }
    ];
    const career = [
        {
            id:1,
            name:"Career building",
            links:[
                {title: "Career paths", linkto: "/career-paths"},
                {title: "Career services", linkto: "/career-services"},
                {title: "Interview prep", linkto: "/interview-prep"},
                {title: "Professional certification", linkto: "/professional-certification"},
                {title: "-", linkto: "/hi"},
                {title: "Full Catalog", linkto: "/full-catalog"},
                {title: "Beta Content", linkto: "/beta-content"}
            ]
        }
    ]
  return (
    <div className='bg-[#161D29] w-full'>
        <div className='w-10/12 max-w-full flex flex-col lg:flex-row justify-between mt-12 py-8 mx-auto gap-y-16'>
            <div className='grid grid-cols-3 gap-12 '>
                <div>
                    <img src={Logo} alt='Logo' className='mt-4'/>
                    <Generater company={company}/>
                    <div className='flex gap-3 text-[20px] text-white opacity-40 mt-3'>
                                    <FaFacebook />
                                    <FaGoogle />
                                    <FaTwitter />
                                    <FaYoutube />
                    </div>
                </div>
                
                <Generater company={resources}/>
                <Generater company={plan}/>
                
                
            </div>
            <div className='hidden lg:block w-[1px] border-opacity-10 border-white border h-[600px] mr-16 my-auto'></div>
            <div className='grid grid-cols-3 gap-12 '>
                <Generater company={subjects}/>
                <Generater company={languages}/>
                <Generater company={career}/>
            </div>
        </div>
        <div className='block w-10/12 max-w-full mx-auto border-opacity-10 border-white border h-[1px] mt-10 mb-10'></div>
        <div className='flex items-center justify-around lg:flex-row flex-col gap-y-2 mb-16'>
           <div className='text-white opacity-40 text-[15px] flex gap-3'>
                <p className='hover:opacity-60'>Privacy Policy</p>
                <p className='opacity-30'>|</p>
                <p className='hover:opacity-60'>Cookie Policy</p>
                <p className='opacity-30'>|</p>
                <p className='hover:opacity-60'>Terms</p>
           </div>
           <div className='text-white opacity-40 text-[15px]'>Made with ❤️  &#169; By Jagadish Nayak</div>
        </div>
    </div>
  )
}

export default Footer