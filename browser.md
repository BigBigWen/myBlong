###监听浏览器的后退小箭头,向后跳两级
```
window.addEventListener('popstate', (e)=>{
      if(e.state){
        window.location.href=`/conf/project`
      }
    })
```