(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.ArrayUtil = factory())
})(this, function() {
    const ArrayUtil = {}
    ArrayUtil.isInArray = function(item, array) {
        const index = array.findIndex(i => i === item)
        return index >= 0
    }

    ArrayUtil.findNodeInParentIndex = function(node) {
        const parentNode = node.parentNode
        const index = Array.prototype.indexOf.call(parentNode.children, node)
        return index
    }
    return ArrayUtil
})
