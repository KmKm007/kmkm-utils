const FileUtil = {}

FileUtil.getFileExt = function (fileName) {
  const d = /.[^.]+$/.exec(fileName)
  return d[0]
}

FileUtil.isPdf = function (fileName) {
  const ext = this.getFileExt(fileName)
  return ext === '.pdf'
}

export default FileUtil
