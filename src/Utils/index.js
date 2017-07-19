export function deepCopy(source) {
  let result={};
  if(source instanceof Array){
    result=[];
  }
  for (var key in source) {
    result[key] = source[key] instanceof Object? deepCopy(source[key]): source[key];
  }
  return result;
}