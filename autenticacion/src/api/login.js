export const postLogin = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                email: "test@test.com",
                displayName: "Alex",
            });
        }, 3000);
    });
};