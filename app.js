const settings = {
    color: {
        theme: "dark"
    }
};

const { notifications: { follow = false } = {}} = settings;

console.log(follow);