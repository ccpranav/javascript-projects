let input = prompt("What would you like to do?")
const lst=[]

while (input !== 'quit' && input !== 'q') {
    if (input === 'new') {
        const newPrompt = prompt("Enter a new Todo")
        lst.push(newPrompt)
        console.log(`${newPrompt} added to List`)
    }

    else if (input === 'list') {
        console.log('***************')
        for (let i = 0; i < lst.length; i++){
            console.log(`${i}: ${lst[i]}`)
        }
        console.log('***************')
    }

    else if (input === 'delete') {
        if (lst.length !== 0) {
            const index = parseInt(prompt("Ok, enter an index to delete"))
            if (!Number.isNaN(index)) {
                const deleted = lst.splice(index, 1)
                console.log(`Ok, deleted ${deleted[0]}`)
            }
            else {
                alert("UNKNOWN INDEX")
            }
        }
        else {
            alert("YOU HAVENT ENTERED ANY LIST")
        }
    }

    input = prompt("What would you like to do?")
}
console.log("OK QUIT")