## Redux 状态管理机制

redux就是把react项目的能用到的所有数据做个一个大整合，统一放在store中，一个项目里面只能有一个store,我们页面用用到的数据都通过mapStateToPorps方法传porps进来，铺到页面中来。如果在页面中需要对这些数据进行操作的通过使用mapDispatchToProps方法把数据输出给actions来进行逻辑处理，返回新的state，reducer函数接收新的state，更新到store上面，页面刷新。

### store
+ 使用`createStore`生成store树，如果需要中间件,把中间件放到`applyMiddleware`方法中传给createStore
+ `<Provider store={store}></Provider>`根组件要嵌套在Provider组件中，并将创建的store作为prop传给Provider，才能使用`connect()`方法，而`connect()`方法能够获得 redux store。简单来说，只要是使用state的组件都是要放在Provider里面的，而且必须connect

### 页面组件
#### components
+ 用来存放展示页面，可复用的页面
+ 相当于container的子组件
#### container
+ 有操作数据的页面，需要逻辑处理的页面
#### 页面数据的输入和输出
+ 数据的输入   

    const mapStateToProps = state => ({
    data:state
    }) 

    在render里引进来`const {data} = this.props`
    好了完工，可以在页面中放心大胆的用了
+ 数据的输出

    const mapDispathToProps = (dispatch) => {
        return{
            loadState:() => dispatch(loadState())
        }
    }

 在页面中调用loadState方法，触发dispatch发出Action来一轮数据更新
 + 页面末尾要使用connect()方法 很重要哦一定不能少
 `export default connect(mapStateToProps, mapDispatchToProps)(conponentName)

 ### Action
 + 我们页面中涉及到的数据处理，以及fetch都在action中处理
 + Action 和Action Creator是不一样的。
 + Action是一个对象，必须有一个type属性，这个type就是action的名字，其他属性就可以随便定义写你的数据。在页面中通过dsipatch发出action对象，这种写法好麻烦，所以一般都用Action Creator.
 + 来个例子最明白
   
    export const loadState = () => dispatch => dispatch({
        type:'LOAD_STATE'
        data:'haha,I'm SiWen'
    })


### Reducer
+ Reducer 是一个函数，有当前state和action两个参数,返回一个新的state.一般要给一个初始state值

    const initialState ={data:''haha,I'm SiWen''}
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case LOAD_STATE:
            return {
                ...state,
                data:action.data
            }
            default:
                return {
                    ...state
                }
        }
    }

+ 一般我们会有很多的reducer,来独立负责管理state的一部分，这时候就要用到combineReducers函数了，它把多个reducer合并成一个最终的reducer，格式为stateName：reducerName

好了，根据我现在的理解就酱了