export async function getJobsFromAPI(limit, offset) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": limit,
        "offset": offset
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    let data = fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .catch((error) => console.error(error));

    return data;
}