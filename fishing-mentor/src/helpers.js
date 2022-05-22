const updateResults = (newData, existing) => {
    let newResults = {}
    Object.keys(existing).forEach((current) => {
        // Convert vals back to float
        let total = parseFloat(existing[current]) + parseFloat(newData[current])
        // Store final values as string
        newResults[current] = parseFloat(total).toFixed(2)
    })
    // console.log(JSON.stringify(newResults))
    return newResults
}

export default updateResults