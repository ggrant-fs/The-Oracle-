//fox news https://saurav.tech/NewsAPI/everything/fox-news.json
//cnn news https://saurav.tech/NewsAPI/everything/cnn.json
//bbc news https://saurav.tech/NewsAPI/everything/bbc-news.json
//top headlines france https://saurav.tech/NewsAPI/top-headlines/category/business/fr.json
//top headlines usa https://saurav.tech/NewsAPI/top-headlines/category/business/us.json
//top headlines uk https://saurav.tech/NewsAPI/top-headlines/category/business/gb.json
//top headlines russia https://saurav.tech/NewsAPI/top-headlines/category/business/ru.json

//first api
// const url = "https://saurav.tech/NewsAPI/everything/cnn.json"
const test=async ()=>{
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
        console.log(topUsNews)
        console.log(topUkNews)
        console.log(topRuNews)
        console.log(bccResponse)
        console.log(cnnResponse)
        console.log(foxResponse)
    } catch (error) {
        
    }
}

test()



