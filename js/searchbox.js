

document.querySelector('.form-control').addEventListener('click', function () {
    const searchBox = document.querySelector('.search-box');
    searchBox.classList.add('highlighted');
    const searchIcon = document.querySelector('.navbar-search-icon');
    searchIcon.classList.add('highlighted');
    const rightContent = document.querySelector('.rightcontent');
    rightContent.classList.add('expanded');
});


document.addEventListener('click', function (event) {
    const searchBox = document.querySelector('.search-box');
    const searchIcon = document.querySelector('.navbar-search-icon');
    const rightContent = document.querySelector('.rightcontent');
    const searchInput = document.querySelector('.form-control');

    if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
        searchBox.classList.remove('highlighted');
        searchIcon.classList.remove('highlighted');
        rightContent.classList.remove('expanded');

        searchInput.value = '';
    }
});
