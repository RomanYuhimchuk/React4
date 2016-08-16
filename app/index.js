var React = require('react');
var ReactDOM = require('react-dom');
var Cell = require('./components/cell.js');
require('./styles.scss');

var Index = React.createClass({

  generateField: function(cols,rows){
    let arr=[];
    for (let i=0; i<rows; i++){
        let row = [];
        for (let j=0; j<cols; j++){
            row[j] =  "dead";
          }
        arr[i] = row;
    }
    this.setState({
        field: arr
    });
  },

  getInitialState: function () {
    return {
        rows : 0,
        columns: 0,
        field: []
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
                <Cell key={'row' + i} cellRow = {field} indexRow = {i} />
            );
      });
      return(
        <div>
            {cellRows}
        </div>
    );
  }

});

ReactDOM.render(
  <Index startCols="50" startRows="30" />,
  document.getElementById('app')
);