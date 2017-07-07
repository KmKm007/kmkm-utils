(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.DateUtil = factory())
})(this, function() {
    const DateUtil = {}

    DateUtil.parseToTimeObject = function(time) {
        const date = new Date(time)
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const weekDay = date.getDay()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        const millisecond = date.getMilliseconds()
        return {
            year,
            month: month >= 9 ? (month + 1) : '0' + (month + 1),
            day: day >= 10 ? day : ('0' + day),
            hour: hour >= 10 ? hour : ('0' + hour),
            minute: minute >= 10 ? minute : ('0' + minute),
            second: second >= 10 ? second : ('0' + second),
            weekDay,
            millisecond
        }
    }

    DateUtil.getCurrentTimeObject = function() {
        const time = Date.now()
        const timeObject = parseToTimeObject(time)
        return timeObject
    }

    DateUtil.getOneDayHours = function() {
        const hours = []
        for (let i = 0; i < 24; i++) {
            hours.push(i)
        }
        return hours
    }

    DateUtil.getOneHourMinutes = function() {
        const minutes = []
        for (let i = 0; i < 60; i++) {
            minutes.push(i)
        }
        return minutes
    }

    DateUtil.getNext7DayObjects = function(t) {
        const dayObjects = []
        let time, timeObject
        for (let i = 0; i < 7; i++) {
            time = t + 3600 * 24 * 1000 * i
            timeObject = parseToTimeObject(time)
            timeObject.time = time
            switch (timeObject.weekDay) {
                case 1:
                    timeObject.weekDayString = '周一'
                    break
                case 2:
                    timeObject.weekDayString = '周二'
                    break
                case 3:
                    timeObject.weekDayString = '周三'
                    break
                case 4:
                    timeObject.weekDayString = '周四'
                    break
                case 5:
                    timeObject.weekDayString = '周五'
                    break
                case 6:
                    timeObject.weekDayString = '周六'
                    break
                case 0:
                    timeObject.weekDayString = '周日'
                    break
            }
            dayObjects.push(timeObject)
        }
        return dayObjects
    }
    return DateUtil
})
