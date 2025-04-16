const fetchQuestion = async () => {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
        const data = await response.json();
        return data.results[0]; // Return the first question
    } catch (error) {
        console.error('Error fetching question:', error);
        return null;
    }
};