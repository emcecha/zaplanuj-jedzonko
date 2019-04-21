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

            for (var i = 1; i < appNavItems.length; i++) {
                appNavItems[i].style.display = "block";
            }

            appHeaderUserName.innerText = user.name;

            if (appWelcomeBox) {
                appWelcomeBox.style.display = "none";
            }

            if (userMainView) {
                userMainView.style.display = "block";
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

    if (addRecipeButton) {
        addRecipeButton.addEventListener("click", openRecipeCreator);
    }

    var addInstructionForm = document.querySelector(".app-add-recipe__col-form--instructions");

    function addInstruction(event) {

        if (this.firstElementChild.value) {

            event.preventDefault();

            var value = this.firstElementChild.value;
            this.firstElementChild.value = "";
            var list = document.querySelector(".app-add-recipe__list--instructions");

            addListItem(list, value);
        }
    }

    if (addInstructionForm) {
        addInstructionForm.addEventListener("submit", addInstruction);
    }

    var addIngridientForm = document.querySelector(".app-add-recipe__col-form--ingridients");

    function addIngridient(event) {

        if (this.firstElementChild.value) {

            event.preventDefault();

            var value = this.firstElementChild.value;
            this.firstElementChild.value = "";
            var list = document.querySelector(".app-add-recipe__list--ingridients");

            addListItem(list, value);
        }
    }

    if (addIngridientForm) {
        addIngridientForm.addEventListener("submit", addIngridient);
    }

    function addListItem(list, value) {

        var item = document.createElement("li");

        var itemText = document.createElement("span");
        itemText.innerText = value;

        var editBtn = document.createElement("span");
        editBtn.className = "button-edit"
        var iconEdit = document.createElement("i");
        iconEdit.className = "fas fa-edit";
        editBtn.appendChild(iconEdit);

        var deleteBtn = document.createElement("span");
        deleteBtn.className = "button-delete";
        var iconDelete = document.createElement("i");
        iconDelete.className = "fas fa-trash-alt";
        deleteBtn.appendChild(iconDelete);

        item.appendChild(itemText);
        item.appendChild(editBtn);
        item.appendChild(deleteBtn);

        list.appendChild(item);
    }
















});
