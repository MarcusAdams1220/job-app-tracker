function logout() {
    state.loggedInUserName = null;
    state.sessionId = null;
    renderUsersButton();
    renderJobListEmpty()
    renderJobBoards()
    document.querySelector('.heading').innerHTML =`Please Login to Access Your Job Applications`  
}