const dogListURL = 'https://dog.ceo/api/breeds/list/all';

fetch(dogListURL)
    .then(response => response.json())
    .then(data => {
        const arrayofObjKeysBreed = Object.keys(data.message); //array of oject keys

        const selectAsParent = document.querySelector('select');
        arrayofObjKeysBreed.forEach(key =>{
            const optionAsChild = document.createElement('option');
            optionAsChild.setAttribute('value',key);
            optionAsChild.textContent = key;
            selectAsParent.appendChild(optionAsChild);
        })
    })
    .catch(err => console.log(`error ${err}`));

document.querySelector('select').addEventListener('change', onClick);

function onClick(e){
    // console.log(e.target.value);
    let breedVal = document.querySelector('option').value;
    fetch(`https://dog.ceo/api/breed/${e.target.value}/images/random`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            document.querySelector('img').src = data.message;
            document.querySelector('h2').innerText = e.target.value.toUpperCase();
        })
        .catch(err => console.log(`error ${err}`));
}
