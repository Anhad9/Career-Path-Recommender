function filterContent() {
    // Get the search input value
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all elements that should be filtered
    let filterItems = document.getElementsByClassName('jobs');
    
    // Loop through each item and hide or show based on search input
    for (let i = 0; i < filterItems.length; i++) {
        let item = filterItems[i];
        // Check if the item text includes the search input
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}

function filterContent1()
{
    let filterItems = document.getElementsByClassName('jobs');
    for (let i = 0; i < filterItems.length; i++) {
        let item = filterItems[i];
        if (item.classList.contains("high-paying")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}

function filterContent2()
{
    let filterItems = document.getElementsByClassName('jobs');
    for (let i = 0; i < filterItems.length; i++) {
        let item = filterItems[i];
        if (item.classList.contains("attainable-careers")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}
function filterContent3()
{
    let filterItems = document.getElementsByClassName('jobs');
    for (let i = 0; i < filterItems.length; i++) {
        let item = filterItems[i];
        if (item.classList.contains("part-time-careers")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}
function filterContent4()
{
    let filterItems = document.getElementsByClassName('jobs');
    for (let i = 0; i < filterItems.length; i++) {
        let item = filterItems[i];
        if (item.classList.contains("no-degree-careers")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}