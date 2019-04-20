document.addEventListener("DOMContentLoaded", function functionName() {

    // ------------ OBSŁUGA LOCAL STORAGE ------------

    function saveToLocalStorage(obj) {
        var objString = JSON.stringify(obj);
        localStorage.setItem("userInfo",objString);
    }

    function loadLocalStorage(key) {
        var objString = localStorage.getItem(key);
        return JSON.parse(objString);
    }

    // ----------------------------------------------
    // -------- DODANIE NOWEGO UŻYTKOWNIKA ----------

    var userNameButton = document.getElementById("user-submit");
    var userNameInput = document.querySelector(".app-welcome__input");

    function User(name) {
        this.name = name;
        this.recipes = [];
        this.plans = [];
    }

    function addNewUser(event) {

        var userName = userNameInput.value;

        if (userName === "") {
            return;
        }

        var user = new User(userName);
        saveToLocalStorage(user);
    }

    if (userNameButton) {
        userNameButton.addEventListener("click", addNewUser);
    }

    // ----------------------------------------------
    // --------- ZAŁADOWANIE UŻYTKOWNIKA ------------

    var appNavItems = document.querySelectorAll(".app-nav__item");
    var appHeaderUserName = document.getElementById("userName");
    var appWelcomeBox = document.querySelector(".app-welcome");
    var userMainView = document.querySelector(".app-dashboard");

    function getUserFromLocalStorage() {

        var user = loadLocalStorage("userInfo");

        if (user === null) {

            userMainView.style.display = "none";

            for (var i = 1; i < appNavItems.length; i++) {
                appNavItems[i].style.display = "none";
            }

        } else {

            userMainView.style.display = "block";

            for (var i = 1; i < appNavItems.length; i++) {
                appNavItems[i].style.display = "block";
            }

            appHeaderUserName.innerText = user.name;

            if (appWelcomeBox) {
                appWelcomeBox.style.display = "none";
            }
        }
    }

    getUserFromLocalStorage();
    // localStorage.clear();
    // ----------------------------------------------
    // --------- DODANIE NOWEGO PRZEPISU ------------

    var addRecipeButton = document.getElementById("add-recipe");
    var addRecipeView = document.querySelector(".app-add-recipe");

    function openRecipeCreator() {

        userMainView.style.display = "none";
        addRecipeView.style.display = "block";
    }

    addRecipeButton.addEventListener("click", openRecipeCreator)















});
