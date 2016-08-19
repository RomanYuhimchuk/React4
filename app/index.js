var React = require('react');
var ReactDOM = require('react-dom');
var Cell = require('./components/cell.js');
var RunButton = require('./components/runbutton.js');
var Counter = require('./components/counter.js');
require('./styles.scss');

var Index = React.createClass({

  generateField: function(cols,rows){
    let arr=[];
    for (let i=0; i<rows; i++){
        let row = [];
        for (let j=0; j<cols; j++){
            row[j] =  Math.random() > 0.9 ? "live" : "dead";
          }
        arr[i] = row;
    }
    this.setState({
        field: arr
    });
  },

  updateField: function(arr){
      this.setState({
        field: arr
    });
  },
  cellClick: function(num){
      let coord = [],
      newField = this.state.field;
      coord = num.split(' ');
      newField[coord[0]][coord[1]] = newField[coord[0]][coord[1]] === 'dead' ? 'live' : 'dead';
      this.updateField(newField);
  },
  counterUpdate: function(count){
      this.setState({
          counter: count
      });
  },

  getInitialState: function () {
    return {
        rows : 0,
        columns: 0,
        field: [],
        counter: 0,
    }
  },

  componentWillMount: function(){
      this.setState({
          rows: this.props.startRows,
          columns: this.props.startCols
      });

      this.generateField(this.props.startCols, this.props.startRows);
  },

  render: function(){
    let cellRows = [],
        field = this.state.field;
        field.map((el,i)=>{
            cellRows.push(
                <Cell key={'row' + i} cellRow = {field} indexRow = {i} update = {this.updateField} onClickCell={this.cellClick} />
            );
      });
      return(
        <div>
            <Counter count = {this.state.counter} />
            {cellRows}
            <RunButton
                onClick = {this.updateField}
                field = {this.state.field}
                countUpdate = {this.counterUpdate}
                count = {this.state.counter}
            />
        </div>
    );
  }

});

ReactDOM.render(
  <Index startCols="50" startRows="30" />,
  document.getElementById('app')
);