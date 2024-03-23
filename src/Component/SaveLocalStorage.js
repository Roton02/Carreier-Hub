

const getAplicationsData =()=>{
    const getAplications = localStorage.getItem('JobsData')
    // console.log(getAplications);
    if (getAplications) {
        const data = JSON.parse(getAplications)
        return  data
    }return []
}

const SaveAplicationData = id =>{
    // console.log(id);
    const saveJobInLs = getAplicationsData()
    const LsData = saveJobInLs.find(job => job == id)
    // console.log(LsData);
    if (!LsData) {
        saveJobInLs.push(id)
        localStorage.setItem('JobsData', JSON.stringify(saveJobInLs))
    }
}

export {getAplicationsData,SaveAplicationData }