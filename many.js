export {default as A} from './A.js'
export {default as B} from './B.js'

try {
  console.log('many.js effect:', {A,B})
}
catch(e){
  console.log('many.js effect error:')
  console.error(e)
}