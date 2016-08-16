
var React = require('react');

var Cell = React.createClass({
    cellType: function(cell,colIndex){

        rowIndex = this.props.indexRow;

        if(cell === 'dead'){

        }
    },

    render: function(){
        let cellArr = this.props.cellRow,
            index = this.props.indexRow,
            arr = [];

        cellArr[index].map((el,i)=>{
            arr.push(
                <div key={'cell_row-'+index+'_column-'+i} className="cell dead"></div>
            );
        });
        return (
            <div className="row">{arr}</div>
        );
    }
});

module.exports = Cell;