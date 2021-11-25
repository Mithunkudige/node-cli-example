const axios = require('axios');

if (process.argv.length !== 3) {
    console.log('Please specify command');
    process.exit(1);
} else {
    if (process.argv[2] === 'fetch') {
        const fetchData = async () => {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                console.log(data);
            } catch (error) {
                console.error(error);
            }  
        }
        fetchData();
    }
}

