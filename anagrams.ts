export default function anagram(lists: string[]): string[] | string[][] {
    if (lists.length === 0) return []

    const result: string[][] = []
    let newLists = [...lists]

    while (newLists.length > 0) {
        const correctAnagram: string[] = []
        
        let keyword = newLists.shift() as string
        correctAnagram.push(keyword)

        // we cast all into lowercase, then sort alphabetically
        keyword = keyword.toLowerCase().split('').sort().join('')

        
        for (let i = 0; i < newLists.length; i++) {
            let text = newLists[i]


            if (keyword.length !== text.length) continue

            // do same on text like keyword
            text = text.toLocaleLowerCase().split('').sort().join('')


            if (keyword !== text) continue

            // on this next line we will do some logic when it's anagram
            correctAnagram.push(newLists[i])
        }


        // remove anagram words from newLists
        newLists = newLists.filter((word) => !correctAnagram.includes(word))

        // finally push em into result
        result.push(correctAnagram)
    }

    return result
}