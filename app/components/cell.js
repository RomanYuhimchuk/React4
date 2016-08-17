
var React = require('react');

var Cell = React.createClass({

    cellType: function(cell,colIndex){
        let field = this.props.cellRow,
            rowIndex = this.props.indexRow,
            counter = 0,
            nr = 0,
            nc = 0;

            for (let r = rowIndex - 1, i = 0; i < 3; r++, i++ ){
                for (let c = colIndex-1, j = 0; j < 3; c++, j++ ){

                    if      (r < 0){nr = field.length - 1}
                    else if (r > field.length - 1) { nr = 0 }
                    else    {nr = r}

                    if      (c < 0){nc = field[0].length - 1}
                    else if (c > field[0].length - 1) { nc = 0 }
                    else    {nc = c}

                    if (field[nr][nc] === 'live' && i !== 1 && j !== 1) counter++;
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

        cellArr = cellArr[index].map((el,i)=>{
            let cellStatus = this.cellType(el,i);
            arr.push(
                <div key={'cell_row-'+index+'_column-'+i} className = {'cell ' + cellStatus} ></div>
            );
            el = cellStatus;
            
        });
        // problems with output
       // this.props.update(cellArr);
        return (
            <div className="row">{arr}</div>
        );
    }
});

module.exports = Cell;