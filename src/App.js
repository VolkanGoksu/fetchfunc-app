import React,{Component} from 'react';


class App extends Component {
 state={
     users:[],
     isLoading:true
 }
componentDidMount() {
     setTimeout(()=>{   //loading ekranı cok hızlı oldugu için setTimeOut kullandık
         fetch('https://jsonplaceholder.typicode.com/users')
             .then(data => data.json())
             .then(users=>{
                 this.setState({
                     users,
                     isLoading:false
                 })
             })
     },3000)


}
    render(){
     const{isLoading}=this.state;
    return (
        <div className="App">
            <h1>Users</h1>
            { isLoading ? 'Bekleniyor...':''

            }
            {
                this.state.users.map(user=>
                <div key={user.id}>
                    {user.name}   -@{user.username}
                </div>
                )
            }
        </div>
    );
  }
}

export default App;
