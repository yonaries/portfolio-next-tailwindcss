export const projectsData:IProject[] = [
    {
        title:"cyllo",
        description:"An open-source shared code library designed to boost developers productivity.",
        tech:["typescript","nextjs","firebase"]
    },
    {
        title:"stock-nest",
        description:"Stock Nest provides realtime stock market data, finacial and business news.",
        tech:["typescript","nextjs","tailwindcss"]
    },
    {
        title:"ask-habeshan",
        description:"Social networking platform designed for question and answer.",
        tech:["php","html","css"]
    },
]

export interface IProject {
    title:string
    description:string
    tech:string[]
}