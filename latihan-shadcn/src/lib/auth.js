export const USER_KEY = "santriapp-current-user";
export const USERS_KEY = "santriapp-users";

export function getCurrentUser() {
  try {
    const user = localStorage.getItem(USER_KEY);

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  } catch {
    return null;
  }
}

export function getCurrentRole() {
  const user = getCurrentUser();

  return user?.role || "guest";
}

export function isLoggedIn() {
  return getCurrentUser() !== null;
}

export function isAdmin() {
  return getCurrentRole() === "admin";
}

export function isGuest() {
  return getCurrentRole() === "guest";
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}

export function login(user) {
  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );
}

export function setGuest() {
  localStorage.removeItem(USER_KEY);
}

export function getUsers() {
  try {
    return JSON.parse(
      localStorage.getItem(USERS_KEY) || "[]"
    );
  } catch {
    return [];
  }
}

export function saveUsers(users) {
  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );
}