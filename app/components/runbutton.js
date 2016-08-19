var React = require('react');
var nIntervId;
var RunButton = React.createClass({

    deadOrAlive : function (fullField, column, rowIndex, colIndex){
        let field = fullField,
            counter = 0;
        for (let r = rowIndex - 1, i = 0; i < 3; r++, i++ ){
            for (let c = colIndex - 1, j = 0; j < 3; c++, j++ ){
                let nr = 0,
                    nc = 0;

                if      (r < 0){nr = field.length - 1}
                else if (r > field.length - 1) { nr = 0 }
                else    {nr = r}

                if      (c < 0){nc = field[0].length - 1}
                else if (c > field[0].length - 1) { nc = 0 }
                else    {nc = c}

                 if (field[nr][nc] === 'live'){
                    if (nr === rowIndex && nc === colIndex) {counter} else {counter++}
                };
            };
        };

        if (column === "dead" && counter === 3 ) {
            return "live";
        };

        if (column === "live" && counter < 2) {
            return  "dead";
        } else if (column === "live" && counter > 3 ){
            return  "dead"
        } else if (column === "live" && (counter === 2 || counter === 3) ){
            return  "live";
        };
        return "dead";
    },

    calcNewField: function(){
            let field = this.props.field,
                arr = [];
            for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
                let row = [];
                for (let colIndex = 0; colIndex < field[0].length; colIndex++) {
                    let val = this.deadOrAlive(field, field[rowIndex][colIndex], rowIndex, colIndex);
                    row.push(val);
                };
                arr.push(row)
            };
            this.props.onClick(arr);
            this.props.countUpdate(this.props.count + 1);
    },

    startRender : function(){
        nIntervId = setInterval(this.calcNewField, 1000);

    },
    stopRender : function(){
        clearInterval(nIntervId);
    },
    resetRender : function(){
        let field = this.props.field,
            arr = [];
        clearInterval(nIntervId);
        for (let i = 0; i < field.length; i++) {
            let row = [];
            for (let j = 0; j < field[0].length; j++) {
                row.push('dead');
            };
            arr.push(row)
        };
        this.props.onClick(arr);
        this.props.countUpdate(0);
    },
    componentWillMount: function(){
        this.startRender();
    },
    render: function(){
        return(
            <div>
                <div className="button run" onClick={this.startRender}>RUN</div>
                <div className="button stop" onClick={this.stopRender}>STOP</div>
                <div className="button reset" onClick={this.resetRender}>RESET</div>
            </div>
        )
    }
});

module.exports = RunButton;
