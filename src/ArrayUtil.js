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

module.exports = ArrayUtil
