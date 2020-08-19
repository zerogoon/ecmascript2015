const user = {
    NAME: "nico",
    age: 24,
    password: 12345
};

const rename = ({NAME: name, ...rest}) => ({name, ...rest});

console.log(rename(user));