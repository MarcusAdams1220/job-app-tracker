function logout() {
    state.loggedInUserName = null;
    state.sessionId = null;
    renderUsersButton();
    renderJobListEmpty()
}