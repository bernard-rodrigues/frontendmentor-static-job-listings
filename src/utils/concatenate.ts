export function concatenate(languages: string[], level: string, role: string, tools: string[]){
    return languages.concat([level, role]).concat(tools)
}