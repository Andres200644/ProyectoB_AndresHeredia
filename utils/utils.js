const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validatePassword = (password) => {
    // Example: Password must be at least 6 characters long and contain at least one number.
    const regex = /^(?=.*\d).{6,}$/;
    return regex.test(password);
};

module.exports = { formatDate, validateEmail, validatePassword };
