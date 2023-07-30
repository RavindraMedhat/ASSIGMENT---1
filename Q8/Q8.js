const fetch = require('node-fetch');
const express = require("express");
const app = express();
async function fetchGooglePage() {
    try {
        const response = await fetch('https://www.google.com');
        if (!response.ok) {
            throw new Error(`Failed to fetch the Google page. Status: ${response.status}`);
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error fetching the Google page:', error);
        throw error;
    }
}

// Call the function and handle the result


app.listen(7485, () => {
    console.log("listen at 7485");
})

app.use((req, res) => {
    fetchGooglePage()
        .then((data) => {
            // console.log('Fetched data from Google page:', data);
            res.send(data);
        })
        .catch((error) => {
            console.error('Error occurred:', error);
            res.send(error);

        });

})