export const api = {
    url: process.env.NODE_ENV === "production"
        ? "http://192.168.1.168:8080"
        : "http://localhost:8080"
}