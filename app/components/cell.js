var React = require('react');

var Cell = React.createClass({
    render: function(){
        let cellArr = this.props.cellRow,
            index = this.props.indexRow,
            arr = [];
        cellArr[index].map((el,i)=>{
            let ind = index + ' ' + i;
            arr.push(
                <div
                    key={'cell_row-'+index+'_column-'+i}
                    className = {'cell ' + el}
                    id={index + ' ' + i}
                    onClick = {()=>{this.props.onClickCell(ind)}}
                    >
                </div>
            );
        });
        return (
            <div className="row">{arr}</div>
        );
    }
});

module.exports = Cell;