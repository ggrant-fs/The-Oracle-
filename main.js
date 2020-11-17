
const newsReports=async ()=>{
    const url = 'https://saurav.tech/NewsAPI/everything/bbc-news.json'
    const url2 ='https://saurav.tech/NewsAPI/top-headlines/category/business/us.json'
    try{
        let bbcApi = await axios.get(url)
        let apiResponse = bbcApi.data.articles[0]
        let usNewsApi = await axios.get(url2)
        let usNews = usNewsApi.data.articles[0]
        // console.log(usNews)
        mainImg(apiResponse)
        pic1(usNews)

    }catch(error){

    }
}
newsReports()

function mainImg(apiResponse){
  console.log(apiResponse.urlToImage)
  let mainPic = document.querySelector('#featured-article')
  mainPic.style.backgroundImage = `url("${apiResponse.urlToImage}")`
  
}

function pic1(usNews){
 console.log(usNews)
 let newsPic1 = document.querySelector('#sub-block1')
 newsPic1.style.backgroundImage = `url("${usNews.urlToImage}")`
}

function pic2(){

}