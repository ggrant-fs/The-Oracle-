
const newsReports=async ()=>{
    const bccUrl = 'https://saurav.tech/NewsAPI/everything/bbc-news.json'
    const cnnUrl = 'https://saurav.tech/NewsAPI/everything/cnn.json'
    const foxUrl = 'https://saurav.tech/NewsAPI/everything/fox-news.json'
    const topNewsUs = 'https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json'
    const topNewsUk = 'https://saurav.tech/NewsAPI/top-headlines/category/science/gb.json'
    const topNewsRu = 'https://saurav.tech/NewsAPI/top-headlines/category/health/ru.json'
    try {
        let bccResponse = await axios.get(bccUrl)
        let cnnResponse = await axios.get(cnnUrl)
        let foxResponse = await axios.get(foxUrl)
        let topUsNews = await axios.get(topNewsUs)
        let topUkNews = await axios.get(topNewsUk)
        let topRuNews = await axios.get(topNewsRu)
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
    // let bccData = `<img src="${bbcList.urlToImage}" height=500px width=100%> `;
    let bbcDiv= document.querySelector('#flex-box1')
    // bbcDiv.insertAdjacentHTML('afterbegin',bccData )
    bbcDiv.style.backgroundImage=`url("${bbcList.urlToImage}")`
}

function cnnLoop(cnnList){
   let cnnDiv = document.querySelector('#flex-box5')
   cnnDiv.style.backgroundImage = `url("${cnnList.urlToImage})`
}
function foxLoop(foxList){
    // console.log(foxList) 
    let foxData = `<img src="${foxList.urlToImage}" height=400px width=100%>  ` 
    let foxDiv = document.querySelector('#flex-box3')
    foxDiv.insertAdjacentHTML("afterbegin",foxData)
    // const foxTitle = document.querySelector('#item1')
    // const foxName = document.querySelector('#fox-name')
    // const foxNewsDiv = document.querySelector('#ul-box4')
    // foxTitle.innerText = `${foxList.title}`
    // foxName.innerText = `${foxList.source.name}`
    // foxNewsDiv.appendChild(foxName)
    // foxNewsDiv.appendChild(foxTitle)

}
function usLoop(usList){
    console.log(usList)
    console.log(usList.urlToImage)
    let usData =`<img src="${usList.urlToImage}" height=250px width=100%>`
    let usDiv = document.querySelector('#flex-box8')
    usDiv.insertAdjacentHTML('afterbegin',usData)
    const usTitle = document.querySelector('#p-box7')
    const usTitleDiv= document.querySelector('#flex-box7')
    usTitle.innerText = `${usList.title}`
    usTitleDiv.appendChild(usTitle)
}


