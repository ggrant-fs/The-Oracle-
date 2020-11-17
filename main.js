
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
        let sciApi = scienceApi.data.articles[3]
        let sciApi2= scienceApi.data.articles[1]
        mainImg(apiResponse)
        pic1(usNews)
        pic2(usNews2)
        pic3(sciApi)
        pic4(sciApi2)
        content1(usNews)
        content2(usNews2)
        content3(sciApi)
        content4(sciApi2)
        console.log(sciApi)
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

function content1(usNews){
 let story1 = document.querySelector('#article1')
 story1.innerText = `${usNews.title} `
}


function content2(usNews2){
let story2 = document.querySelector('#article2')
story2.innerText = `${usNews2.title}`
}

function content3(sciApi){
let story3 = document.querySelector('#article3')
story3.innerText = `${sciApi.title}`
}

function content4(sciApi2){
 console.log(sciApi2)
 let story4 = document.querySelector('#article4')
 story4.innerText = `${sciApi2.title}`
}