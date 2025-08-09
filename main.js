document.getElementById("generateBtn").addEventListener("click", () => {
    const lang = document.getElementById("languageSelect").value;
    const explanation = document.getElementById("explanation").value;

    if (!lang || !explanation.trim()) {
        alert("Please select a language and enter explanation.");
        return;
    }

    const testcaseContainer = document.getElementById("testcaseContainer");
    testcaseContainer.innerHTML = "";

    // Example: generate 3 dummy test cases
    for (let i = 1; i <= 3; i++) {
        let btn = document.createElement("div");
        btn.classList.add("testcase-btn");
        btn.textContent = `${lang} Test Case ${i}`;
        testcaseContainer.appendChild(btn);
    }
});
