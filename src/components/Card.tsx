import { concatenate } from "../utils/concatenate"

interface JobProps{
    company: string,
    contract: string,
    featured: boolean,
    languages: string[],
    level: string,
    location: string,
    logo: string,
    new: boolean,
    position: string,
    postedAt: string,
    role: string,
    tools: string[],
    filterFunction: (language: string) => void
}

export function Card(props: JobProps){
    return (
        <div 
            className={`
                h-64 w-[326px] px-[25px] relative shadow-xl
                bg-white rounded-md
                ${props.featured ? "border-l-[5px] border-desaturatedDarkCyan " : " "}
                lg:w-[1116px] lg:h-[154px] lg:flex lg:items-center lg:px-[35px]
            `}
        >
            <img className="
                h-12 w-auto absolute -translate-y-1/2
                lg:relative lg:translate-y-0 lg:h-[89px] lg:mr-[24px]
            "src={props.logo} alt={props.company + "'s logo"}/>
                
            <div className="lg:flex lg:justify-between lg:items-center lg:w-full">
                <div className="mt-8 lg:mt-0 flex flex-col justify-center">   
                    <div className="flex flex-row justify-start items-center gap-[25px] lg:gap-[17px]">
                        <div className="
                            text-desaturatedDarkCyan font-myBold translate-y-[2px]
                            lg:text-[18px] lg:translate-y-[0px]
                        ">{props.company}</div>
                        <div 
                            className="
                                flex flex-row gap-2
                                [&>div>p]:text-white [&>div>p]:pt-[2px] [&>div>p]:px-2 [&>div]:rounded-full
                                [&>div>p]:font-myBold [&>div>p]:text-sm [&>div>p]:translate-y-[1px]
                            "
                        >
                            {props.new ? 
                                <div className="bg-desaturatedDarkCyan">
                                    <p>NEW!</p>
                                </div>
                                : <></>
                            }
                            {props.featured ? 
                                <div className="bg-veryDarkGrayishCyan">
                                    <p>FEATURED</p>
                                </div> 
                                : <></>
                            }
                        </div>
                    </div>
                    <h1 className="
                        font-myBold mt-[11px] text-[15.1px] text-veryDarkGrayishCyan
                        lg:text-[22px] lg:mt-0 lg:hover:text-desaturatedDarkCyan lg:hover:cursor-pointer
                    ">{props.position}</h1>
                    <div className="
                        flex flex-row mt-[10px] gap-3
                        [&>p]:text-[15.1px] [&>p]:text-darkGrayishCyan [&>span]:text-darkGrayishCyan
                        lg:mt-0 lg:[&>p]:text-[17px] lg:gap-[18px] lg:translate-y-[2px]
                    ">
                        <p>{props.postedAt}</p>
                        <span>&bull;</span>
                        <p>{props.contract}</p>
                        <span>&bull;</span>
                        <p>{props.location}</p>
                    </div>
                </div>

                <hr className="border-darkGrayishCyan my-4 lg:hidden"/>
                
                <div className="flex flex-row flex-wrap lg:items-center gap-4">
                    {concatenate(props.languages, props.level, props.role, props.tools).map((filterElement, index) => (
                        <div 
                            className="
                                bg-lightGrayishCyan2 text-desaturatedDarkCyan px-2 py-1 lg:mb-0 rounded 
                                lg:hover:bg-desaturatedDarkCyan lg:hover:text-lightGrayishCyan2 lg:hover:cursor-pointer
                            " 
                            key={"FilterElement"+String(index)} 
                            onClick={() => props.filterFunction(filterElement)}
                        >
                            <span className="font-myBold">{filterElement}</span>
                        </div>
                    ))}
                </div>
            </div>      
        </div>
    )
}