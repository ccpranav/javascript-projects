const form = document.querySelector('#myform');
const input = document.querySelector('#cats');
const list = document.querySelector('#listofcats')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const catName = input.value;
    const li = document.createElement('li');
    li.innerText = catName
    list.append(li);
    input.value = ''
}); 