
const newsReports=async ()=>{
    const bccUrl = 'https://saurav.tech/NewsAPI/everything/bbc-news.json'
    const cnnUrl = 'https://saurav.tech/NewsAPI/everything/cnn.json'
    const foxUrl = 'https://saurav.tech/NewsAPI/everything/fox-news.json'
    const topNewsUs = 'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json'
    const topNewsUk = 'https://saurav.tech/NewsAPI/top-headlines/category/business/gb.json'
    const topNewsRu = 'https://saurav.tech/NewsAPI/top-headlines/category/business/ru.json'
    try {
        let bccResponse = await axios.get(bccUrl)
        let cnnResponse = await axios.get(cnnUrl)
        let foxResponse = await axios.get(foxUrl)
        let topUsNews = await axios.get(topNewsUs)
        let topUkNews = await axios.get(topNewsUk)
        let topRuNews = await axios.get(topNewsRu)
        console.log(bccResponse.data.articles[0])
        // console.log(cnnResponse.data.articles[0].title)
        // console.log(foxResponse.data.articles[0].title)
        // console.log(topUsNews.data.articles[0].title)
        // console.log(topUkNews.data.articles[1].title)
        let bbcList = bccResponse.data.articles[0]
        let cnnList = cnnResponse.data.articles[0]
        let foxList = foxResponse.data.articles[0]
        let usList = topUsNews.data.articles[0]
        let ukList = topUkNews.data.articles[0]
        let ruList = topRuNews.data.articles[0]
        bccLoop(bbcList)
        cnnLoop(cnnList)
        foxLoop(foxList)
        usLoop(usList)
        ukLoop(ukList)
        ruLoop(ruList)
    } catch (error) {
        
    }
}

newsReports()

function bccLoop(bbcList){
    console.log(bbcList.source.name)
    console.log(bbcList.title)
    console.log(bbcList.url)
    console.log(bbcList.publishedAt)
    let bccData = `
   <img src="${bbcList.urlToImage}" height=500px width=100%>
    `;
    let bbcDiv= document.querySelector('#flex-box1')
    bbcDiv.insertAdjacentHTML('afterbegin',bccData )
}

function cnnLoop(cnnList){
   console.log(cnnList) 
}
function foxLoop(foxList){
    console.log(foxList)   
}
function usLoop(usList){
    console.log(usList)
}
function ukLoop(ukList){
  console.log(ukList)
}
function ruLoop(ruList){
   console.log(ruList)
}



