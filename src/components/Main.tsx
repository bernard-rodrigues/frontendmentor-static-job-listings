import iconRemove from '../assets/images/icon-remove.svg'
import { useEffect, useState } from "react"

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
    role: string
}

export function Main(){
    const [ jobList, setJobList ] = useState<Job[]>([])
    const [ filterByLanguageList, setFilterByLanguageList ] = useState<string[]>([])

    useEffect(() => {
        fetch("/src/data/data.json")
            .then(response => response.json())
            .then(data => setJobList(data))
    }, [])
    
    function checkFilterList(){
        if(filterByLanguageList.length > 0){
            return jobList.filter(job => filterByLanguageList.every(language => job.languages.includes(language)))
        }
        return jobList
    }

    return(
        <main className="
            flex flex-col items-center gap-10 pb-12
            lg:pt-[76px] lg:gap-[24px]
        ">
            <div 
                className="
                    w-[326px] py-[21px] pl-[21px] pr-[27px] flex justify-between items-center -mt-[37px] rounded shadow-lg
                    bg-white 
                "
            >
                <div className="flex border">
                    <span 
                        className="
                            h-8 pl-2 pr-3 rounded-l flex items-center 
                            bg-lightGrayishCyan2 text-desaturatedDarkCyan font-myBold
                        "
                    >
                        Vabjhs
                    </span>
                    <span className="bg-desaturatedDarkCyan w-8 h-8 rounded-r flex items-center justify-center"><img src={iconRemove} alt="" /></span>

                </div>

                <span className="font-myBold text-darkGrayishCyan">Clear</span>
            </div>

            {checkFilterList().map( job => (
                <div 
                    key={job.id} 
                    className="
                        h-64 w-[326px] px-[25px] relative shadow-xl
                        bg-white border-l-[5px] border-desaturatedDarkCyan rounded-md
                        lg:w-[1116px] lg:h-[154px] lg:flex lg:items-center lg:px-[35px]
                    "
                >
                    <img className="
                        h-12 w-auto absolute -translate-y-1/2
                        lg:relative lg:translate-y-0 lg:h-[89px] lg:mr-[24px]
                    "src={job.logo} alt={job.company + "'s logo"}/>
                       
                    <div className="lg:flex lg:justify-between lg:items-center lg:w-full">
                        <div className="mt-8 lg:mt-0 flex flex-col justify-center">   
                            <div className="flex flex-row justify-start items-center gap-[25px] lg:gap-[17px]">
                                <div className="
                                    text-desaturatedDarkCyan font-myBold translate-y-[2px]
                                    lg:text-[18px] lg:translate-y-[0px]
                                ">{job.company}</div>
                                <div 
                                    className="
                                        flex flex-row gap-2
                                        [&>div>p]:text-white [&>div>p]:pt-[2px] [&>div>p]:px-2 [&>div]:rounded-full
                                        [&>div>p]:font-myBold [&>div>p]:text-sm [&>div>p]:translate-y-[1px]
                                    "
                                >
                                    {job.new ? 
                                        <div className="bg-desaturatedDarkCyan">
                                            <p>NEW!</p>
                                        </div>
                                        : <></>
                                    }
                                    {job.featured ? 
                                        <div className="bg-veryDarkGrayishCyan">
                                            <p>FEATURED</p>
                                        </div> 
                                        : <></>
                                    }
                                </div>
                            </div>
                            <div className="
                                font-myBold mt-[11px] text-[15.1px]
                                lg:text-[22px] lg:mt-0
                            ">{job.position}</div>
                            <div className="
                                flex flex-row mt-[10px] gap-3
                                [&>p]:text-[15.1px] [&>p]:text-darkGrayishCyan [&>span]:text-darkGrayishCyan
                                lg:mt-0 lg:[&>p]:text-[17px] lg:gap-[18px] lg:translate-y-[2px]
                            ">
                                <p>{job.postedAt}</p>
                                <span>&bull;</span>
                                <p>{job.contract}</p>
                                <span>&bull;</span>
                                <p>{job.location}</p>
                            </div>
                        </div>

                        <hr className="border-darkGrayishCyan my-4 lg:hidden"/>
                        
                        <div className="flex flex-row flex-wrap lg:items-center gap-4">
                            {job.languages.map(language => (
                                <div className="bg-lightGrayishCyan2 px-2 py-1 mb-16 lg:mb-0 rounded" key={language}>
                                    <span className="text-desaturatedDarkCyan font-myBold">{language}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            ))}
        </main>
    )
}