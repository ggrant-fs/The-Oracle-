
const newsReports=async ()=>{
    const url = 'https://saurav.tech/NewsAPI/everything/bbc-news.json'
    try{
        let bbcApi = await axios.get(url)
        let apiResponse = bbcApi.data.articles[0]
        mainImg(apiResponse)

    }catch(error){

    }
}
newsReports()

function mainImg(apiResponse){
  console.log(apiResponse.urlToImage)
  let mainPic = document.querySelector('#featured-article')
  mainPic.style.backgroundImage = `url("${apiResponse.urlToImage}")`
  
}