const initialState = {
    posts:[{ id:0,
        title: "My day in Integrify",
        category: "work",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
       },
       { id:1,
         title: "A trip to K market",
         category: "shopping",
         content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
       }
     ],
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_POST':
            return {...state,
                    posts: [...state.posts, action.data]}

        case 'DEL_POST':
            const updatedArray = state.posts.filter(post=>
                post.id.toString() !== action.id
            )    
            return {...state,
                    posts: updatedArray        
            }            
           
        default:
        return state;    
    }

}

export default reducer