//Компонент, описывающий вывод
var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.updates.name;
        var message = this.props.updates.message;
        return (
            <div>
                <h1>Hello, {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

//Компонент, описывающий форму
var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        updates.name = this.refs.name.value;
        updates.message = this.refs.message.value;
        var changed = false;
        for (var key in updates) {
            if (updates[key].length > 0) {
                this.refs[key].value = '';
                changed = true;
            }
        }
        if (changed)
            this.props.onUpdates(updates);

    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <br/>
                <textarea id="" cols="16" rows="3" ref="message"></textarea>
                <br/>
                <button>Set Name</button>
            </form>
        );
    }
});

//Контейнерный компонент
var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            updates: {
                name: 'React',
                message: 'This is the default message!'
            }
        };
    },
    getInitialState: function () {
        return {
            updates: this.props.updates
        };
    },
    handleUpdates: function (updates) {
        for(var key in updates){

        }
        this.setState({
            updates: updates
        });
    },
    render: function () {
        var updates = this.state.updates;
        return (
            <div>
                <GreeterMessage updates={updates}/>
                <GreeterForm onUpdates={this.handleUpdates}/>
            </div>
        );
    }
});

var firstName = 'Andrew';

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);
