export default {
  bind(el, binding, vnode) {
    console.log('el', el)
    console.log('binding', binding)
    console.log('vnode', vnode)
    el.addEventListener('input', ()=>{
      console.dir(el)
      el.value = el.value.toUpperCase()
    })
  }
}