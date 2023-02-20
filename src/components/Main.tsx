import iconRemove from '../assets/icon-remove.svg'
import { useEffect, useState } from "react"
import { Card } from './Card'
import { concatenate } from '../utils/concatenate'

interface Job{
    company: string,
    contract: string,
    featured: boolean,
    id: number,
    languages: string[],
    level: string,
    location: string,
    logo: string,
    new: boolean,
    position: string,
    postedAt: string,
    role: string,
    tools: string[]
}

export function Main(){
    const [ jobList, setJobList ] = useState<Job[]>([])
    const [ filterByElementList, setFilterByElementList ] = useState<string[]>([])

    useEffect(() => {
        fetch("/api/data.json")
            .then(response => response.json())
            .then(data => setJobList(data))
    }, [])
    
    function checkFilterList(){
        if(filterByElementList.length > 0){
            return jobList.filter(job => filterByElementList.every(element => concatenate(job.languages, job.level, job.role, job.tools).includes(element)))
        }
        return jobList
    }

    function addToFilterByElementList(element: string){
        if(!filterByElementList.includes(element)){
            setFilterByElementList(currentElements => [...currentElements, element])
        }
    }

    function removeFromFilterByElementList(element: string){
        setFilterByElementList(filterByElementList.filter(elementInList => elementInList !== element))
    }

    return(
        <main className="
            flex flex-col items-center gap-10 pb-12
            lg:gap-[24px]
        ">
            {filterByElementList.length > 0 ? 
                <div 
                    className="
                        w-[326px] py-[21px] pl-[21px] pr-[27px] flex justify-between items-center -mt-[37px] rounded shadow-lg
                        bg-white
                        lg:w-[1116px] lg:mb-[calc(40px-24px)] lg:-mt[36px] lg:pl-[41px] lg:pr-[40px]
                    "
                >
                    <div role="listbox" className="w-full flex flex-wrap gap-[17px] mr-[17px]">
                        {filterByElementList.map(element => (
                            <div className="flex" key={element}>
                                <span 
                                    className="
                                        h-8 pl-2 pr-3 rounded-l flex items-center 
                                        bg-lightGrayishCyan2 text-desaturatedDarkCyan font-myBold
                                    "
                                >
                                    {element}
                                </span>
                                <span 
                                    className="
                                        bg-desaturatedDarkCyan w-8 h-8 rounded-r flex items-center justify-center 
                                        lg:hover:cursor-pointer lg:hover:bg-veryDarkGrayishCyan
                                    "
                                    onClick={() => removeFromFilterByElementList(element)}
                                >
                                    <img src={iconRemove} alt="" />
                                </span>
                            </div>
                        ))}
                    </div>

                    <span 
                        className="
                            font-myBold text-darkGrayishCyan text-[15.6px] 
                            lg:hover:text-desaturatedDarkCyan lg:hover:underline lg:hover:cursor-pointer
                        " 
                        onClick={() => setFilterByElementList([])}
                    >
                        Clear
                    </span>
                </div>
            :
            <div className="mb-[calc(56px-40px)] lg:mb-[calc(75px-24px)]" />            
            }

            {checkFilterList().map(job => (
                <Card 
                    company={job.company}
                    contract={job.contract}
                    featured={job.featured}
                    languages={job.languages}
                    level={job.level}
                    location={job.location}
                    logo={job.logo}
                    new={job.new}
                    position={job.position}
                    postedAt={job.postedAt}
                    role={job.role}
                    tools={job.tools}
                    key={job.id}
                    filterFunction={addToFilterByElementList}
                />
            ))}
        </main>
    )
}