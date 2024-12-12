import React from 'react'
import { featuredSolutionData } from '../views/apps/solutionSets/enum'
import { Viewer } from '@react-pdf-viewer/core'

const ViewCaseStudy = () => {
    return (
        <div className='md:h-[90vh] w-screen flex flex-col md:flex-row p-2'>
            <div className='w-full md:w-1/4 '>
                <div className='border-2  border-slate-200 px-3 py-2 '>
                    <p>Suggested Content</p>
                </div>
                <div className='h-screen  w-screen md:w-full md:h-full flex flex-col overflow-scroll'>
                    {featuredSolutionData.map(suggested => (
                        <div className='border-1 border-slate-200 flex '>
                            <div className="w-[100px] aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${suggested.imgSrc})` }}></div>
                            <div className="p-4 ">
                                <p className="text-gray-600  line-clamp-2 text-wrap">{suggested.description}</p>
                                <p className=" font-semibold line-clamp-2"><span className='text-slate-400'>Case Study by</span> {suggested.title}</p>
                            </div>
                        </div>
                    ))}
                    <div className='py-7'></div>
                </div>
                <div></div>
            </div>
            <div className='md:w-3/4 h-screen border-2'>
            <embed className="w-full h-screen rounded-md" src={"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK"} type="application/pdf"  />
            </div>
        </div>
    )
}

export default ViewCaseStudy