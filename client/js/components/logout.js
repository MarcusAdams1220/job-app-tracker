function logout() {
  fetch("/api/sessions", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  }).then((req, res) => {
    state.loggedInUserName = null;
    state.sessionId = null;
    renderUsersButton();
  });
}