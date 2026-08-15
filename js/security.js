function sanitizeInput(value) {
    return $("<div>")
        .text(String(value))
        .text()
        .trim();
}

function isSafeInput(value) {
    const dangerousPattern =
        /<script|<\/script|javascript:|onerror\s*=|onload\s*=|onclick\s*=/i;

    return !dangerousPattern.test(
        String(value)
    );
}

function isValidUsername(username) {
    return /^[A-Za-z0-9_-]{3,30}$/.test(
        username
    );
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
    );
}