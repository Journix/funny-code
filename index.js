/**
 * [description]
 * test test
 * @type {Object}
 */
var Oops = {
    /**
     * 今天星期几
     * @return {[type]} [description]
     */
    week: function () {
        var days = ['日','一','二','三','四','五','六'];
        var date = new Date();
        console.log('今天是星期' + days[date.getDay()]);
    }
}