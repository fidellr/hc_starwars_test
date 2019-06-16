const findItemByKeyword = (keyToSearch, array, keyword) => {
    let results = [];
    let word = keyword.toLowerCase();
    for (let i = 0; i < array.length; i++) {
        if (array[i][keyToSearch].toLowerCase().indexOf(word) !== -1) {
            results.push(array[i]);
        }
    }

    return results;
};

export {
    findItemByKeyword,
};
