const axios=require("axios")
const getResearchDetails= async (req, res) => {
    const { authorId } = req.params;

    try {
        const Response = await axios.get('https://serpapi.com/search', {
            params: {
                engine: 'google_scholar_author',
                author_id: authorId,
                api_key: process.env.SERP_API_KEY
            }
        });

        const authorDetails = Response.data;

        const publications = authorDetails.articles.map(article => ({
            title: article.title,
            link: article.link,
            authors: article.authors,
            publication: article.publication,
            cited_by: article.cited_by ? article.cited_by.value : 0,
            year: article.year
        }));
        // h-index
        const citations = publications.map(pub => pub.cited_by).sort((a, b) => b - a);
        let hIndex = 0;
        while (hIndex < citations.length && citations[hIndex] > hIndex) {
            hIndex++;
        }
        // i10-index
        const i10Index = publications.filter(pub => pub.cited_by >= 10).length;

        const structuredResponse = {
            author: {
                // name: authorDetails.author.name,
                affiliations: authorDetails.author.affiliations,
                // email: authorDetails.author.email,
                interests: authorDetails.author.interests.map(interest => interest.title),
                // thumbnail: authorDetails.author.thumbnail,
                h_index: hIndex,
                i10_index: i10Index
            },
            publications: publications
        };

        res.json(structuredResponse);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching author details');
    }
}


module.exports=getResearchDetails