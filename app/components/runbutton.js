var React = require('react');

var RunButton = React.createClass({

calcNewField: function(){
    let field = this.props.field,
        arr = [];
        //console.log(field);

    field.map((el,rowIndex)=>{
        let row = [];
        el.map((col,colIndex)=>{
            let counter = 0,
                val = '';

            for (let r = rowIndex - 1, i = 0; i < 3; r++, i++ ){
                for (let c = colIndex - 1, j = 0; j < 3; c++, j++ ){
                    let nr = 0,
                        nc = 0;
                    counter = 0;

                    if      (r < 0){nr = field.length - 1}
                    else if (r > field.length - 1) { nr = 0 }
                    else    {nr = r}

                    if      (c < 0){nc = field[0].length - 1}
                    else if (c > field[0].length - 1) { nc = 0 }
                    else    {nc = c}

                    if (field[nr][nc] === 'live' && i !== 1 && j !== 1) counter++;
               }
            }

            if (col === "dead" && counter === 3 ) {
                val = "live";
            } else if (col === "live" && counter < 2) {
                val =  "dead";
            // } else if (col === "live" && counter === 2 || counter === 3 ) {
            //     val =  "live";
            } else if (col === "live" && counter > 3 ){
                val =  "dead"
            } else {
                val =  "live";
            }
            console.log(counter);
            row.push(val);
            console.log(row);
        });
        arr.push(row);
    });

    this.props.onClick(arr);

    //     for (let r = rowIndex - 1, i = 0; i < 3; r++, i++ ){
    //         for (let c = colIndex-1, j = 0; j < 3; c++, j++ ){
    //
    //             if      (r < 0){nr = field.length - 1}
    //             else if (r > field.length - 1) { nr = 0 }
    //             else    {nr = r}
    //
    //             if      (c < 0){nc = field[0].length - 1}
    //             else if (c > field[0].length - 1) { nc = 0 }
    //             else    {nc = c}
    //
    //             if (field[nr][nc] === 'live' && i !== 1 && j !== 1) counter++;
    //        }
    //     }
    //
    //     if (cell === 'dead' && counter === 3 ) {
    //         return 'live';
    //     } else if (cell === 'live' && counter < 2) {
    //         return 'dead';
    //     } else if (cell === 'dead' && counter === 2 || counter === 3 ) {
    //         return 'live';
    //     } else {
    //         return 'dead'
    //     }
},
render: function(){
    return(
        <div className="button run" onClick={this.calcNewField}>RUN</div>
    )
}
});

module.exports = RunButton;
