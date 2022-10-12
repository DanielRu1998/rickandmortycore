export const getDynamicData = (word, setData) => {
    const filterData = { onType: true, data: [] };
    if (word !== '') {
        // FOR SEARCHING DATA DYNAMIC
        for (let i = 0; i < setData.length; i += 1) {
            const customRegex = new RegExp(word.toLocaleLowerCase());
            if (customRegex.test(setData[i].name.toLocaleLowerCase())) {
                filterData.data.push(setData[i]);
            }
        }
    } else {
        // FOR INITIAL DATA
        filterData.onType = false;
    }
    return filterData;
};

