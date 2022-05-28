const loadData = (key) => {
    try{
        let d = localStorage.getItem(key);
        d = JSON.parse(d);
        return d;
    }
    catch(e)
    {
        console.log("e:",e)
    }
}

const saveData = (key,d) => {

    localStorage.setItem(key, JSON.stringify(d));
}

export {loadData, saveData}