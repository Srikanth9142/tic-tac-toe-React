import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Grid/grid';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      player1:"",
      player2:"",
      playerTurn: "player1",
      showgrid:false,
      grid:Array(9).fill(""),
      warning:"",
      winner:"",
      cellsfilled:0
    }
    this.onPlayerOneChange = this.onPlayerOneChange.bind(this);
    this.onPlayerTwoChange = this.onPlayerTwoChange.bind(this);
    //this.gameStarted = this.gameStarted.bind(this);
    this.gridClick = this.gridClick.bind(this);
  
  }
  onPlayerOneChange(event){
    this.setState({player1:event.target.value});
  }
  onPlayerTwoChange(event){
    this.setState({player2:event.target.value});
  }
  gameStarted(){
    console.log("game started");
    if(this.state.player1!=="" && this.state.player2!==""){
      this.setState({showgrid:true});
    } 
  }
  checkWinner(a,b,c,grid){
    if(grid[a]=="")return false;
    if((grid[a]===grid[b])&&(grid[b]===grid[c])){
      console.log("checkwinner called: "+grid[a]);
      return true;
    }
    return false;
  }
  gridClick(id){
    const gridy = this.state.grid;
    if(this.state.showgrid===true && gridy[id]==="" && this.state.winner===""){
     
      this.state.playerTurn==="player1"?gridy[id]="X":gridy[id]="O";
      this.setState({grid:gridy});
      const updatedplayer = this.state.playerTurn==="player1"?"player2":"player1";
      this.setState({playerTurn:updatedplayer});
      this.setState({warning:""});
      console.log(this.state.grid);
      const count=this.state.cellsfilled;
      this.setState({cellsfilled:count+1});
      //console.log(this.checkWinner(0,1,2,this.state.grid));
      if(this.checkWinner(0,1,2,this.state.grid)===true){this.setState({winner:this.state.playerTurn});alert(this.state.playerTurn+" won");}
      if(this.checkWinner(3,4,5,this.state.grid)===true){this.setState({winner:this.state.playerTurn});alert(this.state.playerTurn+" won");}
      if(this.checkWinner(6,7,8,this.state.grid)===true){this.setState({winner:this.state.playerTurn});alert(this.state.playerTurn+" won");}
      if(this.checkWinner(0,4,8,this.state.grid)===true){this.setState({winner:this.state.playerTurn});alert(this.state.playerTurn+" won");}
      if(this.checkWinner(2,4,6,this.state.grid)===true){this.setState({winner:this.state.playerTurn});alert(this.state.playerTurn+" won");}
      if(this.state.cellsfilled==9 && this.state.winner==""){this.setState({winner:"Draw"});alert("Draw");}
    }
    else{
      if(this.state.showgrid!==true){
        this.setState({warning:"Enter Player Details to Start"});
      }
      else if(this.state.winner!==""){
        this.setState({warning:"Restart the Game"});
      }
      else{
        this.setState({warning:"Not allowed"});
      }
    }
  }
  
  render(){
  return (
    <div className="App">
       <div className="PlayerForm">
                <input type="text" placeholder="player1 Name" onChange={this.onPlayerOneChange}></input>
                <input type="text" placeholder="Player2 Name" onChange={this.onPlayerTwoChange}></input>
                <button type="submit" onClick={()=>this.gameStarted()} className="start">Start</button>
                <p>Player1:{this.state.player1+"\n"}</p>
                <p>Player2:{this.state.player2+"\n"}</p>
                
        </div>
  {this.state.showgrid ?<p>{this.state.playerTurn} Turn</p>:<p style={{color:'red'}}>Give players names</p>}
      <p style={{color:'red'}}>{this.state.warning}</p>
        <div className="grid">
          <div className="gridrow">
            <Square grid={this.state.grid} index={0} gridClick={this.gridClick}></Square>
            <Square grid={this.state.grid} index={1} gridClick={this.gridClick}></Square>
            <Square grid={this.state.grid} index={2} gridClick={this.gridClick}></Square>
          </div>
          <div className="gridrow">
            <Square grid={this.state.grid} index={3} gridClick={this.gridClick}></Square>
            <Square grid={this.state.grid} index={4} gridClick={this.gridClick}></Square>
            <Square grid={this.state.grid} index={5} gridClick={this.gridClick}></Square>
          </div>
          <div className="gridrow">
            <Square grid={this.state.grid} index={6} gridClick={this.gridClick}></Square>
            <Square grid={this.state.grid} index={7} gridClick={this.gridClick}></Square>
            <Square grid={this.state.grid} index={8} gridClick={this.gridClick}></Square>
          </div>
        </div>    
    </div>
  );
  }
}

export default App;
