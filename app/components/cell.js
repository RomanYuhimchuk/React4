
var React = require('react');

var Cell = React.createClass({
    cellType: function(cell,colIndex){
        let field = this.props.field,
            rowIndex = 0;
               

            counter = 0;
        //TODO if else statments
        if (this.props.indexRow === 0) {
            rowIndex = field.length - 1;
        } else if (this.props.indexRow === rowIndex = field.length - 1) {

        }
            console.log(rowIndex);
            for (let r = rowIndex - 1, i = 0; i < 3; r++, i++ ){
                for (let c = rowIndex-1, j = 0; j < 3; r++, j++ )
                    if (field[r][c] === 'live' && i !== 1 && j !== 1){
                        counter++;
                    }
            }
            if (cell === 'dead' && counter === 3 ) {
                return 'live';
            } else if (cell === 'live' && counter < 2) {
                return 'dead';
            } else if (cell === 'dead' && counter === 2 || counter === 3 ) {
                return 'live';
            } else {
                return 'dead'
            }
    },

    render: function(){
        let cellArr = this.props.cellRow,
            index = this.props.indexRow,
            arr = [];

        cellArr[index].map((el,i)=>{
            let cellStatus = this.cellType(el,i);
            arr.push(
                <div key={'cell_row-'+index+'_column-'+i} className = {'cell ' + cellStatus} ></div>
            );
        });
        return (
            <div className="row">{arr}</div>
        );
    }
});

module.exports = Cell;