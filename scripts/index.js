const loadLessons = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url).then(res => res.json()).then(json => displayLessons(json.data));
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data)
        );
}

const displayLessons = (lessons) => {
    // 1. get the container & emppty it
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // 2. get into every lessons
    lessons.forEach(lesson => {
        // 3. create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `<button onclick = " loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><span><i
                                    class="fa-solid fa-book-open"></i></span>Lesson - ${lesson.level_no}</button>
        `
        // 4. append into the container
        levelContainer.append(btnDiv);
    });
}
// id
// : 
// 70
// level
// : 
// 3
// meaning
// : 
// "বিরক্তিকর / ক্লান্তিকর"
// pronunciation
// : 
// "টিডিয়াস"
// word
// : 
// "Tedious"
const displayLevelWord = (words) => {
    // 1. get the container & emppty it
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    // 2. get into every words
    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-6">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning/Pronounciation</p>
            <div class="font-bangla text-2xl font-semibold">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF1A] hover:bg-[#1A91FF80]"><span><i class="fa-solid fa-circle-info"></i></span></button>
                <button class="btn bg-[#1A91FF1A] hover:bg-[#1A91FF80]"><span><i class="fa-solid fa-volume-high"></i></span></button>
            </div>
        </div>
        `;
        wordContainer.append(card);
    })
}
loadLessons();