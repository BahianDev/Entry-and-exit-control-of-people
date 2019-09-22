import React, { Component } from 'react';


class Teste extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
        bgColor: 'green',
        flag: false,
        title: 'Vazia'
    }
}

  handleClick(){

    if (!this.state.flag){
      this.setState({
        bgColor: 'red',
        flag:true,
        title:'Cheia'
      });
    }else{
      this.setState({
        bgColor: 'green',
        flag:false,
        title: 'Vazia'
      });
    }
 
  }
  
  render() {
      return (

            <div class="suadiv">
                <table class="table table-dark tbl-content " >
                  <thead>
                    <tr>
                    
                      <th scope="col">Sala</th>
                      <th scope="col">Atração</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                
                      <td>Eng. Mec</td>
                      <td>Vazia</td>
                      <button type="button"  class="btn btn-outline-success slideright" style={{marginLeft:10, marginTop:6}}>Update</button>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
            
                      <td>Eng. Prod</td>
                      <td style={{backgroundColor:this.state.bgColor}}>{this.state.title}</td>
                      <button type="button"  onClick={this.handleClick} class="btn btn-outline-success slideright" style={{marginLeft:10, marginTop:6}}>Update</button>
                    </tr>
                    <tr>

                      <th scope="row">3</th>
            
                      <td>Eng. Comp</td>
                      <td>Vazia</td>
                      <button type="button" class="btn btn-outline-success slideright" style={{marginLeft:10, marginTop:6}}>Update</button>
                    </tr>
                  </tbody>
                </table>





                
              
            </div>
        );
    }
}
export default Teste;