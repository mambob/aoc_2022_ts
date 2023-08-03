/**
 * Function to get the repeated items in both compartments of a backpack
 * @param rucksack String describing a rucksack
 * @returns List of common items in bock compartments
 */
export function getRuckSackCommonItems(rucksack: string): string[] {
    const items = rucksack.split("");
    const firstHalf = items.slice(0, items.length / 2);
    const secondHalf = items.slice(items.length / 2, items.length);
    const commonItems = firstHalf.filter((item) => secondHalf.includes(item));
    const filteredItems: Array<string> = [];
    commonItems.forEach((item) => {
        if (!filteredItems.includes(item)) {
            filteredItems.push(item);
        }
    });
    return filteredItems;
}


export function getRuckSackBadges(rucksacks: string[]): string[] {
    const badgeList: string[] = [];
    for (let i = 0; i < rucksacks.length - 2; i += 3) {
        const first = rucksacks[i].split('');
        const second = rucksacks[i + 1].split('');  // Ugly but works
        const third = rucksacks[i + 2].split('');
        const tmp: string[] = first.filter((item) => {
            return second.includes(item) && third.includes(item)
        });
        (new Set(tmp)).forEach((item) => badgeList.push(item));
    }
    return badgeList;
}


/**
 * Function to calculate the priority value of an item
 * @param item char representing the item
 * @returns Priority value of the item
 */
export function itemPriority(item: string): number {
    let upperCaseModifier: number = 0;
    if (item.toUpperCase() === item) upperCaseModifier = 26;
    return (item.toLowerCase().charCodeAt(0) - 96) + upperCaseModifier;
}