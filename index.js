/**
 * [description]
 * test test
 * @type {Object}
 */
window.Oops = {
    /**
     * 今天星期几
     * @return {[type]} [description]
     */
    week: function () {
        var days = ['日','一','二','三','四','五','六'];
        var date = new Date();
        console.log('今天是星期' + days[date.getDay()]);
    },
    /**
     * 把一个数组组合,但是不能倒序： ["A","B","C"] ===> ["A", "AB", "ABC", "B", "BC", "C"]
     * @param  {[type]} a [description]
     * @param  {[type]} b [description]
     * @return {[type]}   [description]
     */
    doPush: function(a, b) {
        var result = a;
        var tmpResult = [];
        if (b.length == 1 && b[0] == a.join("")) {
            return;
        }
        for (var j = 0; j < b.length; j++) {
            var start = b[j].split("");
            var stN = start[start.length-1];
            var startNum = a.indexOf(stN);
            if(startNum > -1 && startNum+1 < a.length) {
                for (var i = startNum+1; i < a.length; i++) {
                    tmpResult.push(b[j]+a[i]);
                }
            }
        }
        if (tmpResult.length) {
            result = result.concat(tmpResult);
            doPush(a, tmpResult);
        }
    }
}