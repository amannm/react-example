const E = React.createElement;

class AuthenticationPane extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        const logo = E('h1', null, 'Example App');
        const leftPane = E('div', null, logo);

        const form = E(AuthenticationForm, null);
        const rightPane = E('div', null, form);

        return E('div', {className: 'AuthenticationPane'},
            leftPane,
            rightPane
        )
    }
}

class AuthenticationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value}, null);
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value}, null);
    }

    handleSignUp(event) {
        alert('Signing Up with: ' + JSON.stringify(this.state));
    }

    handleLogIn(event) {
        alert('Logging In with: ' + JSON.stringify(this.state));
    }

    handleForgotPassword(event) {
        alert('Forgot Password with: ' + JSON.stringify(this.state));
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        const emailInput = E('input', {
            type: 'text',
            value: this.state.email,
            onChange: this.handleEmailChange,
            placeholder: 'Email'
        });

        const passwordInput = E('input', {
            type: 'password',
            value: this.state.password,
            onChange: this.handlePasswordChange,
            placeholder: 'Password'
        });

        const signUpButton = E('button', {
            type: 'button',
            onClick: this.handleSignUp
        }, 'Sign Up');

        const logInButton = E('button', {
            type: 'button',
            onClick: this.handleLogIn
        }, 'Log In');

        const forgotButton = E('button', {
            type: 'button',
            onClick: this.handleForgotPassword
        }, 'Forgot Password');

        const buttons = E('div', null,
            signUpButton,
            logInButton,
            forgotButton
        );

        return E('div', {className: 'AuthenticationForm'},
            emailInput,
            passwordInput,
            buttons
        );
    }
}


ReactDOM.render(
    E(AuthenticationPane, null),
    document.getElementById('root')
);