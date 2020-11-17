
const newsReports=async ()=>{
    const url = 'https://saurav.tech/NewsAPI/everything/bbc-news.json'
    try{
        let bbcApi = await axios.get(url)
        let apiResponse = bbcApi.data.articles
        let sliceCopy = apiResponse.slice(0,10)
        console.log(sliceCopy)
        top10(sliceCopy)
        test(sliceCopy)

        console.log(apiResponse)
    }catch(error){

    }
}
newsReports()

function top10(sliceCopy){
    sliceCopy.forEach((story)=>{
        console.log(story.title)
    })
}

function test(sliceCopy){
 console.log(sliceCopy[2])
}