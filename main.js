
const newsReports=async ()=>{
    const url = 'https://saurav.tech/NewsAPI/everything/bbc-news.json'
    const url2 ='https://saurav.tech/NewsAPI/top-headlines/category/business/us.json'
    const url3 ='https://saurav.tech/NewsAPI/top-headlines/category/science/us.json'
    try{
        let bbcApi = await axios.get(url)
        let apiResponse = bbcApi.data.articles[0]
        let usNewsApi = await axios.get(url2)
        let usNews = usNewsApi.data.articles[0]
        let usNews2= usNewsApi.data.articles[1]
        let scienceApi= await axios.get(url3)
        let sciApi = scienceApi.data.articles[0]
        let sciApi2= scienceApi.data.articles[1]
        mainImg(apiResponse)
        pic1(usNews)
        pic2(usNews2)
        pic3(sciApi)
        pic4(sciApi2)

    }catch(error){

    }
}
newsReports()

function mainImg(apiResponse){
  let mainPic = document.querySelector('#featured-article')
  mainPic.style.backgroundImage = `url("${apiResponse.urlToImage}")`
  
}

function pic1(usNews){
 let newsPic1 = document.querySelector('#sub-block1')
 newsPic1.style.backgroundImage = `url("${usNews.urlToImage}")`
}

function pic2(usNews2){
 let newsPic2 = document.querySelector('#sub-block3')
 newsPic2.style.backgroundImage = `url("${usNews2.urlToImage}")`

}

function pic3(sciApi){
 let newsPic3 = document.querySelector('#sub-block5')
 newsPic3.style.backgroundImage = `url("${sciApi.urlToImage}")`
}

function pic4(sciApi2){
let newsPic4 = document.querySelector('#sub-block7')
newsPic4.style.backgroundImage = `url("${sciApi2.urlToImage}")`
}