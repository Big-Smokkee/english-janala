const loadLessons = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url).then(res => res.json()).then(json => displayLessons(json.data));
}
const removeActive = ()=>{
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    // console.log(lessonButtons);
    lessonButtons.forEach(btn => btn.classList.remove("active"));
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive(); //remove all active class
            const clickedBtn = document.getElementById(`lesson-btn-${id}`);
            clickedBtn.classList.add("active");//add active class
            displayLevelWord(data.data);
        }
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
        btnDiv.innerHTML = `<button id="lesson-btn-${lesson.level_no}" onclick = " loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><span><i
                                    class="fa-solid fa-book-open"></i></span>Lesson - ${lesson.level_no}</button>
        `
        // 4. append into the container
        levelContainer.append(btnDiv);
    });
}

const displayLevelWord = (words) => {
    // 1. get the container & emppty it
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    if (words.length == 0) {
        wordContainer.innerHTML = `
        <div class="text-center col-span-full py-10 rounded-xl space-y-6 font-bangla">
            <img src="./assets/alert-error.png" class="mx-auto">
            <p class="text-xl font-medium text-gray-500">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
        </div>
        `;
        return;
    }
    // 2. get into every words
    words.forEach(word => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-6">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া জায় নি"}</h2>
            <p class="font-semibold">Meaning/Pronounciation</p>
            <div class="font-bangla text-2xl font-semibold">"${word.meaning ? word.meaning : "শব্দের অর্থ খুঁজে পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "শব্দের উচ্চারণ পাওয়া যায়নি"}"</div>
            <div class="flex justify-between items-center">
                <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF1A] hover:bg-[#1A91FF80]"><span><i class="fa-solid fa-circle-info"></i></span></button>
                <button class="btn bg-[#1A91FF1A] hover:bg-[#1A91FF80]"><span><i class="fa-solid fa-volume-high"></i></span></button>
            </div>
        </div>
        `;
        wordContainer.append(card);
    })
}
loadLessons();