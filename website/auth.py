from flask import Blueprint as blue

auth = blue('auth', __name__)

@auth.route('/login')
def login() -> str:
    return "<p>Login</p>"

@auth.route('/logout')
def logout() -> str:
    return "<p>Logout</p>"

@auth.route('/sign-up')
def sign_up() -> str:
    return "<p>Sign Up</p>"
