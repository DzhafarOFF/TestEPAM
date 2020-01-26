export const toCapitalize = (str) => {
    return String(str)
        .split(' ')
        .map((s) => s.charAt(0)
            .toUpperCase() + s.substring(1))
        .join(' ');
}

export const toSort = (users) => {
    return users.sort((a, b) => `${a.name.first}${a.name.second}`
                .localeCompare(`${b.name.first}${b.name.second}`));
}

export const toReverse = (users) => {
    return users.reverse();
}