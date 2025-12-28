const loadLessons = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all";
    fetch(url).then(res => res.json()).then(json => displayLessons(json.data));
}
const displayLessons = (lessons) => {
    // 1. get the container & emppty it
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // 2. get into every lessons
    lessons.forEach(lesson => {
        // 3. create element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `<button class="btn btn-outline btn-primary"><span><i
                                    class="fa-solid fa-book-open"></i></span>Lesson - ${lesson.level_no}</button>
        `
        // 4. append into the container
        levelContainer.append(btnDiv);
    });
}
loadLessons();