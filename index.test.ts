import anagram from "./index";

describe("Testing Anagram", () => {
  it("Should return empty array when anagrams list is empty", () => {
    const result = anagram([])

    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toEqual(0)
    expect(result).toStrictEqual([])
  });

  it("Should return array 2d when anagram is correct", () => {
    const result = anagram(['aku', 'kua'])

    expect(result.length).toEqual(1)
    expect(Array.isArray(result[0])).toEqual(true)
  })

  it("Should Ignore case of the letters and should doesn't affect the comparison.", () => {
    const anagrams = ['aKu', 'Kua', 'kUa']

    const result = anagram(anagrams)

    expect(result.length).toEqual(1)
    expect(Array.isArray(result[0])).toEqual(true)
    expect(result[0].length).toEqual(3)

    expect((result[0] as string[]).sort()).toEqual(anagrams.sort())
  })

  it("Should return correct values when it has anagram", () => {
    const result = anagram(['aku', 'kua', 'kamu', 'muka'])

    // check parent array
    expect(result.length).toStrictEqual(2)

    // check first anagram value
    expect(Array.isArray(result[0])).toEqual(true)
    expect(result[0].length).toStrictEqual(2)
    ;(result[0] as string[]).map(v => ['aku', 'kua'].includes(v))

    // check second anagram value
    expect(Array.isArray(result[1])).toEqual(true)
    expect(result[1].length).toStrictEqual(2)
    ;(result[1] as string[]).map(v => ['kamu', 'muka'].includes(v))
  })
});
